import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../../components/Navbar'
import ContentSprites from './ContentSprites/ContentSprites'

class Home extends React.Component {
  render () {
    return (
      <div className='pxr_content-home'>
        <Navbar />
        <h1> Home</h1>
        <ContentSprites />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    Home: state.Home
  }
}

export default connect(mapStateToProps)(Home)
