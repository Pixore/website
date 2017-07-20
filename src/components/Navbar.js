import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router'
import { connect } from 'react-redux'
import { ModalManager } from 'react-dynamic-modal'
import Login from '../modals/Login'
import {Dropdown, Item} from './Dropdown'

const getNavItem = child => <li className='pxr_navbar__item'>{child}</li>

class Navbar extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  static defaultProps = {
    user: null
  }

  render () {
    let profile
    if (this.props.user) {
      profile = (
        <li className='pxr_navbar__item'>
          <Dropdown>
            <a className='pxr_navbar__profile'>
              <img src={this.props.user.profileImage} />
              <span />
            </a>
            <Item>@{this.props.user.username}</Item>
            <Item divider />
            <Item>Settings</Item>
            <Item divider />
            <Item>
              <a href='/api/auth/logout'>Logout</a>
            </Item>
          </Dropdown>
        </li>
      )
    } else {
      profile = getNavItem(
        <a href='' className='pxr_navbar__sign-up' onClick={this.onLogin}>Login / Sign in</a>
      )
    }

    return (
      <nav className='pxr_navbar'>
        <div className='row'>
          <div className='pxr_navbar__left'>
            <a className='pxr_navbar__brand'><h2>Pixore</h2></a>
          </div>
          <ul className='pxr_navbar__right'>
            {profile}
            {getNavItem(<a className='pxr_navbar__start-button' href='/editor'>Start drawing</a>)}
          </ul>
        </div>
      </nav>
    )
  }

  onLogin (evt) {
    evt.preventDefault()
    ModalManager.open(<Login />)
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Navbar)
