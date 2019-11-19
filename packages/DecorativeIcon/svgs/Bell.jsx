import React, { useEffect } from 'react'
import SVGIcon from '../SVGIcon'

import { deprecate } from '../../../shared/utils/warn'

const Bell = props => {
  useEffect(() => {
    deprecate(
      '@tds/core-decorative-icon',
      'The Bell component is deprecated. Please use another icon from the Decorative icon sets instead and if no alternatives suffice, please submit a new icon request on our Github template https://github.com/telus/tds-core/issues/new?template=icon_template.md.'
    )
  }, [])
  return (
    <SVGIcon {...props}>
      <svg width="20" height="24" viewBox="0 0 20 24">
        <path
          fillRule="evenodd"
          transform="translate(-2)"
          d="M9.55048897,21 L2.5,21 C2.32,21 2.153,20.903 2.064,20.746 C1.976,20.59 1.978,20.397 2.071,20.243 L3.789,17.381 C4.581,16.06 5,14.548 5,13.007 L5,10.5 C5,7.33564211 7.11197889,4.65406067 10,3.79119235 L10,2 C10,0.897 10.897,0 12,0 C13.103,0 14,0.897 14,2 L14,3.79119235 C16.8880211,4.65406067 19,7.33564211 19,10.5 L19,13.007 C19,14.548 19.419,16.06 20.211,17.381 L21.929,20.243 C22.022,20.397 22.024,20.59 21.936,20.746 C21.847,20.903 21.68,21 21.5,21 L14.451511,21 C14.4849288,21.1636443 14.502,21.3311656 14.502,21.5 C14.5,22.879 13.379,24 12,24 C10.621,24 9.5,22.879 9.5,21.5 C9.5,21.3311656 9.51707117,21.1636443 9.55048897,21 Z M10.5874,21 C10.5308928,21.1596088 10.501,21.3306464 10.501,21.5 C10.501,22.327 11.174,23 12.001,23 C12.828,23 13.501,22.327 13.501,21.5 C13.501,21.3306464 13.4711072,21.1596088 13.4146,21 L10.5874,21 Z M11,3.57125664 C11.3266789,3.52430187 11.6605619,3.5 12,3.5 C12.3394381,3.5 12.6733211,3.52430187 13,3.57125664 L13,2 C13,1.448 12.552,1 12,1 C11.448,1 11,1.448 11,2 L11,3.57125664 Z M3.383,20 L20.617,20 L19.353,17.895 C18.468,16.419 18,14.729 18,13.007 L18,10.5 C18,7.191 15.309,4.5 12,4.5 C8.691,4.5 6,7.191 6,10.5 L6,13.007 C6,14.729 5.532,16.419 4.646,17.895 L3.383,20 Z"
        />
      </svg>
    </SVGIcon>
  )
}

Bell.displayName = 'DecorativeIcon'

export default Bell
