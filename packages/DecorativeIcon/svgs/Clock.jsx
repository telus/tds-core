import React from 'react'
import SVGIcon from '../SVGIcon'

const Clock = props => (
  <SVGIcon {...props}>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      style={{ enableBackground: 'new 0 0 24 24' }}
      xmlSpace="preserve"
    >
      <g>
        <path
          style={{ fill: '#4B286D' }}
          d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22.9C6,22.9,1.1,18,1.1,12S6,1.1,12,1.1
        S22.9,6,22.9,12S18,22.9,12,22.9z"
        />
        <path
          style={{ fill: '#4B286D' }}
          d="M16.5,11.5h-4V3.8c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5V12c0,0.3,0.2,0.5,0.5,0.5h4.5
        c0.3,0,0.5-0.2,0.5-0.5S16.8,11.5,16.5,11.5z"
        />
      </g>
    </svg>
  </SVGIcon>
)

export default Clock
