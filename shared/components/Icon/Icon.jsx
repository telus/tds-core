import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorIconPrimary, colorIconSecondary, colorCardinal, colorWhite } from '@tds/core-colours'
import { safeRest } from '@tds/util-helpers'

import icons from './icons'

const getColour = variant => {
  switch (variant) {
    case 'primary':
      return colorIconPrimary
    case 'secondary':
      return colorIconSecondary
    case 'inverted':
      return colorWhite
    case 'error':
      return colorCardinal
    default:
      return undefined
  }
}
const iconSymbol = ({ symbol }) => ({ ...icons.default, ...icons[symbol] })
const iconVariant = ({ variant }) => ({ color: getColour(variant) })
const iconSize = ({ iSize }) => ({ fontSize: `${iSize / 16}rem` })

export const StyledIcon = styled.i(iconSymbol, iconVariant, iconSize)

const Icon = ({ symbol, variant, size, ...rest }) => (
  <StyledIcon {...safeRest(rest)} symbol={symbol} variant={variant} iSize={size} />
)

Icon.propTypes = {
  symbol: PropTypes.oneOf([
    'caretDown',
    'caretUp',
    'checkmark',
    'chevron',
    'leftChevron',
    'exclamationPointCircle',
    'expander',
    'hamburger',
    'location',
    'minus',
    'plus',
    'questionMarkCircle',
    'spyglass',
    'times',
  ]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted', 'error']),
  size: PropTypes.oneOf([16, 20, 24, 32, 48]),
}

Icon.defaultProps = {
  variant: undefined,
  size: 24,
}

export default Icon
