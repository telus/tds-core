import React, { forwardRef } from 'react'

import LimitedInteractiveIcon, { StyledLimitedInteractiveIconSVG } from '../../Limited'

const CaretDown = forwardRef((props, ref) => (
  <LimitedInteractiveIcon {...props} ref={ref}>
    <StyledLimitedInteractiveIconSVG animationDirection="down" viewBox="0 0 24 24" {...props}>
      <path d="M17.7940812,9.18323023 C17.4424627,8.8825106 17.0896181,9.04504427 16.8868854,9.24527574 L11.9968161,13.740553 L7.11722187,9.24527573 C6.93839231,9.08145209 6.49053328,8.81996721 6.16524043,9.18323023 C5.83994757,9.54649326 6.06520964,9.91610528 6.24327169,10.0799289 L11.6348225,15.8766027 C11.8136521,16.0411324 12.1060729,16.0411324 12.2849025,15.8766027 C12.2849025,15.8758965 17.7940809,10.079929 17.7940809,10.079929 C17.9792355,9.93504267 18.1456996,9.48394985 17.7940812,9.18323023 Z" />
    </StyledLimitedInteractiveIconSVG>
  </LimitedInteractiveIcon>
))

CaretDown.displayName = 'CaretDown'

export default CaretDown
