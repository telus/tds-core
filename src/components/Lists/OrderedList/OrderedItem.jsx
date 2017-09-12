import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import Text from '../../Typography/Text/Text'

const OrderedItem = ({ size, children, ...rest }) => {
  return (
    <li {...safeRest(rest)}>
      <Text size={size}>
        {children}
      </Text>
    </li>
  )
}

OrderedItem.propTypes = {
  size: PropTypes.string,
  /**
   * The content
   */
  children: PropTypes.node.isRequired
}

OrderedItem.displayName = 'OrderedList.Item'

export default OrderedItem
