import React from 'react'
import PropTypes from 'prop-types'

import ChevronLink from './ChevronLink/ChevronLink'
import ButtonLink from './ButtonLink/ButtonLink'
import safeRest from '../../safeRest'
import { warn } from '../../warn'

import styles from './Link.modules.scss'

const getClassName = (variant, context) => {
  if (context.inheritColor) {
    return styles.inheritColor
  }

  return styles[variant]
}

/**
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.21.0</span>
 */
const Link = ({ reactRouterLinkComponent, variant, children, ...rest }, context) => {
  if (!(reactRouterLinkComponent && rest.to) && (reactRouterLinkComponent || rest.to)) {
    warn('Link', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  return React.createElement(
    reactRouterLinkComponent || 'a',
    {
      ...safeRest(rest),
      className: getClassName(variant, context)
    },
    children
  )
}
Link.propTypes = {
  /**
   * Target URL (if using 'reactRouterLinkComponent')
   */
  to: PropTypes.string,
  /**
   * Target URL.
   */
  href: PropTypes.string,
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.func,
  /**
   * The style variations.
   */
  variant: PropTypes.oneOf([
    'base',
    'inverted'
  ]),
  /**
   * Link text.
   */
  children: PropTypes.node.isRequired
}
Link.defaultProps = {
  to: null,
  href: null,
  reactRouterLinkComponent: null,
  variant: 'base'
}

Link.contextTypes = {
  inheritColor: PropTypes.bool
}

Link.Chevron = ChevronLink
Link.Button = ButtonLink

export default Link
