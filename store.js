import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import ducks from './ducks'

const middlewares = [
  applyMiddleware(thunk)
]

if (window && window.devToolsExtension) {
  middlewares.push(window.devToolsExtension())
}

export const store = createStore(
  ducks.reducer,
  ducks.initialState,
  compose.apply(undefined, middlewares)
)
