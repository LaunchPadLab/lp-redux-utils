import { unset } from './utils'

function unsetState (path) {
  return function reducer (state) {
    return unset(path, state)
  }
}

export default unsetState