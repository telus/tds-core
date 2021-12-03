import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName, or, htmlElement } from '@tds/util-prop-types'
import { ChevronRight, ChevronLeft } from '@tds/core-interactive-icon'
import Box from '@tds/core-box'
import { medium, helveticaNeueRoman55 } from '@tds/shared-typography'
import { colorPrimary, colorSecondary, colorWhite } from '@tds/core-colours'
import { safeRest } from '@tds/util-helpers'

import { warn } from '../../shared/utils/warn'

const base = {
  display: 'inline-block',
  textDecoration: 'none',
  maxWidth: '100%',
  verticalAlign: 'top',
}

const variantDict = {
  primary: 'default',
  secondary: 'alternative',
  inverted: 'inverted',
}

const StyledChevronLink = styled.a(medium, helveticaNeueRoman55, base, ({ variant }) => {
  let color
  if (variant === 'secondary') {
    color = colorSecondary
  } else if (variant === 'inverted') {
    color = colorWhite
  } else {
    color = colorPrimary
  }

  return {
    '&:link,&:visited': {
      color,
    },
  }
})

const StyledChevron = styled.span(({ direction }) => ({
  display: 'inline-block',
  transition: 'transform 300ms',
  [`${StyledChevronLink}:hover &`]: {
    transform: `translateX(${direction === 'right' ? '0.25rem' : '-0.25rem'})`,
  },
}))

const getIcon = (direction, variant) => (
  <StyledChevron direction={direction}>
    {direction === 'left' && <ChevronLeft size={16} variant={variant} />}
    {direction === 'right' && <ChevronRight size={16} variant={variant} />}
  </StyledChevron>
)

/**
 * A call to action link.
 *
 * @version ./package.json
 */
const ChevronLink = forwardRef(
  ({ reactRouterLinkComponent, variant, direction, children, ...rest }, ref) => {
    if ((reactRouterLinkComponent || rest.to) && !(reactRouterLinkComponent && rest.to)) {
      warn('Chevron Link', 'The props `reactRouterLinkComponent` and `to` must be used together.')
    }

    const iconVariant = variantDict[variant]

    const innerLink = (
      <Box tag="span" inline between={2}>
        {direction === 'left' ? getIcon(direction, iconVariant) : undefined}
        <span>{children}</span>
        {direction === 'right' ? getIcon(direction, iconVariant) : undefined}
      </Box>
    )

    return (
      <StyledChevronLink
        {...safeRest(rest)}
        as={reactRouterLinkComponent || 'a'}
        variant={variant}
        direction={direction}
        ref={ref}
      >
        {innerLink}
      </StyledChevronLink>
    )
  }
)

ChevronLink.displayName = 'ChevronLink'

ChevronLink.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  /**
   * The chevron's direction and placement.
   */
  direction: PropTypes.oneOf(['left', 'right']),
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
   * The label. It can include the `A11yContent` component, strings, or strings wrapped in a `<span>`.
   */
  children: or([PropTypes.string, componentWithName('A11yContent'), htmlElement('span')])
    .isRequired,
}
ChevronLink.defaultProps = {
  variant: 'primary',
  direction: 'right',
  reactRouterLinkComponent: null,
  to: null,
  href: null,
}

export default ChevronLink
