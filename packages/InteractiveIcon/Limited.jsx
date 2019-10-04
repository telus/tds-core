import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { colorShark, colorTelusPurple, colorWhite, colorAccessibleGreen } from '@tds/core-colours'

export const StyledLimitedInteractiveIconSVG = styled.svg(
  ({ theme }) => ({ fill: theme.iconColor }),
  ({ animationDirection }) => ({
    width: '24px',
    height: '24px',
    zIndex: '2',
    transition: 'transform 150ms ease-in-out',
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
    [`:hover, :focus, :active`]: {
      transform: `translate${
        animationDirection === 'up' || animationDirection === 'down' ? 'Y' : 'X'
      }(${animationDirection === 'up' || animationDirection === 'left' ? '-' : ''}4px)`,
    },
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
