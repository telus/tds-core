import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'
import capitalize from '../../../utils/capitalize'

import styles from './WithSpacing.modules.scss'

const WithSpacing = ({ location, amount, children, ...rest }) => (
  <div {...safeRest(rest)} className={styles[`margin${capitalize(location)}-${amount}`]}>
    {children}
  </div>
)
WithSpacing.propTypes = {
  location: PropTypes.oneOf(['left', 'bottom']).isRequired,
  amount: PropTypes.oneOf([2, 3]).isRequired,
  children: PropTypes.node.isRequired
}

export default WithSpacing
