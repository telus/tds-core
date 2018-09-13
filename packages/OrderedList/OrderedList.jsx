import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import Box from '@tds/core-box'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'

import OrderedItem from './OrderedItem'

import styles from './OrderedList.modules.scss'

const injectListStyle = (child, size) => React.cloneElement(child, { size })

/**
 * @version ./package.json
 */
const OrderedList = ({ listStyle, size, children, ...rest }) => {
  return (
    <Box
      {...safeRest(rest)}
      tag="ol"
      between={2}
      dangerouslyAddClassName={joinClassNames(styles[listStyle], styles[size])}
    >
      {React.Children.map(children, child => injectListStyle(child, size))}
    </Box>
  )
}

OrderedList.propTypes = {
  /**
   * The bullet style.
   */
  listStyle: PropTypes.oneOf(['decimal', 'upperAlpha', 'lowerAlpha']),
  /**
   * The size of the list's text.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The list items. Must be at least one `OrderedList.Item`.
   */
  children: childrenOfType(OrderedItem).isRequired,
}

OrderedList.defaultProps = {
  listStyle: 'decimal',
  size: 'medium',
}

OrderedList.Item = OrderedItem

export default OrderedList
