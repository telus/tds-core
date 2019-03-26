import React from 'react'
import SVGIcon from '../SVGIcon'

const Check = props => (
  <SVGIcon {...props}>
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Mask</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <path
          d="M11,22 C4.93469565,22 0,17.0653043 0,11 C0,4.93469565 4.93469565,0 11,0 C17.0653043,0 22,4.93469565 22,11 C22,17.0653043 17.0653043,22 11,22 Z M11,0.956521739 C5.46173913,0.956521739 0.956521739,5.46173913 0.956521739,11 C0.956521739,16.5382609 5.46173913,21.0434783 11,21.0434783 C16.5382609,21.0434783 21.0434783,16.5382609 21.0434783,11 C21.0434783,5.46173913 16.5382609,0.956521739 11,0.956521739 Z M9.56521739,15.7826087 C9.44278261,15.7826087 9.32034783,15.7357391 9.2266087,15.6429565 L4.444,10.8603478 C4.25747826,10.6738261 4.25747826,10.3706087 4.444,10.184087 C4.63052174,9.99756522 4.93373913,9.99756522 5.12026087,10.184087 L9.56521739,14.628087 L16.8787826,7.31452174 C17.0653043,7.128 17.3685217,7.128 17.5550435,7.31452174 C17.7415652,7.50104348 17.7415652,7.80426087 17.5550435,7.99078261 L9.90286957,15.6429565 C9.81008696,15.7357391 9.68765217,15.7826087 9.56521739,15.7826087 Z"
          id="path-1"
        />
      </defs>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="icons/success" transform="translate(-1.000000, -1.000000)">
          <g id="check-1" transform="translate(1.000000, 1.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1" />
            </mask>
            <use id="Mask" fillRule="nonzero" xlinkHref="#path-1" />
          </g>
        </g>
      </g>
    </svg>
  </SVGIcon>
)

Check.displayName = 'DecorativeIcon'

export default Check
