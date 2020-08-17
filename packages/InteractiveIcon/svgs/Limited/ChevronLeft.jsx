import React, { forwardRef } from 'react'

import LimitedInteractiveIcon, { StyledLimitedInteractiveIconSVG } from '../../Limited'

const ChevronLeft = forwardRef((props, ref) => (
  <LimitedInteractiveIcon {...props} ref={ref}>
    <StyledLimitedInteractiveIconSVG animationDirection="left" viewBox="0 0 24 24" {...props}>
      <path d="M14.8167698,17.7940812 C14.5160501,18.1456996 14.0649573,17.9792355 13.920071,17.7940809 C13.920071,17.7940809 8.12410347,12.2849025 8.12339734,12.2849025 C7.95886755,12.1060729 7.95886755,11.8136521 8.12339734,11.6348225 L13.9200711,6.24327169 C14.0838947,6.06520964 14.4535067,5.83994757 14.8167698,6.16524043 C15.1800328,6.49053328 14.9185479,6.93839231 14.7547243,7.11722187 L10.259447,11.9968161 L14.7547243,16.8868854 C14.9549557,17.0896181 15.1174894,17.4424627 14.8167698,17.7940812 Z" />
    </StyledLimitedInteractiveIconSVG>
  </LimitedInteractiveIcon>
))

ChevronLeft.displayName = 'ChevronLeft'

export default ChevronLeft
