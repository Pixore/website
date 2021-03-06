import React from 'react'
import { Modal, ModalManager, Effect } from 'react-dynamic-modal'

import LoginButton from '../components/LoginButton'
const obj = {}

obj.displayName = 'Login'

obj.getDefaultProps = function () {
  return {
    onLogin: () => {}
  }
}

const style = {
  content: {
    margin: '100px auto',
    borderRadius: 3,
    background: '#494949',
    border: '1px solid #272727',
    width: 200,
    overflow: 'hidden'
  }
}

obj.onLogin = function () {
  ModalManager.close()
  this.props.onLogin()
}

obj.render = function () {
  const { onRequestClose } = this.props
  return <Modal
    style={style}
    onRequestClose={onRequestClose}
    effect={Effect.SlideFromBottom}
    >
    <div className='pxr_modal pxr_modal__login'>
      <div className='pxr_modal__header'>
        <span className='pxr_modal__header__title'>Login / Sign up</span>
        <button className='pxr_modal__header__close' onClick={ModalManager.close}>&times;</button>
      </div>
      <div className='pxr_modal__body'>
        <p>
          By connecting you agree to our terms of use.
        </p>
        <br />
        <LoginButton twitter onLogin={this.onLogin} />
      </div>
    </div>
  </Modal>
}

const Login = React.createClass(obj)

export default Login
