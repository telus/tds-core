import React, { useEffect } from 'react'
import SVGIcon from '../SVGIcon'

import { deprecate } from '../../../shared/utils/warn'

const LocationRemove = props => {
  useEffect(() => {
    deprecate(
      '@tds/core-decorative-icon',
      'The LocationRemove component is deprecated. Please use another icon from the Decorative icon sets instead and if no alternatives suffice, please submit a new icon request on our Github template https://github.com/telus/tds-core/issues/new?template=icon_template.md.'
    )
  }, [])
  return (
    <SVGIcon {...props}>
      <svg width="18" height="24" viewBox="0 0 18 24">
        <path
          fillRule="evenodd"
          transform="translate(-3)"
          d="M11.9995,9.2075 L10.353,10.854 C10.256,10.951 10.128,11 10,11 C9.872,11 9.744,10.951 9.646,10.854 C9.451,10.659 9.451,10.342 9.646,10.147 L11.2925,8.5005 L9.646,6.854 C9.451,6.659 9.451,6.342 9.646,6.147 C9.841,5.952 10.158,5.952 10.353,6.147 L11.9995,7.7935 L13.646,6.147 C13.841,5.952 14.158,5.952 14.353,6.147 C14.548,6.342 14.548,6.659 14.353,6.854 L12.7065,8.5005 L14.353,10.147 C14.548,10.342 14.548,10.659 14.353,10.854 C14.256,10.951 14.128,11 14,11 C13.872,11 13.744,10.951 13.646,10.854 L11.9995,9.2075 Z M12,24 C11.884,24 11.767,23.959 11.673,23.878 C11.339,23.59 3.5,16.718 3.5,8.5 C3.5,3.813 7.313,0 12,0 C16.687,0 20.5,3.813 20.5,8.5 C20.5,16.718 12.661,23.59 12.327,23.878 C12.233,23.959 12.116,24 12,24 Z M12,1 C7.864,1 4.5,4.364 4.5,8.5 C4.5,15.342 10.516,21.426 12,22.822 C13.483,21.425 19.5,15.334 19.5,8.5 C19.5,4.364 16.136,1 12,1 Z M12,14 C8.968,14 6.5,11.533 6.5,8.5 C6.5,5.467 8.968,3 12,3 C15.032,3 17.5,5.467 17.5,8.5 C17.5,11.533 15.032,14 12,14 Z M12,4 C9.519,4 7.5,6.019 7.5,8.5 C7.5,10.981 9.519,13 12,13 C14.481,13 16.5,10.981 16.5,8.5 C16.5,6.019 14.481,4 12,4 Z"
        />
      </svg>
    </SVGIcon>
  )
}

LocationRemove.displayName = 'DecorativeIcon'

export default LocationRemove
