import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName, or } from '@tds/util-prop-types'

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
   * The HTML button type. Test
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
