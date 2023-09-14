import { isFunction } from 'lodash'
import { set, get } from 'lodash/fp'

/**
 *
 * A helper function for creating simple "setter" reducers.
 * Given a path, it sets the state at that path to the payload of an action.
 *
 * @name setState
 * @type {Function}
 * @param {string} path - Path to the part of the state that will be set
 * @param {StateTransform} [transform=] - A function with arguments `(action, state, slice)` that can be used to transform the value that will be set. `slice` is the data, if any, that already exists in the state at `path`. The default transform function simply returns the action's payload. To set the state to a constant value, simply pass the value in place of the transform function.
 * @returns {(state:any, action:Action) => any } A function that can be used in a reducer to handle an action.
 *
 * @example
 *
 * import { setState } from 'lp-redux-utils'
 * import { createAction, handleActions } from 'redux-actions'
 *
 * const setCount = createAction('SET_COUNT')
 * const setCountInverse = createAction('SET_COUNT_INVERSE')
 * const doubleExistingCount = createAction('DOUBLE_EXISTING_COUNT')
 *
 * const reducer = handleActions({
 *   [setCount]: setState('count'),
 *   [setCountInverse]: setState('count', action => action.payload * -1)
 *   [doubleExistingCount]: setState('count', (action, state, count) => count * 2)
 *   [resetCount]: setState('count', 0)
 * })
 *
 */
function setState (path, transform=defaultTransform) {
  return function reducer (state, action) {
    const slice = get(path, state)
    const value = isFunction(transform) ? transform(action, state, slice) : transform
    return set(path, value, state)
  }
}

function defaultTransform (action) {
  return get('payload', action)
}

/**
 * @ignore
 * @callback StateTransform
 * @param {Action} action - The action dispatched to the store
 * @param {any} state - The current Redux store state
 * @param {any} slice - The data, if any, that already exists in the state at `path`
 * @returns {any} The value to set in the path
 */

/**
 * @ignore
 * @typedef Action
 * @property {string} type - The action type
 * @property {any=} payload - Additional data provided with the action
 */

export default setState