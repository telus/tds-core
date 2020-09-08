import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { colorShark, colorTelusPurple, colorWhite, colorAccessibleGreen } from '@tds/core-colours'

import animations from './shared/animations'
import StyledInteractiveIconSVG from './shared/StyledInteractiveIconSVG'

export const StyledLimitedInteractiveIconSVG = styled(StyledInteractiveIconSVG)(
  ({ animationDirection, forceHover }) => ({
    transition: 'transform 150ms ease-in-out',
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
    [`:hover, :focus, :active`]: {
      transform: `translate${
        animationDirection === 'up' || animationDirection === 'down' ? 'Y' : 'X'
      }(${animationDirection === 'up' || animationDirection === 'left' ? '-' : ''}4px)`,
    },
    ...(forceHover && {
      transform: `translate${
        animationDirection === 'up' || animationDirection === 'down' ? 'Y' : 'X'
      }(${animationDirection === 'up' || animationDirection === 'left' ? '-' : ''}4px)`,
    }),
  }),
  animations.reduceMotion
)

const getTheme = variant => {
  if (variant === 'basic') {
    return {
      backgroundColor: 'transparent',
      iconColor: colorShark,
    }
  }
  if (variant === 'alternative') {
    return {
      backgroundColor: 'transparent',
      iconColor: colorTelusPurple,
    }
  }
  if (variant === 'inverted') {
    return {
      backgroundColor: 'transparent',
      iconColor: colorWhite,
    }
  }
  return {
    backgroundColor: 'transparent',
    iconColor: colorAccessibleGreen,
  }
}

/**
 * @version ./package.json
 */
const Limited = ({ variant, children }) => (
  <ThemeProvider theme={getTheme(variant)}>{children}</ThemeProvider>
)

Limited.displayName = 'Limited'

Limited.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['default', 'basic', 'alternative', 'inverted']),
  /**
   * Forces the hover state
   * @ignore
   */
  // eslint-disable-next-line react/no-unused-prop-types
  forceHover: PropTypes.bool,
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
}

Limited.defaultProps = {
  variant: 'default',
  forceHover: undefined,
}

export default Limited
