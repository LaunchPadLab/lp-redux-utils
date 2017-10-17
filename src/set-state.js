import { set } from './utils'

/**
 *
 * A helper function for creating simple "setter" reducers. 
 * Given a path, it sets the state at that path to the payload of an action.
 *
 * @name setState
 * @type Function
 * @param {String} path - Path to the part of the state that will be set
 * @param {Function} transform - A function with arguments `(action, state)` that can be used to transform the value that will be set. The default transform function simply returns the action's payload.
 * @returns {Function} - A function that can be used in a reducer to handle an action.
 *
 * @example
 *
 * import { setState } from 'lp-redux-utils'
 * import { createAction, handleActions } from 'redux-actions'
 * 
 * const setCount = createAction('SET_COUNT')
 * const setCountInverse = createAction('SET_COUNT_INVERSE')
 *
 * const reducer = handleActions({
 *   [setCount]: setState('count'),
 *   [setCountInverse]: setState('count', action => action.payload * -1)
 * })
 *
**/

function defaultTransform (action) {
  return action.payload
}

function setState (path, transform=defaultTransform) {
  return function reducer (state, action) {
    return set(path, transform(action, state), state)
  }
}

export default setState