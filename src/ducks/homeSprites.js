
import axios from 'axios'
// import {
//   addSprites
// } from '../sprites'

const ADD_SPRITE_HOME = 'ADD_SPRITE_HOME'
const ADD_SPRITES_HOME = 'ADD_SPRITES_HOME'
// const GET_SPRITES_HOME = 'GET_SPRITES_HOME'

const initialState = []

function reducer (state = initialState, {type, payload}) {
  switch (type) {
    case ADD_SPRITE_HOME:
      return state.concat([payload])
    case ADD_SPRITES_HOME:
      return state.concat(payload)
    default:
      return state
  }
}

export const addSpriteHome = sprite => ({
  type: ADD_SPRITE_HOME,
  payload: sprite
})

export const addSpritesHome = sprites => ({
  type: ADD_SPRITES_HOME,
  payload: sprites
})

export const getSpritesHome = () => dispatch => {
  dispatch({})
  return axios.get('api/api/users').then(console.log)
}

export default {
  reducer,
  initialState,
  types: {
    ADD_SPRITE_HOME,
    ADD_SPRITES_HOME
  }
}
