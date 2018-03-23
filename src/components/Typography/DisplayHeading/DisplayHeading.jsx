import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'
import joinClassNames from '../../../utils/joinClassNames'

import DisplayHeadingSup from './DisplayHeadingSup/DisplayHeadingSup'

import styles from './DisplayHeading.modules.scss'

const getClassName = invert =>
  joinClassNames(styles.heading, invert ? styles.inverted : styles.default)

/**
 * Large page titles. Renders an HTML `<h1>` element.
 */
const DisplayHeading = ({ invert, children, ...rest }) => (
  <h1 {...safeRest(rest)} className={getClassName(invert)}>
    {children}
  </h1>
)

DisplayHeading.propTypes = {
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The text. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired,
}

DisplayHeading.defaultProps = {
  invert: false,
}

DisplayHeading.Sup = DisplayHeadingSup

export default DisplayHeading
