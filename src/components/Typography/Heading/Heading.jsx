import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'
import HeadingSup from './HeadingSup/HeadingSup'
import HeadingSub from './HeadingSub/HeadingSub'

import styles from './Heading.modules.scss'

const getColorClassName = level => (
  level === 'h1' || level === 'h2' ? styles.secondary : styles.default
)

const getClassName = (level, invert) => {
  const colorClassName = invert ? styles.inverted : getColorClassName(level)

  return `${styles[level]} ${colorClassName}`
}

/**
 * Page headings. Renders an HTML `<h1-h4>` element.
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
   * The heading level.
   */
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The text. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired
}
Heading.defaultProps = {
  invert: false
}

Heading.Sup = HeadingSup
Heading.Sub = HeadingSub

export default Heading
