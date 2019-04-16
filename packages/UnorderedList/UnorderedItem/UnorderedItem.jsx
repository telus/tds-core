import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorTelusPurple, colorPrimary, colorCardinal } from '@tds/core-colours'
import Text from '@tds/core-text'

import safeRest from '../../../shared/utils/safeRest'

const StyledUnorderedItem = styled.li(({ listStyle, size }) => ({
  position: 'relative',
  lineHeight: 1,

  '&::before': {
    display: 'block',
    position: 'absolute',
    left: '-2rem',
    fontFamily: 'TELUS Core Icons',
    ...(size === 'small' && { lineHeight: '1.25rem' }),
    ...(size === 'medium' && { lineHeight: '1.6rem' }),
    ...(size === 'large' && { lineHeight: '2.1rem' }),

    ...(listStyle === 'circle' && {
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

    ...(listStyle === 'checkmark' && {
      content: `'\f101'`,
      fontSize: '1rem',
      width: '0.75rem',
      color: colorPrimary,
    }),

    ...(listStyle === 'x' && {
      content: `'\f104'`,
      fontSize: '1rem',
      width: '0.75rem',
      color: colorCardinal,

      ...(size === 'small' && {
        lineHeight: '1.32rem',
      }),
    }),
  },
}))

const UnorderedItem = ({ listStyle, size, children, ...rest }) => (
  <StyledUnorderedItem {...safeRest(rest)} listStyle={listStyle} size={size}>
    <Text size={size}>{children}</Text>
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
