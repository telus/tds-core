import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName, or, htmlElement } from '@tds/util-prop-types'
import { borders, forms } from '@tds/shared-styles'
import { medium, boldFont } from '@tds/shared-typography'
import {
  colorPrimary,
  colorSecondary,
  colorWhite,
  colorText,
  colorAccessibleGreen,
  colorTelusPurple,
  colorCardinal,
  colorWhiteLilac,
  colorLavenderBlush,
} from '@tds/core-colours'
import { safeRest } from '@tds/util-helpers'

import { deprecate, warn } from '../../shared/utils/warn'

const preventDisabling = ({ disabled, ...props }) => {
  if (disabled) {
    warn('Button', 'Buttons are not able to be disabled.')
  }

  return props
}

const getVariant = ({ variant, rank }) => {
  let backgroundColor
  let color
  let border
  let transition
  const hover = {}
  const active = {}
  const focus = {}
  if (variant === 'standard' || variant === 'brand' || variant === 'danger') {
    focus.outline = 'none !important'
    transition = 'background 0.2s, color 0.2s, border 0.2s ease'
  } else {
    hover.boxShadow = '0 0 0 0.0625rem'
  }

  switch (variant) {
    case 'primary':
      backgroundColor = colorPrimary
      color = colorWhite
      hover.backgroundColor = colorWhite
      hover.color = colorPrimary
      break

    case 'secondary':
      backgroundColor = colorSecondary
      color = colorWhite
      hover.backgroundColor = colorWhite
      hover.color = colorSecondary
      break

    case 'inverted':
      backgroundColor = colorWhite
      color = colorText
      hover.backgroundColor = 'transparent'
      hover.color = colorWhite
      break

    case 'standard':
      if (rank === 'main') {
        backgroundColor = colorAccessibleGreen
        color = colorWhite
        hover.backgroundColor = '#1F5C09'
        hover.boxShadow = '0 0 0 0.125rem #1F5C09'
        active.backgroundColor = '#163E06 !important'
        focus.backgroundColor = '#1F5C09'
        focus.boxShadow = `0 0 0 0.1875rem #509F33, 0 0 0 0.125rem ${colorWhite} inset`
      } else {
        backgroundColor = colorWhite
        color = colorAccessibleGreen
        border = `0.0625rem solid ${colorAccessibleGreen}`
        hover.boxShadow = `0 0 0 0.125rem ${colorAccessibleGreen}`
        active.backgroundColor = '#F4F9F2'
        active.color = '#1F5C09'
        focus.border = '0.0625rem solid #509F33'
        focus.boxShadow = `0 0 0 0.125rem #509F33, 0 0 0 0.125rem ${colorWhite} inset, 0 0 0 0.1875rem ${colorAccessibleGreen} inset`
      }
      break

    case 'brand':
      if (rank === 'main') {
        backgroundColor = colorTelusPurple
        color = colorWhite
        hover.backgroundColor = '#371E4F'
        hover.boxShadow = '0 0 0 0.125rem #371E4F'
        active.backgroundColor = '#231332 !important'
        focus.backgroundColor = '#371E4F'
        focus.boxShadow = `0 0 0 0.1875rem #7C53A5 , 0 0 0 0.125rem ${colorWhite} inset`
      } else {
        backgroundColor = colorWhite
        color = colorTelusPurple
        border = `0.0625rem solid ${colorTelusPurple}`
        hover.boxShadow = `0 0 0 0.125rem ${colorTelusPurple}`
        active.color = '#371E4F'
        active.backgroundColor = `${colorWhiteLilac}`
        focus.border = '0.0625rem solid #7C53A5'
        focus.boxShadow = `0 0 0 0.125rem #7C53A5, 0 0 0 0.125rem ${colorWhite} inset, 0 0 0 0.1875rem ${colorTelusPurple} inset`
      }
      break

    case 'danger':
      backgroundColor = colorWhite
      color = colorCardinal
      border = `0.0625rem solid ${colorCardinal}`
      hover.boxShadow = `0 0 0 0.125rem ${colorCardinal}`
      active.color = '#770F1B'
      active.backgroundColor = `${colorLavenderBlush}`
      focus.border = '0.0625rem solid #D7707B'
      focus.boxShadow = `0 0 0 0.125rem #D7707B, 0 0 0 0.125rem ${colorWhite} inset, 0 0 0 0.1875rem ${colorCardinal} inset`
      break

    default:
      break
  }

  return {
    backgroundColor,
    color,
    border,
    transition,
    '&:hover': hover,
    '@media (hover: none)': {
      '&:hover': {
        boxShadow: 'none',
        backgroundColor,
        color,
      },
    },
    '&:active': active,
    '&:focus': focus,
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none !important',
    },
  }
}

export const StyledButton = styled.button(
  borders.none,
  borders.rounded,
  medium,
  boldFont,
  forms.font,
  forms.baseButton,
  getVariant
)

export const ButtonTextWrapper = styled.span(({ isOldButton }) => ({
  width: '100%',
  marginTop: !isOldButton && '-1px',
}))

const isDeprecatedButtonVariant = variant => {
  return ['primary', 'secondary'].indexOf(variant) !== -1
}

/**
 * @version ./package.json
 */
const Button = forwardRef(({ type, variant, rank, children, ...rest }, ref) => {
  const restNoDisabled = preventDisabling(rest)

  if (isDeprecatedButtonVariant(variant)) {
    deprecate(
      '@tds/core-button',
      "The 'primary' and 'secondary' variants have been deprecated. Please see https://tds.telus.com/components/index.html#/Forms?id=button for more details."
    )
  }

  return (
    <StyledButton {...safeRest(restNoDisabled)} variant={variant} rank={rank} type={type} ref={ref}>
      <ButtonTextWrapper isOldButton={isDeprecatedButtonVariant(variant)}>
        {children}
      </ButtonTextWrapper>
    </StyledButton>
  )
})

Button.displayName = 'Button'

Button.propTypes = {
  /**
   * The HTML button type.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted', 'standard', 'brand', 'danger']),
  /**
   * Used to specify emphasis. Use 'common' for low-medium emphasis, and use 'main' for the most emphasis
   */
  rank: PropTypes.oneOf(['main', 'common']),
  /**
   * The label. It can include the `A11yContent` component, strings, or strings wrapped in a `<span>`.
   */
  children: or([PropTypes.string, componentWithName('A11yContent'), htmlElement('span')])
    .isRequired,
}
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  rank: 'common',
}

export default Button
