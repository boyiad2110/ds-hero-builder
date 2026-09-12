export const ANCESTRY_ZH_TW_LOCALIZATION_SOURCE = {
  issue: 'https://github.com/boyiad2110/ds-hero-builder/issues/7',
  frozenTranslationRows: 245,
  sourceSnapshotMainTranslationSha256: 'e2ef08251da193f8252bfc4c6529fc5915e5e5f9018ec76ff050964b27b2a6cc',
  packetParts: [
  {
    "title": "Frozen Translation Packet — Devil",
    "rows": 32,
    "sha256": "30e998209fdcde83e83829063539dfe0632a0d8a1cea689150a4e25f6b134d4d"
  },
  {
    "title": "Frozen Translation Packet — Dragon Knight",
    "rows": 24,
    "sha256": "8880547af357885f6a8eabc5d9c5995a9467e70331c29bd5c4b815a5f565173e"
  },
  {
    "title": "Frozen Translation Packet — Dwarf + Wode Elf",
    "rows": 30,
    "sha256": "5343c6b558fefb987e50a299571a05aeb7fe61c02b94a3233aace7e38e6c8af5"
  },
  {
    "title": "Frozen Translation Packet — High Elf + Hakaan + Human",
    "rows": 44,
    "sha256": "a5cc2bdce5a7dbae450b0db375c97267ea396f6605d1f12dc20415dba416b8d4"
  },
  {
    "title": "Frozen Translation Packet — Memonek",
    "rows": 20,
    "sha256": "4e0578efa209847504597b0d8532559727db35e728eedfee9560545c759fa25e"
  },
  {
    "title": "Frozen Translation Packet — Orc + Polder",
    "rows": 43,
    "sha256": "6ca0f2af89a9646da9b1548f4417c17162eca54fa303a6dfd49e338854a2deb1"
  },
  {
    "title": "Frozen Translation Packet — Revenant + Time Raider",
    "rows": 52,
    "sha256": "aaf0abb10ee336208c05e6918d48012911aeb2bc5d05a4c0392ae40f384c4885"
  }
],
  frozenGlossaryEntries: 123,
  frozenGlossarySha256: '9734ad85b09e3ec2d5889e7c830fb670ead2051819ad8ac59289e0a4950bddda',
} as const

export type AncestryLocalizationAncestry = "Devil" | "Dragon Knight" | "Dwarf" | "Wode Elf" | "High Elf" | "Hakaan" | "Human" | "Memonek" | "Orc" | "Polder" | "Revenant" | "Time Raider"
export type AncestryLocalizationContentType = "Ancestry" | "Signature Trait" | "Choice Label" | "Choice Option" | "Purchased Trait (1 pt)" | "Purchased Trait (2 pt)" | "Ancestry Description"
export type AncestryLocalizationField = "Name" | "Rules Text" | "Description"

export type AncestryLocalizationEntry = Readonly<{
  ancestry: AncestryLocalizationAncestry
  contentType: AncestryLocalizationContentType
  contextId: string
  field: AncestryLocalizationField
  canonicalEnglish: string
  zhTW: string
  source: string
}>

export type AncestryLocalizationIdentity = Readonly<
  Pick<AncestryLocalizationEntry, 'ancestry' | 'contentType' | 'contextId' | 'field'>
>

export const ANCESTRY_ZH_TW_LOCALIZATIONS = [
  {
    "ancestry": "Devil",
    "contentType": "Ancestry",
    "contextId": "84780fe9-1790-43ad-b985-27ec83d6131e",
    "field": "Name",
    "canonicalEnglish": "Devil",
    "zhTW": "魔鬼",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Signature Trait",
    "contextId": "c951f948-9c75-4785-83fe-0a432aa26867",
    "field": "Name",
    "canonicalEnglish": "Silver Tongue",
    "zhTW": "巧舌如簧",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Signature Trait",
    "contextId": "c951f948-9c75-4785-83fe-0a432aa26867",
    "field": "Rules Text",
    "canonicalEnglish": "Your innate magic allows you to twist how your words are perceived to get a better read on people and convince them to see things your way. You have one skill of your choice from the interpersonal skill group (see Skills in Chapter 9: Tests), and you gain an edge on tests when attempting to discover an NPC’s motivations and pitfalls during a negotiation (see Chapter 11: Negotiation).",
    "zhTW": "你與生俱來的魔法能夠扭轉他人對你言語的理解，讓你更容易解讀他人並說服對方接受你的觀點。你獲得自選的 1 項交涉類技能。此外，在談判中，當你嘗試識破 NPC 的動機或雷點時，相關考驗會獲得 1 個優勢。",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Label",
    "contextId": "devil.silver-tongue.skill",
    "field": "Name",
    "canonicalEnglish": "Interpersonal Skill",
    "zhTW": "交涉類技能",
    "source": "Heroes 1.01b p.27; Tests p.255-256; Batch 003 choice ID"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "d533510d-0f1f-4ce3-a48c-cc21acadb6c6",
    "field": "Name",
    "canonicalEnglish": "Brag",
    "zhTW": "誇耀",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "47a38ee9-41ad-4173-a010-adf9e185e221",
    "field": "Name",
    "canonicalEnglish": "Empathize",
    "zhTW": "共感",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "9f41a684-4b8c-4026-8175-df136fc5134f",
    "field": "Name",
    "canonicalEnglish": "Flirt",
    "zhTW": "魅惑",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "81442e8b-10cb-41f5-8aa9-110a2256b663",
    "field": "Name",
    "canonicalEnglish": "Gamble",
    "zhTW": "賭博",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "ff54a691-e0a0-4246-8ceb-7975b8826e92",
    "field": "Name",
    "canonicalEnglish": "Handle Animals",
    "zhTW": "馴獸",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "4290580d-9e08-4bd2-859c-7ac147f108aa",
    "field": "Name",
    "canonicalEnglish": "Interrogate",
    "zhTW": "審訊",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "cb214a42-7f8c-4d02-b6ac-1399724a8b5f",
    "field": "Name",
    "canonicalEnglish": "Intimidate",
    "zhTW": "威嚇",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "27995005-8a25-435d-9f50-351c9d08a7b4",
    "field": "Name",
    "canonicalEnglish": "Lead",
    "zhTW": "領導",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "4f4b7168-8702-469d-b001-65d250fd4082",
    "field": "Name",
    "canonicalEnglish": "Lie",
    "zhTW": "欺瞞",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "d188b959-e993-4239-a350-5e7ad69d27b6",
    "field": "Name",
    "canonicalEnglish": "Music",
    "zhTW": "音樂",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "bd66a379-6ea9-4ecc-ad82-c9a2b82750d4",
    "field": "Name",
    "canonicalEnglish": "Perform",
    "zhTW": "表演",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "28573ee3-e9df-47fe-98f1-2ac0bfee797a",
    "field": "Name",
    "canonicalEnglish": "Persuade",
    "zhTW": "遊說",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Choice Option",
    "contextId": "30a30090-3699-48f1-b252-ce7d0445abee",
    "field": "Name",
    "canonicalEnglish": "Read Person",
    "zhTW": "觀色",
    "source": "Tests p.255-256; Batch 003 INTERPERSONAL_SKILLS"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "6a78bbd7-f7be-4f29-b639-e1595c758137",
    "field": "Name",
    "canonicalEnglish": "Barbed Tail",
    "zhTW": "尖刺尾巴",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "6a78bbd7-f7be-4f29-b639-e1595c758137",
    "field": "Rules Text",
    "canonicalEnglish": "Your pointy tail allows you to punctuate all your actions. Once per round when you make a melee strike, you can deal extra damage with the strike equal to your highest characteristic score.",
    "zhTW": "你尖銳的尾巴能為所有行動錦上添花。每輪 1 次，當你發動近戰打擊時，你可以額外造成等於你最高屬性值的傷害。",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "b20b793c-2ab0-40c3-813d-a71d3f07555e",
    "field": "Name",
    "canonicalEnglish": "Beast Legs",
    "zhTW": "獸腿",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "b20b793c-2ab0-40c3-813d-a71d3f07555e",
    "field": "Rules Text",
    "canonicalEnglish": "Your powerful legs make you faster. You have speed 6.",
    "zhTW": "你強壯的雙腿能讓你跑得更快。你的速度為 6。",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "5e49d00d-545f-4470-b5c5-a768b274e3e0",
    "field": "Name",
    "canonicalEnglish": "Glowing Eyes",
    "zhTW": "閃耀熾目",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "5e49d00d-545f-4470-b5c5-a768b274e3e0",
    "field": "Rules Text",
    "canonicalEnglish": "Your eyes are a solid, vibrant color that flares to show your excitement or rage. Whenever you take damage from a creature, you can use a triggered action to deal that creature psychic damage equal to 1d10 + your level.",
    "zhTW": "你的雙眼呈現單一的鮮艷顏色，當你感到興奮或憤怒時會閃爍發光。每當你受到生物造成的傷害時，你可以使用反應動作，對該生物造成等於 1d10 + 你等級的心靈傷害。",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "6e83aee9-bf9c-43ee-8d8d-d59842a42a33",
    "field": "Name",
    "canonicalEnglish": "Hellsight",
    "zhTW": "地獄視覺",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "6e83aee9-bf9c-43ee-8d8d-d59842a42a33",
    "field": "Rules Text",
    "canonicalEnglish": "Your eyes let you see through darkness, fog, and other obscuring effects. You don’t take a bane on strikes made against creatures with concealment.",
    "zhTW": "你的雙眼能看穿黑暗、霧氣和其他遮蔽視線的效果。當你對具有遮蔽的生物發動打擊時，不會承受 1 個劣勢。",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "1490ae69-5d46-415e-bbb7-38106f05752d",
    "field": "Name",
    "canonicalEnglish": "Impressive Horns",
    "zhTW": "威嚴犄角",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "1490ae69-5d46-415e-bbb7-38106f05752d",
    "field": "Rules Text",
    "canonicalEnglish": "Your cherished horns are larger than the average devil’s, and a hardened representation of your force of will. Whenever you make a saving throw, you succeed on a roll of 5 or higher.",
    "zhTW": "你珍愛的雙角比一般魔鬼的更大，是你堅定意志力的象徵。每當你進行豁免時，擲出 5 以上就算成功。",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "19658dae-3771-48d3-9d06-0ed017eb06f9",
    "field": "Name",
    "canonicalEnglish": "Prehensile Tail",
    "zhTW": "靈活尾巴",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "19658dae-3771-48d3-9d06-0ed017eb06f9",
    "field": "Rules Text",
    "canonicalEnglish": "Your prehensile tail allows you to challenge foes on all sides. You can’t be flanked.",
    "zhTW": "你的靈活尾巴能讓你同時對付四面八方的敵人。你不會遭到夾擊。",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "a91d6cb8-96c2-4ec1-be98-51e691ff5b70",
    "field": "Name",
    "canonicalEnglish": "Wings",
    "zhTW": "飛翼",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "a91d6cb8-96c2-4ec1-be98-51e691ff5b70",
    "field": "Rules Text",
    "canonicalEnglish": "You possess wings powerful enough to take you airborne. While using your wings to fly, you can stay aloft for a number of rounds equal to your Might score (minimum 1 round) before you fall. While using your wings to fly at 3rd level or lower, you have damage weakness 5.",
    "zhTW": "你強壯的翅膀能帶你飛上天空。當你使用翅膀飛行時，你最多可以在空中停留等於你力量的輪數（至少 1 輪），之後就會墜落。若你在 3 級以下使用翅膀飛行，你會擁有傷害弱點 5。",
    "source": "Heroes 1.01b p.27; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Devil",
    "contentType": "Ancestry Description",
    "contextId": "84780fe9-1790-43ad-b985-27ec83d6131e",
    "field": "Description",
    "canonicalEnglish": "Devils originated in the Seven Cities of Hell and have a supernatural charisma that helps them persuade others. They are similar in stature to humans, and their skin tones include deep blues, purples, and reds. They sport horns, eyes of all shades (including gold and red), and tails, and some have feathered or leathery wings.",
    "zhTW": "魔鬼起源於地獄七城，擁有能夠說服他人的超常魅力。他們的身形與人類相近，膚色包括深藍、紫色和紅色。他們長有犄角、各種顏色的眼睛（包括金色和紅色）與尾巴，有些魔鬼還有羽毛或皮革般的翅膀。",
    "source": "Heroes 1.01b p.21"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Ancestry",
    "contextId": "254848a2-5c86-4a73-9b9d-a87dda64176d",
    "field": "Name",
    "canonicalEnglish": "Dragon Knight",
    "zhTW": "龍騎士",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Signature Trait",
    "contextId": "cbe77035-1c50-42c6-ad6b-9ce5754d4895",
    "field": "Name",
    "canonicalEnglish": "Wyrmplate",
    "zhTW": "龍鱗",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Signature Trait",
    "contextId": "cbe77035-1c50-42c6-ad6b-9ce5754d4895",
    "field": "Rules Text",
    "canonicalEnglish": "Your hardened scales grant you damage immunity equal to your level to one of the following damage types: acid, cold, corruption, fire, lightning, or poison. You can change your damage immunity type when you finish a respite.",
    "zhTW": "你堅硬的鱗片會提供以下 1 種傷害類型的免疫（免疫值等於你的等級）：酸蝕、寒冷、腐朽、火焰、閃電、毒素。每次完成休整後，你可以更改傷害免疫的類型。",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Choice Label",
    "contextId": "dragon-knight.wyrmplate.damage-type",
    "field": "Name",
    "canonicalEnglish": "Wyrmplate Damage Immunity",
    "zhTW": "龍鱗傷害免疫",
    "source": "Batch 003 choice label; rules basis Heroes 1.01b p.29"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Choice Option",
    "contextId": "acid",
    "field": "Name",
    "canonicalEnglish": "Acid",
    "zhTW": "酸蝕",
    "source": "Heroes 1.01b p.29; Batch 003 DAMAGE_TYPES"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Choice Option",
    "contextId": "cold",
    "field": "Name",
    "canonicalEnglish": "Cold",
    "zhTW": "寒冷",
    "source": "Heroes 1.01b p.29; Batch 003 DAMAGE_TYPES"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Choice Option",
    "contextId": "corruption",
    "field": "Name",
    "canonicalEnglish": "Corruption",
    "zhTW": "腐朽",
    "source": "Heroes 1.01b p.29; Batch 003 DAMAGE_TYPES"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Choice Option",
    "contextId": "fire",
    "field": "Name",
    "canonicalEnglish": "Fire",
    "zhTW": "火焰",
    "source": "Heroes 1.01b p.29; Batch 003 DAMAGE_TYPES"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Choice Option",
    "contextId": "lightning",
    "field": "Name",
    "canonicalEnglish": "Lightning",
    "zhTW": "閃電",
    "source": "Heroes 1.01b p.29; Batch 003 DAMAGE_TYPES"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Choice Option",
    "contextId": "poison",
    "field": "Name",
    "canonicalEnglish": "Poison",
    "zhTW": "毒素",
    "source": "Heroes 1.01b p.29; Batch 003 DAMAGE_TYPES"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "e1e98137-88d1-4451-9c43-4fd9ef6577a9",
    "field": "Name",
    "canonicalEnglish": "Draconian Guard",
    "zhTW": "龍人守衛",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "e1e98137-88d1-4451-9c43-4fd9ef6577a9",
    "field": "Rules Text",
    "canonicalEnglish": "Whenever you or an adjacent creature takes damage from a strike, you can use a triggered action to guard against the blow. You reduce any damage from the strike by an amount equal to your level.",
    "zhTW": "每當你自己或 1 個相鄰生物受到打擊造成的傷害時，你可以使用反應動作進行防護，讓該次打擊減少等於你等級的傷害。",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "0d630fd6-0b3c-4c91-8954-ee7a7526086d",
    "field": "Name",
    "canonicalEnglish": "Draconian Pride",
    "zhTW": "龍人霸氣",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "0d630fd6-0b3c-4c91-8954-ee7a7526086d",
    "field": "Rules Text",
    "canonicalEnglish": "You have the following signature ability.\n\nDraconian Pride\nYou let loose a mighty roar to shake your foes’ spirits.\nArea, Magic — Main action\n1 burst — Each enemy in the area\nPower Roll + Might or Presence:\nTier 1: 2 damage\nTier 2: 5 damage; push 1\nTier 3: 7 damage; push 2",
    "zhTW": "你擁有以下招牌招式。\n\n龍人霸氣\n你發出震天怒吼，撼動敵人的心志。\n區域、魔法 — 主要動作\n1 爆發 — 區域內每個敵人\n檢定 + 力量或氣場：\nT1：2 傷害\nT2：5 傷害；推動 1\nT3：7 傷害；推動 2",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "1ba77d3b-3f14-4151-b6e7-8dde7ceca1f1",
    "field": "Name",
    "canonicalEnglish": "Dragon Breath",
    "zhTW": "龍息",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "1ba77d3b-3f14-4151-b6e7-8dde7ceca1f1",
    "field": "Rules Text",
    "canonicalEnglish": "You have the following signature ability.\n\nDragon Breath\nA furious exhalation of energy washes over your foes.\nArea, Magic — Main action\n3 cube within 1 — Each enemy in the area\nPower Roll + Might or Presence:\nTier 1: 2 damage\nTier 2: 4 damage\nTier 3: 6 damage\nEffect: You choose the ability’s damage type from acid, cold, corruption, fire, lightning, or poison.",
    "zhTW": "你擁有以下招牌招式。\n\n龍息\n狂怒的能量噴湧而出，席捲你的敵人。\n區域、魔法 — 主要動作\n1 格內 3 立方 — 區域內每個敵人\n檢定 + 力量或氣場：\nT1：2 傷害\nT2：4 傷害\nT3：6 傷害\n效果：你可以為招式選擇以下 1 種傷害類型：酸蝕、寒冷、腐朽、火焰、閃電、毒素。",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "31055912-7079-40e3-ab53-cd5f70757660",
    "field": "Name",
    "canonicalEnglish": "Prismatic Scales",
    "zhTW": "虹彩鱗片",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "31055912-7079-40e3-ab53-cd5f70757660",
    "field": "Rules Text",
    "canonicalEnglish": "Select one damage immunity granted by your Wyrmplate trait. You always have this immunity, in addition to the immunity granted by Wyrmplate.",
    "zhTW": "從你的【龍鱗】特性中選擇 1 種傷害免疫。你始終擁有此免疫（此外仍保有【龍鱗】賦予的免疫）。",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Choice Label",
    "contextId": "dragon-knight.prismatic-scales.damage-type",
    "field": "Name",
    "canonicalEnglish": "Permanent Damage Immunity",
    "zhTW": "永久傷害免疫",
    "source": "Batch 003 choice label; rules basis Heroes 1.01b p.29"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "7c7b4988-41ca-414a-9f3a-e9f8118a8132",
    "field": "Name",
    "canonicalEnglish": "Remember Your Oath",
    "zhTW": "銘記誓言",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "7c7b4988-41ca-414a-9f3a-e9f8118a8132",
    "field": "Rules Text",
    "canonicalEnglish": "As a maneuver, you can recite the following oath. Until the start of your next turn, whenever you make a saving throw, you succeed on a 4 or higher.\n\nEven should the sun stop in the sky\nEven should the night last a thousand years\nI will stand forever\nI shall not yield\nThose who suffer and yearn for justice\nI am your sword and shield\nI will yield no ground\nI will speak no lies\nI will stand against all tyrants\nUntil the last villain dies",
    "zhTW": "你可以使用機動動作誦讀以下誓言。直到你下個回合開始前，每當你進行豁免時，擲出 4 以上就算成功。\n\n縱使太陽停在天際，\n就算黑夜千年不息，\n我會永遠屹立，\n絕不退縮逃避。\n渴望正義的受苦之人啊，\n我就是你的劍與盾。\n寸步不讓，一字不虛，\n我會挺身對抗每個暴君，\n直到所有惡徒伏誅殞命。",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "e5f3a1e3-0d9b-4957-85de-85103c8a81a5",
    "field": "Name",
    "canonicalEnglish": "Wings",
    "zhTW": "飛翼",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "e5f3a1e3-0d9b-4957-85de-85103c8a81a5",
    "field": "Rules Text",
    "canonicalEnglish": "You possess wings powerful enough to take you airborne. While using your wings to fly, you can stay aloft for a number of rounds equal to your Might score (minimum 1 round) before you fall. While using your wings to fly at 3rd level or lower, you have damage weakness 5.",
    "zhTW": "你強壯的翅膀能帶你飛上天空。當你使用翅膀飛行時，你最多可以在空中停留等於你力量的輪數（至少 1 輪），之後就會墜落。若你在 3 級以下使用翅膀飛行，你會擁有傷害弱點 5。",
    "source": "Heroes 1.01b p.29; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dragon Knight",
    "contentType": "Ancestry Description",
    "contextId": "254848a2-5c86-4a73-9b9d-a87dda64176d",
    "field": "Description",
    "canonicalEnglish": "Dragon knights are muscled draconic humanoids who stand between 6 and 7 feet tall. The scales covering their reptilian heads, bodies, and tails can be almost any color. All dragon knights have wings, but on only a few are those wings big enough to let them fly.",
    "zhTW": "龍騎士是肌肉發達的龍形類人生物，身高介於 6 到 7 呎之間。他們頭部、身軀和尾巴上的鱗片可以呈現各種顏色。所有龍騎士都有翅膀，但只有少數人的翅膀大到足以飛行。",
    "source": "Heroes 1.01b p.21"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Ancestry",
    "contextId": "a9f3759d-be9f-4c40-b610-e7a656425303",
    "field": "Name",
    "canonicalEnglish": "Dwarf",
    "zhTW": "矮人",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Signature Trait",
    "contextId": "d3d44019-2554-4749-8e47-5303045e5e88",
    "field": "Name",
    "canonicalEnglish": "Runic Carving",
    "zhTW": "符文銘刻",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Signature Trait",
    "contextId": "d3d44019-2554-4749-8e47-5303045e5e88",
    "field": "Rules Text",
    "canonicalEnglish": "You can carve a rune onto your skin with 10 uninterrupted minutes of work, which is activated by the magic within your body. The rune you carve determines the benefit you receive, chosen from among the following:\n\nDetection: Pick a specific type of creature (such as goblins or humans) or object (such as gems or potions). Your rune glows softly when you are within 20 squares of any creature or object of that type, even if you don’t have line of effect to the creature or object. You can change the type of creature or object as a maneuver.\n\nLight: Your skin sheds light for 10 squares. You can turn this light on and off as a maneuver.\n\nVoice: As a maneuver, you can communicate telepathically with a willing creature you have met before and who is within 1 mile of you. You must know the creature’s name, and they must speak and understand a language you know. You and the creature can respond to one another as if having a spoken conversation. You can communicate with a different creature by changing the rune.\n\nYou can have one rune active at a time, and can change or remove a rune with 10 uninterrupted minutes of work.",
    "zhTW": "你可以花費不間斷的 10 分鐘在皮膚上銘刻符文，這些符文會透過你體內的魔力啟動。你銘刻的符文類型會決定你獲得的效果。\n\n偵測：選擇 1 種特定的生物類型（例如哥布林或人類）或物體（例如寶石或藥水）。當該類型的任何生物或物體位於你 20 格以內時，即使你對該生物或物體沒有效果線，你的符文也會發出微光。你可以使用機動動作更改偵測目標的類型。\n\n照明：你的皮膚會發出照亮 10 格範圍的光芒。你可以使用機動動作開啟或關閉這道光芒。\n\n傳聲：使用機動動作，你可以與 1 個曾經見過且位於 1 哩內的自願生物進行心靈溝通。你必須知道該生物的名字，而且對方必須會說並理解你已知的 1 種語言。你們可以像當面交談一樣互相對話。你可以透過更改符文與不同的生物對話。\n\n你同時只能啟動 1 種符文。更改或移除符文都需要不間斷的 10 分鐘。",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "fc751172-55f6-42fd-98a6-28de77d0ac1e",
    "field": "Name",
    "canonicalEnglish": "Great Fortitude",
    "zhTW": "強韌體魄",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "fc751172-55f6-42fd-98a6-28de77d0ac1e",
    "field": "Rules Text",
    "canonicalEnglish": "Your hearty constitution prevents you from losing strength. You can’t be made weakened.",
    "zhTW": "你強健的體魄讓你不會失去力量。你不會陷入虛弱狀態。",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "a552ca4f-5df4-4681-8d49-ddefadd2b8a4",
    "field": "Name",
    "canonicalEnglish": "Grounded",
    "zhTW": "腳踏實地",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "a552ca4f-5df4-4681-8d49-ddefadd2b8a4",
    "field": "Rules Text",
    "canonicalEnglish": "Your heavy stone body and connection to the earth make it difficult for others to move you. You have a +1 bonus to stability.",
    "zhTW": "你岩石般的厚重身軀與大地緊密相連，讓他人難以移動你。你的穩度 +1。",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "ddbd121c-fec7-4d6b-aba6-407a3a7df6cf",
    "field": "Name",
    "canonicalEnglish": "Spark Off Your Skin",
    "zhTW": "堅硬石膚",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "ddbd121c-fec7-4d6b-aba6-407a3a7df6cf",
    "field": "Rules Text",
    "canonicalEnglish": "Your stone skin affords you potent protection. You have a +6 bonus to Stamina, and that bonus increases by 6 at 4th, 7th, and 10th levels.",
    "zhTW": "你的石質皮膚能為你提供強大的防護。你的體力 +6，並在 4 級、7 級和 10 級時再 +6。",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "36a27c9b-d09a-4b76-b64d-21170c0728a0",
    "field": "Name",
    "canonicalEnglish": "Stand Tough",
    "zhTW": "堅毅不屈",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "36a27c9b-d09a-4b76-b64d-21170c0728a0",
    "field": "Rules Text",
    "canonicalEnglish": "Your body is made to withstand the blows of your enemies. Your Might score is treated as 1 higher for the purpose of resisting potencies, and you gain an edge on Might tests when called for to resist environmental effects or a creature’s traits or abilities.",
    "zhTW": "你的身軀天生能承受敵人的猛烈攻擊。抵抗效力時，你的力量會視為提高 1 點。此外，當你需要進行力量考驗來抵抗環境效果或生物的特性與招式時，你會獲得 1 個優勢。",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "d64a58af-4d76-49fd-95b8-6e0242c3f7c2",
    "field": "Name",
    "canonicalEnglish": "Stone Singer",
    "zhTW": "石謳師",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "d64a58af-4d76-49fd-95b8-6e0242c3f7c2",
    "field": "Rules Text",
    "canonicalEnglish": "You have a magic connection to the earth. When you spend 1 uninterrupted hour singing, you can reshape any unworked mundane stone within 3 squares. You can’t destroy this stone, but you can move each square of it anywhere within 3 squares, piling it off to one side to dig a hole or building it up to create a wall.",
    "zhTW": "你與大地有著魔法的連結。若你花費 1 小時不間斷地歌唱，你可以重塑 3 格內任何未加工的尋常石材。你無法摧毀這些石材，但可以將每 1 格的石材移動到 3 格內的任意位置。例如將岩石搬到旁邊來挖出坑洞，或堆疊起來建造牆壁。",
    "source": "Heroes 1.01b p.31; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Ancestry",
    "contextId": "e15296f9-deb9-48ae-be8a-0a1d37f2222c",
    "field": "Name",
    "canonicalEnglish": "Wode Elf",
    "zhTW": "幻林精靈",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Signature Trait",
    "contextId": "0bffccfe-db01-4afc-97f5-29521026cbe1",
    "field": "Name",
    "canonicalEnglish": "Wode Elf Glamor",
    "zhTW": "幻林精靈魅相",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Signature Trait",
    "contextId": "0bffccfe-db01-4afc-97f5-29521026cbe1",
    "field": "Rules Text",
    "canonicalEnglish": "You can magically alter your appearance to better blend in with your surroundings. You gain an edge on tests made to hide and sneak, and tests made to search for you while you are hidden take a bane.",
    "zhTW": "你可以運用魔法改變外表，讓自己更容易融入周遭環境。當你進行躲藏和潛行的考驗時，你會獲得 1 個優勢。此外，當你處於隱藏時，其他生物試圖搜索你的考驗都會承受 1 個劣勢。",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "f4930dba-0bc0-41ba-8960-0019e8435f2d",
    "field": "Name",
    "canonicalEnglish": "Forest Walk",
    "zhTW": "林間穿行",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "f4930dba-0bc0-41ba-8960-0019e8435f2d",
    "field": "Rules Text",
    "canonicalEnglish": "You can shift into and while within difficult terrain.",
    "zhTW": "你可以遁移進入困難地形，也可以在困難地形中遁移。",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "0e0af5a5-58dd-4a7f-9a11-9e4cafe9ab41",
    "field": "Name",
    "canonicalEnglish": "Quick and Brutal",
    "zhTW": "迅猛殘暴",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "0e0af5a5-58dd-4a7f-9a11-9e4cafe9ab41",
    "field": "Rules Text",
    "canonicalEnglish": "Whenever you score a critical hit, you can take an additional main action and an additional move action instead of just a main action.",
    "zhTW": "每當你造成暴擊時，你不僅能額外執行 1 個主要動作，還能額外執行 1 個移動動作。",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "14d80a96-0aac-4322-aa0b-a6ff575fb9d4",
    "field": "Name",
    "canonicalEnglish": "Otherworldly Grace",
    "zhTW": "非凡優雅",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "14d80a96-0aac-4322-aa0b-a6ff575fb9d4",
    "field": "Rules Text",
    "canonicalEnglish": "Your elf body and mind can’t be contained for long. Whenever you make a saving throw, you succeed on a roll of 5 or higher.",
    "zhTW": "你的精靈身軀與心智難以被拘束。每當你進行豁免時，擲出 5 以上就算成功。",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "82b5be82-d442-4fd7-a16f-765c8659f729",
    "field": "Name",
    "canonicalEnglish": "Revisit Memory",
    "zhTW": "重溫記憶",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "82b5be82-d442-4fd7-a16f-765c8659f729",
    "field": "Rules Text",
    "canonicalEnglish": "Accessing memories is as easy as living in the present for you. You gain an edge on tests made to recall lore.",
    "zhTW": "對你而言，重拾記憶就像活在當下一樣自然。當你進行回想知識的考驗時，你會獲得 1 個優勢。",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "c99de9a3-ac0e-4f77-9d9b-cec57478943d",
    "field": "Name",
    "canonicalEnglish": "Swift",
    "zhTW": "迅捷步伐",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "c99de9a3-ac0e-4f77-9d9b-cec57478943d",
    "field": "Rules Text",
    "canonicalEnglish": "You have speed 6.",
    "zhTW": "你的速度為 6。",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "6e3cf3a4-8628-4220-bff2-2ff2b9c1487f",
    "field": "Name",
    "canonicalEnglish": "The Wode Defends",
    "zhTW": "幻林護衛",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "6e3cf3a4-8628-4220-bff2-2ff2b9c1487f",
    "field": "Rules Text",
    "canonicalEnglish": "You have the following signature ability. Signature abilities can be used at will.\n\nThe Wode Defends\nThorny vines erupt from every surface and attempt to bind your foe.\nMagic, Ranged, Strike — Main action\nRanged 10 — One creature\nPower Roll + Might or Agility:\nTier 1: 2 + M or A damage; A < weak, slowed (save ends)\nTier 2: 3 + M or A damage; A < average, slowed (save ends)\nTier 3: 5 + M or A damage; A < strong, restrained (save ends)",
    "zhTW": "你擁有以下招牌招式。\n\n幻林護衛\n尖刺藤蔓從四周地表竄出，試圖纏繞你的敵人。\n魔法、遠程、打擊 — 主要動作\n遠程 10 — 1 個生物\n檢定 + 力量 / 敏捷：\nT1：2 + 力量 / 敏捷傷害；敏捷 < 弱，緩速（豁免解除）\nT2：3 + 力量 / 敏捷傷害；敏捷 < 中，緩速（豁免解除）\nT3：5 + 力量 / 敏捷傷害；敏捷 < 強，束縛（豁免解除）",
    "source": "Heroes 1.01b p.33; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Dwarf",
    "contentType": "Ancestry Description",
    "contextId": "a9f3759d-be9f-4c40-b610-e7a656425303",
    "field": "Description",
    "canonicalEnglish": "Humanoids with stony skin, dwarves have short and stout bodies. Many carve supernatural runes into their flesh, and some have beards made of crystals.",
    "zhTW": "矮人是擁有岩石皮膚的類人生物，身材矮壯。許多矮人會在自己的皮膚刻下超常符文，有些人的鬍鬚甚至由水晶構成。",
    "source": "Heroes 1.01b p.21"
  },
  {
    "ancestry": "Wode Elf",
    "contentType": "Ancestry Description",
    "contextId": "e15296f9-deb9-48ae-be8a-0a1d37f2222c",
    "field": "Description",
    "canonicalEnglish": "Lithe humanoids with finely furred skin in all shades of blue, wode elves have angular features and large, pointed ears akin to a bat’s. They possess a supernatural glamor that allows them to blend in with their surroundings when they wish to hide.",
    "zhTW": "幻林精靈是身形修長的類人生物，皮膚覆蓋各種藍色調的細毛，輪廓分明，長有蝙蝠般的大型尖耳。他們擁有超常的魅相，能融入周遭環境而不被察覺。",
    "source": "Heroes 1.01b p.21"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Ancestry",
    "contextId": "e3ef91f8-4781-4a95-8a70-c4bc403a1a87",
    "field": "Name",
    "canonicalEnglish": "High Elf",
    "zhTW": "高等精靈",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Signature Trait",
    "contextId": "96632785-910c-4370-9ae9-0a9a34318140",
    "field": "Name",
    "canonicalEnglish": "High Elf Glamor",
    "zhTW": "高等精靈魅相",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Signature Trait",
    "contextId": "96632785-910c-4370-9ae9-0a9a34318140",
    "field": "Rules Text",
    "canonicalEnglish": "A magic glamor makes others perceive you as interesting and engaging, granting you an edge on Presence tests using the Flirt or Persuade skills. This glamor makes you appear and sound slightly different to each creature you meet, since what is engaging to one might be different for another. However, you never appear to be anyone other than yourself.",
    "zhTW": "你的魔法魅力會讓人不自覺地被你吸引。每當你使用魅惑或遊說技能進行氣場考驗時，你會獲得 1 個優勢。由於每個人喜歡的特徵不盡相同，這種魔法魅力會讓你在每個生物眼中呈現出略為不同的外表與聲音。不過，你看起來仍然是自己的模樣，不會被誤認為其他人。",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "5ebaaca0-4ed6-47db-a923-c6945f9af1d9",
    "field": "Name",
    "canonicalEnglish": "Glamor of Terror",
    "zhTW": "恐怖魅相",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "5ebaaca0-4ed6-47db-a923-c6945f9af1d9",
    "field": "Rules Text",
    "canonicalEnglish": "When a foe strikes, you reverse the magic of your glamor to instill fear into their heart. Whenever you take damage from a creature, you can use a triggered action to make that creature frightened of you until the end of their next turn.",
    "zhTW": "當敵人攻擊你時，你可以反轉魅相的魔力，將恐懼注入對方心中。每當你受到生物造成的傷害時，你可以使用反應動作讓該生物對你陷入畏縮狀態，直到他下個回合結束。",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "ef9bd176-59cc-4955-a233-a772f93fcbff",
    "field": "Name",
    "canonicalEnglish": "Graceful Retreat",
    "zhTW": "優雅撤離",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "ef9bd176-59cc-4955-a233-a772f93fcbff",
    "field": "Rules Text",
    "canonicalEnglish": "You gain a +1 bonus to the distance you can shift when you take the Disengage move action.",
    "zhTW": "當你執行撤離移動動作時，你的遁移距離 +1。",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "a266e810-6b61-40ee-bf0b-337d946aea0f",
    "field": "Name",
    "canonicalEnglish": "High Senses",
    "zhTW": "敏銳感官",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "a266e810-6b61-40ee-bf0b-337d946aea0f",
    "field": "Rules Text",
    "canonicalEnglish": "Your senses are especially keen and perceptive. You gain an edge on tests made to notice threats.",
    "zhTW": "你擁有非常敏銳的感知能力。當你進行察覺威脅的考驗時，你會獲得 1 個優勢。",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "eb9f71ba-ffae-4065-b90c-0bbdff48d2b0",
    "field": "Name",
    "canonicalEnglish": "Otherworldly Grace",
    "zhTW": "非凡優雅",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "eb9f71ba-ffae-4065-b90c-0bbdff48d2b0",
    "field": "Rules Text",
    "canonicalEnglish": "Your elf body and mind can’t be contained for long. Whenever you make a saving throw, you succeed on a roll of 5 or higher.",
    "zhTW": "你的精靈身軀與心智難以被拘束。每當你進行豁免時，擲出 5 以上就算成功。",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "01cfcdfb-5ae1-463f-8787-dbdbf4b59628",
    "field": "Name",
    "canonicalEnglish": "Revisit Memory",
    "zhTW": "重溫記憶",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "01cfcdfb-5ae1-463f-8787-dbdbf4b59628",
    "field": "Rules Text",
    "canonicalEnglish": "Accessing memories is as easy as living in the present for you. You gain an edge on tests made to recall lore.",
    "zhTW": "對你而言，重拾記憶就像活在當下一樣自然。當你進行回想知識的考驗時，你會獲得 1 個優勢。",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "2e7d1a15-2a76-4328-9969-5ed1680effba",
    "field": "Name",
    "canonicalEnglish": "Unstoppable Mind",
    "zhTW": "頑強心智",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "2e7d1a15-2a76-4328-9969-5ed1680effba",
    "field": "Rules Text",
    "canonicalEnglish": "Your mind allows you to maintain your focus in any situation. You can’t be made dazed.",
    "zhTW": "你的心智能讓你在任何情況下保持專注。你不會陷入暈眩狀態。",
    "source": "Heroes 1.01b p.35; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Ancestry",
    "contextId": "07766b37-33b8-41e9-8542-9302d09852b7",
    "field": "Name",
    "canonicalEnglish": "Hakaan",
    "zhTW": "哈肯人",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Signature Trait",
    "contextId": "2b8f53b1-3944-4134-9d8b-2dbeda593cb9",
    "field": "Name",
    "canonicalEnglish": "Big!",
    "zhTW": "大個子！",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Signature Trait",
    "contextId": "2b8f53b1-3944-4134-9d8b-2dbeda593cb9",
    "field": "Rules Text",
    "canonicalEnglish": "Your stature reflects your giant forebears. Your size is 1L.",
    "zhTW": "你的身形反映了巨人祖先的血統。你的體型為 1L。",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "4c21e020-9ec9-4800-b140-e48922208656",
    "field": "Name",
    "canonicalEnglish": "All Is a Feather",
    "zhTW": "輕如鴻毛",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "4c21e020-9ec9-4800-b140-e48922208656",
    "field": "Rules Text",
    "canonicalEnglish": "You are exceptionally strong. You gain an edge on tests made to lift and haul heavy objects.",
    "zhTW": "你力大無窮。當你進行舉起和搬運重物的考驗時，你會獲得 1 個優勢。",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "f3bd4d0a-62b4-4ae4-bc72-d6be0c59d00d",
    "field": "Name",
    "canonicalEnglish": "Doomsight",
    "zhTW": "命定末視",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "f3bd4d0a-62b4-4ae4-bc72-d6be0c59d00d",
    "field": "Rules Text",
    "canonicalEnglish": "Working with your Director, you can predetermine an encounter in which you will die. When that encounter begins, you become doomed. While doomed, you automatically obtain a tier 3 outcome on tests and ability rolls, and you don’t die no matter how low your Stamina falls. You then die immediately at the end of the encounter, and can’t be returned to life by any means. If you don’t predetermine your death encounter, you can choose to become doomed while you are dying with the Director’s approval (no action required). Doing so should be reserved for encounters in which you are dying as a result of suitable heroism, such as making a last stand against a boss or saving civilians, or when the consequences of your actions have finally caught up to you—not because you’re playing a one-shot and have nothing to lose, Hacaarl. Additionally, when your Stamina reaches the negative of your winded value and you are not doomed, you turn to rubble instead of experiencing death. You are unaware of your surroundings in this state, and you can’t regain Stamina or have this effect undone in any way. After 12 hours, you regain Stamina equal to your recovery value.",
    "zhTW": "與你的導演合作，你可以預先決定哪場遭遇你將會死亡。當該遭遇開始時，你會進入「命定」狀態。處於命定狀態時，你進行的任何考驗和招式檢定都會自動獲得 T3 結果，而且無論你的體力降到多低都不會死亡。然而，你會在遭遇結束時立刻死亡，而且無法透過任何方式復活。\n\n若你沒有預先決定死亡遭遇，你也可以在陷入瀕死時進入命定狀態（無需動作，但需經導演同意）。這種選擇應該保留給因為英勇行為而瀕死的情況，例如與首領殊死一戰、拯救平民，或因為先前的行為而遭遇相應的後果，而不是單純因為你只玩一場冒險而沒有顧忌。\n\n此外，若你的體力降至疲態值的負數，但未處於命定狀態，你會變成碎石，而非死亡。在這種情況下，你無法感知周圍環境，也無法以任何方式恢復體力或復原。在 12 小時後，你會恢復等於你復元值的體力。",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "cffc88ed-1647-4bcd-bcbf-e38b7c5ea508",
    "field": "Name",
    "canonicalEnglish": "Forceful",
    "zhTW": "強而有力",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "cffc88ed-1647-4bcd-bcbf-e38b7c5ea508",
    "field": "Rules Text",
    "canonicalEnglish": "Whenever you force move a creature or object, the forced movement distance gains a +1 bonus.",
    "zhTW": "每當你強制移動 1 個生物或物體時，強制移動的距離 +1。",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "a07d3f8b-c589-4e2e-8bc5-a37be82042eb",
    "field": "Name",
    "canonicalEnglish": "Great Fortitude",
    "zhTW": "強韌體魄",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "a07d3f8b-c589-4e2e-8bc5-a37be82042eb",
    "field": "Rules Text",
    "canonicalEnglish": "Your hearty constitution prevents you from losing strength. You can’t be made weakened.",
    "zhTW": "你強健的體魄讓你不會失去力量。你不會陷入虛弱狀態。",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "5b8c916d-1437-4e72-8772-4af4ef0c81cc",
    "field": "Name",
    "canonicalEnglish": "Stand Tough",
    "zhTW": "堅毅不屈",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "5b8c916d-1437-4e72-8772-4af4ef0c81cc",
    "field": "Rules Text",
    "canonicalEnglish": "Your body is made to withstand the blows of your enemies. Your Might score is treated as 1 higher for the purpose of resisting potencies, and you gain an edge on Might tests when called for to resist environmental effects or a creature’s traits or abilities.",
    "zhTW": "你的身軀天生能承受敵人的猛烈攻擊。抵抗效力時，你的力量會視為提高 1 點。此外，當你需要進行力量考驗來抵抗環境效果或生物的特性與招式時，你會獲得 1 個優勢。",
    "source": "Heroes 1.01b p.37; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Ancestry",
    "contextId": "6f995f3d-a4e3-456a-9294-ff2c9ec5cb95",
    "field": "Name",
    "canonicalEnglish": "Human",
    "zhTW": "人類",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Signature Trait",
    "contextId": "75d8f226-1848-4e98-b245-31d350c644d4",
    "field": "Name",
    "canonicalEnglish": "Detect the Supernatural",
    "zhTW": "偵測超常",
    "source": "Heroes 1.01b p.39; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Signature Trait",
    "contextId": "75d8f226-1848-4e98-b245-31d350c644d4",
    "field": "Rules Text",
    "canonicalEnglish": "As a maneuver, you can open your awareness to detect supernatural creatures and phenomena. Until the end of your next turn, you know the location of any supernatural object, or any undead, construct, or creature from another world within 5 squares, even if you don’t have line of effect to that object or creature. You know if you’re detecting an item or a creature, and you know the nature of any creature you detect.",
    "zhTW": "使用機動動作，你可以啟動感知能力來偵測超常生物和現象。直到你下個回合結束前，你知道 5 格內任何超常物體、亡靈、構裝體或異界生物的位置，即使你對他們沒有效果線也能如此。你能分辨偵測到的是物體還是生物，並且能知道那些生物的本質。",
    "source": "Heroes 1.01b p.39; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "4081942d-fdb3-4975-9096-8bfa0c268832",
    "field": "Name",
    "canonicalEnglish": "Can’t Take Hold",
    "zhTW": "難以牽制",
    "source": "Heroes 1.01b p.39; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "4081942d-fdb3-4975-9096-8bfa0c268832",
    "field": "Rules Text",
    "canonicalEnglish": "Your connection to the natural world allows you to resist certain supernatural effects. You ignore temporary difficult terrain created by magic and psionic abilities. Additionally, when you are force moved by a magic or psionic ability, you can reduce the forced movement distance by 1.",
    "zhTW": "你與大自然的連結能讓你抵抗某些超常效果。你可以無視魔法或靈能招式所創造的臨時困難地形。此外，當你被魔法或靈能招式強制移動時，你可以將強制移動的距離 -1。",
    "source": "Heroes 1.01b p.39; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "55c871ba-9b2b-4c8d-b1bf-cc12fe62af0e",
    "field": "Name",
    "canonicalEnglish": "Determination",
    "zhTW": "堅定決心",
    "source": "Heroes 1.01b p.39; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "55c871ba-9b2b-4c8d-b1bf-cc12fe62af0e",
    "field": "Rules Text",
    "canonicalEnglish": "A tolerance for pain and distress allows you to push through difficult situations. If you are frightened, slowed, or weakened, you can use a maneuver to immediately end one of those conditions.",
    "zhTW": "你可以忍受痛苦和壓力，在困境中堅持前行。若你處於畏縮、緩速或虛弱狀態，你可以使用機動動作立刻解除其中 1 種狀態。",
    "source": "Heroes 1.01b p.39; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "7d540696-a16f-4852-8e36-c7c7339cf42d",
    "field": "Name",
    "canonicalEnglish": "Perseverance",
    "zhTW": "堅持不懈",
    "source": "Heroes 1.01b p.39; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "7d540696-a16f-4852-8e36-c7c7339cf42d",
    "field": "Rules Text",
    "canonicalEnglish": "Giving up is for other people. You gain an edge on tests made using the Endurance skill. Additionally, when you are slowed, your speed is reduced to 3 instead of 2.",
    "zhTW": "你絕不輕言放棄。當你使用耐力技能進行考驗時，你會獲得 1 個優勢。此外，若你處於緩速狀態，你的速度會降至 3，而非 2。",
    "source": "Heroes 1.01b p.39; Skills p.255; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "7a066651-7e14-4d7e-8c00-23f2488bd7a5",
    "field": "Name",
    "canonicalEnglish": "Resist the Unnatural",
    "zhTW": "抵抗異常",
    "source": "Heroes 1.01b p.39; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "7a066651-7e14-4d7e-8c00-23f2488bd7a5",
    "field": "Rules Text",
    "canonicalEnglish": "Your instinctive resilience protects you from injuries beyond the routine. Whenever you take damage that isn’t untyped, you can use a triggered action to take half the damage.",
    "zhTW": "你與生俱來的韌性會保護你免受異常傷害。每當你受到任何傷害時，只要不是無類型的傷害，你可以使用反應動作將該傷害減半。",
    "source": "Heroes 1.01b p.39; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "471a9430-3713-41fd-938f-79ac4c6ceba9",
    "field": "Name",
    "canonicalEnglish": "Staying Power",
    "zhTW": "續航力",
    "source": "Heroes 1.01b p.39; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Human",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "471a9430-3713-41fd-938f-79ac4c6ceba9",
    "field": "Rules Text",
    "canonicalEnglish": "Your human physiology allows you to fight, run, and stay awake longer than others. You increase your number of Recoveries by 2.",
    "zhTW": "人類的生理構造能讓你比其他族群更持久地戰鬥、奔跑和保持清醒。你的復元力 +2。",
    "source": "Heroes 1.01b p.39; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "High Elf",
    "contentType": "Ancestry Description",
    "contextId": "e3ef91f8-4781-4a95-8a70-c4bc403a1a87",
    "field": "Description",
    "canonicalEnglish": "Stately and graceful, high elves have tall, willowy bodies, pointed ears, and smoother skin than most other humanoids. Rare metal inlays such as gold, platinum, palladium, and iridium act as organic components within their skin. The truest form of any high elf is hidden from most—sometimes even from themself—thanks to a supernatural glamor that makes them more attractive to others, whatever that might mean to an individual. This glamor transcends physical appearance, also slightly altering a high elf’s tone and smell.",
    "zhTW": "高等精靈端莊優雅，擁有高挑纖細的身軀、尖耳，以及比大多數類人生物更光滑的皮膚。金、鉑、鈀、銥等稀有金屬鑲嵌物會成為他們皮膚中的有機構造。由於超常魅相的影響，多數人看不見高等精靈最真實的模樣（有時甚至連他們自己也看不見），這種魅相會讓高等精靈在他人眼中更具吸引力，而每個人對「吸引力」的理解可能各不相同。魅相不只影響外表，也會稍微改變高等精靈的聲音和氣味。",
    "source": "Heroes 1.01b p.21"
  },
  {
    "ancestry": "Hakaan",
    "contentType": "Ancestry Description",
    "contextId": "07766b37-33b8-41e9-8542-9302d09852b7",
    "field": "Description",
    "canonicalEnglish": "Descended from stone giants, the mighty hakaan stand over 9 feet tall and have well-muscled bodies made of organic stone. They are the largest ancestry in this book!",
    "zhTW": "強壯的哈肯人是石巨人的後裔，身高超過 9 呎，擁有肌肉發達、由有機岩石構成的身軀。他們是核心規則中體型最大的族裔！",
    "source": "Heroes 1.01b p.21"
  },
  {
    "ancestry": "Human",
    "contentType": "Ancestry Description",
    "contextId": "6f995f3d-a4e3-456a-9294-ff2c9ec5cb95",
    "field": "Description",
    "canonicalEnglish": "Humans are the most numerous people in Orden and many other fantasy worlds! In Draw Steel, humans have all the diversity that our species displays in real life—and they can sense the presence of supernatural energy!",
    "zhTW": "人類是歐爾登及許多奇幻世界中人口最多的族群！Draw Steel 中的人類與現實世界的人類一樣，具有豐富的多樣性，甚至還能感知超常能量的存在！",
    "source": "Heroes 1.01b p.21"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Ancestry",
    "contextId": "f1c7be70-88d7-47e6-ae22-63e205cfed34",
    "field": "Name",
    "canonicalEnglish": "Memonek",
    "zhTW": "梅莫人",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Signature Trait",
    "contextId": "49d08628-cc53-4fdb-a4b0-d8cf04bc4890",
    "field": "Name",
    "canonicalEnglish": "Fall Lightly",
    "zhTW": "輕盈落地",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Signature Trait",
    "contextId": "49d08628-cc53-4fdb-a4b0-d8cf04bc4890",
    "field": "Rules Text",
    "canonicalEnglish": "Your silicone body is low in density. Whenever you fall, you reduce the distance of the fall by 2 squares.",
    "zhTW": "你的矽質身體密度極低。每當你墜落時，實際墜落距離會減少 2 格。",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Signature Trait",
    "contextId": "2e0bcc99-99e5-436b-8305-271484cd6bf1",
    "field": "Name",
    "canonicalEnglish": "Lightweight",
    "zhTW": "身輕如燕",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Signature Trait",
    "contextId": "2e0bcc99-99e5-436b-8305-271484cd6bf1",
    "field": "Rules Text",
    "canonicalEnglish": "Your body is light for a creature of your height. Whenever another creature attempts to force move you, you treat your size as one size smaller than it is.",
    "zhTW": "以你的身高而言，你的體重異常輕盈。每當其他生物嘗試強制移動你時，你的體型會視為比實際小 1 級。",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "fdc92619-4c4f-45cc-a897-0b2002cc41f6",
    "field": "Name",
    "canonicalEnglish": "I Am Law",
    "zhTW": "吾即律法",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "fdc92619-4c4f-45cc-a897-0b2002cc41f6",
    "field": "Rules Text",
    "canonicalEnglish": "Your lawful nature and quick reflexes mean you give no quarter to creatures trying to get past you. Enemies can’t move through your space unless you allow them to do so.",
    "zhTW": "憑藉你守序的天性和敏捷的反應，你絕對不會對試圖穿過你的生物手下留情。除非你允許，否則敵人無法穿越你占據的空間。",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "abe8e829-a2bf-4ebd-ab98-628f413d9eca",
    "field": "Name",
    "canonicalEnglish": "Keeper of Order",
    "zhTW": "秩序守護者",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "abe8e829-a2bf-4ebd-ab98-628f413d9eca",
    "field": "Rules Text",
    "canonicalEnglish": "Your connection to Axiom, the plane of Uttermost Law, allows you to manage chaos around you. Once per round when you or an adjacent creature makes a power roll, you can use a free triggered action to remove an edge or a bane on the roll, to turn a double edge into an edge, or to turn a double bane into a bane.",
    "zhTW": "你與「至律位面」公理界的連結能讓你控制周圍的混亂。每輪 1 次，當你自己或 1 個與你相鄰的生物進行檢定時，你可以使用免費反應動作，移除該次檢定的 1 個優勢或劣勢、將雙優勢轉為單優勢，或將雙劣勢轉為單劣勢。",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "1ba41227-3b34-4271-9008-e3492c7eeb1a",
    "field": "Name",
    "canonicalEnglish": "Lightning Nimbleness",
    "zhTW": "疾如雷電",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "1ba41227-3b34-4271-9008-e3492c7eeb1a",
    "field": "Rules Text",
    "canonicalEnglish": "You can push your body to move at incredible speeds. Your speed is 7.",
    "zhTW": "你的身體可以達到驚人的移動速度。你的速度為 7。",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "2dd85e83-5a02-40f2-a2e1-260820203108",
    "field": "Name",
    "canonicalEnglish": "Nonstop",
    "zhTW": "奔騰不息",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "2dd85e83-5a02-40f2-a2e1-260820203108",
    "field": "Rules Text",
    "canonicalEnglish": "Your connection to Axiom allows you to regulate your movement. You can’t be made slowed.",
    "zhTW": "你與公理界的連結能讓你調節自身的移動力。你不會陷入緩速狀態。",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "6d34b63b-98a6-4b9e-a385-75e5070c4a3d",
    "field": "Name",
    "canonicalEnglish": "Systematic Mind",
    "zhTW": "條理思維",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "6d34b63b-98a6-4b9e-a385-75e5070c4a3d",
    "field": "Rules Text",
    "canonicalEnglish": "You gain an edge on tests made to parse schematics, maps, and other systematic documents that aren’t inherently chaotic. In addition, you treat any language you don’t know as if you know a related language.",
    "zhTW": "當你嘗試解析藍圖、地圖和其他有條理的系統化文件時，相關考驗會獲得 1 個優勢。此外，對於任何你不懂的語言，你都視為懂得某種與之相關的語言。",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "119daf46-2425-40be-a6dd-ee2255806072",
    "field": "Name",
    "canonicalEnglish": "Unphased",
    "zhTW": "泰然自若",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "119daf46-2425-40be-a6dd-ee2255806072",
    "field": "Rules Text",
    "canonicalEnglish": "Your ordered mind can’t be caught off guard. You can’t be made surprised.",
    "zhTW": "你有條不紊的心智讓你不會驚慌失措。你不會措手不及。",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "68ef24d5-b2b8-46a0-bace-3e69b80e88d6",
    "field": "Name",
    "canonicalEnglish": "Useful Emotion",
    "zhTW": "有益情緒",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "68ef24d5-b2b8-46a0-bace-3e69b80e88d6",
    "field": "Rules Text",
    "canonicalEnglish": "Velloparatha—the worldsickness—might hinder you, but you know how to turn your pain into something your enemies feel. At the start of any combat, you gain 1 surge.",
    "zhTW": "維洛帕拉症（俗稱躍界病）或許會妨礙你，但你也知道如何將自己的痛苦轉化為敵人能夠感受到的力量。每場戰鬥開始時，你會獲得 1 點鬥志。",
    "source": "Heroes 1.01b p.41; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Memonek",
    "contentType": "Ancestry Description",
    "contextId": "f1c7be70-88d7-47e6-ae22-63e205cfed34",
    "field": "Description",
    "canonicalEnglish": "Originating on Axiom, the Plane of Uttermost Law, memonek are a machine people made of metal, marble, glass, and other inorganic materials. Their bodies are lightweight, making them easier to move and letting them fall at slower speeds.",
    "zhTW": "梅莫人源自「至律位面」公理界，是由金屬、大理石、玻璃和其他無機材料構成的機械族群。他們的身體很輕，因此更容易被移動，墜落速度也較慢。",
    "source": "Heroes 1.01b p.21"
  },
  {
    "ancestry": "Orc",
    "contentType": "Ancestry",
    "contextId": "af712d2e-8943-4757-8f14-7dd4967de0b6",
    "field": "Name",
    "canonicalEnglish": "Orc",
    "zhTW": "歐克",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Signature Trait",
    "contextId": "20f806e2-e84f-4130-85ed-b6f0c952a36f",
    "field": "Name",
    "canonicalEnglish": "Relentless",
    "zhTW": "絕地反擊",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Signature Trait",
    "contextId": "20f806e2-e84f-4130-85ed-b6f0c952a36f",
    "field": "Rules Text",
    "canonicalEnglish": "Whenever a creature deals damage to you that leaves you dying, you can make a free strike against any creature. If the creature is reduced to 0 Stamina by your strike, you can spend a Recovery.",
    "zhTW": "每當 1 個生物造成的傷害讓你陷入瀕死時，你可以對任意生物發動 1 次基礎打擊。若該生物因為你的打擊而體力歸零，你可以花費 1 點復元力。",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "49d5b7ac-4b1e-4af3-9ea1-ed4e57850629",
    "field": "Name",
    "canonicalEnglish": "Bloodfire Rush",
    "zhTW": "血焰衝刺",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "49d5b7ac-4b1e-4af3-9ea1-ed4e57850629",
    "field": "Rules Text",
    "canonicalEnglish": "The magic coursing through your veins makes you run faster in the heat of battle. The first time in any combat round that you take damage, you gain a +2 bonus to speed until the end of the round.",
    "zhTW": "你體內奔流的魔力能讓你在戰鬥狂潮中跑得更快。每輪 1 次，當你首次受到傷害時，你的速度會 +2，直到該輪結束。",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "44c35813-1a78-46b8-8c99-65e24e2a4e79",
    "field": "Name",
    "canonicalEnglish": "Glowing Recovery",
    "zhTW": "熾熱復元",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "44c35813-1a78-46b8-8c99-65e24e2a4e79",
    "field": "Rules Text",
    "canonicalEnglish": "Your bloodfire allows you to regain your strength quicker than others. Whenever you use the Catch Breath maneuver, you can spend as many Recoveries as you like.",
    "zhTW": "你的血焰能讓你比其他人更快恢復體力。每當你使用喘息機動動作時，你可以花費任意數量的復元力。",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "0912b943-1522-4c36-aa18-106be6d2b975",
    "field": "Name",
    "canonicalEnglish": "Grounded",
    "zhTW": "腳踏實地",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "0912b943-1522-4c36-aa18-106be6d2b975",
    "field": "Rules Text",
    "canonicalEnglish": "The magic in your blood makes it difficult for others to move you. You have a +1 bonus to stability.",
    "zhTW": "你血液中的魔力讓他人難以移動你。你的穩度 +1。",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "99fc8bf6-b7d2-4f13-a3e4-a26883bd739c",
    "field": "Name",
    "canonicalEnglish": "Nonstop",
    "zhTW": "奔騰不息",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "99fc8bf6-b7d2-4f13-a3e4-a26883bd739c",
    "field": "Rules Text",
    "canonicalEnglish": "Your bloodfire supplies you with a constant rush of adrenaline. You can’t be made slowed.",
    "zhTW": "你的血焰讓你的腎上腺素持續翻湧。你不會陷入緩速狀態。",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "0db89994-954b-4475-a335-95b639594bd7",
    "field": "Name",
    "canonicalEnglish": "Passionate Artisan",
    "zhTW": "熱血工匠",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "0db89994-954b-4475-a335-95b639594bd7",
    "field": "Rules Text",
    "canonicalEnglish": "When you are stirred by a passion for creation, your bloodfire allows you to work longer and harder. When you gain your initial skills from your career, culture, class, or other source, choose two skills from the crafting skill group, whether you have those skills or not. Whenever you make a project roll for a crafting project that uses these skills, you gain a +2 bonus to the roll.",
    "zhTW": "當你因為創作的靈感而振奮時，你的血焰能讓你更持久且更努力地工作。當你從職業、文化、範型或其他來源獲得初始技能時，從工藝類技能中選擇 2 項技能（無論你是否已經擁有該技能）。每當你使用所選技能進行製造類專案時，專案檢定會 +2。",
    "source": "Heroes 1.01b p.43; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Choice Label",
    "contextId": "orc.passionate-artisan.skills",
    "field": "Name",
    "canonicalEnglish": "Crafting Skills",
    "zhTW": "工藝類技能",
    "source": "Heroes 1.01b p.43; Tests p.255; Batch 003 choice ID"
  },
  {
    "ancestry": "Orc",
    "contentType": "Choice Option",
    "contextId": "cdae52cd-ef20-461d-ae18-253023cdb827",
    "field": "Name",
    "canonicalEnglish": "Alchemy",
    "zhTW": "鍊金",
    "source": "Tests p.255; Batch 003 CRAFTING_SKILLS"
  },
  {
    "ancestry": "Orc",
    "contentType": "Choice Option",
    "contextId": "078b501f-e549-4725-993f-7ed8d57fc2ae",
    "field": "Name",
    "canonicalEnglish": "Architecture",
    "zhTW": "建築",
    "source": "Tests p.255; Batch 003 CRAFTING_SKILLS"
  },
  {
    "ancestry": "Orc",
    "contentType": "Choice Option",
    "contextId": "50ca6145-2d22-4496-a355-c7b2df2cf0de",
    "field": "Name",
    "canonicalEnglish": "Blacksmithing",
    "zhTW": "鍛造",
    "source": "Tests p.255; Batch 003 CRAFTING_SKILLS"
  },
  {
    "ancestry": "Orc",
    "contentType": "Choice Option",
    "contextId": "436ea6c1-6386-43b2-b074-020992cc73fd",
    "field": "Name",
    "canonicalEnglish": "Carpentry",
    "zhTW": "木工",
    "source": "Tests p.255; Batch 003 CRAFTING_SKILLS"
  },
  {
    "ancestry": "Orc",
    "contentType": "Choice Option",
    "contextId": "becbc5ec-de63-481b-8247-e62c2a6fd8cb",
    "field": "Name",
    "canonicalEnglish": "Cooking",
    "zhTW": "烹飪",
    "source": "Tests p.255; Batch 003 CRAFTING_SKILLS"
  },
  {
    "ancestry": "Orc",
    "contentType": "Choice Option",
    "contextId": "5ca5c242-fe6d-43b3-86b0-b5314a9fe39a",
    "field": "Name",
    "canonicalEnglish": "Fletching",
    "zhTW": "製箭",
    "source": "Tests p.255; Batch 003 CRAFTING_SKILLS"
  },
  {
    "ancestry": "Orc",
    "contentType": "Choice Option",
    "contextId": "75d64fef-b075-4221-8cbc-c6b6328ee22c",
    "field": "Name",
    "canonicalEnglish": "Forgery",
    "zhTW": "偽造",
    "source": "Tests p.255; Batch 003 CRAFTING_SKILLS"
  },
  {
    "ancestry": "Orc",
    "contentType": "Choice Option",
    "contextId": "192827b0-ef39-4d5f-840a-b3c654e7b158",
    "field": "Name",
    "canonicalEnglish": "Jewelry",
    "zhTW": "珠寶",
    "source": "Tests p.255; Batch 003 CRAFTING_SKILLS"
  },
  {
    "ancestry": "Orc",
    "contentType": "Choice Option",
    "contextId": "ac718c6f-05e2-4301-997c-b1c54aad9250",
    "field": "Name",
    "canonicalEnglish": "Mechanics",
    "zhTW": "機關",
    "source": "Tests p.255; Batch 003 CRAFTING_SKILLS"
  },
  {
    "ancestry": "Orc",
    "contentType": "Choice Option",
    "contextId": "8b5a4de7-badf-4e23-8ff2-0f7a832ff754",
    "field": "Name",
    "canonicalEnglish": "Tailoring",
    "zhTW": "裁縫",
    "source": "Tests p.255; Batch 003 CRAFTING_SKILLS"
  },
  {
    "ancestry": "Polder",
    "contentType": "Ancestry",
    "contextId": "4f1ecd6c-a675-4d64-b7e5-b544d06c5fd8",
    "field": "Name",
    "canonicalEnglish": "Polder",
    "zhTW": "波德人",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Signature Trait",
    "contextId": "82722346-456c-4bd3-ada9-9bea4b9a0f5c",
    "field": "Name",
    "canonicalEnglish": "Shadowmeld",
    "zhTW": "融影術",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Signature Trait",
    "contextId": "82722346-456c-4bd3-ada9-9bea4b9a0f5c",
    "field": "Rules Text",
    "canonicalEnglish": "You have the following ability.\n\nShadowmeld\nYou become an actual shadow.\nMagic — Maneuver\nSelf — Self\nEffect: You flatten yourself into a shadow against a wall or floor you are touching, and become hidden from any creature you have cover or concealment from or who isn’t observing you. While in shadow form, you have full awareness of your surroundings, and strikes made against you and tests made to search for you take a bane. You can’t move or be force moved, and you can’t take main actions or maneuvers except to exit this form or to direct creatures under your control, such as one you summon using an ability. Any ability or effect that targets more than 1 square affects you in this form only if it explicitly affects the surface you are flattened against. You can exit this form as a maneuver.\n\nIf the surface you are flattened against is destroyed, this ability ends and you take 1d6 damage that can’t be reduced in any way.",
    "zhTW": "你擁有以下招牌招式。\n\n融影術\n你化為一道真正的影子。\n魔法 — 機動動作\n自身 — 自身\n效果：你將自己化為平貼於牆面或地面的影子。此時，若你對 1 個生物具有掩護或遮蔽，或該生物觀察不到你，你就會對他處於隱藏。在影子形態中，你能完全感知周遭的環境，而且對你發動的任何打擊和搜索考驗都會承受 1 個劣勢。你無法移動或被強制移動，也無法執行主要動作和機動動作（除了脫離此形態或指揮受你控制的生物，例如你發動招式召喚的生物）。影響多格的招式或效果，只有在明確影響你所貼附的表面時，你才會受到影響。你可以使用機動動作脫離此形態。\n\n若你所貼附的表面被摧毀，此招式會立刻終止，而且你會受到 1d6 點傷害（無法以任何方式減免）。",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Signature Trait",
    "contextId": "cda8b84d-3c4c-45ad-9317-e2ecbb20bd8a",
    "field": "Name",
    "canonicalEnglish": "Small!",
    "zhTW": "小個子！",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Signature Trait",
    "contextId": "cda8b84d-3c4c-45ad-9317-e2ecbb20bd8a",
    "field": "Rules Text",
    "canonicalEnglish": "Your diminutive stature lets you easily get out of—or into—trouble. Your size is 1S.",
    "zhTW": "你嬌小的身材能讓你更輕易地擺脫（或陷入）麻煩。你的體型為 1S。",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "e347c13c-02bc-4b63-8c6c-b225cd7574a2",
    "field": "Name",
    "canonicalEnglish": "Corruption Immunity",
    "zhTW": "腐朽免疫",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "e347c13c-02bc-4b63-8c6c-b225cd7574a2",
    "field": "Rules Text",
    "canonicalEnglish": "Your innate shadow magic grants you resilience against the unnatural. You have corruption immunity equal to your level + 2.",
    "zhTW": "你與生俱來的暗影魔法能讓你抵抗異常傷害。你擁有等於你等級 +2 的腐朽免疫。",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "43fbab8d-2c6d-400f-a56d-bc40c2348b3e",
    "field": "Name",
    "canonicalEnglish": "Fearless",
    "zhTW": "無所畏懼",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "43fbab8d-2c6d-400f-a56d-bc40c2348b3e",
    "field": "Rules Text",
    "canonicalEnglish": "Courage is all you know. You can’t be made frightened.",
    "zhTW": "你天生勇敢無懼。你不會陷入畏縮狀態。",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "22e632c0-d0f0-47a9-b776-2ff3ac7e17b2",
    "field": "Name",
    "canonicalEnglish": "Graceful Retreat",
    "zhTW": "優雅撤離",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "22e632c0-d0f0-47a9-b776-2ff3ac7e17b2",
    "field": "Rules Text",
    "canonicalEnglish": "Your small size makes it easier for you to slip away from the fray. You gain a +1 bonus to the distance you can shift when you take the Disengage move action.",
    "zhTW": "你矮小的體型能讓你更容易從混戰中溜走。當你執行撤離移動動作時，你的遁移距離 +1。",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "beaef4ac-b563-4956-977d-ff5160da8245",
    "field": "Name",
    "canonicalEnglish": "Nimblestep",
    "zhTW": "輕靈步法",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "beaef4ac-b563-4956-977d-ff5160da8245",
    "field": "Rules Text",
    "canonicalEnglish": "A light step serves you well when speed is of the essence. You ignore the effects of difficult terrain and can move at full speed while sneaking.",
    "zhTW": "輕盈的步伐能在關鍵時刻派上用場。你無視困難地形的影響，並能在潛行時保持全速移動。",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "da1db5b7-be4e-4464-8641-4746ee0ae95d",
    "field": "Name",
    "canonicalEnglish": "Polder Geist",
    "zhTW": "波德精神",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "da1db5b7-be4e-4464-8641-4746ee0ae95d",
    "field": "Rules Text",
    "canonicalEnglish": "Evading others’ notice gives you freedom to move. At the start of each of your turns during combat, if no enemy has line of effect to you or if you are hidden from or have concealment from any enemy with line of effect to you, you gain a +3 bonus to speed until the end of your turn.",
    "zhTW": "避開他人的注意力能讓你的行動更加自由。在戰鬥中，每當你的回合開始時，若沒有任何敵人對你有效果線，或你對任何有效果線的敵人處於隱藏或具有遮蔽，你的速度會 +3，直到你當前回合結束。",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "94759ab2-b2e5-4065-9daf-89e00e7c312c",
    "field": "Name",
    "canonicalEnglish": "Reactive Tumble",
    "zhTW": "緊急翻滾",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Polder",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "94759ab2-b2e5-4065-9daf-89e00e7c312c",
    "field": "Rules Text",
    "canonicalEnglish": "Staying light on your feet lets you quickly get back into position. Whenever you are force moved, you can use a free triggered action to shift 1 square after the forced movement is resolved.",
    "zhTW": "保持輕盈的步伐能讓你快速回到有利位置。每當你被強制移動時，在該次強制移動結算後，你可以使用免費反應動作遁移 1 格。",
    "source": "Heroes 1.01b p.45; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Orc",
    "contentType": "Ancestry Description",
    "contextId": "af712d2e-8943-4757-8f14-7dd4967de0b6",
    "field": "Description",
    "canonicalEnglish": "Orcs have skin in green tones and stand slightly taller and wider than humans. A supernatural energy they call “the blood fire” flows through their veins, igniting colorful lines in an orc’s skin during life-or-death battles.",
    "zhTW": "歐克的膚色呈現各種綠色調，身形比人類略高，也更寬壯。他們的血液中流淌著一種名為「血焰」的超常能量，當歐克面臨存亡之際，這股能量會點亮皮膚上的彩色紋路。",
    "source": "Heroes 1.01b p.21"
  },
  {
    "ancestry": "Polder",
    "contentType": "Ancestry Description",
    "contextId": "4f1ecd6c-a675-4d64-b7e5-b544d06c5fd8",
    "field": "Description",
    "canonicalEnglish": "The smallest of the ancestries in this book, polders stand no taller than 3-1/2 feet. They look like smaller humans, and they have the ability to blend in with the shadows.",
    "zhTW": "波德人是核心規則中體型最小的族裔，身高不超過 3.5 呎。他們看起來像較矮小的人類，並且擁有融入陰影的能力。",
    "source": "Heroes 1.01b p.21"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Ancestry",
    "contextId": "a68bafb1-60b2-4c60-b4f7-58032ef8fdbc",
    "field": "Name",
    "canonicalEnglish": "Revenant",
    "zhTW": "還魂屍",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Signature Trait",
    "contextId": "6349c766-9e76-4107-863a-24fcce1607c9",
    "field": "Name",
    "canonicalEnglish": "Former Life",
    "zhTW": "昔日人生",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Signature Trait",
    "contextId": "6349c766-9e76-4107-863a-24fcce1607c9",
    "field": "Rules Text",
    "canonicalEnglish": "Choose the ancestry you were before you died. Your size is that ancestry’s size and your speed is 5. Unless you select one of the Previous Life traits (see below), you don’t receive any other ancestral traits from your original ancestry.",
    "zhTW": "選擇你死前的族裔。你的體型與原族裔相同，速度為 5。除非你選擇【前世特性】，否則你不會獲得原族裔的任何族裔特性。",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Label",
    "contextId": "revenant.former-life.ancestry",
    "field": "Name",
    "canonicalEnglish": "Former Ancestry",
    "zhTW": "原族裔",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Option",
    "contextId": "84780fe9-1790-43ad-b985-27ec83d6131e",
    "field": "Name",
    "canonicalEnglish": "Devil",
    "zhTW": "魔鬼",
    "source": "Heroes 1.01b p.21; Batch 003 Former Ancestry choice"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Option",
    "contextId": "254848a2-5c86-4a73-9b9d-a87dda64176d",
    "field": "Name",
    "canonicalEnglish": "Dragon Knight",
    "zhTW": "龍騎士",
    "source": "Heroes 1.01b p.21; Batch 003 Former Ancestry choice"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Option",
    "contextId": "a9f3759d-be9f-4c40-b610-e7a656425303",
    "field": "Name",
    "canonicalEnglish": "Dwarf",
    "zhTW": "矮人",
    "source": "Heroes 1.01b p.21; Batch 003 Former Ancestry choice"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Option",
    "contextId": "e15296f9-deb9-48ae-be8a-0a1d37f2222c",
    "field": "Name",
    "canonicalEnglish": "Wode Elf",
    "zhTW": "幻林精靈",
    "source": "Heroes 1.01b p.21; Batch 003 Former Ancestry choice"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Option",
    "contextId": "e3ef91f8-4781-4a95-8a70-c4bc403a1a87",
    "field": "Name",
    "canonicalEnglish": "High Elf",
    "zhTW": "高等精靈",
    "source": "Heroes 1.01b p.21; Batch 003 Former Ancestry choice"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Option",
    "contextId": "07766b37-33b8-41e9-8542-9302d09852b7",
    "field": "Name",
    "canonicalEnglish": "Hakaan",
    "zhTW": "哈肯人",
    "source": "Heroes 1.01b p.21; Batch 003 Former Ancestry choice"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Option",
    "contextId": "6f995f3d-a4e3-456a-9294-ff2c9ec5cb95",
    "field": "Name",
    "canonicalEnglish": "Human",
    "zhTW": "人類",
    "source": "Heroes 1.01b p.21; Batch 003 Former Ancestry choice"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Option",
    "contextId": "f1c7be70-88d7-47e6-ae22-63e205cfed34",
    "field": "Name",
    "canonicalEnglish": "Memonek",
    "zhTW": "梅莫人",
    "source": "Heroes 1.01b p.21; Batch 003 Former Ancestry choice"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Option",
    "contextId": "af712d2e-8943-4757-8f14-7dd4967de0b6",
    "field": "Name",
    "canonicalEnglish": "Orc",
    "zhTW": "歐克",
    "source": "Heroes 1.01b p.21; Batch 003 Former Ancestry choice"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Option",
    "contextId": "4f1ecd6c-a675-4d64-b7e5-b544d06c5fd8",
    "field": "Name",
    "canonicalEnglish": "Polder",
    "zhTW": "波德人",
    "source": "Heroes 1.01b p.21; Batch 003 Former Ancestry choice"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Option",
    "contextId": "7cfb7aa7-aad9-4aeb-8a4c-4c91b84bea63",
    "field": "Name",
    "canonicalEnglish": "Time Raider",
    "zhTW": "時空獵手",
    "source": "Heroes 1.01b p.21; Batch 003 Former Ancestry choice"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Signature Trait",
    "contextId": "f2932630-2019-40e8-b683-f390d0b733c2",
    "field": "Name",
    "canonicalEnglish": "Tough But Withered",
    "zhTW": "枯而不朽",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Signature Trait",
    "contextId": "f2932630-2019-40e8-b683-f390d0b733c2",
    "field": "Rules Text",
    "canonicalEnglish": "Your undead body grants you immunity to cold, corruption, lightning, and poison damage equal to your level, but you have fire weakness 5. You can’t suffocate, and you don’t need to eat or drink to stay alive. Additionally, when your Stamina reaches the negative of your winded value, you become inert instead of dying. You fall prone and can’t stand. You continue to observe your surroundings, but you can’t speak, take main actions, maneuvers, move actions, or triggered actions. While inert this way, if you take any fire damage, your body is destroyed and you die. Otherwise, after 12 hours, you regain Stamina equal to your recovery value.",
    "zhTW": "你的亡靈軀體讓你擁有等於你等級的寒冷、腐朽、閃電和毒素傷害免疫，但你也擁有火焰弱點 5。你不會窒息，也不需要進食或飲水來維持生命。此外，當你的體力降至疲態值的負數時，你會陷入呆滯，而非死亡。你會伏地且無法起身。你能繼續觀察周圍環境，但無法說話，也無法執行主要動作、機動動作、移動動作和反應動作。在這種呆滯狀態下，若你受到任何火焰傷害，你的軀體就會被摧毀，你也會真正死亡。否則，在 12 小時後，你會恢復等於你復元值的體力。",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "77d56b21-f093-4d83-b5f9-64ec9f388ba4",
    "field": "Name",
    "canonicalEnglish": "Bloodless",
    "zhTW": "無血之軀",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "77d56b21-f093-4d83-b5f9-64ec9f388ba4",
    "field": "Rules Text",
    "canonicalEnglish": "For you, an open wound is indistinguishable from a scratch. You can’t be made bleeding even while dying.",
    "zhTW": "對你而言，開放性傷口與輕微擦傷沒有區別。你不會陷入出血狀態（即使瀕死也不會）。",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "project:revenant:previous-life-1",
    "field": "Name",
    "canonicalEnglish": "Previous Life: 1 Point",
    "zhTW": "1 費前世特性",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "project:revenant:previous-life-1",
    "field": "Rules Text",
    "canonicalEnglish": "You select a purchased trait that costs 1 ancestry point from your previous ancestry. You can take this trait multiple times, selecting a different 1 point trait from your previous ancestry each time.",
    "zhTW": "你可以選擇 1 個來自原族裔且耗費 1 點族裔點數的自購特性。你可以多次選擇此特性，但每次都必須選擇不同的 1 費特性。",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Choice Label",
    "contextId": "revenant.previous-life.trait",
    "field": "Name",
    "canonicalEnglish": "Previous Ancestry Trait",
    "zhTW": "原族裔特性",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "project:revenant:previous-life-2",
    "field": "Name",
    "canonicalEnglish": "Previous Life: 2 Points",
    "zhTW": "2 費前世特性",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "project:revenant:previous-life-2",
    "field": "Rules Text",
    "canonicalEnglish": "You select a purchased trait that costs 2 ancestry points from your previous ancestry.",
    "zhTW": "你可以選擇 1 個來自原族裔且耗費 2 點族裔點數的自購特性。",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "31889da3-9a46-45b8-bca2-f676b406dd7c",
    "field": "Name",
    "canonicalEnglish": "Undead Influence",
    "zhTW": "亡靈威儀",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "31889da3-9a46-45b8-bca2-f676b406dd7c",
    "field": "Rules Text",
    "canonicalEnglish": "Your supernatural gifts allow you to influence other undead. You gain an edge on Reason, Intuition, and Presence tests made to interact with undead creatures.",
    "zhTW": "你的超常天賦能讓你影響其他亡靈。當你與亡靈生物互動時，你的理智、直覺和氣場考驗會獲得 1 個優勢。",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "ad2db645-8ab3-4623-8791-5977911d6548",
    "field": "Name",
    "canonicalEnglish": "Vengeance Mark",
    "zhTW": "復仇符印",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "ad2db645-8ab3-4623-8791-5977911d6548",
    "field": "Rules Text",
    "canonicalEnglish": "As a maneuver, you place a magic sigil on a creature within 10 squares. When you place a sigil, you decide where it appears on the creature’s body, and whether the sigil is visible to only you or to all creatures.\n\nYou always know the direction to the exact location of a creature who bears one of your sigils and is on the same world. You can have a number of active sigils equal to your level, and can remove a sigil from a creature at will (no action required). If you already have the maximum number of sigils activated and you place a new one, your oldest sigil disappears with no other effect.\n\nAdditionally, you have the following signature ability. Signature abilities can be used at will.\n\nDetonate Sigil\nA magic sigil you placed on a creature explodes with energy.\nMagic, Ranged, Strike — Main action\nRanged 10 — One creature bearing your sigil\nPower Roll + Reason, Intuition, or Presence:\nTier 1: 3 + R, I, or P damage; slide 1\nTier 2: 5 + R, I, or P damage; slide 2\nTier 3: 7 + R, I, or P damage; slide 3\nEffect: The sigil disappears from the creature.",
    "zhTW": "使用機動動作，你可以在 10 格內的 1 個生物身上放置 1 個魔法符印。放置符印時，你可以決定符印出現在生物身體的哪個位置，以及符印是只有你看得見，還是所有生物都看得見。\n\n你始終知道相同世界中帶有你符印之生物的位置方向。你最多可以擁有數量等於你等級的符印，並且可以隨意解除生物身上的符印（無需動作）。若你在符印數量已滿的情況下放置新的符印，最舊的符印就會消失，不會產生任何效果。\n\n此外，你擁有以下招牌招式。\n\n引爆符印\n你放在生物身上的魔法符印爆散出一股能量。\n魔法、遠程、打擊 — 主要動作\n遠程 10 — 帶有你符印的 1 個生物\n檢定 + 理智 / 直覺 / 氣場：\nT1：3 + 理智 / 直覺 / 氣場傷害；滑動 1\nT2：5 + 理智 / 直覺 / 氣場傷害；滑動 2\nT3：7 + 理智 / 直覺 / 氣場傷害；滑動 3\n效果：生物身上的符印隨即消失。",
    "source": "Heroes 1.01b — Revenant Traits; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Ancestry",
    "contextId": "7cfb7aa7-aad9-4aeb-8a4c-4c91b84bea63",
    "field": "Name",
    "canonicalEnglish": "Time Raider",
    "zhTW": "時空獵手",
    "source": "Heroes 1.01b p.21; src/data/ancestries.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Signature Trait",
    "contextId": "5a02ff7d-f8bc-412e-857c-5bb43f55263f",
    "field": "Name",
    "canonicalEnglish": "Psychic Scar",
    "zhTW": "心靈傷痕",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Signature Trait",
    "contextId": "5a02ff7d-f8bc-412e-857c-5bb43f55263f",
    "field": "Rules Text",
    "canonicalEnglish": "Your mind is a formidable layer of defense. You have psychic immunity equal to your level.",
    "zhTW": "你的心智本身就是一道強大的防護罩。你擁有等於你等級的心靈免疫。",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "592ed6ab-9422-4eef-a75b-c203f48af741",
    "field": "Name",
    "canonicalEnglish": "Beyondsight",
    "zhTW": "透視力",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "592ed6ab-9422-4eef-a75b-c203f48af741",
    "field": "Rules Text",
    "canonicalEnglish": "As a maneuver, you can adjust your vision to allow you to see through mundane obstructions that are 1 square thick or less. While your vision is adjusted this way, you can’t see the area within 1 square of you and you don’t have line of effect to any creature or object in that area. You can restore your usual vision as a maneuver.",
    "zhTW": "你可以使用機動動作調整視覺能力，讓你看穿厚度不超過 1 格的尋常障礙物。在你啟動透視力的期間，你無法看到 1 格內的區域，而且對 1 格內的任何生物或物體都沒有效果線。你可以使用機動動作恢復成正常視覺。",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "b777778f-0913-41ca-b4a4-980f4bbe93e8",
    "field": "Name",
    "canonicalEnglish": "Foresight",
    "zhTW": "預視力",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "b777778f-0913-41ca-b4a4-980f4bbe93e8",
    "field": "Rules Text",
    "canonicalEnglish": "Your senses extend past mundane obscuration and the veil of the future alike. You automatically know the location of any creature with concealment who isn’t hidden from you within 20, and you negate the usual bane on strikes against such creatures. Additionally, whenever you are targeted by a strike, you can use a triggered action to impose a bane on the power roll.",
    "zhTW": "你的感官能夠穿越世俗的阻礙與未來的帷幕。你會自動知道 20 格內任何對你具有遮蔽但並未處於隱藏的生物位置，而且當你對這些生物發動打擊時，你會無視通常需要承受的 1 個劣勢。此外，每當你成為打擊的目標時，你可以使用反應動作，讓該次檢定承受 1 個劣勢。",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "0b19153c-1539-43ac-85dc-917c702a25d6",
    "field": "Name",
    "canonicalEnglish": "Four-Armed Athletics",
    "zhTW": "四臂運動",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (1 pt)",
    "contextId": "0b19153c-1539-43ac-85dc-917c702a25d6",
    "field": "Rules Text",
    "canonicalEnglish": "Your unique physiology enhances your movement. You gain an edge on tests that use the Climb, Gymnastics, or Swim skills when you can use all your arms in the attempt.",
    "zhTW": "你獨特的生理構造增強了你的運動能力。當你使用攀爬、體操或游泳技能進行考驗時，若你能夠運用所有手臂，你會獲得 1 個優勢。",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "685eb626-c484-4077-962b-f0905b117284",
    "field": "Name",
    "canonicalEnglish": "Four-Armed Martial Arts",
    "zhTW": "四臂武術",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "685eb626-c484-4077-962b-f0905b117284",
    "field": "Rules Text",
    "canonicalEnglish": "Your multiple arms let you take on multiple tasks at the same time. Whenever you use the Grab or Knockback maneuver against an adjacent creature, you can target one additional adjacent creature, using the same power roll for both targets. Additionally, you can have up to two creatures grabbed at a time.",
    "zhTW": "你的多隻手臂能讓你同時對付多個目標。每當你對 1 個相鄰生物使用擒抱或擊退機動動作時，你可以指定另 1 個相鄰生物作為額外目標，然後對這 2 個目標進行 1 次檢定。此外，你最多可以同時擒抱 2 個生物。",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "9b0d5f31-19d7-4ccd-8fcb-639530dae51c",
    "field": "Name",
    "canonicalEnglish": "Psionic Gift",
    "zhTW": "靈能天賦",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "9b0d5f31-19d7-4ccd-8fcb-639530dae51c",
    "field": "Rules Text",
    "canonicalEnglish": "Choose one signature ability from the following options. Signature abilities can be used at will.",
    "zhTW": "從以下選項中選擇 1 個招牌招式。",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Choice Label",
    "contextId": "time-raider.psionic-gift.ability",
    "field": "Name",
    "canonicalEnglish": "Psionic Gift Ability",
    "zhTW": "靈能天賦招式",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Choice Option",
    "contextId": "357a3fae-97d4-4d99-b94a-744da6bf66e6",
    "field": "Name",
    "canonicalEnglish": "Concussive Slam",
    "zhTW": "猛力衝擊",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Choice Option",
    "contextId": "357a3fae-97d4-4d99-b94a-744da6bf66e6",
    "field": "Rules Text",
    "canonicalEnglish": "You slam an invisible force down upon the target.\nPsionic, Ranged, Strike — Main action\nRanged 10 — One creature or object\nPower Roll + Reason, Intuition, or Presence:\nTier 1: 2 + R, I, or P damage\nTier 2: 5 + R, I, or P damage; push 1\nTier 3: 7 + R, I, or P damage; push 2; M < strong, prone",
    "zhTW": "你將一股無形的力量猛烈砸向目標。\n靈能、遠程、打擊 — 主要動作\n遠程 10 — 1 個生物或物體\n檢定 + 理智 / 直覺 / 氣場：\nT1：2 + 理智 / 直覺 / 氣場傷害\nT2：5 + 理智 / 直覺 / 氣場傷害；推動 1\nT3：7 + 理智 / 直覺 / 氣場傷害；推動 2；力量 < 強，伏地",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Choice Option",
    "contextId": "3626e093-0f4c-4500-9487-14de2c6e4339",
    "field": "Name",
    "canonicalEnglish": "Psionic Bolt",
    "zhTW": "靈能射線",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Choice Option",
    "contextId": "3626e093-0f4c-4500-9487-14de2c6e4339",
    "field": "Rules Text",
    "canonicalEnglish": "You shoot forth a purple beam of psychic force that moves your target.\nPsionic, Ranged, Strike — Main action\nRanged 10 — One creature or object\nPower Roll + Reason, Intuition, or Presence:\nTier 1: 2 + R, I, or P psychic damage; slide 1\nTier 2: 5 + R, I, or P psychic damage; slide 2\nTier 3: 7 + R, I, or P psychic damage; slide 3",
    "zhTW": "你射出一道能強制移動目標的紫色靈能光束。\n靈能、遠程、打擊 — 主要動作\n遠程 10 — 1 個生物或物體\n檢定 + 理智 / 直覺 / 氣場：\nT1：2 + 理智 / 直覺 / 氣場心靈傷害；滑動 1\nT2：5 + 理智 / 直覺 / 氣場心靈傷害；滑動 2\nT3：7 + 理智 / 直覺 / 氣場心靈傷害；滑動 3",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Choice Option",
    "contextId": "15cfb703-0c81-4d5a-a809-2425dad21d1e",
    "field": "Name",
    "canonicalEnglish": "Minor Acceleration",
    "zhTW": "微幅加速",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Choice Option",
    "contextId": "15cfb703-0c81-4d5a-a809-2425dad21d1e",
    "field": "Rules Text",
    "canonicalEnglish": "You fill yourself or an ally with a burst of speed.\nPsionic, Melee — Maneuver\nMelee 1 — Self or one ally\nEffect: The target gains a bonus to speed equal to your Reason, Intuition, or Presence score (your choice) until the start of your next turn.",
    "zhTW": "你讓自己或盟友瞬間爆發出更快的速度。\n靈能、近戰 — 機動動作\n近戰 1 — 自身或 1 個盟友\n效果：目標的速度獲得等於你理智、直覺或氣場的加值（由你選擇），直到你下個回合開始。",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "6b208810-289a-43fe-8276-32bcab8f2b16",
    "field": "Name",
    "canonicalEnglish": "Unstoppable Mind",
    "zhTW": "頑強心智",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Purchased Trait (2 pt)",
    "contextId": "6b208810-289a-43fe-8276-32bcab8f2b16",
    "field": "Rules Text",
    "canonicalEnglish": "Your mind allows you to maintain your focus in any situation. You can’t be made dazed.",
    "zhTW": "你的心智能讓你在任何情況下保持專注。你不會陷入暈眩狀態。",
    "source": "Heroes 1.01b p.50; Batch 003 ancestryRules.ts"
  },
  {
    "ancestry": "Revenant",
    "contentType": "Ancestry Description",
    "contextId": "a68bafb1-60b2-4c60-b4f7-58032ef8fdbc",
    "field": "Description",
    "canonicalEnglish": "No hero starts their life as a revenant. Rather, these undead creatures return to the world of the living because they have dire business that must be finished. A character of any ancestry can become a revenant.",
    "zhTW": "沒有英雄生來就是還魂屍。這些亡靈之所以重返活人的世界，是因為還有非完成不可的要事。任何族裔都能成為還魂屍。",
    "source": "Heroes 1.01b p.21"
  },
  {
    "ancestry": "Time Raider",
    "contentType": "Ancestry Description",
    "contextId": "7cfb7aa7-aad9-4aeb-8a4c-4c91b84bea63",
    "field": "Description",
    "canonicalEnglish": "Travelers of the timescape, the time raiders (or kuran’zoi as they call themselves) have four arms and a single ocular sensor instead of a pair of eyes. Many have innate psionic abilities that make them capable warriors.",
    "zhTW": "時空獵手是時界中的旅人，他們自稱庫蘭佐伊，擁有四隻手臂，並以光學感應器取代眼睛。許多時空獵手天生具有靈能力，讓他們成為強悍的戰士。",
    "source": "Heroes 1.01b p.21"
  }
] as const satisfies readonly AncestryLocalizationEntry[]

export function getAncestryLocalizationKey({
  ancestry,
  contentType,
  contextId,
  field,
}: AncestryLocalizationIdentity): string {
  return JSON.stringify([ancestry, contentType, contextId, field])
}

const ancestryLocalizationByKey = new Map(
  ANCESTRY_ZH_TW_LOCALIZATIONS.map((entry) => [getAncestryLocalizationKey(entry), entry]),
)

export function getAncestryZhTWLocalization(
  identity: AncestryLocalizationIdentity,
): AncestryLocalizationEntry | undefined {
  return ancestryLocalizationByKey.get(getAncestryLocalizationKey(identity))
}
