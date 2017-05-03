import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export class Dropdown extends Component {
  constructor () {
    super()
    this.state = {
      open: false
    }

    this.onClick = this.onClick.bind(this)
  }
  onClick (evt) {
    this.setState({
      open: !this.state.open
    })
  }
  render () {
    const button = this.props.children[0]
    const items = this.props.children.slice(1)
    const menuClassName = classNames({
      'pxr_dropdown__menu': true,
      'pxr_dropdown__menu--active': this.state.open
    })
    return <div className='pxr_dropdown'>
      <div className='pxr_dropdown__action' onClick={this.onClick}>
        {button}
      </div>
      <ul className={menuClassName}>
        {items}
      </ul>
    </div>
  }
}

const getItemClass = divider => !divider ? 'pxr_dropdown__item' : 'pxr_dropdown__divider'

export const Item = (props) => <li className={getItemClass(props.divider)}>
  {!props.divider ? props.children : null}
</li>

Item.propTypes = {
  divider: PropTypes.bool
}
