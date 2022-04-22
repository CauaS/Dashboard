import { render, screen } from '@testing-library/react'
import TaskCard from './TaskCard'

test('should renders Card', () => {
  render(<TaskCard />)
  const cardTaskElement = screen.getByTestId('card-content')

  expect(cardTaskElement).toBeInTheDocument()
})
