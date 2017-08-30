import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

import styles from '../Text/Text.modules.scss'

const Strong = ({ children, ...rest }) => (
  <strong {...safeRest(rest)} className={styles.boldFont}>
    {children}
  </strong>
)

Strong.propTypes = {
  children: PropTypes.string.isRequired
}

export default Strong
