import React from 'react'
import { Provider } from 'react-redux'
import { getHomeSprites } from '../ducks'
import { store } from '../store'
import Home from '../containers/home'
/**
 * Component to show the home container.
 */
export default class App extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    store.dispatch(getHomeSprites())
    return { initialState: store.getState(), isServer }
  }

  render () {
    return <Provider store={store}>
      <Home />
    </Provider>
  }
}
