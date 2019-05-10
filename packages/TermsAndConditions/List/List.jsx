import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'

import { boldFont, sizeSmall, smallFont } from '@tds/shared-typography'
import { media } from '@tds/core-responsive'

export const StyledListItem = styled.li({
  '& > span': {
    ...smallFont,
  },
  paddingLeft: '1rem',
})

export const StyledList = styled(Box)({
  listStyle: 'decimal',
  ...boldFont,
  ...sizeSmall,
  paddingLeft: '2rem',
  ...media.from('md').css({
    paddingLeft: '1rem',
  }),
})

export const withStyledComponent = StyledComponent => Component => props => {
  const WithStyledComponent = <Component {...props} styledComponent={StyledComponent} />
  return WithStyledComponent
}

const Item = ({ children, styledComponent: Component, ...rest }) => (
  <Component {...rest}>
    {typeof children === 'string' ? <span>{children}</span> : children}
  </Component>
)

Item.propTypes = {
  children: PropTypes.node.isRequired,
  styledComponent: PropTypes.object,
}

Item.defaultProps = {
  styledComponent: StyledListItem,
}

const List = ({ children, styledComponent: Component, ...rest }) => (
  <Component {...rest} tag="ol" between={3}>
    {React.Children.toArray(children)
      .filter(child => child)
      .map(child => React.cloneElement(child))}
  </Component>
)

List.propTypes = {
  children: PropTypes.node.isRequired,
  styledComponent: PropTypes.object,
}

List.defaultProps = {
  styledComponent: StyledList,
}

List.Item = Item

export default List
