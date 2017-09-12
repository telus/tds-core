import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import Text from '../../Typography/Text/Text'
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
    <Text size={size}>
      <ol {...safeRest(rest)} className={classes}>
        {items}
      </ol>
    </Text>
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
    'base',
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
  size: 'base'
}

OrderedList.Item = OrderedItem

export default OrderedList
