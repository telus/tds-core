import React from 'react'
import PropTypes from 'prop-types'

import { warn } from '../../../warn'
import safeRest from '../../../safeRest'

import styles from './ButtonLink.modules.scss'

const getClassName = (variant) => {
  return styles[variant]
}

/**
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.21.0</span>
 */
const ButtonLink = ({ reactRouterLinkComponent, variant, children, ...rest }) => {
  if ((reactRouterLinkComponent || rest.to) && !(reactRouterLinkComponent && rest.to)) {
    warn('Link Button', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  return React.createElement(

    reactRouterLinkComponent || 'a',
    {
      ...safeRest(rest),
      className: getClassName(variant)
    },
    children
  )
}

ButtonLink.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined', 'secondaryInverted', 'outlinedInverted']),
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
  to: null,
  reactRouterLinkComponent: null
}
ButtonLink.displayName = 'Link.Button'

export default ButtonLink
