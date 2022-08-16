import { render, screen } from '@testing-library/react'
import { AuthProvider } from '../../context/firstContext/AuthProvider'
import { TranslationProvider } from '../../context/secondContext/TranslationProvider'
import Dashboard from './Dashboard'

test('should renders Dashboard', () => {
  render(
    <AuthProvider>
      <TranslationProvider>
        <Dashboard />
      </TranslationProvider>
    </AuthProvider>
  )
  const dashboard = screen.getAllByTestId('dashboard')
  const todo = screen.queryByText('To Do')
  const inProgress = screen.queryByText('In Progress')
  const blocked = screen.queryByText('Blocked')
  const done = screen.queryByText('Done')

  expect(dashboard).toBeTruthy()
  expect(todo).toBeInTheDocument()
  expect(inProgress).toBeInTheDocument()
  expect(blocked).toBeInTheDocument()
  expect(done).toBeInTheDocument()
})
