import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../safeRest'
import OrderedItem from './OrderedItem/OrderedItem'

import styles from './OrderedList.modules.scss'

const OrderedList = ({ variant, size, children, ...rest }) => {
  const classes = `
    ${styles.base}
    ${styles[variant]}
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
  variant: PropTypes.oneOf([
    'number',
    'capital',
    'lowercase'
  ]),
  size: PropTypes.oneOf([
    'medium',
    'large'
  ]),
  children: PropTypes.node.isRequired
}

OrderedList.defaultProps = {
  variant: 'number',
  size: 'medium'
}

OrderedList.Item = OrderedItem

export default OrderedList
