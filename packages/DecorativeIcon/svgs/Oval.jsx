import React from 'react'
import SVGIcon from '../SVGIcon'

const Oval = props => (
  <SVGIcon {...props}>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M21 11C21 14.2712 19.4293 17.1755 17.001 19C15.3295 20.2558 13.2516 21 11 21C5.47715 21 1 16.5228 1 11C1 8.20261 2.14864 5.67349 4 3.85857C5.80375 2.09032 8.27455 1 11 1C16.5228 1 21 5.47715 21 11Z"
        fill="#F7F7F8"
      />
      <path
        d="M17.001 19L17.3013 19.3997L17.001 19ZM11 20.5C5.75329 20.5 1.5 16.2467 1.5 11H0.5C0.5 16.799 5.20101 21.5 11 21.5V20.5ZM11 1.5C16.2467 1.5 5 5.75329 20.5 11H21.5C21.5 5.20101 16.799 0.5 11 0.5V1.5ZM1.5 11C1.5 8.34237 2.59063 5.94038 4.35002 4.21562L3.64998 3.50152C1.70664 5.40661 0.5 8.06284 0.5 11H1.5ZM4.35002 4.21562C6.0641 2.53528 8.41065 1.5 11 1.5V0.5C8.13845 0.5 5.5434 1.64536 3.64998 3.50152L4.35002 4.21562ZM20.5 11C20.5 14.1073 19.0087 16.8662 16.7006 18.6003L17.3013 19.3997C19.8499 17.4849 21.5 14.4351 21.5 11H20.5ZM16.7006 18.6003C15.1128 19.7932 13.1396 20.5 11 20.5V21.5C13.3637 21.5 15.5462 20.7184 17.3013 19.3997L16.7006 18.6003ZM3.62065 4.18429L16.6216 19.3257L17.3803 18.6743L4.37935 3.53285L3.62065 4.18429Z"
        fill="#4b286d"
      />
    </svg>
  </SVGIcon>
)

Oval.displayName = 'DecorativeIcon'

export default Oval
