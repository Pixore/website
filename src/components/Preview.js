import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Preview extends React.Component {
  render () {
    const {
      preview,
      // id,
      name
    } = this.props.current

    return (
      <div
        className='pxr_preview'
        style={{
          backgroundImage: `url('${preview}')`
        }}>
        <h2>{name}</h2>
        {/* <div className='pxr_preview__content__image'>
        <img className='pxr_preview__image' src={preview} alt={name} />
        </div> */}
      </div>
    )
  }
}

Preview.propTypes = {
  current: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    preview: PropTypes.string
  }).isRequired
}

export default connect(
  function mapStateToProps (state, props) {
    return {
      current: state.sprites[props.id]
    }
  }
)(Preview)
