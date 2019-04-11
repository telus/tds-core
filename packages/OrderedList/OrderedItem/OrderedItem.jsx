import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '@tds/core-text'

import safeRest from '../../../shared/utils/safeRest'

export const StyledOrderedItem = styled.li({
  marginLeft: '-1rem',
  paddingLeft: '1rem',
  '&:last-child': {
    marginBottom: 0,
  },
})

const OrderedItem = ({ children, size, ...rest }) => (
  <StyledOrderedItem {...safeRest(rest)}>
    <Text size={size}>{children}</Text>
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
