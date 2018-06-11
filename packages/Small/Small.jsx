import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'

import styles from '../../shared/styles/Typography/Typography.modules.scss'

/**
 * Small print, such as copyright and legal text.
 *
 * @version ./package.json
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
