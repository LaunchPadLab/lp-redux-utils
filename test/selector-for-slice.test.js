import { selectorForSlice } from '../src/'

const state = {
  userSlice: {
    user: {
      name: 'test'
    }
  }
}

const select = selectorForSlice('userSlice')

const selectors = {}
selectors.user = select('user')
selectors.username = select('user.name')
selectors.withDefault = select('other', 'default')
selectors.withNoDefault = select('other')
selectors.withUndefined = select(undefined)

test('select returns correct value', () => {
  expect(selectors.user(state)).toEqual({ name: 'test'})
})

test('select nested key returns correct value', () => {
  expect(selectors.username(state)).toEqual('test')
})

test('select missing key with default returns default', () => {
  expect(selectors.withDefault(state)).toEqual('default')
})

test('select missing key with no default returns undefined', () => {
  expect(selectors.withNoDefault(state)).toEqual(undefined)
})

test('select undefined path returns undefined', () => {
  expect(selectors.withUndefined(state)).toEqual(undefined)
})