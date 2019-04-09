import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { colorPrimary, colorSecondary, colorWhite } from '@tds/core-colours'

import safeRest from '../../shared/utils/safeRest'

const telusTheme = {
  generate: (props) => {
    let color, backgroundColor
    if (props.variant === 'secondary') {
      color = colorWhite
      backgroundColor = colorSecondary
    } else if (props.variant === 'inverted') {
      color = colorSecondary
      backgroundColor = colorWhite
    } else {
      color = colorWhite
      backgroundColor = colorPrimary
    }

    return {
      borderRadius: '4px',
      padding: '0px 2rem',
      display: 'inline-block',
      width: 'auto',
      minWidth: '180px',
      height: '3.25rem',
      fontWeight: 700,
      color,
      backgroundColor
    }
  }
}

const StyledButton = styled.button((props) => props.theme.generate(props))

const BaseButton = ({ children, ...rest }) => (
  <StyledButton {...safeRest(rest)}>
    {children}
  </StyledButton>
)

/**
 * @version ./package.json
 */
const Button = (props) => (
  <ThemeProvider theme={telusTheme}>
    <BaseButton {...props} />
  </ThemeProvider>
)

Button.propTypes = {
  /**
   * The HTML button type.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
}

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
}

export default Button
export { BaseButton, StyledButton }
