import { unsetState } from '../src'

test('unsetState: unsets path', () => {
  const state = { foo: 'bar' }
  const action = {}
  expect(unsetState('foo')(state, action)).toEqual({})
})

test('unsetState: unsets nested path', () => {
  const state = { foo: { bar: 'test' } }
  const action = {}
  expect(unsetState('foo.bar')(state, action)).toEqual({ foo: {} })
})