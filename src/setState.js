import { set, get } from 'lodash/fp'

/**
 *
 * A helper function for creating simple "setter" reducers. 
 * Given a path, it sets the state at that path to the payload of an action.
 *
 * @name setState
 * @type Function
 * @param {String} path - Path to the part of the state that will be set
 * @param {Function} transform - A function with arguments `(action, state, slice)` that can be used to transform the value that will be set. `slice` is the preexisting data at the `path`. The default transform function simply returns the action's payload.
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
  return get('payload', action)
}

function setState (path, transform=defaultTransform) {
  return function reducer (state, action) {
    const slice = get(path, state)
    return set(path, transform(action, state, slice), state)
  }
}

export default setState