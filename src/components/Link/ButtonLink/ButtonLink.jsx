import React from 'react'
import PropTypes from 'prop-types'
import { Link as ReactRouterLink } from 'react-router-dom'

import { warn } from '../../../warn'
import safeRest from '../../../safeRest'

import styles from '../../Button/Button.modules.scss'

const getClassName = (variant, invert) => {
  if (variant === 'primary' && invert) {
    warn('Button Link', 'Primary buttons cannot be inverted.')

    return styles.primary
  }

  if (invert) {
    return styles[`${variant}Inverted`]
  }

  return styles[variant]
}

/**
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.21.0</span>
 */
const ButtonLink = ({ variant, invert, children, ...rest }) => (
  React.createElement(
    rest.to ? ReactRouterLink : 'a',
    {
      ...safeRest(rest),
      className: getClassName(variant, invert)
    },
    children
  )
)
ButtonLink.propTypes = {
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
ButtonLink.defaultProps = {
  variant: 'primary',
  invert: false
}
ButtonLink.displayName = 'Link.Button'

export default ButtonLink
