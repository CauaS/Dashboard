import { act, renderHook } from '@testing-library/react-hooks'
import { useCounter } from '../Testing/useCounter'

test('should increment', () => {
  // Essa linha roda o hook
  const { result } = renderHook(() => useCounter())

  // Essa linha executa o retorno do hook, neste caso a fn increment
  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(1)
})
