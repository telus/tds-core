import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorTelusPurple } from '@tds/core-colours'
import { small, medium, large, smallFont, mediumFont, largeFont } from '@tds/shared-typography'
import { Checkmark, Times } from '@tds/core-feedback-icon'
import { safeRest } from '@tds/util-helpers'

const StyledUnorderedItem = styled.li(({ iconStyle, size }) => ({
  position: 'relative',
  display: 'block',
  lineHeight: 1,
  ...(size === 'small' && { ...small, ...smallFont }),
  ...(size === 'medium' && { ...medium, ...mediumFont }),
  ...(size === 'large' && { ...large, ...largeFont }),

  '&::before': {
    display: 'block',
    position: 'absolute',
    left: '-2rem',
    ...(size === 'small' && { lineHeight: 1.25 }),
    ...(size === 'medium' && { lineHeight: 1.6 }),
    ...(size === 'large' && { lineHeight: 2.1 }),

    ...(iconStyle === 'circle' && {
      content: `''`,
      backgroundImage:
        'url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBmaWxsPSIjNGIyODZkIiAvPjwvc3ZnPg==)',
      color: colorTelusPurple,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',

      ...(size === 'small' && {
        width: '0.25rem',
        height: '0.25rem',
        top: '0.5rem',
      }),

      ...(size === 'medium' && {
        width: '0.32rem',
        height: '0.32rem',
        top: '0.65rem',
      }),

      ...(size === 'large' && {
        width: '0.38rem',
        height: '0.38rem',
        top: '0.87rem',
      }),
    }),
  },
}))

const StyledIcon = styled.span({
  display: 'flex',
  position: 'absolute',
  left: '-2.125rem',
  marginTop: '0.25rem',
})

const getIcon = style => {
  if (style === 'checkmark') {
    return (
      <StyledIcon>
        <Checkmark />
      </StyledIcon>
    )
  }

  if (style === 'x') {
    return (
      <StyledIcon>
        <Times />
      </StyledIcon>
    )
  }

  return ''
}

const UnorderedItem = ({ listStyle, itemStyle, size, children, ...rest }) => (
  <StyledUnorderedItem {...safeRest(rest)} iconStyle={itemStyle || listStyle} size={size}>
    {getIcon(itemStyle || listStyle)}
    {children}
  </StyledUnorderedItem>
)

UnorderedItem.propTypes = {
  /**
   * The list's global bullet style. Can be overriden by listStyle.
   * @ignore
   */
  listStyle: PropTypes.oneOf(['circle', 'checkmark', 'x']),
  /**
   * The bullet style of a single item.
   * @since 2.1.0
   */
  itemStyle: PropTypes.oneOf(['circle', 'checkmark', 'x']),
  /**
   * The size of the list items, passed from the parent.
   * @ignore
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
}

UnorderedItem.defaultProps = {
  listStyle: 'circle',
  itemStyle: undefined,
  size: 'medium',
}

UnorderedItem.displayName = 'UnorderedList.Item'

export default UnorderedItem
