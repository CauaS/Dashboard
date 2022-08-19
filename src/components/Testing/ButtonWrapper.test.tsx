import { render, screen, fireEvent } from '@testing-library/react'
import { ButtonWrapper } from '../Testing/ButtonWrapper'

test('Render multiple items', () => {
  const onClick = jest.fn()
  render(<ButtonWrapper onClick={onClick} title="button title" />)

  const buttonElement = screen.getByText('button title')

  fireEvent.click(buttonElement)
  expect(onClick).toHaveBeenCalledTimes(1)
})
