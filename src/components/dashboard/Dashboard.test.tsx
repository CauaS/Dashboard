import { render, screen } from '@testing-library/react'
import Dashboard from './Dashboard'

test('should renders Dashboard', () => {
  render(<Dashboard />)
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
