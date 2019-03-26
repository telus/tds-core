import React from 'react'
import SVGIcon from '../SVGIcon'

const Tablet = props => (
  <SVGIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
      <defs>
        <path
          id="tablet-a"
          d="M12,20.5 C11.448,20.5 11,20.948 11,21.5 C11,22.052 11.448,22.5 12,22.5 C12.552,22.5 13,22.052 13,21.5 C13,20.948 12.552,20.5 12,20.5 Z M18.5,2 L5.5,2 C5.224,2 5,2.224 5,2.5 L5,19.5 C5,19.776 5.224,20 5.5,20 L18.5,20 C18.776,20 19,19.776 19,19.5 L19,2.5 C19,2.224 18.776,2 18.5,2 Z M18,19 L6,19 L6,3 L18,3 L18,19 Z M18.5,0 L5.5,0 C4.122,0 3,1.122 3,2.5 L3,21.5 C3,22.878 4.122,24 5.5,24 L18.5,24 C19.878,24 21,22.878 21,21.5 L21,2.5 C21,1.122 19.878,0 18.5,0 Z M20,21.5 C20,22.327 19.327,23 18.5,23 L5.5,23 C4.673,23 4,22.327 4,21.5 L4,2.5 C4,1.673 4.673,1 5.5,1 L18.5,1 C19.327,1 20,1.673 20,2.5 L20,21.5 Z"
        />
      </defs>
      <use transform="translate(-3)" xlinkHref="#tablet-a" />
    </svg>
  </SVGIcon>
)

Tablet.displayName = 'DecorativeIcon'

export default Tablet
