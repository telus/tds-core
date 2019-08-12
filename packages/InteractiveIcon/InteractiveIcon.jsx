import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import A11yContent from '@tds/core-a11y-content'
import { colorGainsboro, colorShark, colorTelusPurple, colorWhite } from '@tds/core-colours'
import { buttons } from '@tds/shared-styles'

import safeRest from '../../shared/utils/safeRest'

const StyledInteractiveIconButton = styled.button(buttons.noStyle, {
  width: '40px',
  height: '40px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '&:focus': {
    outline: 'none',
  },
})

export const StyledInteractiveIconSVG = styled.svg(({ theme }) => ({ fill: theme.iconColor }), {
  width: '24px',
  height: '24px',
  zIndex: '2',
  transition: 'transform 150ms ease-in-out',
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
  },
  '&:hover': {
    transform: 'scale(1.1, 1.1)',
  },
  '&:active': {
    transform: 'scale(1, 1)',
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
const InteractiveIcon = ({ a11yText, variant, onClick, children, tag, ...rest }) => (
  <ThemeProvider theme={getTheme(variant)}>
    <StyledInteractiveIconButton {...safeRest(rest)} onClick={onClick} as={tag}>
      <A11yContent>{a11yText}</A11yContent>
      <StyledInteractiveIconHover />
      {children}
    </StyledInteractiveIconButton>
  </ThemeProvider>
)

InteractiveIcon.propTypes = {
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

InteractiveIcon.defaultProps = {
  variant: 'default',
  onClick: undefined,
  tag: 'button',
}

export default InteractiveIcon
