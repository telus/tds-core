import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'

import styles from '../ListItem.modules.scss'

const OrderedItem = ({ children, ...rest }) => (
  <li {...safeRest(rest)} className={styles.item}>
    {children}
  </li>
)

OrderedItem.propTypes = {
  children: PropTypes.node.isRequired
}

OrderedItem.displayName = 'OrderedList.Item'

export default OrderedItem
