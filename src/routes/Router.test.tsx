import { ROUTES } from './Router'

describe('Routes Test Suite', () => {
  test('should return the corret URL when passed the corret key', () => {
    expect(ROUTES.root).toEqual('/')
  })
})
