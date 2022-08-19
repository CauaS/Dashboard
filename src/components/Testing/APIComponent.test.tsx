import { render, screen, waitFor } from '@testing-library/react'
import { APIComponent } from '../Testing/APIComponent'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'Cali ' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('gets the data', async () => {
  render(<APIComponent />)
  const output = await waitFor(() => screen.getByRole('contentinfo'))

  expect(output).toHaveTextContent('Name is Cali')
})
