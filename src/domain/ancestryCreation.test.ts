import { describe, expect, it } from 'vitest'
import { evaluateAncestrySelection, type AncestrySelectionState } from './ancestryCreation'

const ID = {
  devil: '84780fe9-1790-43ad-b985-27ec83d6131e',
  dragonKnight: '254848a2-5c86-4a73-9b9d-a87dda64176d',
  dwarf: 'a9f3759d-be9f-4c40-b610-e7a656425303',
  orc: 'af712d2e-8943-4757-8f14-7dd4967de0b6',
  polder: '4f1ecd6c-a675-4d64-b7e5-b544d06c5fd8',
  revenant: 'a68bafb1-60b2-4c60-b4f7-58032ef8fdbc',
  timeRaider: '7cfb7aa7-aad9-4aeb-8a4c-4c91b84bea63',
} as const

const TRAIT = {
  devilBarbedTail: '6a78bbd7-f7be-4f29-b639-e1595c758137',
  devilBeastLegs: 'b20b793c-2ab0-40c3-813d-a71d3f07555e',
  devilImpressiveHorns: '1490ae69-5d46-415e-bbb7-38106f05752d',
  dragonGuard: 'e1e98137-88d1-4451-9c43-4fd9ef6577a9',
  dragonPrismaticScales: '31055912-7079-40e3-ab53-cd5f70757660',
  dwarfGrounded: 'a552ca4f-5df4-4681-8d49-ddefadd2b8a4',
  orcGlowingRecovery: '44c35813-1a78-46b8-8c99-65e24e2a4e79',
  orcPassionateArtisan: '0db89994-954b-4475-a335-95b639594bd7',
  polderCorruptionImmunity: 'e347c13c-02bc-4b63-8c6c-b225cd7574a2',
  polderGracefulRetreat: '22e632c0-d0f0-47a9-b776-2ff3ac7e17b2',
  previousLife1: 'project:revenant:previous-life-1',
  revenantBloodless: '77d56b21-f093-4d83-b5f9-64ec9f388ba4',
  revenantUndeadInfluence: '31889da3-9a46-45b8-bca2-f676b406dd7c',
  timeBeyondsight: '592ed6ab-9422-4eef-a75b-c203f48af741',
  timePsionicGift: '9b0d5f31-19d7-4ccd-8fcb-639530dae51c',
} as const

const CHOICE = {
  devilSkill: 'devil.silver-tongue.skill',
  dragonWyrmplate: 'dragon-knight.wyrmplate.damage-type',
  dragonPrismatic: 'dragon-knight.prismatic-scales.damage-type',
  orcSkills: 'orc.passionate-artisan.skills',
  formerAncestry: 'revenant.former-life.ancestry',
  previousLifeTrait: 'revenant.previous-life.trait',
  psionicGift: 'time-raider.psionic-gift.ability',
} as const

const OPTION = {
  brag: 'd533510d-0f1f-4ce3-a48c-cc21acadb6c6',
  alchemy: 'cdae52cd-ef20-461d-ae18-253023cdb827',
  architecture: '078b501f-e549-4725-993f-7ed8d57fc2ae',
  psionicBolt: '3626e093-0f4c-4500-9487-14de2c6e4339',
} as const

function issueCodes(state: AncestrySelectionState) {
  return evaluateAncestrySelection(state).issues.map(({ code }) => code)
}

describe('ancestry creation legality and completeness', () => {
  it('accepts a complete normal ancestry-point purchase', () => {
    const result = evaluateAncestrySelection({
      ancestryId: ID.devil,
      signatureChoices: { [CHOICE.devilSkill]: [OPTION.brag] },
      traitSelections: [
        { traitId: TRAIT.devilBeastLegs },
        { traitId: TRAIT.devilImpressiveHorns },
      ],
    })

    expect(result).toMatchObject({
      pointBudget: 3,
      pointsSpent: 3,
      isLegal: true,
      isComplete: true,
      issues: [],
    })
  })

  it('distinguishes a legal incomplete state from an over-budget illegal state', () => {
    const incomplete = evaluateAncestrySelection({
      ancestryId: ID.devil,
      signatureChoices: { [CHOICE.devilSkill]: [OPTION.brag] },
      traitSelections: [{ traitId: TRAIT.devilBarbedTail }],
    })
    const overBudget = evaluateAncestrySelection({
      ancestryId: ID.devil,
      signatureChoices: { [CHOICE.devilSkill]: [OPTION.brag] },
      traitSelections: [
        { traitId: TRAIT.devilBarbedTail },
        { traitId: TRAIT.devilBeastLegs },
        { traitId: TRAIT.devilImpressiveHorns },
      ],
    })

    expect(incomplete).toMatchObject({ isLegal: true, isComplete: false, pointsSpent: 1 })
    expect(incomplete.issues).toContainEqual(
      expect.objectContaining({ code: 'under-budget', severity: 'incomplete' }),
    )
    expect(overBudget).toMatchObject({ isLegal: false, isComplete: false, pointsSpent: 4 })
    expect(overBudget.issues).toContainEqual(
      expect.objectContaining({ code: 'over-budget', severity: 'invalid' }),
    )
  })

  it('requires legal choices for fixed and purchased Dragon Knight traits', () => {
    const state: AncestrySelectionState = {
      ancestryId: ID.dragonKnight,
      signatureChoices: { [CHOICE.dragonWyrmplate]: ['fire'] },
      traitSelections: [
        {
          traitId: TRAIT.dragonPrismaticScales,
          choices: { [CHOICE.dragonPrismatic]: ['cold'] },
        },
        { traitId: TRAIT.dragonGuard },
        { traitId: '7c7b4988-41ca-414a-9f3a-e9f8118a8132' },
      ],
    }

    expect(evaluateAncestrySelection(state)).toMatchObject({ isLegal: true, isComplete: true })
    expect(
      issueCodes({
        ...state,
        traitSelections: [
          { traitId: TRAIT.dragonPrismaticScales },
          { traitId: TRAIT.dragonGuard },
          { traitId: '7c7b4988-41ca-414a-9f3a-e9f8118a8132' },
        ],
      }),
    ).toContain('missing-choice')
  })

  it('validates the Orc two-skill ancillary choice against the crafting category', () => {
    const complete: AncestrySelectionState = {
      ancestryId: ID.orc,
      traitSelections: [
        {
          traitId: TRAIT.orcPassionateArtisan,
          choices: { [CHOICE.orcSkills]: [OPTION.alchemy, OPTION.architecture] },
        },
        { traitId: TRAIT.orcGlowingRecovery },
      ],
    }

    expect(evaluateAncestrySelection(complete)).toMatchObject({ isLegal: true, isComplete: true })
    expect(
      issueCodes({
        ...complete,
        traitSelections: [
          {
            traitId: TRAIT.orcPassionateArtisan,
            choices: { [CHOICE.orcSkills]: [OPTION.alchemy, OPTION.brag] },
          },
          { traitId: TRAIT.orcGlowingRecovery },
        ],
      }),
    ).toContain('unknown-choice-option')
  })

  it('requires the selected Psionic Gift ability', () => {
    const complete: AncestrySelectionState = {
      ancestryId: ID.timeRaider,
      traitSelections: [
        { traitId: TRAIT.timeBeyondsight },
        {
          traitId: TRAIT.timePsionicGift,
          choices: { [CHOICE.psionicGift]: [OPTION.psionicBolt] },
        },
      ],
    }

    expect(evaluateAncestrySelection(complete)).toMatchObject({ isLegal: true, isComplete: true })
    expect(
      issueCodes({
        ...complete,
        traitSelections: [
          { traitId: TRAIT.timeBeyondsight },
          { traitId: TRAIT.timePsionicGift },
        ],
      }),
    ).toContain('missing-choice')
  })

  it('uses a Polder former life to grant the Revenant 3-point budget', () => {
    const result = evaluateAncestrySelection({
      ancestryId: ID.revenant,
      signatureChoices: { [CHOICE.formerAncestry]: [ID.polder] },
      traitSelections: [
        { traitId: TRAIT.revenantBloodless },
        {
          traitId: TRAIT.previousLife1,
          choices: { [CHOICE.previousLifeTrait]: [TRAIT.polderCorruptionImmunity] },
        },
      ],
    })

    expect(result).toMatchObject({
      pointBudget: 3,
      pointsSpent: 3,
      isLegal: true,
      isComplete: true,
    })
  })

  it('rejects a Previous Life trait that is not from the selected former ancestry', () => {
    const result = evaluateAncestrySelection({
      ancestryId: ID.revenant,
      signatureChoices: { [CHOICE.formerAncestry]: [ID.dwarf] },
      traitSelections: [
        { traitId: TRAIT.revenantUndeadInfluence },
        {
          traitId: TRAIT.previousLife1,
          choices: { [CHOICE.previousLifeTrait]: [TRAIT.polderCorruptionImmunity] },
        },
      ],
    })

    expect(result).toMatchObject({ pointBudget: 2, pointsSpent: 2, isLegal: false, isComplete: false })
    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: 'inherited-trait-not-from-former-ancestry',
        severity: 'invalid',
      }),
    )
  })

  it('carries a selected former-ancestry trait’s own required choice into Revenant completion', () => {
    const complete: AncestrySelectionState = {
      ancestryId: ID.revenant,
      signatureChoices: { [CHOICE.formerAncestry]: [ID.dragonKnight] },
      traitSelections: [
        {
          traitId: TRAIT.previousLife1,
          choices: {
            [CHOICE.previousLifeTrait]: [TRAIT.dragonPrismaticScales],
            [CHOICE.dragonPrismatic]: ['fire'],
          },
        },
        { traitId: TRAIT.revenantUndeadInfluence },
      ],
    }

    expect(evaluateAncestrySelection(complete)).toMatchObject({ isLegal: true, isComplete: true })
    expect(
      issueCodes({
        ...complete,
        traitSelections: [
          {
            traitId: TRAIT.previousLife1,
            choices: { [CHOICE.previousLifeTrait]: [TRAIT.dragonPrismaticScales] },
          },
          complete.traitSelections[1],
        ],
      }),
    ).toContain('missing-choice')
  })

  it('allows repeated Previous Life: 1 Point only for different former-ancestry traits', () => {
    const base: AncestrySelectionState = {
      ancestryId: ID.revenant,
      signatureChoices: { [CHOICE.formerAncestry]: [ID.polder] },
      traitSelections: [
        {
          traitId: TRAIT.previousLife1,
          choices: { [CHOICE.previousLifeTrait]: [TRAIT.polderCorruptionImmunity] },
        },
        {
          traitId: TRAIT.previousLife1,
          choices: { [CHOICE.previousLifeTrait]: [TRAIT.polderGracefulRetreat] },
        },
        { traitId: TRAIT.revenantUndeadInfluence },
      ],
    }

    expect(evaluateAncestrySelection(base)).toMatchObject({ isLegal: true, isComplete: true })
    expect(
      issueCodes({
        ...base,
        traitSelections: [
          base.traitSelections[0],
          base.traitSelections[0],
          base.traitSelections[2],
        ],
      }),
    ).toContain('duplicate-choice-option')
  })

  it('reports unknown ancestry, trait, and choice state without parsing prose', () => {
    expect(
      evaluateAncestrySelection({ ancestryId: 'unknown', traitSelections: [] }),
    ).toMatchObject({ pointBudget: null, isLegal: false, isComplete: false })

    const result = evaluateAncestrySelection({
      ancestryId: ID.devil,
      signatureChoices: { [CHOICE.devilSkill]: [OPTION.brag], extra: ['value'] },
      traitSelections: [{ traitId: 'unknown' }],
    })
    expect(result.issues.map(({ code }) => code)).toEqual(
      expect.arrayContaining(['unexpected-choice', 'unknown-trait', 'under-budget']),
    )
  })
})
