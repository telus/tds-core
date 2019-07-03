import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { colorTelusPurple, colorShark, colorWhite } from '@tds/core-colours'

import safeRest from '../../shared/utils/safeRest'

const getColour = variant => {
  switch (variant) {
    case 'alternative':
      return colorShark
    case 'inverted':
      return colorWhite
    case 'default':
    default:
      return colorTelusPurple
  }
}

const svgVariant = ({ variant }) => ({ '& > svg': { fill: getColour(variant) } })
const svgSize = ({ size }) => ({ '& > svg': { width: size, height: size } })

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
const SVGIcon = props => {
  return <StyledSVGIcon {...safeRest(props)} aria-hidden="true" />
}

SVGIcon.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
  /**
   * The appearance of the Icon.
   */
  variant: PropTypes.oneOf(['default', 'alternative', 'inverted']),
  /**
   * The icon size in pixels.
   */
  size: PropTypes.oneOf([16, 24, 48]),
}

SVGIcon.defaultProps = {
  variant: 'default',
  size: 24,
}

export default SVGIcon
