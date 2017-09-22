import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'

import styles from './Flexbox.modules.scss'

const Flexbox = ({ direction, children, ...rest }) => (
  <div {...safeRest(rest)} className={styles[direction]}>
    {children}
  </div>
)

Flexbox.propTypes = {
  direction: PropTypes.oneOf(['column', 'row']).isRequired,
  children: PropTypes.node.isRequired
}

export default Flexbox
