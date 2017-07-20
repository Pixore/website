import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  constructor () {
    super()
    this.state = {
      open: false
    }

    this.onClick = this.onClick.bind(this)
    this.onWindowClick = this.onWindowClick.bind(this)
  }
  toggle () {
    this.setState({
      open: !this.state.open
    })
  }
  onClick (evt) {
    evt.stopPropagation()
    this.toggle()
    window.removeEventListener('click', this.onWindowClick)
  }
  onWindowClick () {
    window.removeEventListener('click', this.onWindowClick)
    this.toggle()
  }

  render () {
    const button = this.props.children[0]
    const items = this.props.children.slice(1)
    const menuClassName = classNames({
      'pxr_dropdown__menu': true,
      'pxr_dropdown__menu--active': this.state.open
    })
    if (this.state.open) {
      window.addEventListener('click', this.onWindowClick)
    }
    return (
      <div className='pxr_dropdown' onClick={this.onClick}>
        <div className='pxr_dropdown__action'>
          {button}
        </div>
        <ul className={menuClassName}>
          {items}
        </ul>
      </div>
    )
  }
}

const getItemClass = divider => !divider ? 'pxr_dropdown__item' : 'pxr_dropdown__divider'

export const Item = (props) => (
  <li className={getItemClass(props.divider)}>
    {!props.divider ? props.children : null}
  </li>
)

Item.defaultProps = {
  divider: false
}

Item.propTypes = {
  children: PropTypes.any.isRequired,
  divider: PropTypes.bool
}
