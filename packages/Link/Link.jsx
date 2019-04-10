/* eslint-disable no-dupe-keys */

import React from 'react'
import PropTypes from 'prop-types'
import { colorShark, colorWhite } from '@tds/core-colours'
import styled from 'styled-components'
import safeRest from '../../shared/utils/safeRest'
import { warn } from '../../shared/utils/warn'

const base = {
  '&:focus': {
    outline: 'dotted 1px Highlight',
    outline: 'auto 5px -webkit-focus-ring-color',
  },
  '&:link,&:visited': {
    color: colorShark,
    textDecoration: 'underline',
  },
  '&:hover': {
    textDecoration: 'underline',
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
const Link = ({ reactRouterLinkComponent, invert, children, ...rest }, context) => {
  if (!(reactRouterLinkComponent && rest.to) && (reactRouterLinkComponent || rest.to)) {
    warn('Link', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  return (
    <StyledLink
      {...safeRest(rest)}
      as={reactRouterLinkComponent || 'a'}
      invert={invert}
      context={context}
      data-testid="link"
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
}
Link.defaultProps = {
  reactRouterLinkComponent: null,
  to: null,
  href: null,
  invert: false,
}

Link.contextTypes = {
  inheritColor: PropTypes.bool,
}

export default Link
