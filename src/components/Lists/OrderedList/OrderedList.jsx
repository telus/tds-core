import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import OrderedItem from './OrderedItem/OrderedItem'

import styles from './OrderedList.modules.scss'

const OrderedList = ({ listStyle, size, children, ...rest }) => {
  const classes = `
    ${styles[listStyle]}
    ${styles[size]}
  `
  return (
    <ol {...safeRest(rest)} className={classes}>
      {children}
    </ol>
  )
}

OrderedList.propTypes = {
  /**
   * The type of list.
   */
  listStyle: PropTypes.oneOf([
    'decimal',
    'upper-alpha',
    'lower-alpha'
  ]),
  /**
   * The font size
   */
  size: PropTypes.oneOf([
    'medium',
    'large'
  ]),
  /**
   * The list items
   */
  children: PropTypes.node.isRequired
}

OrderedList.defaultProps = {
  listStyle: 'decimal',
  size: 'medium'
}

OrderedList.Item = OrderedItem

export default OrderedList
