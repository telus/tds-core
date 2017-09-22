import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../safeRest'
import { warn } from '../../utils/warn'

import styles from './Link.modules.scss'

const getClassName = (invert, context) => {
  if (context.inheritColor) {
    return styles.inheritColor
  } else if (invert) {
    return styles.inverted
  }

  return styles.base
}

/**
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.21.0</span>
 */
const Link = ({ reactRouterLinkComponent, invert, children, ...rest }, context) => {
  if (!(reactRouterLinkComponent && rest.to) && (reactRouterLinkComponent || rest.to)) {
    warn('Link', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  return React.createElement(
    reactRouterLinkComponent || 'a',
    {
      ...safeRest(rest),
      className: getClassName(invert, context)
    },
    children
  )
}
Link.propTypes = {
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.func,
  /**
   * Target URL (if using 'reactRouterLinkComponent')
   */
  to: PropTypes.string,
  /**
   * Target URL.
   */
  href: PropTypes.string,
  /**
    * Invert link style to appear light on dark backgrounds.
    */
  invert: PropTypes.bool,
  /**
   * Link text.
   */
  children: PropTypes.node.isRequired
}
Link.defaultProps = {
  reactRouterLinkComponent: null,
  to: null,
  href: null,
  invert: false
}

Link.contextTypes = {
  inheritColor: PropTypes.bool
}

export default Link
