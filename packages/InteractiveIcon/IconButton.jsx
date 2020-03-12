import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import A11yContent from '@tds/core-a11y-content'
import { colorGreyGainsboro, colorGreyShark, colorTelusPurple, colorWhite } from '@tds/core-colours'
import { safeRest } from '@tds/util-helpers'
import { componentWithName } from '@tds/util-prop-types'

import animations from './shared/animations'
import SharedStyledInteractiveIconButton from './shared/StyledInteractiveIconButton'
import SharedStyledInteractiveIconHover from './shared/StyledInteractiveIconHover'

export const StyledIconButton = styled(SharedStyledInteractiveIconButton)(
  animations.scale,
  animations.reduceMotion,
  ({ variant }) => {
    // add colour to the DependentIcon
    if (variant === 'alternative') {
      return {
        '& svg': {
          fill: colorTelusPurple,
        },
      }
    }
    if (variant === 'inverted') {
      return {
        '& svg': {
          fill: colorWhite,
        },
      }
    }
    return {
      '& svg': {
        fill: colorGreyShark,
      },
    }
  }
)

const getTheme = variant => {
  if (variant === 'alternative') {
    return {
      hoverBackgroundColor: '#D8CBE5',
      iconColor: colorTelusPurple,
    }
  }
  if (variant === 'inverted') {
    return {
      hoverBackgroundColor: 'transparent',
      iconColor: colorWhite,
    }
  }
  return {
    hoverBackgroundColor: colorGreyGainsboro,
    iconColor: colorGreyShark,
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
   * A description of the icon for screen readers.
   */
  a11yText: PropTypes.string.isRequired,
  /**
   * The style.
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
   * The icon
   */
  icon: PropTypes.oneOfType([
    componentWithName('Add', true),
    componentWithName('Close', true),
    componentWithName('PlayVideo', true),
    componentWithName('Subtract', true),
  ]).isRequired,
}

IconButton.defaultProps = {
  variant: 'default',
  onClick: undefined,
  tag: 'button',
}

export default IconButton
