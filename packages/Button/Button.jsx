import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName, or } from '@tds/util-prop-types'
import { borders, forms } from '@tds/shared-styles'
import { medium, boldFont } from '@tds/shared-typography'
import { colorPrimary, colorSecondary, colorWhite, colorText } from '@tds/core-colours'
import { media } from '@tds/core-responsive'

import { warn } from '../../shared/utils/warn'
import safeRest from '../../shared/utils/safeRest'

const preventDisabling = ({ disabled, ...props }) => {
  if (disabled) {
    warn('Button', 'Buttons are not able to be disabled.')
  }

  return props
}

const baseButton = {
  margin: 0,
  padding: '0 2rem',
  cursor: 'pointer',
  background: 'none',
  transition: 'background 0.2s',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',

  ...media.from('md').css({
    display: 'inline-flex',
    width: 'auto',
    minWidth: '180px',
  }),
}

export const StyledButton = styled.button(
  borders.none,
  borders.rounded,
  medium,
  boldFont,
  forms.height,
  forms.font,
  baseButton,
  ({ variant }) => {
    let backgroundColor
    let color
    const hover = {
      boxShadow: '0 0 0 1px',
    }

    if (variant === 'primary') {
      backgroundColor = colorPrimary
      color = colorWhite
      hover.backgroundColor = colorWhite
      hover.color = colorPrimary
    } else if (variant === 'secondary') {
      backgroundColor = colorSecondary
      color = colorWhite
      hover.backgroundColor = colorWhite
      hover.color = colorSecondary
    } else {
      backgroundColor = colorWhite
      color = colorText
      hover.backgroundColor = 'transparent'
      hover.color = colorWhite
    }

    return {
      backgroundColor,
      color,
      '&:hover': hover,
    }
  }
)

/**
 * @version ./package.json
 */
const Button = ({ type, variant, children, ...rest }) => {
  const restNoDisabled = preventDisabling(rest)

  return (
    <StyledButton {...safeRest(restNoDisabled)} variant={variant} type={type}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  /**
   * The HTML button type.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  /**
   * The label. It can include the `A11yContent` component or strings.
   */
  children: or([PropTypes.string, componentWithName('A11yContent')]).isRequired,
}
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
}

export default Button
