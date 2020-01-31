import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { getCopy } from '@tds/util-helpers'

import { cartEmptyBoldCopyDictionary } from './navButtonText'

import NavButtonInteractiveIcon, { StyledInteractiveIconSVG } from '../../NavButton'

const CartEmptyBold = forwardRef(({ copy, ...props }, ref) => (
  <NavButtonInteractiveIcon
    {...props}
    ref={ref}
    a11yText={getCopy(cartEmptyBoldCopyDictionary, copy).a11yText}
    copy={copy} // Passed in to satisfy styleguidist workaround
  >
    <StyledInteractiveIconSVG width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M17.526 18c1.394 0 2.527 1.123 2.527 2.504 0 1.379-1.133 2.503-2.527 2.503-1.393 0-2.526-1.124-2.526-2.503C15 19.123 16.133 18 17.526 18zm0 1.539a.97.97 0 00-.974.965.97.97 0 00.974.964.97.97 0 00.975-.964.97.97 0 00-.975-.965zm-9 1.929a.97.97 0 01-.974-.964.97.97 0 01.974-.965.97.97 0 01.975.965.97.97 0 01-.975.964zm0-3.468c1.394 0 2.527 1.123 2.527 2.504 0 1.379-1.133 2.503-2.527 2.503C7.133 23.007 6 21.883 6 20.504 6 19.123 7.133 18 8.526 18zM2.025 2h2.627c.446 0 .838.284.975.691l.031.114.36 1.745h16.137c.297 0 .578.125.774.343.17.189.26.432.254.681l-.011.125-.781 5.466a1.878 1.878 0 01-1.496 1.553l-.158.025-12.596 1.553c.268.41.683.68 1.137.73l.152.008h10.975c.567 0 1.027.451 1.027 1.004 0 .517-.4.944-.915.998l-.112.006H9.43c-1.63 0-3.119-1.185-3.538-2.786l-.044-.187L3.812 4.008H2.025C1.46 4.008 1 3.558 1 3.004c0-.516.4-.943.914-.998L2.025 2h2.627-2.627zm18.948 4.559H6.429l1.145 5.712 12.804-1.507.595-4.205z"
        fillRule="evenodd"
      />
    </StyledInteractiveIconSVG>
  </NavButtonInteractiveIcon>
))

CartEmptyBold.propTypes = {
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string.isRequired,
    }),
  ]).isRequired,
}

CartEmptyBold.displayName = 'CartEmptyBold'

export default CartEmptyBold
