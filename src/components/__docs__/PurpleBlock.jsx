import React from 'react'
import PropTypes from 'prop-types'

import styles from './PurpleBlock.modules.scss'

const PurpleBlock = ({ children }) => <div className={styles.purpleBlock}>{children}</div>
PurpleBlock.propTypes = {
  children: PropTypes.node.isRequired
}

export default PurpleBlock
