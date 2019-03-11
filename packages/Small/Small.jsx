import React from 'react'
import PropTypes from 'prop-types'

import styles from '@tds/shared-typography/Typography.modules.scss'

import safeRest from '../../shared/utils/safeRest'

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
