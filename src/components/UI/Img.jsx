import React from 'react'

export const Img = ({ ruta, info, id }) => {
  return (
      <img src = { ruta} alt = { info } id = { id }/>
  )
}
