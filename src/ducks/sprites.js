// import http from '../utils/http'
import cuid from '../utils/cuid'
import { add, update } from '../utils/store'

const ADD_SPRITE = 'ADD_SPRITE'
const PUT_NAME = 'PUT_NAME'
const ADD_SPRITES = 'ADD_SPRITES'

const initialState = {}

function reducer (state = initialState, {type, payload}) {
  switch (type) {
    case ADD_SPRITE:
      return add(state, payload)
    case ADD_SPRITES:
      return {
        ...state,
        ...payload
      }
    case PUT_NAME:
      return update(state, payload)
    default:
      return state
  }
}

export const addSprite = ({
  id = cuid(),
  frames = [],
  version = 0,
  palette = [],
  name,
  _id,
  width,
  height,
  primaryColor = 'rgba(0, 0, 0, 1)',
  secondaryColor = 'rgba(0, 0, 0, 0)'
}) => ({
  type: ADD_SPRITE,
  payload: {
    id,
    frames,
    version,
    palette,
    name,
    _id,
    width,
    height,
    primaryColor,
    secondaryColor
  }
})

// export const putName = (sprite, name) => (dispatch) => {
//   if (sprite._id) {
//     return http.sprite.putName(sprite._id, name, onPut)
//   }
//   onPut({
//     code: 0
//   })
//   return Promise.resolve({
//     code: 0
//   })

//   function onPut (result) {
//     if (result.code !== 0) {
//       return // alert
//     }
//     dispatch({
//       type: PUT_NAME,
//       payload: {
//         id: sprite.id,
//         name
//       }
//     })
//   }
// }

export const addSprites = sprites => dispatch => {
  const idNewSprites = []
  dispatch({
    type: ADD_SPRITES,
    // array => object
    payload: sprites.reduce((before, current) => {
      const {_id: id} = current
      before[id] = {
        ...current,
        id
      }
      idNewSprites.push(id)
      return before
    }, {})
  })
  return idNewSprites
}

export default {
  reducer,
  initialState,
  types: {
    ADD_SPRITE,
    PUT_NAME,
    ADD_SPRITES
  }
}
