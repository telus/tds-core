import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorGreyShark, colorWhite, colorGainsboro, colorGreyRaven } from '@tds/core-colours'
import { links } from '@tds/shared-styles'
import { safeRest } from '@tds/util-helpers'
import { componentWithName } from '@tds/util-prop-types'

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
  '& svg': {},
}

const states = ({ invert }) => {
  return {
    '&:active': {
      color: invert && colorGainsboro,
      backgroundColor: invert ? 'rgba(0,0,0,0.4)' : colorGainsboro,
      borderRadius: '0.25rem',
      padding: '0.125rem',
      margin: '-0.125rem',
      textDecoration: 'underline',
    },
    '&:focus': {
      border: `0.125rem solid ${invert ? colorWhite : colorGreyRaven}`,
      padding: '0.125rem',
      margin: '-0.25rem', // (border + padding) * -1
      borderRadius: '0.25rem',
      outline: 'none',
    },
  }
}
const StyledLink = styled.a(
  base,
  {
    '& svg': {
      transition: 'transform 150ms ease-in-out',
    },
    '&:hover svg': {
      transform: 'scale(1.1, 1.1)',
    },
    '&:active svg': {
      transform: 'scale(1, 1)',
    },
  },
  ({ invert, context }) => {
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
  },
  states,
  ({ hasIcon }) => {
    if (hasIcon) {
      return {
        display: 'inline-block',
        '& > svg': {
          verticalAlign: 'bottom',
        },
      }
    }
    return {}
  }
)

/**
 * @version ./package.json
 */
const Link = (
  { reactRouterLinkComponent, invert, children, forwardedRef, icon: Icon, iconPosition, ...rest },
  context
) => {
  if (!(reactRouterLinkComponent && rest.to) && (reactRouterLinkComponent || rest.to)) {
    warn('Link', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  const renderChildren = useCallback(() => {
    if (Icon) {
      return (
        <>
          {iconPosition === 'left' && (
            <Icon color={invert ? 'white' : 'greyShark'} style={{ marginRight: '0.5rem' }} />
          )}
          {children}
          {iconPosition === 'right' && (
            <Icon color={invert ? 'white' : 'greyShark'} style={{ marginLeft: '0.25rem' }} />
          )}
        </>
      )
    }
    return children
  }, [children, Icon, iconPosition, invert])

  return (
    <StyledLink
      {...safeRest(rest)}
      as={reactRouterLinkComponent || 'a'}
      invert={invert}
      context={context}
      ref={forwardedRef}
      hasIcon={!!Icon}
    >
      {renderChildren()}
    </StyledLink>
  )
}
Link.propTypes = {
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
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
  /**
   * @ignore
   */
  forwardedRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  /**
   * Provide an icon from the Dependent icon group in `@tds/core-interactive-icon`.
   * @since 2.2.0
   */
  icon: componentWithName('Dependent', true),
  /**
   * When `icon` is provided, use `iconPosition` to place the Icon to the left or right side of Link.
   * @since 2.2.0
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
}
Link.defaultProps = {
  reactRouterLinkComponent: null,
  to: null,
  href: null,
  invert: undefined,
  forwardedRef: undefined,
  icon: undefined,
  iconPosition: 'left',
}

Link.contextTypes = {
  inheritColor: PropTypes.bool,
}

export default withForwardedRef(Link)
