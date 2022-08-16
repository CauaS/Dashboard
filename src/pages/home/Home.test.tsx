import { render, screen } from '@testing-library/react'
import { AuthProvider } from '../../context/firstContext/AuthProvider'
import { TranslationProvider } from '../../context/secondContext/TranslationProvider'
import Home from './Home'

test('should renders the wrapper component', () => {
  render(
    <AuthProvider>
      <TranslationProvider>
        <Home />
      </TranslationProvider>
    </AuthProvider>
  )
  const elementWrapper = screen.getByTestId('wrapper')
  expect(elementWrapper).toBeInTheDocument()
})
