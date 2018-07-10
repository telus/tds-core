import React from 'react'
import PropTypes from 'prop-types'

import { warn } from '../../shared/utils/warn'
import safeRest from '../../shared/utils/safeRest'

import BaseButton from '../../shared/components/BaseButton/BaseButton'

const preventDisabling = ({ disabled, ...props }) => {
  if (disabled) {
    warn('Button', 'Buttons are not able to be disabled.')
  }

  return props
}

/**
 * @version ./package.json
 */
const Button = ({ type, variant, a11yContent, a11yContentPosition, children, ...rest }) => {
  const restNoDisabled = preventDisabling(rest)

  return (
    <BaseButton
      {...safeRest(restNoDisabled)}
      element="button"
      variant={variant}
      type={type}
      a11yContent={a11yContent}
      a11yContentPosition={a11yContentPosition}
    >
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
   * Text that is hidden from view, but read out loud by screen readers
   */
  a11yContent: PropTypes.string,
  /**
   * Position of hidden A11yContent text. `left` reads the content before the button label is read, and `right` reads it after the label
   */
  a11yContentPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * The label.
   */
  children: PropTypes.string.isRequired,
}
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  a11yContent: undefined,
  a11yContentPosition: 'right',
}

export default Button
