import React from 'react'
import SVGIcon from '../SVGIcon'

const ArrowDown = props => (
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
          id="arrowdown-a"
          d="M21.353125,14.853 L12.353125,23.853 C12.307125,23.899 12.251125,23.936 12.190125,23.961 C12.155125,23.976 12.119125,23.977 12.082125,23.983 C12.054125,23.988 12.029125,24 11.999125,24 C11.961125,24 11.928125,23.986 11.892125,23.978 C11.865125,23.972 11.837125,23.973 11.811125,23.962 C11.748125,23.936 11.691125,23.898 11.644125,23.851 L2.646125,14.853 C2.452125,14.658 2.452125,14.341 2.646125,14.146 C2.841125,13.951 3.159125,13.951 3.353125,14.146 L11.499125,22.293 L11.499125,0.5 C11.499125,0.224 11.724125,0 11.999125,0 C12.275125,0 12.499125,0.224 12.499125,0.5 L12.499125,22.293 L20.646125,14.146 C20.744125,14.049 20.872125,14 20.999125,14 C21.127125,14 21.255125,14.049 21.353125,14.146 C21.548125,14.341 21.548125,14.658 21.353125,14.853 Z"
        />
      </defs>
      <use fillRule="evenodd" transform="translate(-2)" xlinkHref="#arrowdown-a" />
    </svg>
  </SVGIcon>
)
export default ArrowDown
