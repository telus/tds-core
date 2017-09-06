import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

import styles from '../Text/Text.modules.scss'

/**
 * Use for small print, including copyright and legal text
 *
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.22.0</span>
 */
const Small = ({ children, ...rest }) => (
  <small {...safeRest(rest)} className={`${styles.small} ${styles.smallFont}`}>
    {children}
  </small>
)

Small.propTypes = {
  /**
   * The text you wish to display in small print
   */
  children: PropTypes.string.isRequired
}

export default Small
