import { render, screen } from '@testing-library/react'
import { Wrapper } from '../../components/index'

test('renders Wrapper', () => {
  render(<Wrapper />)
  const wrapperElement = screen.getByTestId('wrapper')
  expect(wrapperElement).toBeInTheDocument()
})
