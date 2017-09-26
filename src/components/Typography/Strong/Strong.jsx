import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'

import styles from '../Text/Text.modules.scss'

/**
  * Give portions of a sentence added importance.
  *
  * <span class="docs--badge__new">new!</span> <span class="docs--badge__version">v0.22.0</span>
  */
const Strong = ({ children, ...rest }) => (
  <strong {...safeRest(rest)} className={styles.boldFont}>
    {children}
  </strong>
)

Strong.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired
}

export default Strong
