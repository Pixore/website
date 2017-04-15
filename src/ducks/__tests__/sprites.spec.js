import { expect } from 'chai'

import duck from '../sprites'

const { initialState, types } = duck

it('initialState is an empty array', () => {
  expect(initialState).to.deep.equal({})
})

it('types name', () => {
  const keys = Object.keys(types)
  for (let i = 0; i < keys.length; i++) {
    let type = keys[i]
    expect(type === keys[i]).to.be.true
  }
})
