import './style/index.scss'

import { $ } from './utils/dom'

import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'

import { store } from './store'

import Tooltip from './components/Tooltip'
import Router from './Router'
import http from './utils/http'

import {
  // setCurrentPalette,
  // addPalettes,
  setUser
} from './ducks'

window.hasVal = (val) => {
  return typeof val !== 'undefined' && val !== null
}

window.$ = $
window.$window = $(window)

const $window = $(window)
$window.on('keydown.general', evt => {
  window.CTRL_KEY = evt.ctrlKey
  window.ALT_KEY = evt.altKey
}).on('keyup.general', evt => {
  window.CTRL_KEY = evt.ctrlKey
  window.ALT_KEY = evt.altKey
})

http.get('/api/palettes').then(function (result) {
  // if (result.code !== 0 || !result.data) {
  //   return
  // }
  // store.dispatch(addPalettes(result.data))
  // store.dispatch(setCurrentPalette(0))
})

http.get('/api/auth/whoami').then(function (user) {
  // console.log(user)
  store.dispatch(setUser(user))
})

ReactDOM.render((
        // <Route path='/editor' component={Editor} />
  <div className='root rdl-dark'>
    <Tooltip />
    <Provider store={store}>
      <Router />
    </Provider>
  </div>
), document.getElementById('root'))
