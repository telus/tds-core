import React from 'react'
import SVGIcon from '../SVGIcon'

const OnDemand = props => (
  <SVGIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <path
          id="ondemand-a"
          d="M12,23.5 C5.659,23.5 0.5,18.341 0.5,12 C0.5,5.659 5.659,0.5 12,0.5 C18.341,0.5 23.5,5.659 23.5,12 C23.5,18.341 18.341,23.5 12,23.5 Z M12,1.5 C6.21,1.5 1.5,6.21 1.5,12 C1.5,17.79 6.21,22.5 12,22.5 C17.79,22.5 22.5,17.79 22.5,12 C22.5,6.21 17.79,1.5 12,1.5 Z M8,18.5 C7.915,18.5 7.83,18.479 7.753,18.435 C7.597,18.346 7.5,18.18 7.5,18 L7.5,6 C7.5,5.82 7.597,5.654 7.753,5.565 C7.91,5.476 8.102,5.478 8.257,5.571 L18.257,11.571 C18.407,11.661 18.5,11.824 18.5,12 C18.5,12.176 18.408,12.338 18.257,12.429 L8.257,18.429 C8.178,18.476 8.089,18.5 8,18.5 Z M8.5,6.883 L8.5,17.116 L17.028,12 L8.5,6.883 Z"
        />
      </defs>
      <use fillRule="evenodd" xlinkHref="#ondemand-a" />
    </svg>
  </SVGIcon>
)

OnDemand.displayName = 'DecorativeIcon'

export default OnDemand
