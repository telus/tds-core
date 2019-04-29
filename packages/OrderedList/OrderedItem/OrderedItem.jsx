import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../shared/utils/safeRest'
import joinClassNames from '../../../shared/utils/joinClassNames'

import styles from './OrderedItem.modules.scss'
import listStyles from '../../../shared/styles/List.modules.scss'

const OrderedItem = ({ children, size, ...rest }) => (
  <li {...safeRest(rest)} className={joinClassNames(styles.base, styles[size], listStyles.item)}>
    {children}
  </li>
)

OrderedItem.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

OrderedItem.defaultProps = {
  size: 'medium',
}

OrderedItem.displayName = 'OrderedList.Item'

export default OrderedItem
