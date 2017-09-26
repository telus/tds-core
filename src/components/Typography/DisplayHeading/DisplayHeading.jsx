import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../utils/safeRest'

import DisplayHeadingSup from './DisplayHeadingSup/DisplayHeadingSup'
import DisplayHeadingSub from './DisplayHeadingSub/DisplayHeadingSub'

import styles from './DisplayHeading.modules.scss'

const getClassName = invert => (
  invert ? styles.inverted : styles.default
)

/**
 * Large page titles. Renders an HTML `<h1>` element.
 *
 * <span class="docs--badge__new">new!</span> <span class="docs--badge__version">v0.22.0</span>
 */
const DisplayHeading = ({ invert, children, ...rest }) => (
  <h1 {...safeRest(rest)} className={getClassName(invert)} >{children}</h1>
)

DisplayHeading.propTypes = {
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The text. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired
}

DisplayHeading.defaultProps = {
  invert: false
}

DisplayHeading.Sup = DisplayHeadingSup
DisplayHeading.Sub = DisplayHeadingSub

export default DisplayHeading
