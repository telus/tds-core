import React from 'react'

const Checkmark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 30">
    <defs>
      <clipPath id="a" transform="translate(5 5)">
        <path
          d="M8.24,18.77a1,1,0,0,1-.16.18l0,0-.17.19a.94.94,0,0,1-.74.31,1,1,0,0,1-.78-.35L.27,12.21a1.14,1.14,0,0,1,0-1.51,1,1,0,0,1,1.39,0L7.1,16.44,22.31.31a1,1,0,0,1,1.4,0,1.12,1.12,0,0,1,0,1.49Z"
          fill="none"
          clipRule="evenodd"
        />
      </clipPath>
      <clipPath id="b" transform="translate(5 5)">
        <rect width="24" height="20" fill="none" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g style={{ isolation: 'isolate' }}>
        <g clipPath="url(#b)">
          <g clipPath="url(#b)">
            <g clipPath="url(#b)">
              <rect width="34" height="30" fill="transparent" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default Checkmark
