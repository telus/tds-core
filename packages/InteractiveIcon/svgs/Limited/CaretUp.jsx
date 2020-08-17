import React, { forwardRef } from 'react'

import LimitedInteractiveIcon, { StyledLimitedInteractiveIconSVG } from '../../Limited'

const CaretUp = forwardRef((props, ref) => (
  <LimitedInteractiveIcon {...props} animationDirection="up" ref={ref}>
    <StyledLimitedInteractiveIconSVG animationDirection="up" viewBox="0 0 24 24" {...props}>
      <path d="M17.7940812,14.8167698 C17.4424627,15.1174894 17.0896181,14.9549557 16.8868854,14.7547243 L11.9968161,10.259447 L7.11722187,14.7547243 C6.93839231,14.9185479 6.49053328,15.1800328 6.16524043,14.8167698 C5.83994757,14.4535067 6.06520964,14.0838947 6.24327169,13.9200711 L11.6348225,8.12339734 C11.8136521,7.95886755 12.1060729,7.95886755 12.2849025,8.12339734 C12.2849025,8.12410347 17.7940809,13.920071 17.7940809,13.920071 C17.9792355,14.0649573 18.1456996,14.5160501 17.7940812,14.8167698 Z" />
    </StyledLimitedInteractiveIconSVG>
  </LimitedInteractiveIcon>
))

CaretUp.displayName = 'CaretUp'

export default CaretUp
