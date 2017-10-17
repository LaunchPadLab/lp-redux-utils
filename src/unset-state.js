import { unset } from './utils'

/**
 *
 * A helper function for creating simple reducers that "unset" a piece of state.
 * Given a path, it calls lodash {@link https://lodash.com/docs/#unset|unset } on the state at that path.
 *
 * @name unsetState
 * @type Function
 * @param {String} path - Path to the part of state to unset
 * @returns {Function} - A function that can be used in a reducer to handle an action.
 *
 * @example
 *
 * import { unsetState } from 'lp-redux-utils'
 * import { createAction, handleActions } from 'redux-actions'
 * 
 * const clearCount = createAction('CLEAR_COUNT')
 *
 * const reducer = handleActions({
 *   [clearCount]: unsetState('count'),
 * })
 *
**/

function unsetState (path) {
  return function reducer (state) {
    return unset(path, state)
  }
}

export default unsetState