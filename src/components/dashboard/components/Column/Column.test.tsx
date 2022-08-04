import { render, screen } from '@testing-library/react'
import Column from './Column'

test('should renders Column', () => {
  render(<Column title="To do" />)
  const columnElement = screen.getByTestId('column')
  const title = screen.getByText('To do')

  expect(columnElement).toBeInTheDocument()
  expect(title).toBeInTheDocument()
})
