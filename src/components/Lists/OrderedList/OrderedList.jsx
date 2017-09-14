import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import safeRest from '../../../safeRest'
import OrderedItem from './OrderedItem'

import styles from './OrderedList.modules.scss'

const injectSize = (child, size) => React.cloneElement(child, { size })

/**
 * <span class="docs--badge green">wip</span>
 */
const OrderedList = ({ listStyle, size, children, ...rest }) => (
  <ol {...safeRest(rest)} className={styles[listStyle]}>
    {React.Children.map(children, child => injectSize(child, size))}
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
   * The font size.
   */
  size: PropTypes.oneOf([
    'medium',
    'large'
  ]),
  /**
   * The list items. Must be at least one `OrderedList.Item`.
   */
  children: childrenOfType(OrderedItem).isRequired
}

OrderedList.defaultProps = {
  listStyle: 'decimal',
  size: undefined
}

OrderedList.Item = OrderedItem

export default OrderedList
