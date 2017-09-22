import React from 'react'
import PropTypes from 'prop-types'

import { warn, deprecate } from '../../utils/warn'
import safeRest from '../../safeRest'

import styles from './Button.modules.scss'

const getClassName = (variant, invert) => {
  if (variant === 'primary' && invert) {
    warn('Button', 'Primary buttons cannot be inverted.')

    return styles.primary
  }

  if (invert) {
    return styles[`${variant}Inverted`]
  }

  return styles[variant]
}

const preventDisabling = ({ disabled, ...props }) => {
  if (disabled) {
    warn('Button', 'Buttons are not able to be disabled.')
  }

  return props
}

/**
 *
 * <span class="docs--badge green">updated!</span> <span class="docs--badge purple">v0.21.0</span>
 */
const Button = ({ type, variant, invert, children, ...rest }) => {
  const restNoDisabled = preventDisabling(rest)

  if (invert) {
    deprecate('Button', 'The invert prop is deprecated. Create an inverted Button with the inverted variant.')
  }

  if (variant === 'outlined') {
    deprecate('Button', 'The outlined variant is deprecated. Create an inverted Button with the inverted variant.')
  }

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
   *
   * @since v0.21.0. Added 'inverted' to replace 'outlined'.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined', 'inverted']),
  /**
   * Whether or not to invert the variant's color scheme.
   *
   * **Note:** Doesn't apply to `primary` variant.
   *
   * @deprecated since v0.21.0. Create inverted buttons with the inverted variant.
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
