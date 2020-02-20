[![npm version](https://badge.fury.io/js/%40launchpadlab%2Flp-redux-utils.svg)](https://badge.fury.io/js/%40launchpadlab%2Flp-redux-utils)

# lp-redux-utils

A collection of utility functions for redux applications. These helpers can help reduce boilerplate when accomplishing common redux tasks. Designed to be used in tandem with [redux-actions](https://github.com/redux-utilities/redux-actions).

The key helpers in this library are:

- `setState(path)`: set a value in state when an action is dispatched.
- `unsetState(path)`: clear a value in state when an action is dispatched.
- `selectorForSlice(path)`: create a `select` function that can be used to create nested selectors for a path.

```js
import { setState, selectorForSlice } from '@launchpadlab/lp-redux-utils'
import { createAction, handleActions } from 'redux-actions'

// Generic setter from redux-actions
const setUser = createAction('SET_USER')

const reducer = handleActions(
  {
    // Set a value in state when the action is dispatched
    [setUser]: setState('stuff.user'),
  },
  {}
)

// Create selectors for nested values
const select = selectorForSlice('stuff')
const userSelector = select('user')

// userSelector(state) -> <value at stuff.user>
```

## Documentation

Documentation and usage info can be found in [docs.md](docs.md).

## Contribution

This package follows the Opex [NPM package guidelines](https://github.com/LaunchPadLab/opex/blob/master/gists/npm-package-guidelines.md). Please refer to the linked document for information on contributing, testing and versioning.
