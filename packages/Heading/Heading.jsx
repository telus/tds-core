import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'

import HeadingSup from './HeadingSup/HeadingSup'

import styles from './Heading.modules.scss'

/**
 * Page headings. Renders an HTML `<h1-h4>` element.
 *
 * @version ./package.json
 */
const Heading = ({ level, tag = level, invert, children, ...rest }) => {
  const getClassNames = () => {
    if (invert) {
      return styles.inverted
    }
    if (level === 'h1' || level === 'h2') {
      return styles.secondary
    }
    return styles.default
  }
  return React.createElement(
    tag,
    {
      ...safeRest(rest),
      className: joinClassNames(styles[level], getClassNames()),
    },
    children
  )
}

Heading.propTypes = {
  /**
   * The stylistic level of the heading.
   */
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  /**
   * The semantic level of the heading.
   */
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The text. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired,
}
Heading.defaultProps = {
  invert: false,
  tag: undefined,
}

Heading.Sup = HeadingSup

export default Heading
