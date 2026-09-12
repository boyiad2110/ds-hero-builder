export const ANCESTRY_SOURCE = {
  repository: 'VerisimLLC/draw-steel-data',
  commit: '27af7cad76820642befde994fa344ba21275b7c1',
} as const

export type AncestryIdentity = Readonly<{
  id: string
  canonicalName: string
  sourcePath: `objectTables/races/${string}.yaml`
}>

export const ANCESTRIES = [
  {
    id: '84780fe9-1790-43ad-b985-27ec83d6131e',
    canonicalName: 'Devil',
    sourcePath: 'objectTables/races/devil.yaml',
  },
  {
    id: '254848a2-5c86-4a73-9b9d-a87dda64176d',
    canonicalName: 'Dragon Knight',
    sourcePath: 'objectTables/races/dragon-knight.yaml',
  },
  {
    id: 'a9f3759d-be9f-4c40-b610-e7a656425303',
    canonicalName: 'Dwarf',
    sourcePath: 'objectTables/races/dwarf.yaml',
  },
  {
    id: 'e15296f9-deb9-48ae-be8a-0a1d37f2222c',
    canonicalName: 'Elf, Wode',
    sourcePath: 'objectTables/races/elf-wode.yaml',
  },
  {
    id: 'e3ef91f8-4781-4a95-8a70-c4bc403a1a87',
    canonicalName: 'Elf, High',
    sourcePath: 'objectTables/races/elf-high.yaml',
  },
  {
    id: '07766b37-33b8-41e9-8542-9302d09852b7',
    canonicalName: 'Hakaan',
    sourcePath: 'objectTables/races/hakaan.yaml',
  },
  {
    id: '6f995f3d-a4e3-456a-9294-ff2c9ec5cb95',
    canonicalName: 'Human',
    sourcePath: 'objectTables/races/human.yaml',
  },
  {
    id: 'f1c7be70-88d7-47e6-ae22-63e205cfed34',
    canonicalName: 'Memonek',
    sourcePath: 'objectTables/races/memonek.yaml',
  },
  {
    id: 'af712d2e-8943-4757-8f14-7dd4967de0b6',
    canonicalName: 'Orc',
    sourcePath: 'objectTables/races/orc.yaml',
  },
  {
    id: '4f1ecd6c-a675-4d64-b7e5-b544d06c5fd8',
    canonicalName: 'Polder',
    sourcePath: 'objectTables/races/polder.yaml',
  },
  {
    id: 'a68bafb1-60b2-4c60-b4f7-58032ef8fdbc',
    canonicalName: 'Revenant',
    sourcePath: 'objectTables/races/revenant.yaml',
  },
  {
    id: '7cfb7aa7-aad9-4aeb-8a4c-4c91b84bea63',
    canonicalName: 'Time Raider',
    sourcePath: 'objectTables/races/time-raider.yaml',
  },
] as const satisfies readonly AncestryIdentity[]
