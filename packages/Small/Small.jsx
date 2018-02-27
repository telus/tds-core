import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'

import styles from '../../shared/styles/Typography.modules.scss'

/**
 * @version 1.0.0
 *
 * Small print, such as copyright and legal text.
 */
const Small = ({ children, ...rest }) => (
  <small {...safeRest(rest)} className={`${styles.small} ${styles.smallFont}`}>
    {children}
  </small>
)

Small.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired,
}

export default Small
