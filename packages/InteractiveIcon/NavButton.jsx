import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { colorWhite, colorGreyShuttle, colorGreyGainsboro } from '@tds/core-colours'
import { uniqueId, safeRest } from '@tds/util-helpers'

import animations from './shared/animations'
import SharedStyledInteractiveIconSVG from './shared/StyledInteractiveIconSVG'
import SharedStyledInteractiveIconButton from './shared/StyledInteractiveIconButton'
import StyledInteractiveIconHover from './shared/StyledInteractiveIconHover'
import Tooltip from './components/Tooltip'

export const StyledInteractiveIconSVG = styled(SharedStyledInteractiveIconSVG)(
  { transition: 'transform 150ms ease-in-out' },
  animations.reduceMotion
)

export const StyledInteractiveIconButton = styled(SharedStyledInteractiveIconButton)(
  animations.scale,
  animations.reduceMotion
)

const StyledButtonAndTooltip = styled.div({ display: 'inline-block' })

const getTheme = variant => {
  if (variant === 'inverted') {
    return {
      hoverBackgroundColor: 'transparent',
      iconColor: colorWhite,
    }
  }
  return {
    hoverBackgroundColor: colorGreyGainsboro,
    iconColor: colorGreyShuttle,
  }
}

/**
 * @version ./package.json
 */
const NavButton = forwardRef(({ a11yText, variant, onClick, children, tag, ...rest }, ref) => {
  const ariaId = uniqueId(a11yText.replace(/\s+/g, '-').toLowerCase())

  return (
    <ThemeProvider theme={getTheme(variant)}>
      <StyledButtonAndTooltip>
        <StyledInteractiveIconButton
          {...safeRest(rest)}
          aria-labelledby={ariaId}
          variant={variant}
          onClick={onClick}
          as={tag}
          ref={ref}
        >
          <StyledInteractiveIconHover />
          {children}
        </StyledInteractiveIconButton>
        <Tooltip id={ariaId}>{a11yText}</Tooltip>
      </StyledButtonAndTooltip>
    </ThemeProvider>
  )
})

NavButton.displayName = 'NavButton'

NavButton.propTypes = {
  /**
   * Use the copy prop to either select provided English or French copy
   * by passing `'en'` or `'fr'` respectively.
   *
   * To provide your own, pass an object with the key `a11yText`.
   */
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  /**
   * @ignore
   * A description of the icon for screen readers, also appears as the hint when hovering over the icon.
   */
  a11yText: PropTypes.string,
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['default', 'inverted']),
  /**
   * Pass a handler to the icon to make it interactive.
   */
  onClick: PropTypes.func,
  /**
   * The tag
   */
  tag: PropTypes.oneOf(['button', 'a']),
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
}

NavButton.defaultProps = {
  a11yText: undefined,
  variant: 'default',
  onClick: undefined,
  tag: 'button',
}

export default NavButton
