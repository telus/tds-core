import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { colorShark, colorTelusPurple, colorWhite, colorAccessibleGreen } from '@tds/core-colours'

import animations from './shared/animations'
import StyledInteractiveIconSVG from './shared/StyledInteractiveIconSVG'

export const StyledLimitedInteractiveIconSVG = styled(StyledInteractiveIconSVG)(
  ({ animationDirection }) => ({
    transition: 'transform 150ms ease-in-out',
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
    [`:hover, :focus, :active`]: {
      transform: `translate${
        animationDirection === 'up' || animationDirection === 'down' ? 'Y' : 'X'
      }(${animationDirection === 'up' || animationDirection === 'left' ? '-' : ''}4px)`,
    },
  }),
  animations.reduceMotion,
  ({ size }) => ({
    width: size === 20 ? '20px' : '24px',
    height: size === 20 ? '20px' : '24px',
  })
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
   * @ignore
   */
  children: PropTypes.node.isRequired,
}

Limited.defaultProps = {
  variant: 'default',
}

export default Limited
