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

export const StyledList = styled(Box)(
  {
    ...boldFont,
    ...sizeSmall,
    paddingLeft: '2rem',
    ...media.from('md').css({
      paddingLeft: '1rem',
    }),
  },
  ({ type }) => ({
    listStyle: type === 'indexed' ? 'decimal' : 'none',
  })
)

const Item = ({ styledComponent: Component, ...rest }) => <Component {...rest} />

Item.propTypes = {
  styledComponent: PropTypes.object,
}

Item.defaultProps = {
  styledComponent: StyledListItem,
}

const List = ({ children, styledComponent: Component, type, ...rest }) => {
  return (
    <Component {...rest} tag={type === 'indexed' ? 'ol' : 'ul'} between={3} type={type}>
      {React.Children.toArray(children)
        .filter(child => child)
        .map(child => React.cloneElement(child))}
    </Component>
  )
}

List.propTypes = {
  type: PropTypes.oneOf(['indexed', 'nonIndexed']).isRequired,
  children: PropTypes.node.isRequired,
  styledComponent: PropTypes.object,
}

List.defaultProps = {
  styledComponent: StyledList,
}

List.Item = Item

export default List
