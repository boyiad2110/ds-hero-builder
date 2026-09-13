import type { ReactNode } from 'react'

export type CharacterCreationStepId =
  | 'ancestry'
  | 'culture'
  | 'career'
  | 'class'
  | 'kit'
  | 'complication'

export type CharacterCreationStepStatus = 'incomplete' | 'complete' | 'invalid'

export type CharacterCreationStep = Readonly<{
  id: CharacterCreationStepId
  canonicalName: string
  displayName?: string
  availability: 'available' | 'unavailable'
  status: CharacterCreationStepStatus
}>

type CharacterCreationShellProps = Readonly<{
  activeStepId: CharacterCreationStepId
  activeStepStatusMessage: string
  children: ReactNode
  onStepChange: (stepId: CharacterCreationStepId) => void
  steps: readonly CharacterCreationStep[]
}>

const STATUS_LABELS: Record<CharacterCreationStepStatus, string> = {
  incomplete: '未完成',
  complete: '已完成',
  invalid: '需要修正',
}

export function CharacterCreationShell({
  activeStepId,
  activeStepStatusMessage,
  children,
  onStepChange,
  steps,
}: CharacterCreationShellProps) {
  const activeStep = steps.find(({ id }) => id === activeStepId)

  if (!activeStep || activeStep.availability !== 'available') {
    throw new Error(`Active character-creation step is unavailable: ${activeStepId}`)
  }

  const completedStepCount = steps.filter(
    ({ availability, status }) => availability === 'available' && status === 'complete',
  ).length

  return (
    <>
      <a className="skip-link" href="#current-creation-step">
        跳至目前創角步驟
      </a>
      <header className="site-header">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 28 32" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M14 2 25 8v14l-11 8L3 22V8Z M14 2v28 M3 8l22 14 M25 8 3 22" />
            </svg>
          </span>
          <div>
            <p className="eyebrow">Draw Steel 1 級創角工具</p>
            <h1 translate="no">DS Hero Builder</h1>
          </div>
        </div>
        <div
          className="creation-progress"
          role="group"
          aria-label={`創角進度 ${completedStepCount} / ${steps.length}`}
        >
          <span>創角進度</span>
          <strong>
            {completedStepCount} / {steps.length}
          </strong>
          <div className="progress-segments" aria-hidden="true">
            {steps.map((step) => (
              <span
                key={step.id}
                className={
                  step.availability === 'available' && step.status === 'complete'
                    ? 'filled'
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </header>

      <div className="creation-shell">
        <nav className="step-navigation" aria-labelledby="creation-steps-title">
          <div className="step-navigation-heading">
            <p className="eyebrow">Character Creation</p>
            <h2 id="creation-steps-title">創角步驟</h2>
          </div>
          <ol className="step-list">
            {steps.map((step, index) => {
              const isAvailable = step.availability === 'available'
              const isCurrent = step.id === activeStepId

              return (
                <li key={step.id}>
                  <button
                    className={`step-button ${isCurrent ? 'current' : ''}`}
                    type="button"
                    disabled={!isAvailable}
                    aria-current={isCurrent ? 'step' : undefined}
                    onClick={() => onStepChange(step.id)}
                  >
                    <span className="step-index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="step-name">
                      {step.displayName ? <span>{step.displayName}</span> : null}
                      <span lang="en" translate="no">
                        {step.canonicalName}
                      </span>
                    </span>
                    <span
                      className={`step-state ${isAvailable ? step.status : 'unavailable'}`}
                    >
                      {isAvailable ? STATUS_LABELS[step.status] : '尚未開放'}
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </nav>

        <main className="current-step" id="current-creation-step" tabIndex={-1}>
          <header className="current-step-header">
            <div>
              <h2>
                {activeStep.displayName ? <span>{activeStep.displayName}</span> : null}
                <small lang="en" translate="no">
                  {activeStep.canonicalName}
                </small>
              </h2>
            </div>
            <div
              className={`step-status ${activeStep.status}`}
              role="status"
              aria-live="polite"
            >
              <span>{STATUS_LABELS[activeStep.status]}</span>
              <small>{activeStepStatusMessage}</small>
            </div>
          </header>
          {children}
        </main>
      </div>
    </>
  )
}
