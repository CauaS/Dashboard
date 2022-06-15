import { render, screen } from '@testing-library/react'
import TaskCard from './TaskCard'

test('should renders Card', () => {
  render(
    <TaskCard body="dw" handleClick={() => null} imageAuthor="" title="" />
  )
  const cardTaskElement = screen.getByTestId('card-content')

  expect(cardTaskElement).toBeInTheDocument()
})
