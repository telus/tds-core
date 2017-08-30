import React from 'react'
import PropTypes from 'prop-types'

import { warn } from '../../../warn'
import safeRest from '../../../safeRest'

import styles from './ButtonLink.modules.scss'

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
      className: styles[variant]
    },
    children
  )
}

ButtonLink.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.func,
  /**
   * Target URL (if using 'reactRouterLinkComponent')
   */
  to: PropTypes.string,
  /**
   * Target URL
   */
  href: PropTypes.string,
  /**
   * The label.
   */
  children: PropTypes.string.isRequired
}
ButtonLink.defaultProps = {
  variant: 'primary',
  reactRouterLinkComponent: null,
  to: null,
  href: null
}

export default ButtonLink
