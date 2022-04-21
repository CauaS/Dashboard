import { render, screen } from '@testing-library/react'
import Home from './Home'

test('should renders the wrapper component', () => {
  render(<Home />)
  const elementWrapper = screen.getByTestId('wrapper')
  expect(elementWrapper).toBeInTheDocument()
})
