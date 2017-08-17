import React from 'react'
import PropTypes from 'prop-types'

import { warn } from '../../../warn'
import safeRest from '../../../safeRest'

import styles from './ButtonLink.modules.scss'

const getClassName = (variant, invert) => {
  if (variant === 'primary' && invert) {
    warn('Link Button', 'Primary buttons cannot be inverted.')

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
const ButtonLink = ({ reactRouterLinkComponent, variant, invert, children, ...rest }) => {
  if (!(reactRouterLinkComponent && rest.to) && (reactRouterLinkComponent || rest.to)) {
    warn('Link Button', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  return React.createElement(

    reactRouterLinkComponent || 'a',
    {
      ...safeRest(rest),
      className: getClassName(variant, invert)
    },
    children
  )
}

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
  children: PropTypes.string.isRequired,
  /**
   * Target URL (if using 'reactRouterLinkComponent')
   */
  to: PropTypes.string,
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.func
}
ButtonLink.defaultProps = {
  variant: 'primary',
  invert: false,
  to: null,
  reactRouterLinkComponent: null
}
ButtonLink.displayName = 'Link.Button'

export default ButtonLink
