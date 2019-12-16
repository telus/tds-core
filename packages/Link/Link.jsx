import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorGreyShark, colorWhite } from '@tds/core-colours'
import { links } from '@tds/shared-styles'
import { safeRest } from '@tds/util-helpers'

import { withForwardedRef } from '@tds/shared-hocs'

import { warn } from '../../shared/utils/warn'

const base = {
  ...links.focusOutline,
  '&:link,&:visited': {
    color: colorGreyShark,
    textDecoration: 'underline',
  },
  '&:hover': {
    textDecoration: 'none',
  },
}
const StyledLink = styled.a(base, ({ invert, context }) => {
  if (context.inheritColor) {
    return {
      '&:link,&:visited': {
        color: 'inherit',
      },
    }
  }
  if (invert) {
    return {
      '&:link,&:visited': {
        color: colorWhite,
      },
    }
  }
  return {}
})

/**
 * @version ./package.json
 */
const Link = ({ reactRouterLinkComponent, invert, children, forwardedRef, ...rest }, context) => {
  if (!(reactRouterLinkComponent && rest.to) && (reactRouterLinkComponent || rest.to)) {
    warn('Link', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  return (
    <StyledLink
      {...safeRest(rest)}
      as={reactRouterLinkComponent || 'a'}
      invert={invert}
      context={context}
      ref={forwardedRef}
    >
      {children}
    </StyledLink>
  )
}
Link.propTypes = {
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.func,
  /**
   * Target URL (if using 'reactRouterLinkComponent')
   */
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Target URL.
   */
  href: PropTypes.string,
  /**
   * Invert link style to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * Link text.
   */
  children: PropTypes.node.isRequired,
  /* @ignore */
  forwardedRef: PropTypes.object,
}
Link.defaultProps = {
  reactRouterLinkComponent: null,
  to: null,
  href: null,
  invert: undefined,
  forwardedRef: undefined,
}

Link.contextTypes = {
  inheritColor: PropTypes.bool,
}

export default withForwardedRef(Link)
