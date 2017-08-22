import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

import styles from './Strong.modules.scss'

const Strong = ({ children, ...rest }) => (
  <strong {...safeRest(rest)} className={styles.strong}>
    {children}
  </strong>
)

Strong.propTypes = {
  children: PropTypes.string.isRequired
}
export default Strong
