import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'
import { list } from '@tds/shared-styles'

import safeRest from '../../shared/utils/safeRest'

import OrderedItem, { StyledOrderedItem } from './OrderedItem/OrderedItem'

const listStyleType = {
  upperAlpha: 'upper-alpha',
  lowerAlpha: 'lower-alpha',
  decimal: 'decimal',
}

export const StyledOrderedList = styled(({ size, listStyle, ...rest }) => <Box {...rest} />)(
  ({ listStyle }) => ({
    paddingLeft: '3rem',
    listStyleType: listStyleType[listStyle],
    ...list.nestedListSpacing,
  })
)

/**
 * @version ./package.json
 */
const OrderedList = ({ listStyle, size, children, ...rest }) => (
  <StyledOrderedList {...safeRest(rest)} tag="ol" between={2} listStyle={listStyle}>
    {React.Children.toArray(children)
      .filter(child => child)
      .map(child => React.cloneElement(child, { size }))}
  </StyledOrderedList>
)

OrderedList.propTypes = {
  /**
   * The bullet style.
   */
  listStyle: PropTypes.oneOf(['decimal', 'upperAlpha', 'lowerAlpha']),
  /**
   * The size of the list's text.
   *
   * @since 2.0.0
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The list items. Must be at least one `OrderedList.Item`.
   */
  children: componentWithName('OrderedItem').isRequired,
}

OrderedList.defaultProps = {
  listStyle: 'decimal',
  size: 'medium',
}

OrderedList.Item = OrderedItem

export default OrderedList

export { StyledOrderedItem }
