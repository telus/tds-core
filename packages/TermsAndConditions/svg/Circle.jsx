import React from 'react'

import { colorTelusPurple } from '@tds/core-colours'

const Circle = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M12,0 C5.373,0 0,5.373 0,12 C0,18.627 5.373,24 12,24 C18.627,24 24,18.627 24,12 C24,5.373 18.627,0 12,0 M12,1 C18.065,1 23,5.935 23,12 C23,18.065 18.065,23 12,23 C5.935,23 1,18.065 1,12 C1,5.935 5.935,1 12,1"
      fill={colorTelusPurple}
    />
  </svg>
)

export default Circle
