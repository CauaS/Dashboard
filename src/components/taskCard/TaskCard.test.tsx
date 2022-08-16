import { render, screen } from '@testing-library/react'
import { AuthProvider } from '../../context/firstContext/AuthProvider'
import TaskCard from './TaskCard'

test('should renders Card', () => {
  render(
    <AuthProvider>
      <TaskCard body="dw" handleClick={jest.fn()} imageAuthor="" title="" />
    </AuthProvider>
  )
  const cardTaskElement = screen.getByTestId('card-content')

  expect(cardTaskElement).toBeInTheDocument()
})
