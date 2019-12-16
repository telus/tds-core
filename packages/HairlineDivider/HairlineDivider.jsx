import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { borders, spacing } from '@tds/shared-styles'
import { colorGreyGainsboro } from '@tds/core-colours'
import { safeRest } from '@tds/util-helpers'

const baseStyle = { transform: 'rotate(-0.00001deg)', flexShrink: 0 }

const horizontalStyle = {
  ...baseStyle,
  width: '100%',
  height: '1px',
}

const verticalStyle = {
  ...baseStyle,
  display: 'inline-block',
  width: '1px',
}

const StyledHairlineDivider = styled.hr(spacing.noSpacing, borders.none, props => {
  if (props.vertical && props.gradient) {
    return {
      ...verticalStyle,
      'background-image': `
        linear-gradient(0deg, rgba(216, 216, 216, 0) 0%,
        ${colorGreyGainsboro} 12%,
        ${colorGreyGainsboro} 88%,
        rgba(216, 216, 216, 0) 100%)
      `,
    }
  }
  if (props.vertical && !props.gradient) {
    return {
      ...verticalStyle,
      'background-color': colorGreyGainsboro,
    }
  }
  if (!props.vertical && props.gradient) {
    return {
      ...horizontalStyle,
      'background-image': `
        linear-gradient(90deg, rgba(216, 216, 216, 0) 0%,
        ${colorGreyGainsboro} 7%,
        ${colorGreyGainsboro} 93%,
        rgba(216, 216, 216, 0) 100%)
      `,
    }
  }
  return {
    ...horizontalStyle,
    'background-color': colorGreyGainsboro,
  }
})

/**
 * Separate content within modules.
 *
 * @version ./package.json
 */
const HairlineDivider = ({ vertical, gradient, ...rest }) => (
  <StyledHairlineDivider {...safeRest(rest)} vertical={vertical} gradient={gradient} />
)

HairlineDivider.propTypes = {
  /**
   * Draw the divider vertically.
   */
  vertical: PropTypes.bool,
  /**
   * Use a subtle gradient instead of a solid thin line.
   */
  gradient: PropTypes.bool,
}

HairlineDivider.defaultProps = {
  vertical: false,
  gradient: false,
}

export default HairlineDivider
