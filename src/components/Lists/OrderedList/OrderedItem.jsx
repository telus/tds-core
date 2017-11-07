import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'

const OrderedItem = ({ children, ...rest }) => <li {...safeRest(rest)}>{children}</li>

OrderedItem.propTypes = {
  children: PropTypes.node.isRequired,
}

OrderedItem.displayName = 'OrderedList.Item'

export default OrderedItem
