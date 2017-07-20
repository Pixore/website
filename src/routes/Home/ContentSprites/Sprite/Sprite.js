import React from 'react'

import { Link } from 'react-router-dom'

export default React.createClass({
  render () {
    return (
      <div className='sprite'>
        <div className='pxr_grid__header'>
          <a>
            <img src={this.props.data.user.profileImage} />
          </a>
          <span>
            {this.props.data.user.displayName}
            <br />
            <div className='username'>{this.props.data.user.username}</div>
          </span>
        </div>
        <Link to={{pathname: '/s/' + this.props.data._id, state: { modal: true }}}>
          <img src={this.props.data.preview} />
        </Link>
        <div className='footer'>
          {this.props.data.name}
        </div>
      </div>
    )
  }
})
