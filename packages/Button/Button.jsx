import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName, or } from '@tds/util-prop-types'
import { borders, forms } from '@tds/shared-styles'
import { medium, boldFont } from '@tds/shared-typography'
import { colorPrimary, colorSecondary, colorWhite, colorText } from '@tds/core-colours'
import { media } from '@tds/core-responsive'

import { safeRest } from '@tds/util-helpers'
import { warn } from '../../shared/utils/warn'

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
  forms.buttonHeight,
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
  },
  ({ fullwidth }) => {
    let width
    if (fullwidth) {
      return {
        width: '100%',
        ...media.from('md').css({ width: '100%' }),
      }
    }
    return {
      width,
    }
  }
)

export const ButtonTextWrapper = styled.span({
  width: '100%',
})

/**
 * @version ./package.json
 */
const Button = forwardRef(({ type, variant, fullwidth, children, ...rest }, ref) => {
  const restNoDisabled = preventDisabling(rest)

  return (
    <StyledButton
      {...safeRest(restNoDisabled)}
      variant={variant}
      fullwidth={fullwidth}
      type={type}
      ref={ref}
    >
      <ButtonTextWrapper>{children}</ButtonTextWrapper>
    </StyledButton>
  )
})

Button.displayName = 'Button'

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
  /**
   * If `true`, sets `Button` to 100% width.
   * @since 2.2.0
   */
  fullwidth: PropTypes.bool,
}
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  fullwidth: false,
}

export default Button
