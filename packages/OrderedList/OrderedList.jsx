import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import Box from '@tds/core-box'

import safeRest from '../../shared/utils/safeRest'

import OrderedItem from './OrderedItem'

import styles from './OrderedList.modules.scss'

/**
 * @version ./package.json
 */
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
