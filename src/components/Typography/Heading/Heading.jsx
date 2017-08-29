import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

import styles from './Heading.modules.scss'

const getColorClassName = level => (
  level === 'h1' || level === 'h2' ? styles.secondary : styles.default
)

const getClassName = (level, invert) => {
  const colorClassName = invert ? styles.inverted : getColorClassName(level)

  return `${styles[level]} ${colorClassName}`
}

/**
 * Used for page headings.
 *
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.22.0</span>
 */
const Heading = ({ level, invert, children, ...rest }) => (
  React.createElement(
    level,
    {
      ...safeRest(rest),
      className: getClassName(level, invert)
    },
    children
  )
)
Heading.propTypes = {
  /**
   * Heading level (default is `h1`).
   */
  level: PropTypes.oneOf([
    'h1', 'h2', 'h3', 'h4'
  ]).isRequired,
  /**
   * Whether or not to invert the colour scheme.
   */
  invert: PropTypes.bool,
  /**
   * The heading text.
   */
  children: PropTypes.node.isRequired
}
Heading.defaultProps = {
  level: 'h1',
  invert: false
}

export default Heading
