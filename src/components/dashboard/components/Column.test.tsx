import { render, screen } from '@testing-library/react'
import Column from './Column'

test('should renders Column', () => {
  render(<Column title="To do" />)
  const columnElement = screen.getByTestId('column')

  expect(columnElement).toBeInTheDocument()
})
