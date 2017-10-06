import { getOr } from './utils'

/**
 *
 * Given the path of a certain state slice, returns a function that can be used to create state selectors (helpful for `mapStateToProps()`).
 *
 * @param {String} slicePath - Path to slice of state.
 * @returns {Function} - A function that can be used to create state selectors.
 *
 *
 * @example
 *
 *import { selectorForSlice } from 'lp-utils'
 *
 * const state = {
 *   userSlice: {
 *     user: {
 *       name: 'test'
 *     }
 *   }
 * }
 *
 * const select = selectorForSlice('userSlice')
 *
 * // The resulting select() function has arguments (path, defaultValue)
 *
 * const selectors = {}
 * selectors.user = select('user')
 * selectors.username = select('user.name', 'defaultName')
 *
 * export { selectors }
 *
 * // These selectors can be called in mapStateToProps() like so:
 * // selectors.user(state) => { name: 'test' }
 * // selectors.username(state) => 'test'
 *
 *
**/

export default function selectorForSlice (slicePath) {
  return function (path, defaultValue) {
    return function (state) {
      return getOr(defaultValue, `${slicePath}.${path}`, state)
    }
  }
}
