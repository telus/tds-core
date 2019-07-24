import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName, or } from '@tds/util-prop-types'
import { borders, forms } from '@tds/shared-styles'
import { medium, boldFont } from '@tds/shared-typography'
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
  }),
}

export const StyledButton = styled.button(
  borders.none,
  borders.rounded,
  medium,
  boldFont,
  forms.font,
  baseButton,
  ({ variant, theme }) => {
    let backgroundColor
    let color
    const hover = {
      boxShadow: '0 0 0 1px',
    }

    if (variant === 'primary') {
      backgroundColor = theme.colors.colorPrimary
      color = theme.colors.colorWhite
      hover.backgroundColor = theme.colors.colorWhite
      hover.color = theme.colors.colorPrimary
    } else if (variant === 'secondary') {
      backgroundColor = theme.colors.colorSecondary
      color = theme.colors.colorWhite
      hover.backgroundColor = theme.colors.colorWhite
      hover.color = theme.colors.colorSecondary
    } else {
      backgroundColor = theme.colors.colorWhite
      color = theme.colors.colorText
      hover.backgroundColor = 'transparent'
      hover.color = theme.colors.colorWhite
    }

    return {
      ...theme.sizing.buttons,
      padding: theme.spacing.padding2,
      backgroundColor,
      color,
      '&:hover': hover,
    }
  }
)

export const ButtonTextWrapper = styled.span({
  width: '100%',
})

/**
 * @version ./package.json
 */
const Button = forwardRef(({ type, variant, children, ...rest }, ref) => {
  const restNoDisabled = preventDisabling(rest)

  return (
    <StyledButton {...safeRest(restNoDisabled)} variant={variant} type={type} ref={ref}>
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
}
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
}

export default Button
