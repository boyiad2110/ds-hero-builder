import { describe, expect, it } from 'vitest'
import { ANCESTRIES } from './ancestries'
import {
  ANCESTRY_CREATION_MODELS,
  ANCESTRY_RULES_SOURCE,
  getAncestryCreationModel,
} from './ancestryRules'

const EXPECTED_RULES = [
  {
    ancestryId: '84780fe9-1790-43ad-b985-27ec83d6131e',
    budget: { base: 3 },
    signatures: [['c951f948-9c75-4785-83fe-0a432aa26867', 'Silver Tongue']],
    purchased: [
      ['6a78bbd7-f7be-4f29-b639-e1595c758137', 'Barbed Tail', 1],
      ['b20b793c-2ab0-40c3-813d-a71d3f07555e', 'Beast Legs', 1],
      ['5e49d00d-545f-4470-b5c5-a768b274e3e0', 'Glowing Eyes', 1],
      ['6e83aee9-bf9c-43ee-8d8d-d59842a42a33', 'Hellsight', 1],
      ['1490ae69-5d46-415e-bbb7-38106f05752d', 'Impressive Horns', 2],
      ['19658dae-3771-48d3-9d06-0ed017eb06f9', 'Prehensile Tail', 2],
      ['a91d6cb8-96c2-4ec1-be98-51e691ff5b70', 'Wings', 2],
    ],
  },
  {
    ancestryId: '254848a2-5c86-4a73-9b9d-a87dda64176d',
    budget: { base: 3 },
    signatures: [['cbe77035-1c50-42c6-ad6b-9ce5754d4895', 'Wyrmplate']],
    purchased: [
      ['e1e98137-88d1-4451-9c43-4fd9ef6577a9', 'Draconian Guard', 1],
      ['0d630fd6-0b3c-4c91-8954-ee7a7526086d', 'Draconian Pride', 2],
      ['1ba77d3b-3f14-4151-b6e7-8dde7ceca1f1', 'Dragon Breath', 2],
      ['31055912-7079-40e3-ab53-cd5f70757660', 'Prismatic Scales', 1],
      ['7c7b4988-41ca-414a-9f3a-e9f8118a8132', 'Remember Your Oath', 1],
      ['e5f3a1e3-0d9b-4957-85de-85103c8a81a5', 'Wings', 2],
    ],
  },
  {
    ancestryId: 'a9f3759d-be9f-4c40-b610-e7a656425303',
    budget: { base: 3 },
    signatures: [['d3d44019-2554-4749-8e47-5303045e5e88', 'Runic Carving']],
    purchased: [
      ['fc751172-55f6-42fd-98a6-28de77d0ac1e', 'Great Fortitude', 2],
      ['a552ca4f-5df4-4681-8d49-ddefadd2b8a4', 'Grounded', 1],
      ['ddbd121c-fec7-4d6b-aba6-407a3a7df6cf', 'Spark Off Your Skin', 2],
      ['36a27c9b-d09a-4b76-b64d-21170c0728a0', 'Stand Tough', 1],
      ['d64a58af-4d76-49fd-95b8-6e0242c3f7c2', 'Stone Singer', 1],
    ],
  },
  {
    ancestryId: 'e15296f9-deb9-48ae-be8a-0a1d37f2222c',
    budget: { base: 3 },
    signatures: [['0bffccfe-db01-4afc-97f5-29521026cbe1', 'Wode Elf Glamor']],
    purchased: [
      ['f4930dba-0bc0-41ba-8960-0019e8435f2d', 'Forest Walk', 1],
      ['0e0af5a5-58dd-4a7f-9a11-9e4cafe9ab41', 'Quick and Brutal', 1],
      ['14d80a96-0aac-4322-aa0b-a6ff575fb9d4', 'Otherworldly Grace', 2],
      ['82b5be82-d442-4fd7-a16f-765c8659f729', 'Revisit Memory', 1],
      ['c99de9a3-ac0e-4f77-9d9b-cec57478943d', 'Swift', 1],
      ['6e3cf3a4-8628-4220-bff2-2ff2b9c1487f', 'The Wode Defends', 2],
    ],
  },
  {
    ancestryId: 'e3ef91f8-4781-4a95-8a70-c4bc403a1a87',
    budget: { base: 3 },
    signatures: [['96632785-910c-4370-9ae9-0a9a34318140', 'High Elf Glamor']],
    purchased: [
      ['5ebaaca0-4ed6-47db-a923-c6945f9af1d9', 'Glamor of Terror', 2],
      ['ef9bd176-59cc-4955-a233-a772f93fcbff', 'Graceful Retreat', 1],
      ['a266e810-6b61-40ee-bf0b-337d946aea0f', 'High Senses', 1],
      ['eb9f71ba-ffae-4065-b90c-0bbdff48d2b0', 'Otherworldly Grace', 2],
      ['01cfcdfb-5ae1-463f-8787-dbdbf4b59628', 'Revisit Memory', 1],
      ['2e7d1a15-2a76-4328-9969-5ed1680effba', 'Unstoppable Mind', 2],
    ],
  },
  {
    ancestryId: '07766b37-33b8-41e9-8542-9302d09852b7',
    budget: { base: 3 },
    signatures: [['2b8f53b1-3944-4134-9d8b-2dbeda593cb9', 'Big!']],
    purchased: [
      ['4c21e020-9ec9-4800-b140-e48922208656', 'All Is a Feather', 1],
      ['f3bd4d0a-62b4-4ae4-bc72-d6be0c59d00d', 'Doomsight', 2],
      ['cffc88ed-1647-4bcd-bcbf-e38b7c5ea508', 'Forceful', 1],
      ['a07d3f8b-c589-4e2e-8bc5-a37be82042eb', 'Great Fortitude', 2],
      ['5b8c916d-1437-4e72-8772-4af4ef0c81cc', 'Stand Tough', 1],
    ],
  },
  {
    ancestryId: '6f995f3d-a4e3-456a-9294-ff2c9ec5cb95',
    budget: { base: 3 },
    signatures: [['75d8f226-1848-4e98-b245-31d350c644d4', 'Detect the Supernatural']],
    purchased: [
      ['4081942d-fdb3-4975-9096-8bfa0c268832', 'Can’t Take Hold', 1],
      ['55c871ba-9b2b-4c8d-b1bf-cc12fe62af0e', 'Determination', 2],
      ['7d540696-a16f-4852-8e36-c7c7339cf42d', 'Perseverance', 1],
      ['7a066651-7e14-4d7e-8c00-23f2488bd7a5', 'Resist the Unnatural', 1],
      ['471a9430-3713-41fd-938f-79ac4c6ceba9', 'Staying Power', 2],
    ],
  },
  {
    ancestryId: 'f1c7be70-88d7-47e6-ae22-63e205cfed34',
    budget: { base: 4 },
    signatures: [
      ['49d08628-cc53-4fdb-a4b0-d8cf04bc4890', 'Fall Lightly'],
      ['2e0bcc99-99e5-436b-8305-271484cd6bf1', 'Lightweight'],
    ],
    purchased: [
      ['fdc92619-4c4f-45cc-a897-0b2002cc41f6', 'I Am Law', 1],
      ['abe8e829-a2bf-4ebd-ab98-628f413d9eca', 'Keeper of Order', 2],
      ['1ba41227-3b34-4271-9008-e3492c7eeb1a', 'Lightning Nimbleness', 2],
      ['2dd85e83-5a02-40f2-a2e1-260820203108', 'Nonstop', 2],
      ['6d34b63b-98a6-4b9e-a385-75e5070c4a3d', 'Systematic Mind', 1],
      ['119daf46-2425-40be-a6dd-ee2255806072', 'Unphased', 1],
      ['68ef24d5-b2b8-46a0-bace-3e69b80e88d6', 'Useful Emotion', 1],
    ],
  },
  {
    ancestryId: 'af712d2e-8943-4757-8f14-7dd4967de0b6',
    budget: { base: 3 },
    signatures: [['20f806e2-e84f-4130-85ed-b6f0c952a36f', 'Relentless']],
    purchased: [
      ['49d5b7ac-4b1e-4af3-9ea1-ed4e57850629', 'Bloodfire Rush', 1],
      ['44c35813-1a78-46b8-8c99-65e24e2a4e79', 'Glowing Recovery', 2],
      ['0912b943-1522-4c36-aa18-106be6d2b975', 'Grounded', 1],
      ['99fc8bf6-b7d2-4f13-a3e4-a26883bd739c', 'Nonstop', 2],
      ['0db89994-954b-4475-a335-95b639594bd7', 'Passionate Artisan', 1],
    ],
  },
  {
    ancestryId: '4f1ecd6c-a675-4d64-b7e5-b544d06c5fd8',
    budget: { base: 4 },
    signatures: [
      ['82722346-456c-4bd3-ada9-9bea4b9a0f5c', 'Shadowmeld'],
      ['cda8b84d-3c4c-45ad-9317-e2ecbb20bd8a', 'Small!'],
    ],
    purchased: [
      ['e347c13c-02bc-4b63-8c6c-b225cd7574a2', 'Corruption Immunity', 1],
      ['43fbab8d-2c6d-400f-a56d-bc40c2348b3e', 'Fearless', 2],
      ['22e632c0-d0f0-47a9-b776-2ff3ac7e17b2', 'Graceful Retreat', 1],
      ['beaef4ac-b563-4956-977d-ff5160da8245', 'Nimblestep', 2],
      ['da1db5b7-be4e-4464-8641-4746ee0ae95d', 'Polder Geist', 1],
      ['94759ab2-b2e5-4065-9daf-89e00e7c312c', 'Reactive Tumble', 1],
    ],
  },
  {
    ancestryId: 'a68bafb1-60b2-4c60-b4f7-58032ef8fdbc',
    budget: { base: 2, formerAncestrySize1S: 3 },
    signatures: [
      ['6349c766-9e76-4107-863a-24fcce1607c9', 'Former Life'],
      ['f2932630-2019-40e8-b683-f390d0b733c2', 'Tough But Withered'],
    ],
    purchased: [
      ['77d56b21-f093-4d83-b5f9-64ec9f388ba4', 'Bloodless', 2],
      ['project:revenant:previous-life-1', 'Previous Life: 1 Point', 1],
      ['project:revenant:previous-life-2', 'Previous Life: 2 Points', 2],
      ['31889da3-9a46-45b8-bca2-f676b406dd7c', 'Undead Influence', 1],
      ['ad2db645-8ab3-4623-8791-5977911d6548', 'Vengeance Mark', 2],
    ],
  },
  {
    ancestryId: '7cfb7aa7-aad9-4aeb-8a4c-4c91b84bea63',
    budget: { base: 3 },
    signatures: [['5a02ff7d-f8bc-412e-857c-5bb43f55263f', 'Psychic Scar']],
    purchased: [
      ['592ed6ab-9422-4eef-a75b-c203f48af741', 'Beyondsight', 1],
      ['b777778f-0913-41ca-b4a4-980f4bbe93e8', 'Foresight', 1],
      ['0b19153c-1539-43ac-85dc-917c702a25d6', 'Four-Armed Athletics', 1],
      ['685eb626-c484-4077-962b-f0905b117284', 'Four-Armed Martial Arts', 2],
      ['9b0d5f31-19d7-4ccd-8fcb-639530dae51c', 'Psionic Gift', 2],
      ['6b208810-289a-43fe-8276-32bcab8f2b16', 'Unstoppable Mind', 2],
    ],
  },
] as const

describe('ancestry creation rules data', () => {
  it('matches the complete Heroes 1.01b identity, signature, budget, trait, and cost inventory', () => {
    const actual = ANCESTRY_CREATION_MODELS.map((model) => ({
      ancestryId: model.identity.id,
      budget: model.pointBudget,
      signatures: model.signatureTraits.map(({ id, canonicalName }) => [id, canonicalName]),
      purchased: model.purchasedTraits.map(({ id, canonicalName, cost }) => [
        id,
        canonicalName,
        cost,
      ]),
    }))

    expect(actual).toEqual(EXPECTED_RULES)
    expect(ANCESTRY_CREATION_MODELS.map(({ identity }) => identity)).toEqual(ANCESTRIES)
  })

  it('keeps canonical English rules text and source traceability on every trait', () => {
    expect(ANCESTRY_RULES_SOURCE).toMatchObject({
      ruleset: 'Draw Steel Heroes 1.01b',
      document: 'Official Rules/1_DS_Ancestries.pdf',
      supportingSkillGroups: {
        document: 'Official Rules/9_DS_Tests_Combat_Negotiation.pdf',
        sections: ['Crafting Skills', 'Interpersonal Skills'],
      },
      structuredData: {
        repository: 'VerisimLLC/draw-steel-data',
        commit: '27af7cad76820642befde994fa344ba21275b7c1',
      },
      resolvedDiscrepancies: [
        { item: 'Orc — Passionate Artisan' },
        { item: 'Time Raider — Concussive Slam and Psionic Bolt' },
      ],
    })

    for (const model of ANCESTRY_CREATION_MODELS) {
      expect(ANCESTRY_RULES_SOURCE.sections).toContain(model.sourceSection)

      for (const trait of [...model.signatureTraits, ...model.purchasedTraits]) {
        expect(trait.rulesText.trim().length).toBeGreaterThan(10)
        expect(trait.rulesText).not.toMatch(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFD]/u)
        if (trait.sourceIdentity.kind === 'draw-steel-data') {
          expect(trait.sourceIdentity.guid).toBe(trait.id)
        }
      }
    }
  })

  it('represents ancestry-specific ancillary choices as constrained data', () => {
    const devilChoice = getAncestryCreationModel(ANCESTRIES[0].id)?.signatureTraits[0].choices?.[0]
    const dragonChoices = getAncestryCreationModel(ANCESTRIES[1].id)
    const wyrmplateChoice = dragonChoices?.signatureTraits[0].choices?.[0]
    const prismaticChoice = dragonChoices?.purchasedTraits[3].choices?.[0]
    const orcChoice = getAncestryCreationModel(ANCESTRIES[8].id)?.purchasedTraits.at(-1)?.choices?.[0]
    const revenantChoice = getAncestryCreationModel(ANCESTRIES[10].id)?.signatureTraits[0].choices?.[0]
    const psionicChoice = getAncestryCreationModel(ANCESTRIES[11].id)?.purchasedTraits[4].choices?.[0]

    expect(devilChoice).toMatchObject({ optionKind: 'skill', category: 'interpersonal', count: 1 })
    expect(
      devilChoice && 'options' in devilChoice ? devilChoice.options.map(({ id }) => id) : [],
    ).toEqual([
      'd533510d-0f1f-4ce3-a48c-cc21acadb6c6',
      '47a38ee9-41ad-4173-a010-adf9e185e221',
      '9f41a684-4b8c-4026-8175-df136fc5134f',
      '81442e8b-10cb-41f5-8aa9-110a2256b663',
      'ff54a691-e0a0-4246-8ceb-7975b8826e92',
      '4290580d-9e08-4bd2-859c-7ac147f108aa',
      'cb214a42-7f8c-4d02-b6ac-1399724a8b5f',
      '27995005-8a25-435d-9f50-351c9d08a7b4',
      '4f4b7168-8702-469d-b001-65d250fd4082',
      'd188b959-e993-4239-a350-5e7ad69d27b6',
      'bd66a379-6ea9-4ecc-ad82-c9a2b82750d4',
      '28573ee3-e9df-47fe-98f1-2ac0bfee797a',
      '30a30090-3699-48f1-b252-ce7d0445abee',
    ])
    expect(wyrmplateChoice).toMatchObject({
      optionKind: 'damage-type',
      count: 1,
    })
    expect(prismaticChoice).toMatchObject({
      optionKind: 'damage-type',
      count: 1,
    })
    expect(
      wyrmplateChoice && 'options' in wyrmplateChoice
        ? wyrmplateChoice.options.map(({ id, sourceGuid }) => [id, sourceGuid])
        : [],
    ).toEqual([
      ['acid', '305732c5-976c-48ba-92b3-254fe71cc362'],
      ['cold', '411a1412-fb4f-4c51-bad1-dcff5e046bd6'],
      ['corruption', 'cdd015ed-2d9a-423b-953a-c0c7255e4545'],
      ['fire', 'efb897ff-9c79-4aab-9e40-fc8321b9dc85'],
      ['lightning', 'aa2c9300-1f35-42b9-9a88-972853a165f7'],
      ['poison', '9aed58fd-cf05-4fa0-8a89-8bd6347364ee'],
    ])
    expect(orcChoice).toMatchObject({ optionKind: 'skill', category: 'crafting', count: 2 })
    expect(orcChoice && 'options' in orcChoice ? orcChoice.options.map(({ id }) => id) : []).toEqual([
      'cdae52cd-ef20-461d-ae18-253023cdb827',
      '078b501f-e549-4725-993f-7ed8d57fc2ae',
      '50ca6145-2d22-4496-a355-c7b2df2cf0de',
      '436ea6c1-6386-43b2-b074-020992cc73fd',
      'becbc5ec-de63-481b-8247-e62c2a6fd8cb',
      '5ca5c242-fe6d-43b3-86b0-b5314a9fe39a',
      '75d64fef-b075-4221-8cbc-c6b6328ee22c',
      '192827b0-ef39-4d5f-840a-b3c654e7b158',
      'ac718c6f-05e2-4301-997c-b1c54aad9250',
      '8b5a4de7-badf-4e23-8ff2-0f7a832ff754',
    ])
    expect(revenantChoice).toMatchObject({ optionKind: 'ancestry', count: 1 })
    expect(revenantChoice && 'options' in revenantChoice ? revenantChoice.options : []).toHaveLength(11)
    expect(psionicChoice).toMatchObject({ optionKind: 'ability', count: 1 })
  })

  it('documents the two project-owned Revenant trait identities instead of inventing upstream GUIDs', () => {
    const projectTraits = getAncestryCreationModel(ANCESTRIES[10].id)?.purchasedTraits.filter(
      ({ sourceIdentity }) => sourceIdentity.kind === 'project',
    )

    expect(projectTraits?.map(({ id }) => id)).toEqual([
      'project:revenant:previous-life-1',
      'project:revenant:previous-life-2',
    ])
    expect(
      projectTraits?.every(
        ({ sourceIdentity }) =>
          sourceIdentity.kind === 'project' && sourceIdentity.reason.includes('without a standalone trait GUID'),
      ),
    ).toBe(true)
  })

  it('contains no duplicate trait or per-choice option identities', () => {
    const traitIds = ANCESTRY_CREATION_MODELS.flatMap(({ signatureTraits, purchasedTraits }) =>
      [...signatureTraits, ...purchasedTraits].map(({ id }) => id),
    )

    expect(new Set(traitIds).size).toBe(traitIds.length)
    for (const model of ANCESTRY_CREATION_MODELS) {
      for (const trait of [...model.signatureTraits, ...model.purchasedTraits]) {
        for (const choice of trait.choices ?? []) {
          if (choice.kind === 'enumerated') {
            const optionIds = choice.options.map(({ id }) => id)
            expect(new Set(optionIds).size).toBe(optionIds.length)
          }
        }
      }
    }
  })

  it('retains the official Heroes 1.01b Time Raider damage tiers instead of the older upstream values', () => {
    const psionicGift = getAncestryCreationModel(ANCESTRIES[11].id)?.purchasedTraits[4]
    const options = psionicGift?.choices?.[0]

    expect(psionicGift?.rulesText).toBe(
      'Choose one signature ability from the following options. Signature abilities can be used at will.',
    )
    expect(options).toMatchObject({
      options: [
        { canonicalName: 'Concussive Slam' },
        { canonicalName: 'Psionic Bolt' },
        { canonicalName: 'Minor Acceleration' },
      ],
    })
    if (!options || options.kind !== 'enumerated') {
      throw new Error('Psionic Gift choice is missing')
    }
    expect(options.options[0].rulesText).toContain('Tier 2: 5 + R, I, or P damage')
    expect(options.options[0].rulesText).toContain('Tier 3: 7 + R, I, or P damage')
    expect(options.options[1].rulesText).toContain('Tier 2: 5 + R, I, or P psychic damage')
    expect(options.options[1].rulesText).toContain('Tier 3: 7 + R, I, or P psychic damage')
  })
})
