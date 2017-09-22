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
 * Used for big page headings.
 *
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.22.0</span>
 */
const DisplayHeading = ({ invert, children, ...rest }) => (
  <h1 {...safeRest(rest)} className={getClassName(invert)} >{children}</h1>
)

DisplayHeading.propTypes = {
  /**
   * Whether or not to invert the colour scheme.
   */
  invert: PropTypes.bool,
  /**
   * The text.
   */
  children: PropTypes.node.isRequired
}

DisplayHeading.defaultProps = {
  invert: false
}

DisplayHeading.Sup = DisplayHeadingSup
DisplayHeading.Sub = DisplayHeadingSub

export default DisplayHeading
