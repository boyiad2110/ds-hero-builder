import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

const ANCESTRY = {
  devil: 'Devil',
  dragonKnight: 'Dragon Knight',
  dwarf: 'Dwarf',
  wodeElf: 'Elf, Wode',
  highElf: 'Elf, High',
  hakaan: 'Hakaan',
  human: 'Human',
  memonek: 'Memonek',
  orc: 'Orc',
  polder: 'Polder',
  revenant: 'Revenant',
  timeRaider: 'Time Raider',
} as const

const ID = {
  dwarf: 'a9f3759d-be9f-4c40-b610-e7a656425303',
  dragonKnight: '254848a2-5c86-4a73-9b9d-a87dda64176d',
  polder: '4f1ecd6c-a675-4d64-b7e5-b544d06c5fd8',
  dragonPrismaticScales: '31055912-7079-40e3-ab53-cd5f70757660',
} as const

function selectAncestry(name: string) {
  fireEvent.click(screen.getByRole('button', { name: new RegExp(name, 'i') }))
}

function expectBudgetValue(label: string, value: number) {
  const budgetItem = screen.getByText(label).closest('div')
  expect(budgetItem).not.toBeNull()
  expect(within(budgetItem!).getByText(String(value))).toBeInTheDocument()
}

describe('Character creation app shell', () => {
  it('shows the full step set with Ancestry current and future steps unavailable', () => {
    render(<App />)

    const navigation = screen.getByRole('navigation', { name: '創角步驟' })
    const stepButtons = within(navigation).getAllByRole('button')
    const ancestryStep = within(navigation).getByRole('button', { name: /族裔.*Ancestry/i })

    expect(stepButtons).toHaveLength(6)
    expect(screen.getAllByRole('navigation')).toHaveLength(1)
    expect(screen.queryByRole('complementary')).not.toBeInTheDocument()
    expect(ancestryStep).toBeEnabled()
    expect(ancestryStep).toHaveAttribute('aria-current', 'step')
    expect(ancestryStep).toHaveTextContent('未完成')

    for (const futureStep of [
      'Culture',
      'Career',
      'Class',
      'Kit',
      'Complication',
    ]) {
      const button = within(navigation).getByRole('button', {
        name: new RegExp(`${futureStep}.*尚未開放`, 'i'),
      })
      expect(button).toBeDisabled()
      fireEvent.click(button)
    }

    const main = screen.getByRole('main')
    expect(within(main).getByRole('region', { name: '選擇族裔' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', {
        level: 2,
        name: /族裔.*Ancestry/i,
      }),
    ).toBeInTheDocument()
  })
})

describe('Ancestry creation UI', () => {
  it('presents and selects all 12 ancestries with Frozen zh-TW names', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: /魔鬼.*Devil/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /龍騎士.*Dragon Knight/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /還魂屍.*Revenant/i })).toBeInTheDocument()

    for (const canonicalName of Object.values(ANCESTRY)) {
      selectAncestry(canonicalName)
      expect(
        screen.getByRole('heading', { level: 3, name: new RegExp(canonicalName, 'i') }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: new RegExp(canonicalName, 'i') }),
      ).toHaveAttribute('aria-pressed', 'true')
    }
  })

  it('completes a normal ancestry flow and reports point spending', () => {
    render(<App />)
    selectAncestry(ANCESTRY.devil)

    fireEvent.click(screen.getByRole('radio', { name: /Brag/i }))
    fireEvent.click(screen.getByRole('checkbox', { name: /Beast Legs/i }))
    fireEvent.click(screen.getByRole('checkbox', { name: /Impressive Horns/i }))

    expect(screen.getByRole('status')).toHaveTextContent('已完成')
    expect(screen.getByRole('status')).toHaveTextContent('族裔選擇已完成')
    expect(
      within(screen.getByRole('navigation', { name: '創角步驟' })).getByRole('button', {
        name: /族裔.*Ancestry/i,
      }),
    ).toHaveTextContent('已完成')
    expect(screen.getByLabelText('創角進度 1 / 6')).toHaveTextContent('1 / 6')
    expectBudgetValue('點數預算', 3)
    expectBudgetValue('已使用', 3)
    expectBudgetValue('剩餘', 0)
  })

  it('enforces an enumerated choice count and disables over-budget purchases', () => {
    render(<App />)
    selectAncestry(ANCESTRY.orc)

    fireEvent.click(screen.getByRole('checkbox', { name: /Passionate Artisan/i }))
    fireEvent.click(screen.getByRole('checkbox', { name: /Alchemy/i }))
    fireEvent.click(screen.getByRole('checkbox', { name: /Architecture/i }))

    expect(screen.getByRole('checkbox', { name: /Blacksmithing/i })).toBeDisabled()
    fireEvent.click(screen.getByRole('checkbox', { name: /Glowing Recovery/i }))
    expect(screen.getByRole('status')).toHaveTextContent('已完成')

    selectAncestry(ANCESTRY.devil)
    fireEvent.click(screen.getByRole('checkbox', { name: /Impressive Horns/i }))
    expect(screen.getByRole('checkbox', { name: /Prehensile Tail/i })).toBeDisabled()
    expect(screen.getByRole('checkbox', { name: /Beast Legs/i })).toBeEnabled()
  })

  it('supports Dragon Knight damage choices and the Time Raider Psionic Gift', () => {
    render(<App />)
    selectAncestry(ANCESTRY.dragonKnight)

    fireEvent.click(
      within(screen.getByRole('group', { name: '龍鱗傷害免疫' })).getByRole('radio', {
        name: /Fire/i,
      }),
    )
    fireEvent.click(screen.getByRole('checkbox', { name: /Prismatic Scales/i }))
    fireEvent.click(
      within(screen.getByRole('group', { name: '永久傷害免疫' })).getByRole('radio', {
        name: /Cold/i,
      }),
    )
    fireEvent.click(screen.getByRole('checkbox', { name: /Draconian Guard/i }))
    fireEvent.click(screen.getByRole('checkbox', { name: /Remember Your Oath/i }))
    expect(screen.getByRole('status')).toHaveTextContent('已完成')

    selectAncestry(ANCESTRY.timeRaider)
    fireEvent.click(screen.getByRole('checkbox', { name: /Psionic Gift/i }))
    fireEvent.click(screen.getByRole('radio', { name: /Psionic Bolt/i }))
    fireEvent.click(screen.getByRole('checkbox', { name: /Beyondsight/i }))
    expect(screen.getByRole('status')).toHaveTextContent('已完成')
  })

  it('clears ancestry-specific state when the selected ancestry changes', () => {
    render(<App />)
    selectAncestry(ANCESTRY.devil)
    fireEvent.click(screen.getByRole('checkbox', { name: /Beast Legs/i }))
    expect(screen.getByRole('checkbox', { name: /Beast Legs/i })).toBeChecked()

    selectAncestry(ANCESTRY.dwarf)
    expect(screen.queryByRole('checkbox', { name: /Beast Legs/i })).not.toBeInTheDocument()

    selectAncestry(ANCESTRY.devil)
    expect(screen.getByRole('checkbox', { name: /Beast Legs/i })).not.toBeChecked()
  })

  it('updates the Revenant budget and clears Previous Life when former ancestry changes', () => {
    render(<App />)
    selectAncestry(ANCESTRY.revenant)

    fireEvent.click(screen.getByRole('radio', { name: /Polder/i }))
    fireEvent.click(screen.getByRole('button', { name: /Previous Life: 1 Point/i }))
    fireEvent.change(screen.getByRole('combobox', { name: '原族裔特性' }), {
      target: { value: 'e347c13c-02bc-4b63-8c6c-b225cd7574a2' },
    })

    expectBudgetValue('點數預算', 3)
    expectBudgetValue('已使用', 1)
    expectBudgetValue('剩餘', 2)
    expect(screen.getByRole('combobox', { name: '原族裔特性' })).toHaveValue(
      'e347c13c-02bc-4b63-8c6c-b225cd7574a2',
    )

    fireEvent.click(screen.getByRole('radio', { name: /Dwarf/i }))

    expect(screen.queryByRole('combobox', { name: '原族裔特性' })).not.toBeInTheDocument()
    expectBudgetValue('點數預算', 2)
    expectBudgetValue('已使用', 0)
    expectBudgetValue('剩餘', 2)
  })

  it('completes a Revenant inherited trait with its nested required choice', () => {
    render(<App />)
    selectAncestry(ANCESTRY.revenant)

    fireEvent.click(screen.getByRole('radio', { name: /Dragon Knight/i }))
    fireEvent.click(screen.getByRole('button', { name: /Previous Life: 1 Point/i }))
    fireEvent.change(screen.getByRole('combobox', { name: '原族裔特性' }), {
      target: { value: ID.dragonPrismaticScales },
    })
    fireEvent.click(screen.getByRole('radio', { name: /Fire/i }))
    fireEvent.click(screen.getByRole('checkbox', { name: /Undead Influence/i }))

    expect(screen.getByRole('status')).toHaveTextContent('已完成')
  })

  it('prevents duplicate inherited targets across repeatable Previous Life purchases', () => {
    render(<App />)
    selectAncestry(ANCESTRY.revenant)
    fireEvent.click(screen.getByRole('radio', { name: /Polder/i }))

    const addPreviousLife = screen.getByRole('button', { name: /Previous Life: 1 Point/i })
    fireEvent.click(addPreviousLife)
    fireEvent.change(screen.getByRole('combobox', { name: '原族裔特性' }), {
      target: { value: 'e347c13c-02bc-4b63-8c6c-b225cd7574a2' },
    })
    fireEvent.click(addPreviousLife)

    const inheritedSelectors = screen.getAllByRole('combobox', { name: '原族裔特性' })
    expect(
      within(inheritedSelectors[1]).getByRole('option', { name: /Corruption Immunity/i }),
    ).toBeDisabled()
  })
})
