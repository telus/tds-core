import React from 'react'
import SVGIcon from '../SVGIcon'

const Files = props => (
  <SVGIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20"
      height="24"
      viewBox="0 0 20 24"
    >
      <defs>
        <path
          id="files-a"
          d="M20.5,23 L6.5,23 L6.5,21 L18,21 C18.276,21 18.5,20.776 18.5,20.5 L18.5,4 L20.5,4 L20.5,23 Z M3.5,7 L9,7 C9.276,7 9.5,6.776 9.5,6.5 L9.5,1 L17.5,1 L17.5,20 L3.5,20 L3.5,7 Z M8.5,1.707 L8.5,6 L4.207,6 L8.5,1.707 Z M21,3 L18.5,3 L18.5,0.5 C18.5,0.224 18.276,0 18,0 L9,0 C8.933,0 8.868,0.014 8.807,0.039 C8.778,0.051 8.756,0.073 8.73,0.09 C8.702,0.108 8.67,0.122 8.646,0.146 L2.646,6.146 C2.623,6.169 2.61,6.2 2.592,6.227 C2.574,6.254 2.552,6.277 2.539,6.307 C2.514,6.368 2.5,6.433 2.5,6.5 L2.5,20.5 C2.5,20.776 2.724,21 3,21 L5.5,21 L5.5,23.5 C5.5,23.776 5.724,24 6,24 L21,24 C21.276,24 21.5,23.776 21.5,23.5 L21.5,3.5 C21.5,3.224 21.276,3 21,3 L21,3 Z"
        />
      </defs>
      <use fillRule="evenodd" transform="translate(-2)" xlinkHref="#files-a" />
    </svg>
  </SVGIcon>
)

Files.displayName = 'DecorativeIcon'

export default Files
