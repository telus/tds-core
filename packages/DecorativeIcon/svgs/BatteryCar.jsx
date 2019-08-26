import React from 'react'
import SVGIcon from '../SVGIcon'

const BatteryCar = props => (
  <SVGIcon {...props}>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M22.5 21h-21C.673 21 0 20.327 0 19.5v-13C0 5.673.673 5 1.5 5h4a.5.5 0 0 1 .447.276L6.309 6h11.383l.361-.724A.5.5 0 0 1 18.5 5h4c.827 0 1.5.673 1.5 1.5v13c0 .827-.673 1.5-1.5 1.5zM1.5 6a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h21a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-3.691l-.361.724A.503.503 0 0 1 18 7H6a.5.5 0 0 1-.447-.276L5.191 6H1.5zM6 14v1.5a.5.5 0 0 1-1 0V14H3.5a.5.5 0 0 1 0-1H5v-1.5a.5.5 0 0 1 1 0V13h1.5a.5.5 0 0 1 0 1H6zm9.5-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1C8 4.673 8.673 4 9.5 4h5c.827 0 1.5.673 1.5 1.5v1a.5.5 0 0 1-.5.5zm-11-1a.5.5 0 0 1-.5-.5V4H3v1.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5zm17 0a.5.5 0 0 1-.5-.5V4h-1v1.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5zm-1 8h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"
        fillRule="nonzero"
      />
    </svg>
  </SVGIcon>
)

BatteryCar.displayName = 'DecorativeIcon'

export default BatteryCar
