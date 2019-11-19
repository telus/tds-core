import React, { useEffect } from 'react'
import SVGIcon from '../SVGIcon'

import { deprecate } from '../../../shared/utils/warn'

const Download = props => {
  useEffect(() => {
    deprecate(
      '@tds/core-decorative-icon',
      'The Download component is deprecated. Please use another icon from the Decorative icon sets instead and if no alternatives suffice, please submit a new icon request on our Github template https://github.com/telus/tds-core/issues/new?template=icon_template.md.'
    )
  }, [])
  return (
    <SVGIcon {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M23.505,15.8693 C23.778,15.8693 24,16.0903 24,16.3633 L24,21.9183 C24,23.0663 23.067,24.0003 21.918,24.0003 L2.082,24.0003 C0.934,24.0003 -9.09494702e-13,23.0663 -9.09494702e-13,21.9183 L-9.09494702e-13,16.3633 C-9.09494702e-13,16.0903 0.221,15.8693 0.495,15.8693 C0.769,15.8693 0.99,16.0903 0.99,16.3633 L0.99,21.9183 C0.99,22.5203 1.48,23.0113 2.082,23.0113 L21.918,23.0113 C22.521,23.0113 23.011,22.5203 23.011,21.9183 L23.011,16.3633 C23.011,16.0903 23.232,15.8693 23.505,15.8693 Z M11.6642,16.7277 L6.5062,11.9667 C6.3062,11.7817 6.2932,11.4687 6.4792,11.2677 C6.6642,11.0667 6.9772,11.0547 7.1782,11.2397 L11.5052,15.2337 L11.5052,0.4947 C11.5052,0.2217 11.7262,-0.0003 12.0002,-0.0003 C12.2732,-0.0003 12.4952,0.2217 12.4952,0.4947 L12.4952,15.2337 L16.8222,11.2397 C17.0212,11.0547 17.3362,11.0687 17.5202,11.2677 C17.7062,11.4687 17.6932,11.7817 17.4922,11.9667 L12.3362,16.7277 C12.3132,16.7487 12.2862,16.7587 12.2602,16.7747 C12.2352,16.7897 12.2122,16.8107 12.1852,16.8217 C12.1252,16.8457 12.0632,16.8587 12.0002,16.8587 C11.9372,16.8587 11.8752,16.8457 11.8152,16.8217 C11.7882,16.8107 11.7652,16.7897 11.7402,16.7747 C11.7142,16.7587 11.6872,16.7487 11.6642,16.7277 Z"
        />
      </svg>
    </SVGIcon>
  )
}

Download.displayName = 'DecorativeIcon'

export default Download
