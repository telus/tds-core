import React from 'react'
import PropTypes from 'prop-types'

import { warn } from '../../warn'
import safeRest from '../../safeRest'

import styles from './Button.modules.scss'

export const getClassName = (variant, invert) => {
  if (variant === 'primary' && invert) {
    warn('Button', 'Primary buttons cannot be inverted.')

    return styles.primary
  }

  if (invert) {
    return styles[`${variant}Inverted`]
  }

  return styles[variant]
}

export const preventDisabling = ({ disabled, ...props }) => {
  if (disabled) {
    warn('Button', 'Buttons are not able to be disabled.')
  }

  return props
}

/**
 *
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.20.0</span>
 */
const Button = ({ type, variant, invert, children, ...rest }) => {
  const restNoDisabled = preventDisabling(rest)

  return (
    <button {...safeRest(restNoDisabled)} type={type} className={getClassName(variant, invert)}>
      {children}
    </button>
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
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  /**
   * Whether or not to invert the variant's color scheme.
   */
  invert: PropTypes.bool,
  /**
   * The label.
   */
  children: PropTypes.string.isRequired
}
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  invert: false
}

export default Button
