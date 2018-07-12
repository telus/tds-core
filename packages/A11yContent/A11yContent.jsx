import React from 'react'
import PropTypes from 'prop-types'

import styles from './A11yContent.modules.scss'

/**
 * @version ./package.json
 */

const A11yContent = ({ children }) => {
  return <span className={styles.a11yContent}>{children}</span>
}

A11yContent.propTypes = {
  children: PropTypes.string.isRequired,
}
A11yContent.defaultProps = {}

export default A11yContent
