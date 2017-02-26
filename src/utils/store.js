export const add = (state, payload) => ({
  ...state,
  [payload.id]: payload
})

export const update = (state, payload) => ({
  ...state,
  [payload.id]: {
    ...state[payload.id],
    ...payload
  }
})
