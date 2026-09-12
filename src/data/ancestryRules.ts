import { ANCESTRIES, ANCESTRY_SOURCE, type AncestryIdentity } from './ancestries'

export const ANCESTRY_RULES_SOURCE = {
  ruleset: 'Draw Steel Heroes 1.01b',
  document: 'Official Rules/1_DS_Ancestries.pdf',
  sections: [
    'Devil Traits',
    'Dragon Knight Traits',
    'Dwarf Traits',
    'Wode Elf Traits',
    'High Elf Traits',
    'Hakaan Traits',
    'Human Traits',
    'Memonek Traits',
    'Orc Traits',
    'Polder Traits',
    'Revenant Traits',
    'Time Raider Traits',
  ],
  supportingSkillGroups: {
    document: 'Official Rules/9_DS_Tests_Combat_Negotiation.pdf',
    sections: ['Crafting Skills', 'Interpersonal Skills'],
  },
  structuredData: ANCESTRY_SOURCE,
  resolvedDiscrepancies: [
    {
      item: 'Orc — Passionate Artisan',
      resolution:
        'Heroes 1.01b permits choosing two crafting skills whether or not the hero has those skills, so upstream skill-proficiency prerequisites are not retained.',
    },
    {
      item: 'Time Raider — Concussive Slam and Psionic Bolt',
      resolution:
        'Heroes 1.01b tier damage values of 2/5/7 are retained instead of the pinned upstream records’ older 2/3/5 values.',
    },
  ],
} as const

export type TraitSourceIdentity =
  | Readonly<{
      kind: 'draw-steel-data'
      guid: string
    }>
  | Readonly<{
      kind: 'project'
      reason: string
    }>

export type AncestryChoiceOption = Readonly<{
  id: string
  canonicalName: string
  sourceGuid?: string
  rulesText?: string
}>

export type EnumeratedAncestryChoice = Readonly<{
  kind: 'enumerated'
  id: string
  canonicalName: string
  optionKind: 'ability' | 'ancestry' | 'damage-type' | 'skill'
  category?: 'crafting' | 'interpersonal'
  count: number
  options: readonly AncestryChoiceOption[]
}>

export type InheritedTraitChoice = Readonly<{
  kind: 'purchased-trait'
  id: string
  canonicalName: string
  count: 1
  traitCost: 1 | 2
}>

export type AncestryTraitChoice = EnumeratedAncestryChoice | InheritedTraitChoice

export type AncestryTrait = Readonly<{
  id: string
  sourceIdentity: TraitSourceIdentity
  canonicalName: string
  rulesText: string
  cost?: number
  repeatable?: boolean
  choices?: readonly AncestryTraitChoice[]
}>

export type AncestryPointBudget = Readonly<{
  base: number
  formerAncestrySize1S?: number
}>

export type AncestryCreationModel = Readonly<{
  identity: AncestryIdentity
  sourceSection: (typeof ANCESTRY_RULES_SOURCE.sections)[number]
  pointBudget: AncestryPointBudget
  signatureTraits: readonly AncestryTrait[]
  purchasedTraits: readonly AncestryTrait[]
}>

const upstream = (guid: string): TraitSourceIdentity => ({
  kind: 'draw-steel-data',
  guid,
})

const projectOwned = (reason: string): TraitSourceIdentity => ({
  kind: 'project',
  reason,
})

const DAMAGE_TYPES = [
  { id: 'acid', canonicalName: 'Acid' },
  { id: 'cold', canonicalName: 'Cold' },
  { id: 'corruption', canonicalName: 'Corruption' },
  { id: 'fire', canonicalName: 'Fire' },
  { id: 'lightning', canonicalName: 'Lightning' },
  { id: 'poison', canonicalName: 'Poison' },
] as const satisfies readonly AncestryChoiceOption[]

const INTERPERSONAL_SKILLS = [
  { id: 'd533510d-0f1f-4ce3-a48c-cc21acadb6c6', canonicalName: 'Brag' },
  { id: '47a38ee9-41ad-4173-a010-adf9e185e221', canonicalName: 'Empathize' },
  { id: '9f41a684-4b8c-4026-8175-df136fc5134f', canonicalName: 'Flirt' },
  { id: '81442e8b-10cb-41f5-8aa9-110a2256b663', canonicalName: 'Gamble' },
  { id: 'ff54a691-e0a0-4246-8ceb-7975b8826e92', canonicalName: 'Handle Animals' },
  { id: '4290580d-9e08-4bd2-859c-7ac147f108aa', canonicalName: 'Interrogate' },
  { id: 'cb214a42-7f8c-4d02-b6ac-1399724a8b5f', canonicalName: 'Intimidate' },
  { id: '27995005-8a25-435d-9f50-351c9d08a7b4', canonicalName: 'Lead' },
  { id: '4f4b7168-8702-469d-b001-65d250fd4082', canonicalName: 'Lie' },
  { id: 'd188b959-e993-4239-a350-5e7ad69d27b6', canonicalName: 'Music' },
  { id: 'bd66a379-6ea9-4ecc-ad82-c9a2b82750d4', canonicalName: 'Perform' },
  { id: '28573ee3-e9df-47fe-98f1-2ac0bfee797a', canonicalName: 'Persuade' },
  { id: '30a30090-3699-48f1-b252-ce7d0445abee', canonicalName: 'Read Person' },
] as const satisfies readonly AncestryChoiceOption[]

const CRAFTING_SKILLS = [
  { id: 'cdae52cd-ef20-461d-ae18-253023cdb827', canonicalName: 'Alchemy' },
  { id: '078b501f-e549-4725-993f-7ed8d57fc2ae', canonicalName: 'Architecture' },
  { id: '50ca6145-2d22-4496-a355-c7b2df2cf0de', canonicalName: 'Blacksmithing' },
  { id: '436ea6c1-6386-43b2-b074-020992cc73fd', canonicalName: 'Carpentry' },
  { id: 'becbc5ec-de63-481b-8247-e62c2a6fd8cb', canonicalName: 'Cooking' },
  { id: '5ca5c242-fe6d-43b3-86b0-b5314a9fe39a', canonicalName: 'Fletching' },
  { id: '75d64fef-b075-4221-8cbc-c6b6328ee22c', canonicalName: 'Forgery' },
  { id: '192827b0-ef39-4d5f-840a-b3c654e7b158', canonicalName: 'Jewelry' },
  { id: 'ac718c6f-05e2-4301-997c-b1c54aad9250', canonicalName: 'Mechanics' },
  { id: '8b5a4de7-badf-4e23-8ff2-0f7a832ff754', canonicalName: 'Tailoring' },
] as const satisfies readonly AncestryChoiceOption[]

const FORMER_ANCESTRIES = ANCESTRIES.filter(
  ({ canonicalName }) => canonicalName !== 'Revenant',
).map(({ id, canonicalName }) => ({ id, canonicalName }))

const devil: AncestryCreationModel = {
  identity: ANCESTRIES[0],
  sourceSection: 'Devil Traits',
  pointBudget: { base: 3 },
  signatureTraits: [
    {
      id: 'c951f948-9c75-4785-83fe-0a432aa26867',
      sourceIdentity: upstream('c951f948-9c75-4785-83fe-0a432aa26867'),
      canonicalName: 'Silver Tongue',
      rulesText:
        'Your innate magic allows you to twist how your words are perceived to get a better read on people and convince them to see things your way. You have one skill of your choice from the interpersonal skill group (see Skills in Chapter 9: Tests), and you gain an edge on tests when attempting to discover an NPC’s motivations and pitfalls during a negotiation (see Chapter 11: Negotiation).',
      choices: [
        {
          kind: 'enumerated',
          id: 'devil.silver-tongue.skill',
          canonicalName: 'Interpersonal Skill',
          optionKind: 'skill',
          category: 'interpersonal',
          count: 1,
          options: INTERPERSONAL_SKILLS,
        },
      ],
    },
  ],
  purchasedTraits: [
    {
      id: '6a78bbd7-f7be-4f29-b639-e1595c758137',
      sourceIdentity: upstream('6a78bbd7-f7be-4f29-b639-e1595c758137'),
      canonicalName: 'Barbed Tail',
      cost: 1,
      rulesText:
        'Your pointy tail allows you to punctuate all your actions. Once per round when you make a melee strike, you can deal extra damage with the strike equal to your highest characteristic score.',
    },
    {
      id: 'b20b793c-2ab0-40c3-813d-a71d3f07555e',
      sourceIdentity: upstream('b20b793c-2ab0-40c3-813d-a71d3f07555e'),
      canonicalName: 'Beast Legs',
      cost: 1,
      rulesText: 'Your powerful legs make you faster. You have speed 6.',
    },
    {
      id: '5e49d00d-545f-4470-b5c5-a768b274e3e0',
      sourceIdentity: upstream('5e49d00d-545f-4470-b5c5-a768b274e3e0'),
      canonicalName: 'Glowing Eyes',
      cost: 1,
      rulesText:
        'Your eyes are a solid, vibrant color that flares to show your excitement or rage. Whenever you take damage from a creature, you can use a triggered action to deal that creature psychic damage equal to 1d10 + your level.',
    },
    {
      id: '6e83aee9-bf9c-43ee-8d8d-d59842a42a33',
      sourceIdentity: upstream('6e83aee9-bf9c-43ee-8d8d-d59842a42a33'),
      canonicalName: 'Hellsight',
      cost: 1,
      rulesText:
        'Your eyes let you see through darkness, fog, and other obscuring effects. You don’t take a bane on strikes made against creatures with concealment.',
    },
    {
      id: '1490ae69-5d46-415e-bbb7-38106f05752d',
      sourceIdentity: upstream('1490ae69-5d46-415e-bbb7-38106f05752d'),
      canonicalName: 'Impressive Horns',
      cost: 2,
      rulesText:
        'Your cherished horns are larger than the average devil’s, and a hardened representation of your force of will. Whenever you make a saving throw, you succeed on a roll of 5 or higher.',
    },
    {
      id: '19658dae-3771-48d3-9d06-0ed017eb06f9',
      sourceIdentity: upstream('19658dae-3771-48d3-9d06-0ed017eb06f9'),
      canonicalName: 'Prehensile Tail',
      cost: 2,
      rulesText: 'Your prehensile tail allows you to challenge foes on all sides. You can’t be flanked.',
    },
    {
      id: 'a91d6cb8-96c2-4ec1-be98-51e691ff5b70',
      sourceIdentity: upstream('a91d6cb8-96c2-4ec1-be98-51e691ff5b70'),
      canonicalName: 'Wings',
      cost: 2,
      rulesText:
        'You possess wings powerful enough to take you airborne. While using your wings to fly, you can stay aloft for a number of rounds equal to your Might score (minimum 1 round) before you fall. While using your wings to fly at 3rd level or lower, you have damage weakness 5.',
    },
  ],
}

const dragonKnight: AncestryCreationModel = {
  identity: ANCESTRIES[1],
  sourceSection: 'Dragon Knight Traits',
  pointBudget: { base: 3 },
  signatureTraits: [
    {
      id: 'cbe77035-1c50-42c6-ad6b-9ce5754d4895',
      sourceIdentity: upstream('cbe77035-1c50-42c6-ad6b-9ce5754d4895'),
      canonicalName: 'Wyrmplate',
      rulesText:
        'Your hardened scales grant you damage immunity equal to your level to one of the following damage types: acid, cold, corruption, fire, lightning, or poison. You can change your damage immunity type when you finish a respite.',
      choices: [
        {
          kind: 'enumerated',
          id: 'dragon-knight.wyrmplate.damage-type',
          canonicalName: 'Wyrmplate Damage Immunity',
          optionKind: 'damage-type',
          count: 1,
          options: [
            { ...DAMAGE_TYPES[0], sourceGuid: '305732c5-976c-48ba-92b3-254fe71cc362' },
            { ...DAMAGE_TYPES[1], sourceGuid: '411a1412-fb4f-4c51-bad1-dcff5e046bd6' },
            { ...DAMAGE_TYPES[2], sourceGuid: 'cdd015ed-2d9a-423b-953a-c0c7255e4545' },
            { ...DAMAGE_TYPES[3], sourceGuid: 'efb897ff-9c79-4aab-9e40-fc8321b9dc85' },
            { ...DAMAGE_TYPES[4], sourceGuid: 'aa2c9300-1f35-42b9-9a88-972853a165f7' },
            { ...DAMAGE_TYPES[5], sourceGuid: '9aed58fd-cf05-4fa0-8a89-8bd6347364ee' },
          ],
        },
      ],
    },
  ],
  purchasedTraits: [
    {
      id: 'e1e98137-88d1-4451-9c43-4fd9ef6577a9',
      sourceIdentity: upstream('e1e98137-88d1-4451-9c43-4fd9ef6577a9'),
      canonicalName: 'Draconian Guard',
      cost: 1,
      rulesText:
        'Whenever you or an adjacent creature takes damage from a strike, you can use a triggered action to guard against the blow. You reduce any damage from the strike by an amount equal to your level.',
    },
    {
      id: '0d630fd6-0b3c-4c91-8954-ee7a7526086d',
      sourceIdentity: upstream('0d630fd6-0b3c-4c91-8954-ee7a7526086d'),
      canonicalName: 'Draconian Pride',
      cost: 2,
      rulesText: `You have the following signature ability.

Draconian Pride
You let loose a mighty roar to shake your foes’ spirits.
Area, Magic — Main action
1 burst — Each enemy in the area
Power Roll + Might or Presence:
Tier 1: 2 damage
Tier 2: 5 damage; push 1
Tier 3: 7 damage; push 2`,
    },
    {
      id: '1ba77d3b-3f14-4151-b6e7-8dde7ceca1f1',
      sourceIdentity: upstream('1ba77d3b-3f14-4151-b6e7-8dde7ceca1f1'),
      canonicalName: 'Dragon Breath',
      cost: 2,
      rulesText: `You have the following signature ability.

Dragon Breath
A furious exhalation of energy washes over your foes.
Area, Magic — Main action
3 cube within 1 — Each enemy in the area
Power Roll + Might or Presence:
Tier 1: 2 damage
Tier 2: 4 damage
Tier 3: 6 damage
Effect: You choose the ability’s damage type from acid, cold, corruption, fire, lightning, or poison.`,
    },
    {
      id: '31055912-7079-40e3-ab53-cd5f70757660',
      sourceIdentity: upstream('31055912-7079-40e3-ab53-cd5f70757660'),
      canonicalName: 'Prismatic Scales',
      cost: 1,
      rulesText:
        'Select one damage immunity granted by your Wyrmplate trait. You always have this immunity, in addition to the immunity granted by Wyrmplate.',
      choices: [
        {
          kind: 'enumerated',
          id: 'dragon-knight.prismatic-scales.damage-type',
          canonicalName: 'Permanent Damage Immunity',
          optionKind: 'damage-type',
          count: 1,
          options: [
            { ...DAMAGE_TYPES[0], sourceGuid: 'b5159028-d113-421c-86ec-b9ad1d9eeea8' },
            { ...DAMAGE_TYPES[1], sourceGuid: 'bfe6ff3b-7cba-41f8-9da2-32b105c24747' },
            { ...DAMAGE_TYPES[2], sourceGuid: 'a5cd5a99-ff84-4512-8976-33f8d1a4336d' },
            { ...DAMAGE_TYPES[3], sourceGuid: '024231ba-8429-4aec-a271-aa1de1cd5ee6' },
            { ...DAMAGE_TYPES[4], sourceGuid: 'c961c6b8-2afa-4156-92dd-2da350e86394' },
            { ...DAMAGE_TYPES[5], sourceGuid: 'c8827185-e811-4537-ae09-261bf02667e4' },
          ],
        },
      ],
    },
    {
      id: '7c7b4988-41ca-414a-9f3a-e9f8118a8132',
      sourceIdentity: upstream('7c7b4988-41ca-414a-9f3a-e9f8118a8132'),
      canonicalName: 'Remember Your Oath',
      cost: 1,
      rulesText: `As a maneuver, you can recite the following oath. Until the start of your next turn, whenever you make a saving throw, you succeed on a 4 or higher.

Even should the sun stop in the sky
Even should the night last a thousand years
I will stand forever
I shall not yield
Those who suffer and yearn for justice
I am your sword and shield
I will yield no ground
I will speak no lies
I will stand against all tyrants
Until the last villain dies`,
    },
    {
      id: 'e5f3a1e3-0d9b-4957-85de-85103c8a81a5',
      sourceIdentity: upstream('e5f3a1e3-0d9b-4957-85de-85103c8a81a5'),
      canonicalName: 'Wings',
      cost: 2,
      rulesText:
        'You possess wings powerful enough to take you airborne. While using your wings to fly, you can stay aloft for a number of rounds equal to your Might score (minimum 1 round) before you fall. While using your wings to fly at 3rd level or lower, you have damage weakness 5.',
    },
  ],
}

const dwarf: AncestryCreationModel = {
  identity: ANCESTRIES[2],
  sourceSection: 'Dwarf Traits',
  pointBudget: { base: 3 },
  signatureTraits: [
    {
      id: 'd3d44019-2554-4749-8e47-5303045e5e88',
      sourceIdentity: upstream('d3d44019-2554-4749-8e47-5303045e5e88'),
      canonicalName: 'Runic Carving',
      rulesText: `You can carve a rune onto your skin with 10 uninterrupted minutes of work, which is activated by the magic within your body. The rune you carve determines the benefit you receive, chosen from among the following:

Detection: Pick a specific type of creature (such as goblins or humans) or object (such as gems or potions). Your rune glows softly when you are within 20 squares of any creature or object of that type, even if you don’t have line of effect to the creature or object. You can change the type of creature or object as a maneuver.

Light: Your skin sheds light for 10 squares. You can turn this light on and off as a maneuver.

Voice: As a maneuver, you can communicate telepathically with a willing creature you have met before and who is within 1 mile of you. You must know the creature’s name, and they must speak and understand a language you know. You and the creature can respond to one another as if having a spoken conversation. You can communicate with a different creature by changing the rune.

You can have one rune active at a time, and can change or remove a rune with 10 uninterrupted minutes of work.`,
    },
  ],
  purchasedTraits: [
    {
      id: 'fc751172-55f6-42fd-98a6-28de77d0ac1e',
      sourceIdentity: upstream('fc751172-55f6-42fd-98a6-28de77d0ac1e'),
      canonicalName: 'Great Fortitude',
      cost: 2,
      rulesText: 'Your hearty constitution prevents you from losing strength. You can’t be made weakened.',
    },
    {
      id: 'a552ca4f-5df4-4681-8d49-ddefadd2b8a4',
      sourceIdentity: upstream('a552ca4f-5df4-4681-8d49-ddefadd2b8a4'),
      canonicalName: 'Grounded',
      cost: 1,
      rulesText:
        'Your heavy stone body and connection to the earth make it difficult for others to move you. You have a +1 bonus to stability.',
    },
    {
      id: 'ddbd121c-fec7-4d6b-aba6-407a3a7df6cf',
      sourceIdentity: upstream('ddbd121c-fec7-4d6b-aba6-407a3a7df6cf'),
      canonicalName: 'Spark Off Your Skin',
      cost: 2,
      rulesText:
        'Your stone skin affords you potent protection. You have a +6 bonus to Stamina, and that bonus increases by 6 at 4th, 7th, and 10th levels.',
    },
    {
      id: '36a27c9b-d09a-4b76-b64d-21170c0728a0',
      sourceIdentity: upstream('36a27c9b-d09a-4b76-b64d-21170c0728a0'),
      canonicalName: 'Stand Tough',
      cost: 1,
      rulesText:
        'Your body is made to withstand the blows of your enemies. Your Might score is treated as 1 higher for the purpose of resisting potencies, and you gain an edge on Might tests when called for to resist environmental effects or a creature’s traits or abilities.',
    },
    {
      id: 'd64a58af-4d76-49fd-95b8-6e0242c3f7c2',
      sourceIdentity: upstream('d64a58af-4d76-49fd-95b8-6e0242c3f7c2'),
      canonicalName: 'Stone Singer',
      cost: 1,
      rulesText:
        'You have a magic connection to the earth. When you spend 1 uninterrupted hour singing, you can reshape any unworked mundane stone within 3 squares. You can’t destroy this stone, but you can move each square of it anywhere within 3 squares, piling it off to one side to dig a hole or building it up to create a wall.',
    },
  ],
}

const wodeElf: AncestryCreationModel = {
  identity: ANCESTRIES[3],
  sourceSection: 'Wode Elf Traits',
  pointBudget: { base: 3 },
  signatureTraits: [
    {
      id: '0bffccfe-db01-4afc-97f5-29521026cbe1',
      sourceIdentity: upstream('0bffccfe-db01-4afc-97f5-29521026cbe1'),
      canonicalName: 'Wode Elf Glamor',
      rulesText:
        'You can magically alter your appearance to better blend in with your surroundings. You gain an edge on tests made to hide and sneak, and tests made to search for you while you are hidden take a bane.',
    },
  ],
  purchasedTraits: [
    {
      id: 'f4930dba-0bc0-41ba-8960-0019e8435f2d',
      sourceIdentity: upstream('f4930dba-0bc0-41ba-8960-0019e8435f2d'),
      canonicalName: 'Forest Walk',
      cost: 1,
      rulesText: 'You can shift into and while within difficult terrain.',
    },
    {
      id: '0e0af5a5-58dd-4a7f-9a11-9e4cafe9ab41',
      sourceIdentity: upstream('0e0af5a5-58dd-4a7f-9a11-9e4cafe9ab41'),
      canonicalName: 'Quick and Brutal',
      cost: 1,
      rulesText:
        'Whenever you score a critical hit, you can take an additional main action and an additional move action instead of just a main action.',
    },
    {
      id: '14d80a96-0aac-4322-aa0b-a6ff575fb9d4',
      sourceIdentity: upstream('14d80a96-0aac-4322-aa0b-a6ff575fb9d4'),
      canonicalName: 'Otherworldly Grace',
      cost: 2,
      rulesText:
        'Your elf body and mind can’t be contained for long. Whenever you make a saving throw, you succeed on a roll of 5 or higher.',
    },
    {
      id: '82b5be82-d442-4fd7-a16f-765c8659f729',
      sourceIdentity: upstream('82b5be82-d442-4fd7-a16f-765c8659f729'),
      canonicalName: 'Revisit Memory',
      cost: 1,
      rulesText: 'Accessing memories is as easy as living in the present for you. You gain an edge on tests made to recall lore.',
    },
    {
      id: 'c99de9a3-ac0e-4f77-9d9b-cec57478943d',
      sourceIdentity: upstream('c99de9a3-ac0e-4f77-9d9b-cec57478943d'),
      canonicalName: 'Swift',
      cost: 1,
      rulesText: 'You have speed 6.',
    },
    {
      id: '6e3cf3a4-8628-4220-bff2-2ff2b9c1487f',
      sourceIdentity: upstream('6e3cf3a4-8628-4220-bff2-2ff2b9c1487f'),
      canonicalName: 'The Wode Defends',
      cost: 2,
      rulesText: `You have the following signature ability. Signature abilities can be used at will.

The Wode Defends
Thorny vines erupt from every surface and attempt to bind your foe.
Magic, Ranged, Strike — Main action
Ranged 10 — One creature
Power Roll + Might or Agility:
Tier 1: 2 + M or A damage; A < weak, slowed (save ends)
Tier 2: 3 + M or A damage; A < average, slowed (save ends)
Tier 3: 5 + M or A damage; A < strong, restrained (save ends)`,
    },
  ],
}

const highElf: AncestryCreationModel = {
  identity: ANCESTRIES[4],
  sourceSection: 'High Elf Traits',
  pointBudget: { base: 3 },
  signatureTraits: [
    {
      id: '96632785-910c-4370-9ae9-0a9a34318140',
      sourceIdentity: upstream('96632785-910c-4370-9ae9-0a9a34318140'),
      canonicalName: 'High Elf Glamor',
      rulesText:
        'A magic glamor makes others perceive you as interesting and engaging, granting you an edge on Presence tests using the Flirt or Persuade skills. This glamor makes you appear and sound slightly different to each creature you meet, since what is engaging to one might be different for another. However, you never appear to be anyone other than yourself.',
    },
  ],
  purchasedTraits: [
    {
      id: '5ebaaca0-4ed6-47db-a923-c6945f9af1d9',
      sourceIdentity: upstream('5ebaaca0-4ed6-47db-a923-c6945f9af1d9'),
      canonicalName: 'Glamor of Terror',
      cost: 2,
      rulesText:
        'When a foe strikes, you reverse the magic of your glamor to instill fear into their heart. Whenever you take damage from a creature, you can use a triggered action to make that creature frightened of you until the end of their next turn.',
    },
    {
      id: 'ef9bd176-59cc-4955-a233-a772f93fcbff',
      sourceIdentity: upstream('ef9bd176-59cc-4955-a233-a772f93fcbff'),
      canonicalName: 'Graceful Retreat',
      cost: 1,
      rulesText: 'You gain a +1 bonus to the distance you can shift when you take the Disengage move action.',
    },
    {
      id: 'a266e810-6b61-40ee-bf0b-337d946aea0f',
      sourceIdentity: upstream('a266e810-6b61-40ee-bf0b-337d946aea0f'),
      canonicalName: 'High Senses',
      cost: 1,
      rulesText: 'Your senses are especially keen and perceptive. You gain an edge on tests made to notice threats.',
    },
    {
      id: 'eb9f71ba-ffae-4065-b90c-0bbdff48d2b0',
      sourceIdentity: upstream('eb9f71ba-ffae-4065-b90c-0bbdff48d2b0'),
      canonicalName: 'Otherworldly Grace',
      cost: 2,
      rulesText:
        'Your elf body and mind can’t be contained for long. Whenever you make a saving throw, you succeed on a roll of 5 or higher.',
    },
    {
      id: '01cfcdfb-5ae1-463f-8787-dbdbf4b59628',
      sourceIdentity: upstream('01cfcdfb-5ae1-463f-8787-dbdbf4b59628'),
      canonicalName: 'Revisit Memory',
      cost: 1,
      rulesText: 'Accessing memories is as easy as living in the present for you. You gain an edge on tests made to recall lore.',
    },
    {
      id: '2e7d1a15-2a76-4328-9969-5ed1680effba',
      sourceIdentity: upstream('2e7d1a15-2a76-4328-9969-5ed1680effba'),
      canonicalName: 'Unstoppable Mind',
      cost: 2,
      rulesText: 'Your mind allows you to maintain your focus in any situation. You can’t be made dazed.',
    },
  ],
}

const hakaan: AncestryCreationModel = {
  identity: ANCESTRIES[5],
  sourceSection: 'Hakaan Traits',
  pointBudget: { base: 3 },
  signatureTraits: [
    {
      id: '2b8f53b1-3944-4134-9d8b-2dbeda593cb9',
      sourceIdentity: upstream('2b8f53b1-3944-4134-9d8b-2dbeda593cb9'),
      canonicalName: 'Big!',
      rulesText: 'Your stature reflects your giant forebears. Your size is 1L.',
    },
  ],
  purchasedTraits: [
    {
      id: '4c21e020-9ec9-4800-b140-e48922208656',
      sourceIdentity: upstream('4c21e020-9ec9-4800-b140-e48922208656'),
      canonicalName: 'All Is a Feather',
      cost: 1,
      rulesText: 'You are exceptionally strong. You gain an edge on tests made to lift and haul heavy objects.',
    },
    {
      id: 'f3bd4d0a-62b4-4ae4-bc72-d6be0c59d00d',
      sourceIdentity: upstream('f3bd4d0a-62b4-4ae4-bc72-d6be0c59d00d'),
      canonicalName: 'Doomsight',
      cost: 2,
      rulesText:
        'Working with your Director, you can predetermine an encounter in which you will die. When that encounter begins, you become doomed. While doomed, you automatically obtain a tier 3 outcome on tests and ability rolls, and you don’t die no matter how low your Stamina falls. You then die immediately at the end of the encounter, and can’t be returned to life by any means. If you don’t predetermine your death encounter, you can choose to become doomed while you are dying with the Director’s approval (no action required). Doing so should be reserved for encounters in which you are dying as a result of suitable heroism, such as making a last stand against a boss or saving civilians, or when the consequences of your actions have finally caught up to you—not because you’re playing a one-shot and have nothing to lose, Hacaarl. Additionally, when your Stamina reaches the negative of your winded value and you are not doomed, you turn to rubble instead of experiencing death. You are unaware of your surroundings in this state, and you can’t regain Stamina or have this effect undone in any way. After 12 hours, you regain Stamina equal to your recovery value.',
    },
    {
      id: 'cffc88ed-1647-4bcd-bcbf-e38b7c5ea508',
      sourceIdentity: upstream('cffc88ed-1647-4bcd-bcbf-e38b7c5ea508'),
      canonicalName: 'Forceful',
      cost: 1,
      rulesText: 'Whenever you force move a creature or object, the forced movement distance gains a +1 bonus.',
    },
    {
      id: 'a07d3f8b-c589-4e2e-8bc5-a37be82042eb',
      sourceIdentity: upstream('a07d3f8b-c589-4e2e-8bc5-a37be82042eb'),
      canonicalName: 'Great Fortitude',
      cost: 2,
      rulesText: 'Your hearty constitution prevents you from losing strength. You can’t be made weakened.',
    },
    {
      id: '5b8c916d-1437-4e72-8772-4af4ef0c81cc',
      sourceIdentity: upstream('5b8c916d-1437-4e72-8772-4af4ef0c81cc'),
      canonicalName: 'Stand Tough',
      cost: 1,
      rulesText:
        'Your body is made to withstand the blows of your enemies. Your Might score is treated as 1 higher for the purpose of resisting potencies, and you gain an edge on Might tests when called for to resist environmental effects or a creature’s traits or abilities.',
    },
  ],
}

const human: AncestryCreationModel = {
  identity: ANCESTRIES[6],
  sourceSection: 'Human Traits',
  pointBudget: { base: 3 },
  signatureTraits: [
    {
      id: '75d8f226-1848-4e98-b245-31d350c644d4',
      sourceIdentity: upstream('75d8f226-1848-4e98-b245-31d350c644d4'),
      canonicalName: 'Detect the Supernatural',
      rulesText:
        'As a maneuver, you can open your awareness to detect supernatural creatures and phenomena. Until the end of your next turn, you know the location of any supernatural object, or any undead, construct, or creature from another world within 5 squares, even if you don’t have line of effect to that object or creature. You know if you’re detecting an item or a creature, and you know the nature of any creature you detect.',
    },
  ],
  purchasedTraits: [
    {
      id: '4081942d-fdb3-4975-9096-8bfa0c268832',
      sourceIdentity: upstream('4081942d-fdb3-4975-9096-8bfa0c268832'),
      canonicalName: 'Can’t Take Hold',
      cost: 1,
      rulesText:
        'Your connection to the natural world allows you to resist certain supernatural effects. You ignore temporary difficult terrain created by magic and psionic abilities. Additionally, when you are force moved by a magic or psionic ability, you can reduce the forced movement distance by 1.',
    },
    {
      id: '55c871ba-9b2b-4c8d-b1bf-cc12fe62af0e',
      sourceIdentity: upstream('55c871ba-9b2b-4c8d-b1bf-cc12fe62af0e'),
      canonicalName: 'Determination',
      cost: 2,
      rulesText:
        'A tolerance for pain and distress allows you to push through difficult situations. If you are frightened, slowed, or weakened, you can use a maneuver to immediately end one of those conditions.',
    },
    {
      id: '7d540696-a16f-4852-8e36-c7c7339cf42d',
      sourceIdentity: upstream('7d540696-a16f-4852-8e36-c7c7339cf42d'),
      canonicalName: 'Perseverance',
      cost: 1,
      rulesText:
        'Giving up is for other people. You gain an edge on tests made using the Endurance skill. Additionally, when you are slowed, your speed is reduced to 3 instead of 2.',
    },
    {
      id: '7a066651-7e14-4d7e-8c00-23f2488bd7a5',
      sourceIdentity: upstream('7a066651-7e14-4d7e-8c00-23f2488bd7a5'),
      canonicalName: 'Resist the Unnatural',
      cost: 1,
      rulesText:
        'Your instinctive resilience protects you from injuries beyond the routine. Whenever you take damage that isn’t untyped, you can use a triggered action to take half the damage.',
    },
    {
      id: '471a9430-3713-41fd-938f-79ac4c6ceba9',
      sourceIdentity: upstream('471a9430-3713-41fd-938f-79ac4c6ceba9'),
      canonicalName: 'Staying Power',
      cost: 2,
      rulesText: 'Your human physiology allows you to fight, run, and stay awake longer than others. You increase your number of Recoveries by 2.',
    },
  ],
}

const memonek: AncestryCreationModel = {
  identity: ANCESTRIES[7],
  sourceSection: 'Memonek Traits',
  pointBudget: { base: 4 },
  signatureTraits: [
    {
      id: '49d08628-cc53-4fdb-a4b0-d8cf04bc4890',
      sourceIdentity: upstream('49d08628-cc53-4fdb-a4b0-d8cf04bc4890'),
      canonicalName: 'Fall Lightly',
      rulesText: 'Your silicone body is low in density. Whenever you fall, you reduce the distance of the fall by 2 squares.',
    },
    {
      id: '2e0bcc99-99e5-436b-8305-271484cd6bf1',
      sourceIdentity: upstream('2e0bcc99-99e5-436b-8305-271484cd6bf1'),
      canonicalName: 'Lightweight',
      rulesText:
        'Your body is light for a creature of your height. Whenever another creature attempts to force move you, you treat your size as one size smaller than it is.',
    },
  ],
  purchasedTraits: [
    {
      id: 'fdc92619-4c4f-45cc-a897-0b2002cc41f6',
      sourceIdentity: upstream('fdc92619-4c4f-45cc-a897-0b2002cc41f6'),
      canonicalName: 'I Am Law',
      cost: 1,
      rulesText:
        'Your lawful nature and quick reflexes mean you give no quarter to creatures trying to get past you. Enemies can’t move through your space unless you allow them to do so.',
    },
    {
      id: 'abe8e829-a2bf-4ebd-ab98-628f413d9eca',
      sourceIdentity: upstream('abe8e829-a2bf-4ebd-ab98-628f413d9eca'),
      canonicalName: 'Keeper of Order',
      cost: 2,
      rulesText:
        'Your connection to Axiom, the plane of Uttermost Law, allows you to manage chaos around you. Once per round when you or an adjacent creature makes a power roll, you can use a free triggered action to remove an edge or a bane on the roll, to turn a double edge into an edge, or to turn a double bane into a bane.',
    },
    {
      id: '1ba41227-3b34-4271-9008-e3492c7eeb1a',
      sourceIdentity: upstream('1ba41227-3b34-4271-9008-e3492c7eeb1a'),
      canonicalName: 'Lightning Nimbleness',
      cost: 2,
      rulesText: 'You can push your body to move at incredible speeds. Your speed is 7.',
    },
    {
      id: '2dd85e83-5a02-40f2-a2e1-260820203108',
      sourceIdentity: upstream('2dd85e83-5a02-40f2-a2e1-260820203108'),
      canonicalName: 'Nonstop',
      cost: 2,
      rulesText: 'Your connection to Axiom allows you to regulate your movement. You can’t be made slowed.',
    },
    {
      id: '6d34b63b-98a6-4b9e-a385-75e5070c4a3d',
      sourceIdentity: upstream('6d34b63b-98a6-4b9e-a385-75e5070c4a3d'),
      canonicalName: 'Systematic Mind',
      cost: 1,
      rulesText:
        'You gain an edge on tests made to parse schematics, maps, and other systematic documents that aren’t inherently chaotic. In addition, you treat any language you don’t know as if you know a related language.',
    },
    {
      id: '119daf46-2425-40be-a6dd-ee2255806072',
      sourceIdentity: upstream('119daf46-2425-40be-a6dd-ee2255806072'),
      canonicalName: 'Unphased',
      cost: 1,
      rulesText: 'Your ordered mind can’t be caught off guard. You can’t be made surprised.',
    },
    {
      id: '68ef24d5-b2b8-46a0-bace-3e69b80e88d6',
      sourceIdentity: upstream('68ef24d5-b2b8-46a0-bace-3e69b80e88d6'),
      canonicalName: 'Useful Emotion',
      cost: 1,
      rulesText:
        'Velloparatha—the worldsickness—might hinder you, but you know how to turn your pain into something your enemies feel. At the start of any combat, you gain 1 surge.',
    },
  ],
}

const orc: AncestryCreationModel = {
  identity: ANCESTRIES[8],
  sourceSection: 'Orc Traits',
  pointBudget: { base: 3 },
  signatureTraits: [
    {
      id: '20f806e2-e84f-4130-85ed-b6f0c952a36f',
      sourceIdentity: upstream('20f806e2-e84f-4130-85ed-b6f0c952a36f'),
      canonicalName: 'Relentless',
      rulesText:
        'Whenever a creature deals damage to you that leaves you dying, you can make a free strike against any creature. If the creature is reduced to 0 Stamina by your strike, you can spend a Recovery.',
    },
  ],
  purchasedTraits: [
    {
      id: '49d5b7ac-4b1e-4af3-9ea1-ed4e57850629',
      sourceIdentity: upstream('49d5b7ac-4b1e-4af3-9ea1-ed4e57850629'),
      canonicalName: 'Bloodfire Rush',
      cost: 1,
      rulesText:
        'The magic coursing through your veins makes you run faster in the heat of battle. The first time in any combat round that you take damage, you gain a +2 bonus to speed until the end of the round.',
    },
    {
      id: '44c35813-1a78-46b8-8c99-65e24e2a4e79',
      sourceIdentity: upstream('44c35813-1a78-46b8-8c99-65e24e2a4e79'),
      canonicalName: 'Glowing Recovery',
      cost: 2,
      rulesText:
        'Your bloodfire allows you to regain your strength quicker than others. Whenever you use the Catch Breath maneuver, you can spend as many Recoveries as you like.',
    },
    {
      id: '0912b943-1522-4c36-aa18-106be6d2b975',
      sourceIdentity: upstream('0912b943-1522-4c36-aa18-106be6d2b975'),
      canonicalName: 'Grounded',
      cost: 1,
      rulesText: 'The magic in your blood makes it difficult for others to move you. You have a +1 bonus to stability.',
    },
    {
      id: '99fc8bf6-b7d2-4f13-a3e4-a26883bd739c',
      sourceIdentity: upstream('99fc8bf6-b7d2-4f13-a3e4-a26883bd739c'),
      canonicalName: 'Nonstop',
      cost: 2,
      rulesText: 'Your bloodfire supplies you with a constant rush of adrenaline. You can’t be made slowed.',
    },
    {
      id: '0db89994-954b-4475-a335-95b639594bd7',
      sourceIdentity: upstream('0db89994-954b-4475-a335-95b639594bd7'),
      canonicalName: 'Passionate Artisan',
      cost: 1,
      rulesText:
        'When you are stirred by a passion for creation, your bloodfire allows you to work longer and harder. When you gain your initial skills from your career, culture, class, or other source, choose two skills from the crafting skill group, whether you have those skills or not. Whenever you make a project roll for a crafting project that uses these skills, you gain a +2 bonus to the roll.',
      choices: [
        {
          kind: 'enumerated',
          id: 'orc.passionate-artisan.skills',
          canonicalName: 'Crafting Skills',
          optionKind: 'skill',
          category: 'crafting',
          count: 2,
          options: CRAFTING_SKILLS,
        },
      ],
    },
  ],
}

const polder: AncestryCreationModel = {
  identity: ANCESTRIES[9],
  sourceSection: 'Polder Traits',
  pointBudget: { base: 4 },
  signatureTraits: [
    {
      id: '82722346-456c-4bd3-ada9-9bea4b9a0f5c',
      sourceIdentity: upstream('82722346-456c-4bd3-ada9-9bea4b9a0f5c'),
      canonicalName: 'Shadowmeld',
      rulesText: `You have the following ability.

Shadowmeld
You become an actual shadow.
Magic — Maneuver
Self — Self
Effect: You flatten yourself into a shadow against a wall or floor you are touching, and become hidden from any creature you have cover or concealment from or who isn’t observing you. While in shadow form, you have full awareness of your surroundings, and strikes made against you and tests made to search for you take a bane. You can’t move or be force moved, and you can’t take main actions or maneuvers except to exit this form or to direct creatures under your control, such as one you summon using an ability. Any ability or effect that targets more than 1 square affects you in this form only if it explicitly affects the surface you are flattened against. You can exit this form as a maneuver.

If the surface you are flattened against is destroyed, this ability ends and you take 1d6 damage that can’t be reduced in any way.`,
    },
    {
      id: 'cda8b84d-3c4c-45ad-9317-e2ecbb20bd8a',
      sourceIdentity: upstream('cda8b84d-3c4c-45ad-9317-e2ecbb20bd8a'),
      canonicalName: 'Small!',
      rulesText: 'Your diminutive stature lets you easily get out of—or into—trouble. Your size is 1S.',
    },
  ],
  purchasedTraits: [
    {
      id: 'e347c13c-02bc-4b63-8c6c-b225cd7574a2',
      sourceIdentity: upstream('e347c13c-02bc-4b63-8c6c-b225cd7574a2'),
      canonicalName: 'Corruption Immunity',
      cost: 1,
      rulesText: 'Your innate shadow magic grants you resilience against the unnatural. You have corruption immunity equal to your level + 2.',
    },
    {
      id: '43fbab8d-2c6d-400f-a56d-bc40c2348b3e',
      sourceIdentity: upstream('43fbab8d-2c6d-400f-a56d-bc40c2348b3e'),
      canonicalName: 'Fearless',
      cost: 2,
      rulesText: 'Courage is all you know. You can’t be made frightened.',
    },
    {
      id: '22e632c0-d0f0-47a9-b776-2ff3ac7e17b2',
      sourceIdentity: upstream('22e632c0-d0f0-47a9-b776-2ff3ac7e17b2'),
      canonicalName: 'Graceful Retreat',
      cost: 1,
      rulesText:
        'Your small size makes it easier for you to slip away from the fray. You gain a +1 bonus to the distance you can shift when you take the Disengage move action.',
    },
    {
      id: 'beaef4ac-b563-4956-977d-ff5160da8245',
      sourceIdentity: upstream('beaef4ac-b563-4956-977d-ff5160da8245'),
      canonicalName: 'Nimblestep',
      cost: 2,
      rulesText: 'A light step serves you well when speed is of the essence. You ignore the effects of difficult terrain and can move at full speed while sneaking.',
    },
    {
      id: 'da1db5b7-be4e-4464-8641-4746ee0ae95d',
      sourceIdentity: upstream('da1db5b7-be4e-4464-8641-4746ee0ae95d'),
      canonicalName: 'Polder Geist',
      cost: 1,
      rulesText:
        'Evading others’ notice gives you freedom to move. At the start of each of your turns during combat, if no enemy has line of effect to you or if you are hidden from or have concealment from any enemy with line of effect to you, you gain a +3 bonus to speed until the end of your turn.',
    },
    {
      id: '94759ab2-b2e5-4065-9daf-89e00e7c312c',
      sourceIdentity: upstream('94759ab2-b2e5-4065-9daf-89e00e7c312c'),
      canonicalName: 'Reactive Tumble',
      cost: 1,
      rulesText:
        'Staying light on your feet lets you quickly get back into position. Whenever you are force moved, you can use a free triggered action to shift 1 square after the forced movement is resolved.',
    },
  ],
}

const revenant: AncestryCreationModel = {
  identity: ANCESTRIES[10],
  sourceSection: 'Revenant Traits',
  pointBudget: { base: 2, formerAncestrySize1S: 3 },
  signatureTraits: [
    {
      id: '6349c766-9e76-4107-863a-24fcce1607c9',
      sourceIdentity: upstream('6349c766-9e76-4107-863a-24fcce1607c9'),
      canonicalName: 'Former Life',
      rulesText:
        'Choose the ancestry you were before you died. Your size is that ancestry’s size and your speed is 5. Unless you select one of the Previous Life traits (see below), you don’t receive any other ancestral traits from your original ancestry.',
      choices: [
        {
          kind: 'enumerated',
          id: 'revenant.former-life.ancestry',
          canonicalName: 'Former Ancestry',
          optionKind: 'ancestry',
          count: 1,
          options: FORMER_ANCESTRIES,
        },
      ],
    },
    {
      id: 'f2932630-2019-40e8-b683-f390d0b733c2',
      sourceIdentity: upstream('f2932630-2019-40e8-b683-f390d0b733c2'),
      canonicalName: 'Tough But Withered',
      rulesText:
        'Your undead body grants you immunity to cold, corruption, lightning, and poison damage equal to your level, but you have fire weakness 5. You can’t suffocate, and you don’t need to eat or drink to stay alive. Additionally, when your Stamina reaches the negative of your winded value, you become inert instead of dying. You fall prone and can’t stand. You continue to observe your surroundings, but you can’t speak, take main actions, maneuvers, move actions, or triggered actions. While inert this way, if you take any fire damage, your body is destroyed and you die. Otherwise, after 12 hours, you regain Stamina equal to your recovery value.',
    },
  ],
  purchasedTraits: [
    {
      id: '77d56b21-f093-4d83-b5f9-64ec9f388ba4',
      sourceIdentity: upstream('77d56b21-f093-4d83-b5f9-64ec9f388ba4'),
      canonicalName: 'Bloodless',
      cost: 2,
      rulesText: 'For you, an open wound is indistinguishable from a scratch. You can’t be made bleeding even while dying.',
    },
    {
      id: 'project:revenant:previous-life-1',
      sourceIdentity: projectOwned(
        'Heroes 1.01b defines Previous Life: 1 Point, but the pinned revenant record implements inheritance without a standalone trait GUID.',
      ),
      canonicalName: 'Previous Life: 1 Point',
      cost: 1,
      repeatable: true,
      rulesText:
        'You select a purchased trait that costs 1 ancestry point from your previous ancestry. You can take this trait multiple times, selecting a different 1 point trait from your previous ancestry each time.',
      choices: [
        {
          kind: 'purchased-trait',
          id: 'revenant.previous-life.trait',
          canonicalName: 'Previous Ancestry Trait',
          count: 1,
          traitCost: 1,
        },
      ],
    },
    {
      id: 'project:revenant:previous-life-2',
      sourceIdentity: projectOwned(
        'Heroes 1.01b defines Previous Life: 2 Points, but the pinned revenant record implements inheritance without a standalone trait GUID.',
      ),
      canonicalName: 'Previous Life: 2 Points',
      cost: 2,
      rulesText: 'You select a purchased trait that costs 2 ancestry points from your previous ancestry.',
      choices: [
        {
          kind: 'purchased-trait',
          id: 'revenant.previous-life.trait',
          canonicalName: 'Previous Ancestry Trait',
          count: 1,
          traitCost: 2,
        },
      ],
    },
    {
      id: '31889da3-9a46-45b8-bca2-f676b406dd7c',
      sourceIdentity: upstream('31889da3-9a46-45b8-bca2-f676b406dd7c'),
      canonicalName: 'Undead Influence',
      cost: 1,
      rulesText:
        'Your supernatural gifts allow you to influence other undead. You gain an edge on Reason, Intuition, and Presence tests made to interact with undead creatures.',
    },
    {
      id: 'ad2db645-8ab3-4623-8791-5977911d6548',
      sourceIdentity: upstream('ad2db645-8ab3-4623-8791-5977911d6548'),
      canonicalName: 'Vengeance Mark',
      cost: 2,
      rulesText: `As a maneuver, you place a magic sigil on a creature within 10 squares. When you place a sigil, you decide where it appears on the creature’s body, and whether the sigil is visible to only you or to all creatures.

You always know the direction to the exact location of a creature who bears one of your sigils and is on the same world. You can have a number of active sigils equal to your level, and can remove a sigil from a creature at will (no action required). If you already have the maximum number of sigils activated and you place a new one, your oldest sigil disappears with no other effect.

Additionally, you have the following signature ability. Signature abilities can be used at will.

Detonate Sigil
A magic sigil you placed on a creature explodes with energy.
Magic, Ranged, Strike — Main action
Ranged 10 — One creature bearing your sigil
Power Roll + Reason, Intuition, or Presence:
Tier 1: 3 + R, I, or P damage; slide 1
Tier 2: 5 + R, I, or P damage; slide 2
Tier 3: 7 + R, I, or P damage; slide 3
Effect: The sigil disappears from the creature.`,
    },
  ],
}

const timeRaider: AncestryCreationModel = {
  identity: ANCESTRIES[11],
  sourceSection: 'Time Raider Traits',
  pointBudget: { base: 3 },
  signatureTraits: [
    {
      id: '5a02ff7d-f8bc-412e-857c-5bb43f55263f',
      sourceIdentity: upstream('5a02ff7d-f8bc-412e-857c-5bb43f55263f'),
      canonicalName: 'Psychic Scar',
      rulesText: 'Your mind is a formidable layer of defense. You have psychic immunity equal to your level.',
    },
  ],
  purchasedTraits: [
    {
      id: '592ed6ab-9422-4eef-a75b-c203f48af741',
      sourceIdentity: upstream('592ed6ab-9422-4eef-a75b-c203f48af741'),
      canonicalName: 'Beyondsight',
      cost: 1,
      rulesText:
        'As a maneuver, you can adjust your vision to allow you to see through mundane obstructions that are 1 square thick or less. While your vision is adjusted this way, you can’t see the area within 1 square of you and you don’t have line of effect to any creature or object in that area. You can restore your usual vision as a maneuver.',
    },
    {
      id: 'b777778f-0913-41ca-b4a4-980f4bbe93e8',
      sourceIdentity: upstream('b777778f-0913-41ca-b4a4-980f4bbe93e8'),
      canonicalName: 'Foresight',
      cost: 1,
      rulesText:
        'Your senses extend past mundane obscuration and the veil of the future alike. You automatically know the location of any creature with concealment who isn’t hidden from you within 20, and you negate the usual bane on strikes against such creatures. Additionally, whenever you are targeted by a strike, you can use a triggered action to impose a bane on the power roll.',
    },
    {
      id: '0b19153c-1539-43ac-85dc-917c702a25d6',
      sourceIdentity: upstream('0b19153c-1539-43ac-85dc-917c702a25d6'),
      canonicalName: 'Four-Armed Athletics',
      cost: 1,
      rulesText:
        'Your unique physiology enhances your movement. You gain an edge on tests that use the Climb, Gymnastics, or Swim skills when you can use all your arms in the attempt.',
    },
    {
      id: '685eb626-c484-4077-962b-f0905b117284',
      sourceIdentity: upstream('685eb626-c484-4077-962b-f0905b117284'),
      canonicalName: 'Four-Armed Martial Arts',
      cost: 2,
      rulesText:
        'Your multiple arms let you take on multiple tasks at the same time. Whenever you use the Grab or Knockback maneuver against an adjacent creature, you can target one additional adjacent creature, using the same power roll for both targets. Additionally, you can have up to two creatures grabbed at a time.',
    },
    {
      id: '9b0d5f31-19d7-4ccd-8fcb-639530dae51c',
      sourceIdentity: upstream('9b0d5f31-19d7-4ccd-8fcb-639530dae51c'),
      canonicalName: 'Psionic Gift',
      cost: 2,
      rulesText: 'Choose one signature ability from the following options. Signature abilities can be used at will.',
      choices: [
        {
          kind: 'enumerated',
          id: 'time-raider.psionic-gift.ability',
          canonicalName: 'Psionic Gift Ability',
          optionKind: 'ability',
          count: 1,
          options: [
            {
              id: '357a3fae-97d4-4d99-b94a-744da6bf66e6',
              sourceGuid: '357a3fae-97d4-4d99-b94a-744da6bf66e6',
              canonicalName: 'Concussive Slam',
              rulesText: `You slam an invisible force down upon the target.
Psionic, Ranged, Strike — Main action
Ranged 10 — One creature or object
Power Roll + Reason, Intuition, or Presence:
Tier 1: 2 + R, I, or P damage
Tier 2: 5 + R, I, or P damage; push 1
Tier 3: 7 + R, I, or P damage; push 2; M < strong, prone`,
            },
            {
              id: '3626e093-0f4c-4500-9487-14de2c6e4339',
              sourceGuid: '3626e093-0f4c-4500-9487-14de2c6e4339',
              canonicalName: 'Psionic Bolt',
              rulesText: `You shoot forth a purple beam of psychic force that moves your target.
Psionic, Ranged, Strike — Main action
Ranged 10 — One creature or object
Power Roll + Reason, Intuition, or Presence:
Tier 1: 2 + R, I, or P psychic damage; slide 1
Tier 2: 5 + R, I, or P psychic damage; slide 2
Tier 3: 7 + R, I, or P psychic damage; slide 3`,
            },
            {
              id: '15cfb703-0c81-4d5a-a809-2425dad21d1e',
              sourceGuid: '15cfb703-0c81-4d5a-a809-2425dad21d1e',
              canonicalName: 'Minor Acceleration',
              rulesText: `You fill yourself or an ally with a burst of speed.
Psionic, Melee — Maneuver
Melee 1 — Self or one ally
Effect: The target gains a bonus to speed equal to your Reason, Intuition, or Presence score (your choice) until the start of your next turn.`,
            },
          ],
        },
      ],
    },
    {
      id: '6b208810-289a-43fe-8276-32bcab8f2b16',
      sourceIdentity: upstream('6b208810-289a-43fe-8276-32bcab8f2b16'),
      canonicalName: 'Unstoppable Mind',
      cost: 2,
      rulesText: 'Your mind allows you to maintain your focus in any situation. You can’t be made dazed.',
    },
  ],
}

export const ANCESTRY_CREATION_MODELS = [
  devil,
  dragonKnight,
  dwarf,
  wodeElf,
  highElf,
  hakaan,
  human,
  memonek,
  orc,
  polder,
  revenant,
  timeRaider,
] as const satisfies readonly AncestryCreationModel[]

export function getAncestryCreationModel(ancestryId: string): AncestryCreationModel | undefined {
  return ANCESTRY_CREATION_MODELS.find(({ identity }) => identity.id === ancestryId)
}
