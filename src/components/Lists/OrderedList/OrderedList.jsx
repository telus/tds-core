import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import OrderedItem from './OrderedItem'

import styles from './OrderedList.modules.scss'

const OrderedList = ({ listStyle, size, children, ...rest }) => {
  const classes = `
    ${styles[listStyle]}
  `

  const sizeChildren = child =>
    React.cloneElement(child, {
      size
    })

  const items = React.Children.map(children, sizeChildren)

  return (
    <ol {...safeRest(rest)} className={classes}>
      {items}
    </ol>
  )
}

OrderedList.propTypes = {
  /**
   * The type of list.
   */
  listStyle: PropTypes.oneOf([
    'decimal',
    'upperAlpha',
    'lowerAlpha'
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
  size: undefined
}

OrderedList.Item = OrderedItem

export default OrderedList
