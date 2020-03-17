import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import A11yContent from '@tds/core-a11y-content'
import { colorGreyGainsboro } from '@tds/core-colours'
import { safeRest } from '@tds/util-helpers'
import { componentWithName } from '@tds/util-prop-types'

import animations from './shared/animations'
import SharedStyledInteractiveIconButton from './shared/StyledInteractiveIconButton'
import SharedStyledInteractiveIconHover from './shared/StyledInteractiveIconHover'
import { warn } from '../../shared/utils/warn'

export const StyledIconButton = styled(SharedStyledInteractiveIconButton)(animations.scale, {
  '&:hover > svg': animations.reduceMotion,
})

const getTheme = variant => {
  if (variant === 'alternative') {
    return {
      hoverBackgroundColor: '#D8CBE5',
    }
  }
  if (variant === 'inverted') {
    return {
      hoverBackgroundColor: 'transparent',
    }
  }
  return {
    hoverBackgroundColor: colorGreyGainsboro,
  }
}

/**
 * @version ./package.json
 */
const IconButton = forwardRef(({ a11yText, variant, onClick, tag, icon: Icon, ...rest }, ref) => {
  let color
  if (variant === 'alternative') {
    color = 'telusPurple'
  } else if (variant === 'inverted') {
    color = 'white'
  } else {
    color = 'greyShark'
  }

  if (
    Icon.name !== 'Add' &&
    Icon.name !== 'Close' &&
    Icon.name !== 'Subtract' &&
    Icon.name !== 'PlayVideo'
  ) {
    warn(
      'IconButton',
      'IconButton is meant to be used with the Add, Close, Subtract, and PlayVideo icons for their universally-recognizable appearance. Other icons should be accompanied with text and not as a part of IconButton.'
    )
  }

  return (
    <ThemeProvider theme={getTheme(variant)}>
      <StyledIconButton {...safeRest(rest)} variant={variant} onClick={onClick} as={tag} ref={ref}>
        <A11yContent>{a11yText}</A11yContent>
        <SharedStyledInteractiveIconHover />
        <Icon color={color} />
      </StyledIconButton>
    </ThemeProvider>
  )
})

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  /**
   * A description of the icon for assistive technology.
   */
  a11yText: PropTypes.string.isRequired,
  /**
   * The visual style.
   */
  variant: PropTypes.oneOf(['default', 'alternative', 'inverted']),
  /**
   * Pass a handler to the icon to make it interactive.
   */
  onClick: PropTypes.func,
  /**
   * The tag
   */
  tag: PropTypes.oneOf(['button', 'a']),
  /**
   * The icon. Can be one of either the `Add`, `Close`, `PlayVideo`, or `Subtract` icons.
   */
  icon: PropTypes.oneOfType([
    componentWithName('Add'),
    componentWithName('Close'),
    componentWithName('PlayVideo'),
    componentWithName('Subtract'),
  ]).isRequired,
}

IconButton.defaultProps = {
  variant: 'default',
  onClick: undefined,
  tag: 'button',
}

export default IconButton
