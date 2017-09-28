import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import safeRest from '../../../utils/safeRest'
import OrderedItem from './OrderedItem'

import styles from './OrderedList.modules.scss'

/**
 * <span class="docs--badge__wip">wip</span>
 */
const OrderedList = ({ listStyle, children, ...rest }) => (
  <ol {...safeRest(rest)} className={styles[listStyle]}>
    {children}
  </ol>
)

OrderedList.propTypes = {
  /**
   * The bullet style.
   */
  listStyle: PropTypes.oneOf([
    'decimal',
    'upperAlpha',
    'lowerAlpha'
  ]),
  /**
   * The list items. Must be at least one `OrderedList.Item`.
   */
  children: childrenOfType(OrderedItem).isRequired
}

OrderedList.defaultProps = {
  listStyle: 'decimal'
}

OrderedList.Item = OrderedItem

export default OrderedList
