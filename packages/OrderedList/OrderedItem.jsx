import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'

import safeRest from '../../shared/utils/safeRest'

const OrderedItem = ({ children, size, ...rest }) => (
  <li {...safeRest(rest)}>
    <Text size={size}>{children}</Text>
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
