import { setState } from '../src'

test('setState: sets path to action payload', () => {
  const state = {}
  const action = { payload: 'test' }
  expect(setState('foo.bar')(state, action)).toEqual({ foo: { bar: 'test' } })
})

test('setState: transform function is called with action and state', () => {
  const state = {}
  const action = { payload: 'test' }
  const transform = jest.fn()
  setState('foo.bar', transform)(state, action)
  expect(transform).toHaveBeenCalledWith(action, state)
})

test('setState: transform function transforms the value that is set', () => {
  const state = { count: 5 }
  const action = { type: 'ADD_TO_COUNT', payload: 10 }
  const reducer = setState('count', ({ payload }, state) => state.count + payload)
  expect(reducer(state, action)).toEqual({ count: 15 })
})
