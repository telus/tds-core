import React from 'react'
import SVGIcon from '../SVGIcon'

const Lightbulb = props => (
  <SVGIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="16"
      height="24"
      viewBox="0 0 16 24"
    >
      <defs>
        <path
          id="lightbulb-a"
          d="M13.768,18 L10.232,18 C9.088,18 8.109,17.187 7.851,16.023 C7.706,15.367 7.458,14.8 7.093,14.291 C6.903,14.025 6.704,13.758 6.503,13.488 C5.33,11.91 4,10.123 4,8 C4,3.589 7.589,0 12,0 C16.411,0 20,3.589 20,8 C20,10.123 18.67,11.91 17.497,13.488 C17.296,13.758 17.097,14.025 16.907,14.291 C16.542,14.801 16.294,15.367 16.149,16.023 C15.891,17.188 14.912,18 13.768,18 Z M12,1 C8.14,1 5,4.141 5,8 C5,9.792 6.172,11.367 7.306,12.891 C7.511,13.166 7.713,13.439 7.907,13.709 C8.345,14.322 8.656,15.027 8.828,15.807 C8.983,16.51 9.561,17 10.232,17 L13.768,17 C14.439,17 15.017,16.51 15.172,15.807 C15.344,15.028 15.654,14.323 16.093,13.709 C16.287,13.438 16.489,13.166 16.694,12.891 C17.828,11.367 19,9.792 19,8 C19,4.141 15.86,1 12,1 Z M14.5,20 L9.5,20 C9.224,20 9,19.776 9,19.5 C9,19.224 9.224,19 9.5,19 L14.5,19 C14.776,19 15,19.224 15,19.5 C15,19.776 14.776,20 14.5,20 Z M14.5,22 L9.5,22 C9.224,22 9,21.776 9,21.5 C9,21.224 9.224,21 9.5,21 L14.5,21 C14.776,21 15,21.224 15,21.5 C15,21.776 14.776,22 14.5,22 Z M13.5,24 L10.5,24 C10.224,24 10,23.776 10,23.5 C10,23.224 10.224,23 10.5,23 L13.5,23 C13.776,23 14,23.224 14,23.5 C14,23.776 13.776,24 13.5,24 Z"
        />
      </defs>
      <use transform="translate(-4)" xlinkHref="#lightbulb-a" />
    </svg>
  </SVGIcon>
)

export default Lightbulb
