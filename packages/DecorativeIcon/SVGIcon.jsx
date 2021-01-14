import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { colorTelusPurple, colorGreyShark, colorWhite } from '@tds/core-colours'
import { safeRest, pixelToRem } from '@tds/util-helpers'

import { warn } from '../../shared/utils/warn'

const getColour = variant => {
  switch (variant) {
    case 'alternative':
      return colorGreyShark
    case 'inverted':
      return colorWhite
    case 'default':
    default:
      return colorTelusPurple
  }
}

const svgVariant = ({ variant }) => ({ '& > svg': { fill: getColour(variant) } })
const svgSize = ({ size }) => ({
  '& > svg': { width: pixelToRem(size), height: pixelToRem(size) },
})

const StyledSVGIcon = styled.i(
  {
    display: 'inline-flex',
  },
  svgVariant,
  svgSize
)
/**
 * SVG Icons are a type of DecorativeIcon that use SVGs instead of fonts to render the icons.
 *
 * @version ./package.json
 */
const SVGIcon = ({ onClick, ...rest }) => {
  if (onClick) {
    warn('SVGIcon', 'SVG Icon is not interactive and does not accept events through props.')
  }
  return <StyledSVGIcon {...safeRest(rest)} aria-hidden="true" />
}

SVGIcon.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * The appearance of the Icon.
   */
  variant: PropTypes.oneOf(['default', 'alternative', 'inverted']),
  /**
   * The icon size in pixels.
   */
  size: PropTypes.oneOf([16, 20, 24, 32, 48]),
}

SVGIcon.defaultProps = {
  variant: 'default',
  size: 24,
  onClick: undefined,
}

export default SVGIcon
