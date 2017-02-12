import { combineReducers } from 'redux'

import homeSprites from './homeSprites'
// import palettes from './palettes'
import sprites from './sprites'
// import user from './user'

export * from './homeSprites'
// export * from './palettes'
export * from './sprites'
// export * from './user'

export default {
  reducer: combineReducers({
    homeSprites: homeSprites.reducer,
    // palettes: palettes.reducer,
    sprites: sprites.reducer // ,
    // user: user.reducer
  }),
  initialState: {
    homeSprites: homeSprites.reducer,
    // palettes: palettes.initialState,
    sprites: sprites.initialState // ,
    // user: user.initialState
  }
}
