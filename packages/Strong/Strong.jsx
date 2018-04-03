import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'

import styles from '../../shared/styles/Typography.modules.scss'

/**
 * Give portions of a sentence added importance.
 *
 * @version ./package.json
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
  children: PropTypes.node.isRequired,
}

export default Strong
