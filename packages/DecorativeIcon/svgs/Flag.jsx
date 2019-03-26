import React from 'react'
import SVGIcon from '../SVGIcon'

const Flag = props => (
  <SVGIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="18"
      height="24"
      viewBox="0 0 18 24"
    >
      <defs>
        <path
          id="flag-a"
          d="M4,24 C3.724,24 3.5,23.776 3.5,23.5 L3.5,0.5 C3.5,0.224 3.724,0 4,0 C4.276,0 4.5,0.224 4.5,0.5 L4.5,23.5 C4.5,23.776 4.276,24 4,24 Z M13.5,3 L13.5,6.5 C13.5,6.776 13.276,7 13,7 C12.724,7 12.5,6.776 12.5,6.5 L12.5,2.5 L12.5,1.5 C12.5,1.224 12.276,1 12,1 L4,1 C3.724,1 3.5,0.776 3.5,0.5 C3.5,0.224 3.724,0 4,0 L12,0 C12.827,0 13.5,0.673 13.5,1.5 L13.5,2 L20,2 C20.276,2 20.5,2.224 20.5,2.5 L20.5,13.5 C20.5,13.776 20.276,14 20,14 L14,14 C13.173,14 12.5,13.327 12.5,12.5 C12.5,12.224 12.276,12 12,12 L4,12 C3.724,12 3.5,11.776 3.5,11.5 C3.5,11.224 3.724,11 4,11 L12,11 C12.827,11 13.5,11.673 13.5,12.5 C13.5,12.776 13.724,13 14,13 L19.5,13 L19.5,3 L13.5,3 Z"
        />
      </defs>
      <use transform="translate(-3)" xlinkHref="#flag-a" />
    </svg>
  </SVGIcon>
)

Flag.displayName = 'DecorativeIcon'

export default Flag
