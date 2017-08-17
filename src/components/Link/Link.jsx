import React from 'react'
import PropTypes from 'prop-types'

import { Link as ReactRouterLink } from 'react-router-dom'

import ChevronLink from './ChevronLink/ChevronLink'
import ButtonLink from './ButtonLink/ButtonLink'
import safeRest from '../../safeRest'

import styles from './Link.modules.scss'

const getClassName = invert => (invert ? styles.inverted : styles.base)

/**
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.21.0</span>
 */
const Link = ({ invert, children, ...rest }) => (
  React.createElement(
    rest.to ? ReactRouterLink : 'a',
    {
      ...safeRest(rest),
      className: getClassName(invert)
    },
    children
  )
)
Link.propTypes = {
  to: PropTypes.string,
  /**
   * Target URL.
   */
  href: PropTypes.string,
  /**
   * React router component.
   */
  router: PropTypes.element,
  /**
   * Whether to invert the component styles.
   */
  invert: PropTypes.bool,
  /**
   * Link text.
   */
  children: PropTypes.node.isRequired
}
Link.defaultProps = {
  to: null,
  href: null,
  invert: false
}

Link.Chevron = ChevronLink
Link.Button = ButtonLink

export default Link
