import React from 'react'
import PropTypes from 'prop-types'

import { warn } from '../../utils/warn'
import safeRest from '../../utils/safeRest'

import styles from './Button.modules.scss'

import FlexBox from '../Flexbox/Flexbox'

const preventDisabling = ({ disabled, ...props }) => {
  if (disabled) {
    warn('Button', 'Buttons are not able to be disabled.')
  }

  return props
}

const Button = ({ type, variant, children, ...rest }) => {
  const restNoDisabled = preventDisabling(rest)

  return (
    <button {...safeRest(restNoDisabled)} type={type} className={styles.button}>
      <FlexBox direction="row" dangerouslyAddClassName={styles[variant]}>
        {children}
      </FlexBox>
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
