import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import A11yContent from '@tds/core-a11y-content'
import { colorGreyGainsboro, colorGreyShark, colorTelusPurple, colorWhite } from '@tds/core-colours'
import { safeRest } from '@tds/util-helpers'

import animations from './shared/animations'
import SharedStyledInteractiveIconSVG from './shared/StyledInteractiveIconSVG'
import SharedStyledInteractiveIconButton from './shared/StyledInteractiveIconButton'
import StyledInteractiveIconHover from './shared/StyledInteractiveIconHover'

export const StyledInteractiveIconSVG = styled(SharedStyledInteractiveIconSVG)(
  { transition: 'transform 150ms ease-in-out' },
  animations.reduceMotion
)

export const StyledInteractiveIconButton = styled(SharedStyledInteractiveIconButton)(
  animations.scale,
  animations.reduceMotion
)

const getTheme = variant => {
  if (variant === 'alternative') {
    return {
      hoverBackgroundColor: '#D8CBE5',
      iconColor: colorTelusPurple,
    }
  }
  if (variant === 'inverted') {
    return {
      hoverBackgroundColor: 'transparent',
      iconColor: colorWhite,
    }
  }
  return {
    hoverBackgroundColor: colorGreyGainsboro,
    iconColor: colorGreyShark,
  }
}

/**
 * @version ./package.json
 */
const Button = forwardRef(({ a11yText, variant, onClick, children, tag, ...rest }, ref) => (
  <ThemeProvider theme={getTheme(variant)}>
    <StyledInteractiveIconButton
      {...safeRest(rest)}
      variant={variant}
      onClick={onClick}
      as={tag}
      ref={ref}
    >
      <A11yContent>{a11yText}</A11yContent>
      <StyledInteractiveIconHover />
      {children}
    </StyledInteractiveIconButton>
  </ThemeProvider>
))

Button.displayName = 'Button'

Button.propTypes = {
  /**
   * A description of the icon for screen readers.
   */
  a11yText: PropTypes.string.isRequired,
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['default', 'alternative', 'inverted']),
  /**
   * Pass a handler to the icon to make it interactive.
   */
  onClick: PropTypes.func,
  /**
   * The tag
   */
  tag: PropTypes.oneOf(['button', 'a']),
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  variant: 'default',
  onClick: undefined,
  tag: 'button',
}

export default Button
