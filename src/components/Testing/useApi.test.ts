import { renderHook } from '@testing-library/react-hooks'
import { useApi } from '../Testing/useApi'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'Cali' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
test('should get the data ', async () => {
  // Essa linha roda o hook
  const { result, waitForNextUpdate } = renderHook(() => useApi())

  await waitForNextUpdate()

  expect(result.current).toEqual({ name: 'Cali' })
})
