import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'
import { warn } from '../../shared/utils/warn'

import styles from './Link.modules.scss'

const getClassName = (invert, context) => {
  if (context.inheritColor) {
    return styles.inheritColor
  }
  if (invert) {
    return styles.inverted
  }

  return styles.base
}

/**
 * @version ./package.json
 */
const Link = ({ reactRouterLinkComponent, invert, children, ...rest }, context) => {
  if (!(reactRouterLinkComponent && rest.to) && (reactRouterLinkComponent || rest.to)) {
    warn('Link', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  return React.createElement(
    reactRouterLinkComponent || 'a',
    {
      ...safeRest(rest),
      className: getClassName(invert, context),
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
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
  children: PropTypes.node.isRequired,
}
Link.defaultProps = {
  reactRouterLinkComponent: null,
  to: null,
  href: null,
  invert: false,
}

Link.contextTypes = {
  inheritColor: PropTypes.bool,
}

export default Link
