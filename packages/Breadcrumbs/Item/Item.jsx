import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorTelusPurple, colorGreyShuttle } from '@tds/core-colours'
import Link from '@tds/core-link'
import { media } from '@tds/core-responsive'
import Text from '@tds/core-text'
import { sizeSmall, sizeMedium } from '@tds/shared-typography'

import ColoredTextProvider from '../../../shared/components/ColoredTextProvider/ColoredTextProvider'

const item = {
  display: 'inline',
  ...sizeSmall,

  ...media.from('md').css({
    ...sizeMedium,
  }),
}

const StyledItemContainer = styled(ColoredTextProvider)(({ isCurrent }) => ({
  ...item,
  color: isCurrent ? colorTelusPurple : colorGreyShuttle,
  ...(isCurrent && {
    fontWeight: 700,

    '&:after': {
      content: `''`,
      borderRight: 0,
      margin: 0,
    },
  }),
}))

const StyledSlash = styled.span({
  ...item,
  margin: '0 0.5rem',
})

const Item = forwardRef(({ href, reactRouterLinkComponent, children, current, ...rest }, ref) => {
  const linkOptions = { ...rest }
  if (reactRouterLinkComponent) {
    linkOptions.to = href
    linkOptions.reactRouterLinkComponent = reactRouterLinkComponent
  } else {
    linkOptions.href = href
  }
  return (
    <StyledItemContainer tag="li" isCurrent={current}>
      {current ? (
        <Text>{children}</Text>
      ) : (
        <span>
          <Link {...linkOptions} ref={ref}>
            {children}
          </Link>
          <StyledSlash aria-hidden="true">/</StyledSlash>
        </span>
      )}
    </StyledItemContainer>
  )
})

Item.displayName = 'Item'

Item.propTypes = {
  /**
   * Target URL. This will be converted to `to` if the `reactRouterLinkComponent`
   * prop is provided to the `Item` or parent `Breadcrumbs` element.
   */
  href: PropTypes.string.isRequired,
  /**
   * React Router Link component. This will be passed down from the parent
   * `<Breadcrumbs>` if the parent has a `reactRouterLinkComponent` provided.
   */
  reactRouterLinkComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Breadcrumb text
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   *
   * Indicates whether or not the Item should be as current/active
   */
  current: PropTypes.bool,
}

Item.defaultProps = {
  reactRouterLinkComponent: undefined,
  current: false,
}

export default Item
