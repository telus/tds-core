import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

import styles from '../../Typography/Text/Text.modules.scss'

const OrderedItem = ({ size, children, ...rest }) => (
  <li {...safeRest(rest)} className={styles[size]}>
    {children}
  </li>
)

OrderedItem.propTypes = {
  size: PropTypes.oneOf([
    'medium',
    'large'
  ]),
  children: PropTypes.node.isRequired
}

OrderedItem.defaultProps = {
  size: undefined
}

OrderedItem.displayName = 'OrderedList.Item'

export default OrderedItem
