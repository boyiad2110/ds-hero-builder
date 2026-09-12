import { describe, expect, it } from 'vitest'
import { ANCESTRIES } from './ancestries'
import { ANCESTRY_CREATION_MODELS } from './ancestryRules'
import {
  ANCESTRY_ZH_TW_LOCALIZATIONS,
  ANCESTRY_ZH_TW_LOCALIZATION_SOURCE,
  getAncestryLocalizationKey,
  getAncestryZhTWLocalization,
  type AncestryLocalizationIdentity,
} from './ancestryLocalization'

const EXPECTED_PACKET_PARTS = [
  {
    rows: 32,
    sha256: '30e998209fdcde83e83829063539dfe0632a0d8a1cea689150a4e25f6b134d4d',
  },
  {
    rows: 24,
    sha256: '8880547af357885f6a8eabc5d9c5995a9467e70331c29bd5c4b815a5f565173e',
  },
  {
    rows: 30,
    sha256: '5343c6b558fefb987e50a299571a05aeb7fe61c02b94a3233aace7e38e6c8af5',
  },
  {
    rows: 44,
    sha256: 'a5cc2bdce5a7dbae450b0db375c97267ea396f6605d1f12dc20415dba416b8d4',
  },
  {
    rows: 20,
    sha256: '4e0578efa209847504597b0d8532559727db35e728eedfee9560545c759fa25e',
  },
  {
    rows: 43,
    sha256: '6ca0f2af89a9646da9b1548f4417c17162eca54fa303a6dfd49e338854a2deb1',
  },
  {
    rows: 52,
    sha256: 'aaf0abb10ee336208c05e6918d48012911aeb2bc5d05a4c0392ae40f384c4885',
  },
] as const

const EXPECTED_ANCESTRY_NAMES = [
  ['84780fe9-1790-43ad-b985-27ec83d6131e', 'Devil', '魔鬼'],
  ['254848a2-5c86-4a73-9b9d-a87dda64176d', 'Dragon Knight', '龍騎士'],
  ['a9f3759d-be9f-4c40-b610-e7a656425303', 'Dwarf', '矮人'],
  ['e15296f9-deb9-48ae-be8a-0a1d37f2222c', 'Wode Elf', '幻林精靈'],
  ['e3ef91f8-4781-4a95-8a70-c4bc403a1a87', 'High Elf', '高等精靈'],
  ['07766b37-33b8-41e9-8542-9302d09852b7', 'Hakaan', '哈肯人'],
  ['6f995f3d-a4e3-456a-9294-ff2c9ec5cb95', 'Human', '人類'],
  ['f1c7be70-88d7-47e6-ae22-63e205cfed34', 'Memonek', '梅莫人'],
  ['af712d2e-8943-4757-8f14-7dd4967de0b6', 'Orc', '歐克'],
  ['4f1ecd6c-a675-4d64-b7e5-b544d06c5fd8', 'Polder', '波德人'],
  ['a68bafb1-60b2-4c60-b4f7-58032ef8fdbc', 'Revenant', '還魂屍'],
  ['7cfb7aa7-aad9-4aeb-8a4c-4c91b84bea63', 'Time Raider', '時空獵手'],
] as const

async function sha256(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

function lookup(identity: AncestryLocalizationIdentity) {
  return getAncestryZhTWLocalization(identity)
}

describe('Ancestry zh-TW localization data', () => {
  it('matches all seven independently frozen packet payloads and accounts for 245 rows', async () => {
    expect(ANCESTRY_ZH_TW_LOCALIZATIONS).toHaveLength(245)
    expect(EXPECTED_PACKET_PARTS.reduce((sum, part) => sum + part.rows, 0)).toBe(245)

    let offset = 0
    for (const part of EXPECTED_PACKET_PARTS) {
      const rows = ANCESTRY_ZH_TW_LOCALIZATIONS.slice(offset, offset + part.rows)
      const payload = rows.map((row) => JSON.stringify(row)).join('\n')

      expect(await sha256(payload)).toBe(part.sha256)
      offset += part.rows
    }
    expect(offset).toBe(ANCESTRY_ZH_TW_LOCALIZATIONS.length)
  })

  it('pins the frozen source and Glossary authority metadata', () => {
    expect(ANCESTRY_ZH_TW_LOCALIZATION_SOURCE).toMatchObject({
      issue: 'https://github.com/boyiad2110/ds-hero-builder/issues/7',
      frozenTranslationRows: 245,
      sourceSnapshotMainTranslationSha256:
        'e2ef08251da193f8252bfc4c6529fc5915e5e5f9018ec76ff050964b27b2a6cc',
      frozenGlossaryEntries: 123,
      frozenGlossarySha256:
        '9734ad85b09e3ec2d5889e7c830fb670ead2051819ad8ac59289e0a4950bddda',
    })
  })

  it('covers every canonical Ancestry identity with its exact frozen name and description', () => {
    expect(EXPECTED_ANCESTRY_NAMES.map(([id]) => id)).toEqual(ANCESTRIES.map(({ id }) => id))

    for (const [contextId, ancestry, zhTW] of EXPECTED_ANCESTRY_NAMES) {
      expect(
        lookup({ ancestry, contentType: 'Ancestry', contextId, field: 'Name' }),
      ).toMatchObject({ canonicalEnglish: ancestry, zhTW })
      expect(
        lookup({ ancestry, contentType: 'Ancestry Description', contextId, field: 'Description' })
          ?.zhTW,
      ).toBeTruthy()
    }
  })

  it('maps every Trait, Choice Label, and Choice Option context to the existing rules identities', () => {
    const traitIds = new Set<string>()
    const choiceIds = new Set<string>()
    const optionIds = new Set<string>()

    for (const model of ANCESTRY_CREATION_MODELS) {
      for (const trait of [...model.signatureTraits, ...model.purchasedTraits]) {
        traitIds.add(trait.id)
        for (const choice of trait.choices ?? []) {
          choiceIds.add(choice.id)
          if (choice.kind === 'enumerated') {
            for (const option of choice.options) optionIds.add(option.id)
          }
        }
      }
    }

    for (const row of ANCESTRY_ZH_TW_LOCALIZATIONS) {
      if (row.contentType === 'Signature Trait' || row.contentType.startsWith('Purchased Trait')) {
        expect(traitIds, `${row.ancestry}: ${row.contextId}`).toContain(row.contextId)
      } else if (row.contentType === 'Choice Label') {
        expect(choiceIds, `${row.ancestry}: ${row.contextId}`).toContain(row.contextId)
      } else if (row.contentType === 'Choice Option') {
        expect(optionIds, `${row.ancestry}: ${row.contextId}`).toContain(row.contextId)
      }
    }
  })

  it('uses ancestry, surface, context, and field together so repeated IDs cannot collide', () => {
    const keys = ANCESTRY_ZH_TW_LOCALIZATIONS.map(getAncestryLocalizationKey)
    expect(new Set(keys).size).toBe(245)

    const sharedContextRows = ANCESTRY_ZH_TW_LOCALIZATIONS.filter(
      ({ contextId }) => contextId === '84780fe9-1790-43ad-b985-27ec83d6131e',
    )
    expect(sharedContextRows).toHaveLength(3)
    expect(new Set(sharedContextRows.map(getAncestryLocalizationKey)).size).toBe(3)

    const silverTongueRows = ANCESTRY_ZH_TW_LOCALIZATIONS.filter(
      ({ contextId }) => contextId === 'c951f948-9c75-4785-83fe-0a432aa26867',
    )
    expect(silverTongueRows).toHaveLength(2)
    expect(new Set(silverTongueRows.map(getAncestryLocalizationKey)).size).toBe(2)
  })

  it('pins representative exact names, descriptions, rules text, labels, and options', () => {
    expect(
      lookup({
        ancestry: 'Hakaan',
        contentType: 'Ancestry Description',
        contextId: '07766b37-33b8-41e9-8542-9302d09852b7',
        field: 'Description',
      })?.zhTW,
    ).toBe(
      '強壯的哈肯人是石巨人的後裔，身高超過 9 呎，擁有肌肉發達、由有機岩石構成的身軀。他們是核心規則中體型最大的族裔！',
    )
    expect(
      lookup({
        ancestry: 'Devil',
        contentType: 'Purchased Trait (1 pt)',
        contextId: 'b20b793c-2ab0-40c3-813d-a71d3f07555e',
        field: 'Rules Text',
      }),
    ).toMatchObject({
      canonicalEnglish: 'Your powerful legs make you faster. You have speed 6.',
      zhTW: '你強壯的雙腿能讓你跑得更快。你的速度為 6。',
    })
    expect(
      lookup({
        ancestry: 'Dragon Knight',
        contentType: 'Choice Label',
        contextId: 'dragon-knight.wyrmplate.damage-type',
        field: 'Name',
      })?.zhTW,
    ).toBe('龍鱗傷害免疫')
    expect(
      lookup({
        ancestry: 'Dragon Knight',
        contentType: 'Choice Option',
        contextId: 'acid',
        field: 'Name',
      })?.zhTW,
    ).toBe('酸蝕')
    expect(
      lookup({
        ancestry: 'Time Raider',
        contentType: 'Choice Option',
        contextId: '15cfb703-0c81-4d5a-a809-2425dad21d1e',
        field: 'Rules Text',
      })?.zhTW,
    ).toBe(
      '你讓自己或盟友瞬間爆發出更快的速度。\n靈能、近戰 — 機動動作\n近戰 1 — 自身或 1 個盟友\n效果：目標的速度獲得等於你理智、直覺或氣場的加值（由你選擇），直到你下個回合開始。',
    )
  })
})
