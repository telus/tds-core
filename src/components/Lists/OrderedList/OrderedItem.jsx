import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../Box/Box'

import safeRest from '../../../utils/safeRest'

const OrderedItem = ({children, ...rest}) => (
  <li {...safeRest(rest)}>
    <Box below={2}>{children}</Box>
  </li>
)

OrderedItem.propTypes = {
  children: PropTypes.node.isRequired,
}

OrderedItem.displayName = 'OrderedList.Item'

export default OrderedItem
