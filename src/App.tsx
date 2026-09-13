import { useState } from 'react'
import { AncestryBuilder } from './AncestryBuilder'
import {
  CharacterCreationShell,
  type CharacterCreationStep,
  type CharacterCreationStepId,
  type CharacterCreationStepStatus,
} from './CharacterCreationShell'

const CHARACTER_CREATION_STEPS = [
  {
    id: 'ancestry',
    canonicalName: 'Ancestry',
    displayName: '族裔',
    availability: 'available',
  },
  { id: 'culture', canonicalName: 'Culture', availability: 'unavailable' },
  { id: 'career', canonicalName: 'Career', availability: 'unavailable' },
  { id: 'class', canonicalName: 'Class', availability: 'unavailable' },
  { id: 'kit', canonicalName: 'Kit', availability: 'unavailable' },
  { id: 'complication', canonicalName: 'Complication', availability: 'unavailable' },
] as const satisfies readonly Omit<CharacterCreationStep, 'status'>[]

type StepStatusReport = Readonly<{
  status: CharacterCreationStepStatus
  message: string
}>

export function App() {
  const [activeStepId, setActiveStepId] = useState<CharacterCreationStepId>('ancestry')
  const [ancestryStatus, setAncestryStatus] = useState<StepStatusReport>({
    status: 'incomplete',
    message: '請先選擇族裔。',
  })
  const steps: readonly CharacterCreationStep[] = CHARACTER_CREATION_STEPS.map((step) => ({
    ...step,
    status: step.id === 'ancestry' ? ancestryStatus.status : 'incomplete',
  }))

  return (
    <CharacterCreationShell
      activeStepId={activeStepId}
      activeStepStatusMessage={ancestryStatus.message}
      steps={steps}
      onStepChange={setActiveStepId}
    >
      {activeStepId === 'ancestry' ? (
        <AncestryBuilder onStatusChange={setAncestryStatus} />
      ) : null}
    </CharacterCreationShell>
  )
}
