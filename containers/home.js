import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
/**
 * Home component to show basic redux usage with nextjs.
 */
const Home = ({sprites, homeSprites}) => <Layout title='Home page'>
  Home, {sprites.length} - {homeSprites.length}
</Layout>

Home.propsType = {
  homeSprites: PropTypes.array.isRequired,
  sprites: PropTypes.array.isRequired
}

function mapStateToProps (state) {
  return {
    homeSprites: state.homeSprites,
    sprites: state.sprites
  }
}

export default connect(mapStateToProps)(Home)
