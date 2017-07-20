import React from 'react'
import { connect } from 'react-redux'
import { CSSGrid, measureItems, makeResponsive, layout as layouts } from 'react-stonecutter'

import http from '../../../utils/http'
import Sprite from './Sprite/Sprite'

import {
  addSprites,
  addSpritesHome
} from '../../../ducks'

const Grid = makeResponsive(measureItems(CSSGrid, {measureImages: true}), {
  maxWidth: 1920,
  minPadding: 100
})

const ContentSprites = React.createClass({
  componentDidMount () {
    http.get('/api/sprites/public').then(sprites => {
      this.props.addSpritesHome(
        this.props.addSprites(sprites)
      )
    })
  },
  render () {
    return (
      <div className='pxr-content-sprites'>
        <Grid
          component='ul'
          className='pxr_grid'
          duration={800}
          columnWidth={250}
          gutterWidth={5}
          gutterHeight={5}
          layout={layouts.pinterest}
        >
          {
            this.props.filter.map(index => {
              const sprite = this.props.sprites[index]
              return <li className='pxr_grid__item' key={index}><Sprite data={sprite} /></li>
            })
          }
        </Grid>
      </div>
    )
  }
})

function mapStateToProps (state) {
  return {
    sprites: state.sprites,
    filter: state.homeSprites
  }
}

export default connect(
  mapStateToProps,
  {addSprites, addSpritesHome}
)(ContentSprites)
