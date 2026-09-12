import {
  getAncestryCreationModel,
  type AncestryCreationModel,
  type AncestryTrait,
  type EnumeratedAncestryChoice,
  type InheritedTraitChoice,
} from '../data/ancestryRules'

export type ChoiceSelections = Readonly<Record<string, readonly string[] | undefined>>

export type AncestryTraitSelection = Readonly<{
  traitId: string
  choices?: ChoiceSelections
}>

export type AncestrySelectionState = Readonly<{
  ancestryId: string
  signatureChoices?: ChoiceSelections
  traitSelections: readonly AncestryTraitSelection[]
}>

export type AncestrySelectionIssueCode =
  | 'duplicate-choice-option'
  | 'duplicate-trait'
  | 'inherited-trait-cost-mismatch'
  | 'inherited-trait-not-from-former-ancestry'
  | 'missing-choice'
  | 'missing-former-ancestry'
  | 'over-budget'
  | 'under-budget'
  | 'unexpected-choice'
  | 'unknown-ancestry'
  | 'unknown-choice-option'
  | 'unknown-trait'
  | 'wrong-choice-count'

export type AncestrySelectionIssue = Readonly<{
  code: AncestrySelectionIssueCode
  severity: 'incomplete' | 'invalid'
  path: string
  subjectId?: string
  expected?: number
  actual?: number
}>

export type AncestrySelectionResult = Readonly<{
  ancestryId: string
  pointBudget: number | null
  pointsSpent: number
  isLegal: boolean
  isComplete: boolean
  issues: readonly AncestrySelectionIssue[]
}>

const FORMER_ANCESTRY_CHOICE_ID = 'revenant.former-life.ancestry'
const POLDER_ANCESTRY_ID = '4f1ecd6c-a675-4d64-b7e5-b544d06c5fd8'

function selectedOptions(choices: ChoiceSelections | undefined, choiceId: string): readonly string[] {
  return choices?.[choiceId] ?? []
}

function validateEnumeratedChoice(
  definition: EnumeratedAncestryChoice,
  selections: ChoiceSelections | undefined,
  path: string,
  issues: AncestrySelectionIssue[],
): void {
  const optionIds = selectedOptions(selections, definition.id)
  const choicePath = `${path}.choices.${definition.id}`

  if (optionIds.length === 0) {
    issues.push({
      code: 'missing-choice',
      severity: 'incomplete',
      path: choicePath,
      subjectId: definition.id,
      expected: definition.count,
      actual: 0,
    })
    return
  }

  if (optionIds.length < definition.count) {
    issues.push({
      code: 'missing-choice',
      severity: 'incomplete',
      path: choicePath,
      subjectId: definition.id,
      expected: definition.count,
      actual: optionIds.length,
    })
  } else if (optionIds.length > definition.count) {
    issues.push({
      code: 'wrong-choice-count',
      severity: 'invalid',
      path: choicePath,
      subjectId: definition.id,
      expected: definition.count,
      actual: optionIds.length,
    })
  }

  const uniqueOptionIds = new Set(optionIds)
  if (uniqueOptionIds.size !== optionIds.length) {
    issues.push({
      code: 'duplicate-choice-option',
      severity: 'invalid',
      path: choicePath,
      subjectId: definition.id,
    })
  }

  const allowedOptionIds = new Set(definition.options.map(({ id }) => id))
  for (const optionId of uniqueOptionIds) {
    if (!allowedOptionIds.has(optionId)) {
      issues.push({
        code: 'unknown-choice-option',
        severity: 'invalid',
        path: choicePath,
        subjectId: optionId,
      })
    }
  }
}

function validateUnexpectedChoices(
  selections: ChoiceSelections | undefined,
  allowedChoiceIds: ReadonlySet<string>,
  path: string,
  issues: AncestrySelectionIssue[],
): void {
  for (const choiceId of Object.keys(selections ?? {})) {
    if (!allowedChoiceIds.has(choiceId)) {
      issues.push({
        code: 'unexpected-choice',
        severity: 'invalid',
        path: `${path}.choices.${choiceId}`,
        subjectId: choiceId,
      })
    }
  }
}

function validateStandardTraitChoices(
  trait: AncestryTrait,
  selections: ChoiceSelections | undefined,
  path: string,
  issues: AncestrySelectionIssue[],
): void {
  const choices = trait.choices ?? []
  const allowedChoiceIds = new Set(choices.map(({ id }) => id))

  for (const choice of choices) {
    if (choice.kind === 'enumerated') {
      validateEnumeratedChoice(choice, selections, path, issues)
    }
  }

  validateUnexpectedChoices(selections, allowedChoiceIds, path, issues)
}

function resolveFormerAncestry(
  model: AncestryCreationModel,
  signatureChoices: ChoiceSelections | undefined,
): AncestryCreationModel | undefined {
  if (model.identity.canonicalName !== 'Revenant') {
    return undefined
  }

  const formerAncestryIds = selectedOptions(signatureChoices, FORMER_ANCESTRY_CHOICE_ID)
  const formerAncestryChoice = model.signatureTraits
    .flatMap(({ choices }) => choices ?? [])
    .find(({ id }) => id === FORMER_ANCESTRY_CHOICE_ID)

  if (
    formerAncestryIds.length !== 1 ||
    formerAncestryChoice?.kind !== 'enumerated' ||
    !formerAncestryChoice.options.some(({ id }) => id === formerAncestryIds[0])
  ) {
    return undefined
  }

  return getAncestryCreationModel(formerAncestryIds[0])
}

function validateInheritedTraitChoice(
  definition: InheritedTraitChoice,
  selections: ChoiceSelections | undefined,
  formerAncestry: AncestryCreationModel | undefined,
  path: string,
  issues: AncestrySelectionIssue[],
): string | undefined {
  const targetIds = selectedOptions(selections, definition.id)
  const choicePath = `${path}.choices.${definition.id}`

  if (targetIds.length === 0) {
    issues.push({
      code: 'missing-choice',
      severity: 'incomplete',
      path: choicePath,
      subjectId: definition.id,
      expected: 1,
      actual: 0,
    })
    return undefined
  }

  if (targetIds.length > 1) {
    issues.push({
      code: 'wrong-choice-count',
      severity: 'invalid',
      path: choicePath,
      subjectId: definition.id,
      expected: 1,
      actual: targetIds.length,
    })
    return undefined
  }

  if (!formerAncestry) {
    issues.push({
      code: 'missing-former-ancestry',
      severity: 'incomplete',
      path: choicePath,
      subjectId: targetIds[0],
    })
    return undefined
  }

  const targetTrait = formerAncestry.purchasedTraits.find(({ id }) => id === targetIds[0])
  if (!targetTrait) {
    issues.push({
      code: 'inherited-trait-not-from-former-ancestry',
      severity: 'invalid',
      path: choicePath,
      subjectId: targetIds[0],
    })
    return undefined
  }

  if (targetTrait.cost !== definition.traitCost) {
    issues.push({
      code: 'inherited-trait-cost-mismatch',
      severity: 'invalid',
      path: choicePath,
      subjectId: targetTrait.id,
      expected: definition.traitCost,
      actual: targetTrait.cost,
    })
    return undefined
  }

  for (const nestedChoice of targetTrait.choices ?? []) {
    if (nestedChoice.kind === 'enumerated') {
      validateEnumeratedChoice(nestedChoice, selections, path, issues)
    }
  }

  const allowedChoiceIds = new Set([
    definition.id,
    ...(targetTrait.choices ?? []).map(({ id }) => id),
  ])
  validateUnexpectedChoices(selections, allowedChoiceIds, path, issues)

  return targetTrait.id
}

function resolvePointBudget(
  model: AncestryCreationModel,
  formerAncestry: AncestryCreationModel | undefined,
): number {
  if (
    model.pointBudget.formerAncestrySize1S !== undefined &&
    formerAncestry?.identity.id === POLDER_ANCESTRY_ID
  ) {
    return model.pointBudget.formerAncestrySize1S
  }

  return model.pointBudget.base
}

export function evaluateAncestrySelection(state: AncestrySelectionState): AncestrySelectionResult {
  const model = getAncestryCreationModel(state.ancestryId)
  if (!model) {
    const issues: readonly AncestrySelectionIssue[] = [
      {
        code: 'unknown-ancestry',
        severity: 'invalid',
        path: 'ancestryId',
        subjectId: state.ancestryId,
      },
    ]
    return {
      ancestryId: state.ancestryId,
      pointBudget: null,
      pointsSpent: 0,
      isLegal: false,
      isComplete: false,
      issues,
    }
  }

  const issues: AncestrySelectionIssue[] = []
  const signatureChoiceIds = new Set<string>()

  for (const trait of model.signatureTraits) {
    for (const choice of trait.choices ?? []) {
      signatureChoiceIds.add(choice.id)
      if (choice.kind === 'enumerated') {
        validateEnumeratedChoice(choice, state.signatureChoices, 'signature', issues)
      }
    }
  }
  validateUnexpectedChoices(state.signatureChoices, signatureChoiceIds, 'signature', issues)

  const formerAncestry = resolveFormerAncestry(model, state.signatureChoices)
  const pointBudget = resolvePointBudget(model, formerAncestry)
  const seenTraitIds = new Set<string>()
  const repeatedInheritedTargets = new Set<string>()
  let pointsSpent = 0

  state.traitSelections.forEach((selection, index) => {
    const path = `traitSelections.${index}`
    const trait = model.purchasedTraits.find(({ id }) => id === selection.traitId)

    if (!trait) {
      issues.push({
        code: 'unknown-trait',
        severity: 'invalid',
        path: `${path}.traitId`,
        subjectId: selection.traitId,
      })
      return
    }

    pointsSpent += trait.cost ?? 0

    if (seenTraitIds.has(trait.id) && !trait.repeatable) {
      issues.push({
        code: 'duplicate-trait',
        severity: 'invalid',
        path: `${path}.traitId`,
        subjectId: trait.id,
      })
    }
    seenTraitIds.add(trait.id)

    const inheritedChoice = trait.choices?.find(
      (choice): choice is InheritedTraitChoice => choice.kind === 'purchased-trait',
    )
    if (!inheritedChoice) {
      validateStandardTraitChoices(trait, selection.choices, path, issues)
      return
    }

    const inheritedTarget = validateInheritedTraitChoice(
      inheritedChoice,
      selection.choices,
      formerAncestry,
      path,
      issues,
    )

    if (trait.repeatable && inheritedTarget) {
      if (repeatedInheritedTargets.has(inheritedTarget)) {
        issues.push({
          code: 'duplicate-choice-option',
          severity: 'invalid',
          path: `${path}.choices.${inheritedChoice.id}`,
          subjectId: inheritedTarget,
        })
      }
      repeatedInheritedTargets.add(inheritedTarget)
    }
  })

  if (pointsSpent < pointBudget) {
    issues.push({
      code: 'under-budget',
      severity: 'incomplete',
      path: 'traitSelections',
      expected: pointBudget,
      actual: pointsSpent,
    })
  } else if (pointsSpent > pointBudget) {
    issues.push({
      code: 'over-budget',
      severity: 'invalid',
      path: 'traitSelections',
      expected: pointBudget,
      actual: pointsSpent,
    })
  }

  const isLegal = !issues.some(({ severity }) => severity === 'invalid')
  return {
    ancestryId: state.ancestryId,
    pointBudget,
    pointsSpent,
    isLegal,
    isComplete: isLegal && issues.length === 0,
    issues,
  }
}
