import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { colorAccessibleGreen, colorTelusGreen } from '@tds/core-colours'
import { getCopy } from '@tds/util-helpers'

import { cartFilledBoldCopyDictionary } from './navButtonText'

import NavButtonInteractiveIcon, { StyledInteractiveIconSVG } from '../../NavButton'

const CartFilledBold = forwardRef(({ copy, variant, numItems, ...props }, ref) => {
  let a11yText = getCopy(cartFilledBoldCopyDictionary, copy).a11yText

  if (typeof a11yText === 'object') {
    if (numItems > 1) {
      a11yText = a11yText.multiple
    } else {
      a11yText = a11yText.single
    }
  }

  return (
    <NavButtonInteractiveIcon
      {...props}
      ref={ref}
      a11yText={a11yText.replace('%{numItems}', numItems)}
      variant={variant}
      copy={copy} // Passed in to satisfy styleguidist workaround
    >
      <StyledInteractiveIconSVG width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <g fillRule="evenodd">
          <path d="M17.527 18c1.393 0 2.526 1.122 2.526 2.503 0 1.379-1.133 2.503-2.526 2.503-1.394 0-2.527-1.124-2.527-2.503C15 19.122 16.133 18 17.527 18zm0 1.539a.969.969 0 00-.974.964.97.97 0 00.974.965.97.97 0 00.974-.965.97.97 0 00-.974-.964zm-9 1.929a.97.97 0 01-.974-.965c0-.533.436-.964.974-.964a.97.97 0 01.974.964.97.97 0 01-.974.965zm0-3.468c1.394 0 2.527 1.122 2.527 2.503 0 1.379-1.133 2.503-2.527 2.503C7.133 23.006 6 21.882 6 20.503 6 19.122 7.133 18 8.527 18zM2.028 2h2.625c.446 0 .838.29.975.702l.031.116.333 1.726h10.141l.06.166c.156.438.392.84.72 1.224l.171.19.4.422H6.409l1.167 5.761 12.801-1.536.474-3.283.172-.036c.48-.099.938-.285 1.368-.558l.212-.143.477-.341-.688 4.765a1.899 1.899 0 01-1.494 1.579l-.157.026-12.634 1.518c.266.392.689.65 1.163.697l.16.008h10.976c.566 0 1.027.457 1.027 1.019 0 .525-.402.959-.915 1.014l-.112.006H9.43a3.657 3.657 0 01-3.537-2.723l-.043-.185L3.812 4.037H2.028A1.024 1.024 0 011 3.019c0-.525.402-.958.916-1.013L2.028 2h2.625-2.625z" />
          <path
            d="M23.25 3.061c0 1.689-1.386 3.061-3.091 3.061-1.703 0-3.089-1.372-3.089-3.061C17.07 1.373 18.456 0 20.159 0c1.705 0 3.091 1.373 3.091 3.061z"
            fill={variant === 'inverted' ? colorTelusGreen : colorAccessibleGreen}
          />
        </g>
      </StyledInteractiveIconSVG>
    </NavButtonInteractiveIcon>
  )
})

CartFilledBold.propTypes = {
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  variant: PropTypes.oneOf(['default', 'inverted']),
  numItems: PropTypes.number.isRequired,
}

CartFilledBold.defaultProps = {
  variant: 'default',
}

CartFilledBold.displayName = 'CartFilledBold'

export default CartFilledBold
