import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import safeRest from '../../../utils/safeRest'

import OrderedItem from './OrderedItem'
import Box from '../../../../packages/Box/Box'

import styles from './OrderedList.modules.scss'

const OrderedList = ({ listStyle, children, ...rest }) => (
  <Box {...safeRest(rest)} tag="ol" between={2} dangerouslyAddClassName={styles[listStyle]}>
    {children}
  </Box>
)

OrderedList.propTypes = {
  /**
   * The bullet style.
   */
  listStyle: PropTypes.oneOf(['decimal', 'upperAlpha', 'lowerAlpha']),
  /**
   * The list items. Must be at least one `OrderedList.Item`.
   */
  children: childrenOfType(OrderedItem).isRequired,
}

OrderedList.defaultProps = {
  listStyle: 'decimal',
}

OrderedList.Item = OrderedItem

export default OrderedList
