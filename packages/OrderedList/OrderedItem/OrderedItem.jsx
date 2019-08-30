import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { small, medium, large, smallFont, mediumFont, largeFont } from '@tds/shared-typography'
import { safeRest } from '@tds/util-helpers'

export const StyledOrderedItem = styled.li(({ size }) => ({
  marginLeft: '-1rem',
  paddingLeft: '1rem',
  ...(size === 'small' && { ...small, letterSpacing: 'inherit' }),
  ...(size === 'medium' && { ...medium, ...mediumFont }),
  ...(size === 'large' && { ...large, ...largeFont, letterSpacing: 'inherit' }),
}))

export const StyledOrderedItemText = styled.span(({ size }) => ({
  ...(size === 'small' && { ...small, ...smallFont }),
  ...(size === 'medium' && { ...medium, ...mediumFont }),
  ...(size === 'large' && { ...large, ...largeFont }),
}))

const OrderedItem = ({ children, size, ...rest }) => (
  <StyledOrderedItem size={size} {...safeRest(rest)}>
    <StyledOrderedItemText size={size}>{children}</StyledOrderedItemText>
  </StyledOrderedItem>
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
