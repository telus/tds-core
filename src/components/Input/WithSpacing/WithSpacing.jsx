import React from 'react'
import PropTypes from 'prop-types'

import styles from './WithSpacing.modules.scss'

const WithSpacing = ({ amount, children }) => (
  <div className={styles[`evenMarginBottom-${amount}`]}>
    {children}
  </div>
)
WithSpacing.propTypes = {
  amount: PropTypes.oneOf([1]).isRequired,
  children: PropTypes.node.isRequired
}

export default WithSpacing
