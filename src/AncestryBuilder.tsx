import { useMemo, useState } from 'react'
import {
  ANCESTRY_CREATION_MODELS,
  getAncestryCreationModel,
  type AncestryCreationModel,
  type AncestryTrait,
  type EnumeratedAncestryChoice,
  type InheritedTraitChoice,
} from './data/ancestryRules'
import {
  ANCESTRY_ZH_TW_LOCALIZATIONS,
  type AncestryLocalizationAncestry,
  type AncestryLocalizationField,
} from './data/ancestryLocalization'
import {
  evaluateAncestrySelection,
  type AncestrySelectionState,
  type AncestryTraitSelection,
  type ChoiceSelections,
} from './domain/ancestryCreation'

const FORMER_ANCESTRY_CHOICE_ID = 'revenant.former-life.ancestry'

function getLocalizationAncestry(model: AncestryCreationModel): AncestryLocalizationAncestry {
  const entry = ANCESTRY_ZH_TW_LOCALIZATIONS.find(
    ({ contentType, contextId, field }) =>
      contentType === 'Ancestry' && contextId === model.identity.id && field === 'Name',
  )

  if (!entry) {
    throw new Error(`Missing ancestry localization for ${model.identity.id}`)
  }

  return entry.ancestry
}

function localize(
  ancestry: AncestryLocalizationAncestry,
  contextId: string,
  field: AncestryLocalizationField,
  fallback: string,
): string {
  return (
    ANCESTRY_ZH_TW_LOCALIZATIONS.find(
      (entry) =>
        entry.ancestry === ancestry && entry.contextId === contextId && entry.field === field,
    )?.zhTW ?? fallback
  )
}

function getFormerAncestryModel(state: AncestrySelectionState): AncestryCreationModel | undefined {
  const formerAncestryId = state.signatureChoices?.[FORMER_ANCESTRY_CHOICE_ID]?.[0]
  return formerAncestryId ? getAncestryCreationModel(formerAncestryId) : undefined
}

function getInheritedChoice(trait: AncestryTrait): InheritedTraitChoice | undefined {
  return trait.choices?.find(
    (choice): choice is InheritedTraitChoice => choice.kind === 'purchased-trait',
  )
}

function updateChoice(
  choices: ChoiceSelections | undefined,
  definition: EnumeratedAncestryChoice,
  optionId: string,
  checked: boolean,
): ChoiceSelections {
  const current = choices?.[definition.id] ?? []
  let selected: readonly string[]

  if (definition.count === 1) {
    selected = checked ? [optionId] : []
  } else if (checked) {
    selected = current.includes(optionId)
      ? current
      : [...current, optionId].slice(0, definition.count)
  } else {
    selected = current.filter((id) => id !== optionId)
  }

  return { ...choices, [definition.id]: selected }
}

type EnumeratedChoiceControlProps = Readonly<{
  ancestry: AncestryLocalizationAncestry
  choice: EnumeratedAncestryChoice
  choices: ChoiceSelections | undefined
  disabled?: boolean
  name: string
  onChange: (nextChoices: ChoiceSelections) => void
}>

function EnumeratedChoiceControl({
  ancestry,
  choice,
  choices,
  disabled = false,
  name,
  onChange,
}: EnumeratedChoiceControlProps) {
  const selected = choices?.[choice.id] ?? []
  const hintId = `${name}-hint`

  return (
    <fieldset className="choice-group" disabled={disabled}>
      <legend>{localize(ancestry, choice.id, 'Name', choice.canonicalName)}</legend>
      <p className="choice-hint" id={hintId}>
        選擇 {choice.count} 項（已選 {selected.length} 項）
      </p>
      <div className="option-grid" aria-describedby={hintId}>
        {choice.options.map((option) => {
          const isChecked = selected.includes(option.id)
          const isAtLimit = choice.count > 1 && selected.length >= choice.count
          const optionRules = option.rulesText
            ? localize(ancestry, option.id, 'Rules Text', option.rulesText)
            : undefined

          return (
            <label className="option-control" key={option.id}>
              <input
                type={choice.count === 1 ? 'radio' : 'checkbox'}
                name={name}
                value={option.id}
                aria-describedby={hintId}
                checked={isChecked}
                disabled={disabled || (!isChecked && isAtLimit)}
                onChange={(event) =>
                  onChange(updateChoice(choices, choice, option.id, event.target.checked))
                }
              />
              <span className="option-copy">
                <span className="option-name">
                  {localize(ancestry, option.id, 'Name', option.canonicalName)}
                  <small lang="en" translate="no">
                    {option.canonicalName}
                  </small>
                </span>
                {optionRules ? <span className="rules-text compact">{optionRules}</span> : null}
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}

type InheritedTraitControlProps = Readonly<{
  ancestry: AncestryLocalizationAncestry
  choices: ChoiceSelections | undefined
  definition: InheritedTraitChoice
  formerAncestry: AncestryCreationModel | undefined
  name: string
  selectionIndex: number
  usedTargetIds: ReadonlySet<string>
  onChange: (selectionIndex: number, choices: ChoiceSelections) => void
}>

function InheritedTraitControl({
  ancestry,
  choices,
  definition,
  formerAncestry,
  name,
  selectionIndex,
  usedTargetIds,
  onChange,
}: InheritedTraitControlProps) {
  const selectedTargetId = choices?.[definition.id]?.[0] ?? ''
  const targetTraits =
    formerAncestry?.purchasedTraits.filter(({ cost }) => cost === definition.traitCost) ?? []
  const selectedTarget = targetTraits.find(({ id }) => id === selectedTargetId)
  const formerAncestryLocalization = formerAncestry
    ? getLocalizationAncestry(formerAncestry)
    : undefined

  return (
    <div className="inherited-choice">
      <label htmlFor={name}>
        {localize(ancestry, definition.id, 'Name', definition.canonicalName)}
      </label>
      <select
        id={name}
        name={name}
        value={selectedTargetId}
        disabled={!formerAncestry || targetTraits.length === 0}
        onChange={(event) => {
          const targetId = event.target.value
          onChange(selectionIndex, targetId ? { [definition.id]: [targetId] } : {})
        }}
      >
        <option value="">請選擇…</option>
        {targetTraits.map((target) => (
          <option
            key={target.id}
            value={target.id}
            disabled={usedTargetIds.has(target.id) && target.id !== selectedTargetId}
          >
            {formerAncestryLocalization
              ? `${localize(
                  formerAncestryLocalization,
                  target.id,
                  'Name',
                  target.canonicalName,
                )} / ${target.canonicalName}`
              : target.canonicalName}
          </option>
        ))}
      </select>
      {!formerAncestry ? <p className="field-message">請先選擇原族裔。</p> : null}
      {formerAncestry && targetTraits.length === 0 ? (
        <p className="field-message">此原族裔沒有符合點數的特性。</p>
      ) : null}
      {selectedTarget && formerAncestryLocalization ? (
        <div className="inherited-detail">
          <p className="rules-text">
            {localize(
              formerAncestryLocalization,
              selectedTarget.id,
              'Rules Text',
              selectedTarget.rulesText,
            )}
          </p>
          {selectedTarget.choices?.map((nestedChoice) =>
            nestedChoice.kind === 'enumerated' ? (
              <EnumeratedChoiceControl
                key={nestedChoice.id}
                ancestry={formerAncestryLocalization}
                choice={nestedChoice}
                choices={choices}
                name={`${name}-${nestedChoice.id}`}
                onChange={(nextChoices) => onChange(selectionIndex, nextChoices)}
              />
            ) : null,
          )}
        </div>
      ) : null}
    </div>
  )
}

type TraitCardProps = Readonly<{
  ancestry: AncestryLocalizationAncestry
  trait: AncestryTrait
  children?: React.ReactNode
}>

function TraitCard({ ancestry, trait, children }: TraitCardProps) {
  return (
    <article className="trait-card">
      <div className="trait-heading">
        <div>
          <h4>{localize(ancestry, trait.id, 'Name', trait.canonicalName)}</h4>
          <p className="english-name" lang="en" translate="no">
            {trait.canonicalName}
          </p>
        </div>
        {trait.cost ? <span className="cost-badge">{trait.cost} 點</span> : null}
      </div>
      <p className="rules-text">
        {localize(ancestry, trait.id, 'Rules Text', trait.rulesText)}
      </p>
      {children}
    </article>
  )
}

export function AncestryBuilder() {
  const [selection, setSelection] = useState<AncestrySelectionState | null>(null)
  const model = selection ? getAncestryCreationModel(selection.ancestryId) : undefined
  const result = useMemo(
    () => (selection ? evaluateAncestrySelection(selection) : undefined),
    [selection],
  )

  const ancestryLocalization = model ? getLocalizationAncestry(model) : undefined
  const formerAncestry = selection ? getFormerAncestryModel(selection) : undefined
  const remainingPoints = result?.pointBudget === null || !result ? 0 : result.pointBudget - result.pointsSpent
  const usedInheritedTargetIds = new Set(
    selection?.traitSelections.flatMap(
      ({ choices }) => choices?.['revenant.previous-life.trait'] ?? [],
    ) ?? [],
  )

  const selectAncestry = (ancestryId: string) => {
    setSelection({ ancestryId, traitSelections: [] })
  }

  const updateSignatureChoice = (
    choice: EnumeratedAncestryChoice,
    nextChoices: ChoiceSelections,
  ) => {
    setSelection((current) => {
      if (!current) return current

      const formerAncestryChanged =
        choice.id === FORMER_ANCESTRY_CHOICE_ID &&
        current.signatureChoices?.[choice.id]?.[0] !== nextChoices[choice.id]?.[0]
      const currentModel = getAncestryCreationModel(current.ancestryId)
      const traitSelections = formerAncestryChanged
        ? current.traitSelections.filter((traitSelection) => {
            const trait = currentModel?.purchasedTraits.find(
              ({ id }) => id === traitSelection.traitId,
            )
            return !trait || !getInheritedChoice(trait)
          })
        : current.traitSelections

      return { ...current, signatureChoices: nextChoices, traitSelections }
    })
  }

  const toggleTrait = (trait: AncestryTrait, checked: boolean) => {
    setSelection((current) => {
      if (!current) return current
      const withoutTrait = current.traitSelections.filter(({ traitId }) => traitId !== trait.id)
      return {
        ...current,
        traitSelections: checked ? [...withoutTrait, { traitId: trait.id }] : withoutTrait,
      }
    })
  }

  const addRepeatableTrait = (trait: AncestryTrait) => {
    setSelection((current) =>
      current
        ? { ...current, traitSelections: [...current.traitSelections, { traitId: trait.id }] }
        : current,
    )
  }

  const removeTraitSelection = (selectionIndex: number) => {
    setSelection((current) =>
      current
        ? {
            ...current,
            traitSelections: current.traitSelections.filter((_, index) => index !== selectionIndex),
          }
        : current,
    )
  }

  const updateTraitChoices = (selectionIndex: number, choices: ChoiceSelections) => {
    setSelection((current) => {
      if (!current) return current
      return {
        ...current,
        traitSelections: current.traitSelections.map((traitSelection, index) =>
          index === selectionIndex ? { ...traitSelection, choices } : traitSelection,
        ),
      }
    })
  }

  const renderTraitChoices = (
    trait: AncestryTrait,
    traitSelection: AncestryTraitSelection,
    selectionIndex: number,
  ) => {
    const inheritedChoice = getInheritedChoice(trait)
    if (inheritedChoice && ancestryLocalization) {
      return (
        <InheritedTraitControl
          ancestry={ancestryLocalization}
          choices={traitSelection.choices}
          definition={inheritedChoice}
          formerAncestry={formerAncestry}
          name={`trait-${selectionIndex}-${inheritedChoice.id}`}
          selectionIndex={selectionIndex}
          usedTargetIds={usedInheritedTargetIds}
          onChange={updateTraitChoices}
        />
      )
    }

    return trait.choices?.map((choice) =>
      choice.kind === 'enumerated' && ancestryLocalization ? (
        <EnumeratedChoiceControl
          key={choice.id}
          ancestry={ancestryLocalization}
          choice={choice}
          choices={traitSelection.choices}
          name={`trait-${selectionIndex}-${choice.id}`}
          onChange={(nextChoices) => updateTraitChoices(selectionIndex, nextChoices)}
        />
      ) : null,
    )
  }

  const statusKind = !result
    ? 'incomplete'
    : result.isComplete
      ? 'complete'
      : result.isLegal
        ? 'incomplete'
        : 'invalid'
  const statusLabel =
    statusKind === 'complete' ? '已完成' : statusKind === 'invalid' ? '需要修正' : '未完成'
  const statusMessage = !result
    ? '請先選擇族裔。'
    : result.isComplete
      ? '族裔選擇已完成。'
      : !result.isLegal
        ? '目前選擇不符合規則，請檢查標示的選項。'
        : result.issues.some(({ code }) => code === 'missing-choice')
          ? '仍有必填選項尚未完成。'
          : `還有 ${Math.max(0, remainingPoints)} 點可用。`

  return (
    <>
      <a className="skip-link" href="#ancestry-builder">
        跳至族裔建立內容
      </a>
      <header className="site-header">
        <div>
          <p className="eyebrow">Draw Steel 1 級創角工具</p>
          <h1 translate="no">DS Hero Builder</h1>
        </div>
        <div className={`step-status ${statusKind}`} role="status" aria-live="polite">
          <span>{statusLabel}</span>
          <small>{statusMessage}</small>
        </div>
      </header>

      <main className="builder-layout" id="ancestry-builder" tabIndex={-1}>
        <aside className="ancestry-picker" aria-labelledby="ancestry-picker-title">
          <div className="section-heading">
            <p className="step-number">步驟 1</p>
            <h2 id="ancestry-picker-title">選擇族裔</h2>
            <p lang="en" translate="no">
              Choose Ancestry
            </p>
          </div>
          <div className="ancestry-list">
            {ANCESTRY_CREATION_MODELS.map((ancestryModel) => {
              const localizedAncestry = getLocalizationAncestry(ancestryModel)
              const localizedName = localize(
                localizedAncestry,
                ancestryModel.identity.id,
                'Name',
                ancestryModel.identity.canonicalName,
              )
              const isSelected = selection?.ancestryId === ancestryModel.identity.id

              return (
                <button
                  className="ancestry-button"
                  type="button"
                  key={ancestryModel.identity.id}
                  aria-pressed={isSelected}
                  onClick={() => selectAncestry(ancestryModel.identity.id)}
                >
                  <span>{localizedName}</span>
                  <small lang="en" translate="no">
                    {ancestryModel.identity.canonicalName}
                  </small>
                </button>
              )
            })}
          </div>
        </aside>

        <section className="ancestry-workspace" aria-labelledby="ancestry-title">
          {!model || !selection || !ancestryLocalization || !result ? (
            <div className="empty-state">
              <p className="empty-mark" aria-hidden="true">
                12
              </p>
              <h2 id="ancestry-title">從 12 個族裔中選擇 1 個</h2>
              <p>選擇後即可查看族裔說明、固定特性與可購買特性。</p>
            </div>
          ) : (
            <>
              <div className="ancestry-intro">
                <div>
                  <p className="step-number">目前族裔</p>
                  <h2 id="ancestry-title">
                    {localize(
                      ancestryLocalization,
                      model.identity.id,
                      'Name',
                      model.identity.canonicalName,
                    )}
                    <small lang="en" translate="no">
                      {model.identity.canonicalName}
                    </small>
                  </h2>
                  <p className="ancestry-description">
                    {localize(
                      ancestryLocalization,
                      model.identity.id,
                      'Description',
                      model.identity.canonicalName,
                    )}
                  </p>
                </div>
                <dl className="budget-card">
                  <div>
                    <dt>點數預算</dt>
                    <dd>{result.pointBudget}</dd>
                  </div>
                  <div>
                    <dt>已使用</dt>
                    <dd>{result.pointsSpent}</dd>
                  </div>
                  <div>
                    <dt>剩餘</dt>
                    <dd>{Math.max(0, remainingPoints)}</dd>
                  </div>
                </dl>
              </div>

              <section className="trait-section" aria-labelledby="signature-title">
                <div className="content-heading">
                  <div>
                    <p className="step-number">自動獲得</p>
                    <h3 id="signature-title">固定特性</h3>
                  </div>
                  <p>完成所有必填選項。</p>
                </div>
                <div className="trait-grid">
                  {model.signatureTraits.map((trait) => (
                    <TraitCard key={trait.id} ancestry={ancestryLocalization} trait={trait}>
                      {trait.choices?.map((choice) =>
                        choice.kind === 'enumerated' ? (
                          <EnumeratedChoiceControl
                            key={choice.id}
                            ancestry={ancestryLocalization}
                            choice={choice}
                            choices={selection.signatureChoices}
                            name={`signature-${choice.id}`}
                            onChange={(nextChoices) =>
                              updateSignatureChoice(choice, nextChoices)
                            }
                          />
                        ) : null,
                      )}
                    </TraitCard>
                  ))}
                </div>
              </section>

              <section className="trait-section" aria-labelledby="purchased-title">
                <div className="content-heading">
                  <div>
                    <p className="step-number">自由搭配</p>
                    <h3 id="purchased-title">購買特性</h3>
                  </div>
                  <p>使用全部族裔點數以完成此步驟。</p>
                </div>
                <div className="trait-grid">
                  {model.purchasedTraits.map((trait) => {
                    const matchingSelections = selection.traitSelections
                      .map((traitSelection, index) => ({ traitSelection, index }))
                      .filter(({ traitSelection }) => traitSelection.traitId === trait.id)
                    const inheritedChoice = getInheritedChoice(trait)
                    const inheritedTargets = inheritedChoice
                      ? formerAncestry?.purchasedTraits.filter(
                          ({ cost }) => cost === inheritedChoice.traitCost,
                        ) ?? []
                      : []
                    const unavailableInheritedTrait =
                      Boolean(inheritedChoice) && (!formerAncestry || inheritedTargets.length === 0)
                    const cannotAfford = (trait.cost ?? 0) > remainingPoints

                    if (trait.repeatable) {
                      const availableTargetCount = inheritedTargets.filter(
                        ({ id }) => !usedInheritedTargetIds.has(id),
                      ).length
                      const addDisabled =
                        cannotAfford || unavailableInheritedTrait || availableTargetCount === 0

                      return (
                        <TraitCard key={trait.id} ancestry={ancestryLocalization} trait={trait}>
                          <button
                            className="secondary-button"
                            type="button"
                            aria-label={`新增 1 次 ${localize(
                              ancestryLocalization,
                              trait.id,
                              'Name',
                              trait.canonicalName,
                            )} / ${trait.canonicalName}`}
                            disabled={addDisabled}
                            onClick={() => addRepeatableTrait(trait)}
                          >
                            新增 1 次
                          </button>
                          {unavailableInheritedTrait ? (
                            <p className="field-message">請先選擇具有相應特性的原族裔。</p>
                          ) : null}
                          {cannotAfford ? <p className="field-message">剩餘點數不足。</p> : null}
                          {matchingSelections.map(({ traitSelection, index }, repeatIndex) => (
                            <div className="repeatable-entry" key={`${trait.id}-${index}`}>
                              <div className="repeatable-heading">
                                <h5>第 {repeatIndex + 1} 次</h5>
                                <button
                                  className="text-button"
                                  type="button"
                                  aria-label={`移除 ${localize(
                                    ancestryLocalization,
                                    trait.id,
                                    'Name',
                                    trait.canonicalName,
                                  )}第 ${repeatIndex + 1} 次`}
                                  onClick={() => removeTraitSelection(index)}
                                >
                                  移除
                                </button>
                              </div>
                              {renderTraitChoices(trait, traitSelection, index)}
                            </div>
                          ))}
                        </TraitCard>
                      )
                    }

                    const selectedItem = matchingSelections[0]
                    const inputId = `trait-${trait.id}`
                    return (
                      <TraitCard key={trait.id} ancestry={ancestryLocalization} trait={trait}>
                        <label className="purchase-control" htmlFor={inputId}>
                          <input
                            id={inputId}
                            type="checkbox"
                            name="purchased-traits"
                            value={trait.id}
                            aria-label={`選擇 ${localize(
                              ancestryLocalization,
                              trait.id,
                              'Name',
                              trait.canonicalName,
                            )} / ${trait.canonicalName}`}
                            checked={Boolean(selectedItem)}
                            disabled={!selectedItem && (cannotAfford || unavailableInheritedTrait)}
                            onChange={(event) => toggleTrait(trait, event.target.checked)}
                          />
                          <span>{selectedItem ? '已選擇' : '選擇此特性'}</span>
                        </label>
                        {!selectedItem && unavailableInheritedTrait ? (
                          <p className="field-message">請先選擇具有相應特性的原族裔。</p>
                        ) : null}
                        {!selectedItem && cannotAfford ? (
                          <p className="field-message">剩餘點數不足。</p>
                        ) : null}
                        {selectedItem
                          ? renderTraitChoices(trait, selectedItem.traitSelection, selectedItem.index)
                          : null}
                      </TraitCard>
                    )
                  })}
                </div>
              </section>
            </>
          )}
        </section>
      </main>
    </>
  )
}
