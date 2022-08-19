import { fireEvent, render, screen } from '@testing-library/react'
import { ButtonCounter } from '../Testing/ButtonCounter'

test('Handling click on testing', () => {
  render(<ButtonCounter />)
  const buttonElement = screen.getByText('Add')
  const divElement = screen.getByRole('contentInfo')

  expect(divElement).toHaveTextContent('Count is 0')
  fireEvent.click(buttonElement)
  expect(divElement).toHaveTextContent('Count is 1')
})
