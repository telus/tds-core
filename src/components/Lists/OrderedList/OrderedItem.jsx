import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

import textStyles from '../../Typography/Text/Text.modules.scss'
import styles from '../ListItem.modules.scss'

const OrderedItem = ({ size, children, ...rest }) => {
  const classes = `
    ${styles.item}
    ${textStyles[size]}
  `

  return (
    <li {...safeRest(rest)} className={classes}>
      {children}
    </li>
  )
}

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
