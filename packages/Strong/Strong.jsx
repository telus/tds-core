import React from 'react'
import PropTypes from 'prop-types'

import styles from '@tds/shared-typography/Typography.modules.scss'

import safeRest from '../../shared/utils/safeRest'

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
