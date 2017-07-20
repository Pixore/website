import React from 'react'
import PropTypes from 'prop-types'

export default function Image ({ color }) {
  return (
    <div style={{
      width: '100%',
      height: 400,
      background: color
    }} />
  )
}

Image.propTypes = {
  color: PropTypes.string.isRequired
}
