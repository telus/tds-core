import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName, or, htmlElement } from '@tds/util-prop-types'
import { StyledButton } from '@tds/core-button'
import { links } from '@tds/shared-styles'
import { safeRest } from '@tds/util-helpers'

import { warn, deprecate } from '../../shared/utils/warn'

const DEFAULT_VARIANT = 'primary'
const VALID_VARIANTS = ['primary', 'secondary', 'inverted', 'standard', 'brand']

const StyledButtonLink = styled(StyledButton)(
  links.focusOutline,
  {
    textDecoration: 'none',
  },
  ({ fullWidth }) => {
    const width = fullWidth ? '100%' : 'auto'
    return {
      '&:link,&:visited': {
        width,
      },
    }
  }
)

const isDeprecatedButtonVariant = variant => {
  return ['primary', 'secondary'].indexOf(variant) !== -1
}

const validateVariant = variant => {
  if (VALID_VARIANTS.indexOf(variant) === -1) {
    return DEFAULT_VARIANT
  }
  return variant
}

/**
 * A link that is styled as a button.
 *
 * @version ./package.json
 */
const ButtonLink = forwardRef(
  ({ reactRouterLinkComponent, variant, fullWidth, children, ...rest }, ref) => {
    if ((reactRouterLinkComponent || rest.to) && !(reactRouterLinkComponent && rest.to)) {
      warn('Link Button', 'The props `reactRouterLinkComponent` and `to` must be used together.')
    }

    if (isDeprecatedButtonVariant(variant)) {
      deprecate(
        '@tds/core-button-link',
        "The 'primary' and 'secondary' variants have been deprecated. Please see https://tds.telus.com/components/index.html#/Links?id=buttonlink for more details."
      )
    }

    return (
      <StyledButtonLink
        {...safeRest(rest)}
        as={reactRouterLinkComponent || 'a'}
        variant={validateVariant(variant)}
        ref={ref}
        fullWidth={fullWidth}
      >
        {children}
      </StyledButtonLink>
    )
  }
)

ButtonLink.displayName = 'ButtonLink'

ButtonLink.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(VALID_VARIANTS),
  /**
   * More style.
   */
  rank: PropTypes.oneOf(['main', 'common']),
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Target URL (if using 'reactRouterLinkComponent')
   */
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Target URL
   */
  href: PropTypes.string,
  /**
   * If `true`, sets `ButtonLink` to 100% width.
   * @since 2.3.0
   */
  fullWidth: PropTypes.bool,
  /**
   * The label. It can include the `A11yContent` component, strings, or strings wrapped in a `<span>`.
   */
  children: or([PropTypes.string, componentWithName('A11yContent'), htmlElement('span')])
    .isRequired,
}
ButtonLink.defaultProps = {
  variant: DEFAULT_VARIANT,
  rank: 'common',
  reactRouterLinkComponent: null,
  to: null,
  href: null,
  fullWidth: false,
}

export default ButtonLink
