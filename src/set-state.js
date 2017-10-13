import { set } from './utils'

function defaultTransform (action) {
  return action.payload
}

function setState (path, transform=defaultTransform) {
  return function reducer (state, action) {
    return set(path, transform(action, state), state)
  }
}

export default setState