import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import A11yContent from '@tds/core-a11y-content'
import { colorGainsboro, colorShark, colorTelusPurple, colorWhite } from '@tds/core-colours'
import { buttons } from '@tds/shared-styles'
import { safeRest } from '@tds/util-helpers'

const getOutline = ({ variant }) => variant !== 'inverted' && { outline: 'none' }

const StyledInteractiveIconButton = styled.button(buttons.noStyle, getOutline, {
  width: '40px',
  height: '40px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '&:hover svg': {
    transform: 'scale(1.1, 1.1)',
  },
  '&:active svg': {
    transform: 'scale(1, 1)',
  },
  '-webkit-tap-highlight-color': 'transparent',
})

export const StyledInteractiveIconSVG = styled.svg(({ theme }) => ({ fill: theme.iconColor }), {
  width: '24px',
  height: '24px',
  zIndex: '2',
  transition: 'transform 150ms ease-in-out',
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
  },
})

const StyledInteractiveIconHover = styled.span(
  ({ theme }) => ({ backgroundColor: theme.backgroundColor }),
  {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '1',
    borderRadius: '50%',
    transition: 'transform 200ms ease-in-out',
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
    transform: 'scale(0,0)',
    [`${StyledInteractiveIconButton}:focus &, ${StyledInteractiveIconButton}:active &`]: {
      transform: 'scale(1,1)',
    },
  }
)

const getTheme = variant => {
  if (variant === 'alternative') {
    return {
      backgroundColor: '#D8CBE5',
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
    backgroundColor: colorGainsboro,
    iconColor: colorShark,
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
