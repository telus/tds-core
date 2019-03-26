import React from 'react'
import SVGIcon from '../SVGIcon'

const Email = props => (
  <SVGIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="18"
      viewBox="0 0 24 18"
    >
      <defs>
        <path
          id="email-a"
          d="M2.103,4.206 L21.896,4.206 C22.483,4.206 22.961,4.684 22.961,5.27 L22.961,6.554 L12.778,12.46 C12.299,12.737 11.702,12.737 11.223,12.461 L1.039,6.554 L1.039,5.27 C1.039,4.684 1.517,4.206 2.103,4.206 M13.298,13.36 L22.961,7.756 L22.961,18.729 C22.961,19.316 22.483,19.794 21.896,19.794 L2.103,19.794 C1.517,19.794 1.039,19.316 1.039,18.729 L1.039,7.756 L10.703,13.361 C11.492,13.815 12.51,13.813 13.298,13.36 M21.896,3.167 L2.103,3.167 C0.943,3.167 0,4.11 0,5.27 L0,18.729 C0,19.89 0.943,20.833 2.103,20.833 L21.896,20.833 C23.057,20.833 24,19.89 24,18.729 L24,5.27 C24,4.11 23.057,3.167 21.896,3.167"
        />
      </defs>
      <use fillRule="evenodd" transform="translate(0 -3)" xlinkHref="#email-a" />
    </svg>
  </SVGIcon>
)

Email.displayName = 'DecorativeIcon'

export default Email
