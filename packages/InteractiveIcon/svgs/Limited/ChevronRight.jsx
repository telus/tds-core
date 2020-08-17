import React, { forwardRef } from 'react'

import LimitedInteractiveIcon, { StyledLimitedInteractiveIconSVG } from '../../Limited'

const ChevronRight = forwardRef((props, ref) => (
  <LimitedInteractiveIcon {...props} ref={ref}>
    <StyledLimitedInteractiveIconSVG animationDirection="right" viewBox="0 0 24 24" {...props}>
      <path d="M9.18323023,17.7940812 C8.8825106,17.4424627 9.04504427,17.0896181 9.24527574,16.8868854 L13.740553,11.9968161 L9.24527573,7.11722187 C9.08145209,6.93839231 8.81996721,6.49053328 9.18323023,6.16524043 C9.54649326,5.83994757 9.91610528,6.06520964 10.0799289,6.24327169 L15.8766027,11.6348225 C16.0411324,11.8136521 16.0411324,12.1060729 15.8766027,12.2849025 C15.8758965,12.2849025 10.079929,17.7940809 10.079929,17.7940809 C9.93504267,17.9792355 9.48394985,18.1456996 9.18323023,17.7940812 Z" />
    </StyledLimitedInteractiveIconSVG>
  </LimitedInteractiveIcon>
))

ChevronRight.displayName = 'ChevronRight'

export default ChevronRight
