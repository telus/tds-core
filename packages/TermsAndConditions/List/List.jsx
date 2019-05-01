import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'

import { boldFont, sizeSmall, smallFont } from '@tds/shared-typography'
import { media } from '@tds/core-responsive'

const StyledListItem = styled.li(() => ({
  '& > span': { ...smallFont },
  paddingLeft: '1rem',
  ...media.from('md').css({
    paddingLeft: '2rem',
  }),
}))

const StyledList = styled(Box)({
  listStyle: 'decimal',
  ...boldFont,
  ...sizeSmall,
  ...media.from('md').css({
    marginLeft: '-2rem',
  }),
})

const Item = ({ size, children, ...rest }) => (
  <StyledListItem {...rest} size={size}>
    {typeof children === 'string' ? <span>{children}</span> : children}
  </StyledListItem>
)
Item.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const List = ({ size, children, ...rest }) => (
  <StyledList {...rest} size={size} tag="ol" between={3}>
    {React.Children.toArray(children)
      .filter(child => child)
      .map(child => React.cloneElement(child, { size }))}
  </StyledList>
)

List.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

List.Item = Item

export default List
