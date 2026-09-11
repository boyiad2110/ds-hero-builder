import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the application foundation content', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'DS Hero Builder' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Draw Steel 1 級創角工具')).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('基礎工程建置中')
  })
})
