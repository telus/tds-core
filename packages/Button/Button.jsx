import React from 'react'
import PropTypes from 'prop-types'

import { warn } from '../../src/utils/warn'
import safeRest from '../../src/utils/safeRest'

import BaseButton from '../../shared/components/BaseButton/BaseButton'

const preventDisabling = ({ disabled, ...props }) => {
  if (disabled) {
    warn('Button', 'Buttons are not able to be disabled.')
  }

  return props
}

const Button = ({ type, variant, children, ...rest }) => {
  const restNoDisabled = preventDisabling(rest)

  return (
    <BaseButton {...safeRest(restNoDisabled)} element="button" variant={variant} type={type}>
      {children}
    </BaseButton>
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
   * The label.
   */
  children: PropTypes.string.isRequired,
}
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
}

export default Button
