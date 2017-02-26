import { combineReducers } from 'redux'

import homeSprites from './homeSprites'
import sprites from './sprites'
import user from './user'

export * from './homeSprites'
export * from './sprites'
export * from './user'

export default {
  reducer: combineReducers({
    homeSprites: homeSprites.reducer,
    sprites: sprites.reducer,
    user: user.reducer
  }),
  initialState: {
    homeSprites: homeSprites.initialState,
    sprites: sprites.initialState,
    user: user.initialState
  }
}
