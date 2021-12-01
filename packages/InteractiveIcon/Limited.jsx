import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { responsiveProps } from '@tds/util-prop-types'
import { handleResponsiveStyles } from '@tds/util-helpers'

import {
  colorShark,
  colorTelusPurple,
  colorWhite,
  colorAccessibleGreen,
  colorCardinal,
} from '@tds/core-colours'

import animations from './shared/animations'
import StyledInteractiveIconSVG from './shared/StyledInteractiveIconSVG'

const iconSize = props =>
  handleResponsiveStyles({ size: props.size }, ({ size }) => ({
    width: size === 20 ? '1.25rem' : '1.5rem',
    height: size === 20 ? '1.25rem' : '1.5rem',
  }))

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
  iconSize
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
  if (variant === 'error') {
    return {
      backgroundColor: 'transparent',
      iconColor: colorCardinal,
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
const Limited = ({ variant, children, size }) => (
  <ThemeProvider theme={getTheme(variant)} size={size}>
    {children}
  </ThemeProvider>
)

Limited.displayName = 'Limited'

Limited.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['default', 'basic', 'alternative', 'inverted', 'error']),
  /**
   * The icon size in pixels as a [**responsive prop**](#responsiveProps).
   */
  size: responsiveProps(PropTypes.oneOf([16, 24])),
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
}

Limited.defaultProps = {
  variant: 'default',
  size: 24,
}

export default Limited
