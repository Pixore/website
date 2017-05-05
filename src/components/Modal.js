import React from 'react'
// import http from '../utils/http'
import Preview from './Preview'

export default function Modal ({history, match}) {
  const back = (evt) => {
    evt.stopPropagation()
    history.goBack()
  }
  return (
    <div
      onClick={back}
      className='pxr_modal__backdrop'>
      <div className='pxr_modal--preview'>
        <button type='button' className='pxr_modal__close' onClick={back}>
          &times;
        </button>
        <Preview id={match.params.id} />
      </div>
    </div>
  )
}
