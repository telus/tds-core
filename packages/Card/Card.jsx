import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import { colorWhite, colorWhiteLilac, colorGreyAthens, colorGreyGainsboro } from '@tds/core-colours'
import { borders } from '@tds/shared-styles'
import { safeRest } from '@tds/util-helpers'

import { deprecate } from '../../shared/utils/warn'

const getVariant = ({ variant }) => {
  if (variant === 'white' || variant === 'default' || variant === 'defaultWithBorder') {
    return {
      boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.1)',
      backgroundColor: colorWhite,
      border: variant === 'defaultWithBorder' ? `1px solid ${colorGreyGainsboro}` : undefined,
    }
  }
  if (variant === 'lavender' || variant === 'branded') {
    return {
      backgroundColor: colorWhiteLilac,
    }
  }
  return { backgroundColor: colorGreyAthens }
}

const deprecationWarning = deprecatedVariant => {
  const variants = {
    white: 'default',
    lavendar: 'branded',
    grey: 'alternative',
  }
  return `The ${deprecatedVariant} variant has been deprecated. Please use the '${
    variants[deprecatedVariant]
  }' variant.`
}

export const StyledCard = styled(({ fullHeight, ...props }) => <Box {...props} />)(
  borders.none,
  borders.rounded,
  getVariant,
  ({ fullHeight }) => {
    if (fullHeight) {
      return { height: '100%' }
    }
    return {}
  }
)

/**
 * A content container.
 *
 * @version ./package.json
 */
const Card = ({ variant, children, fullHeight, ...rest }) => {
  if (variant === 'white' || variant === 'lavendar' || variant === 'grey') {
    deprecate('@tds/core-card', deprecationWarning(variant))
  }
  return (
    <StyledCard
      {...safeRest(rest)}
      horizontal={4}
      vertical={5}
      fullHeight={fullHeight}
      variant={variant}
    >
      {children}
    </StyledCard>
  )
}

Card.propTypes = {
  /**
   * The style.
   *
   * @since 2.1.0  added `default`, `defaultWithBorder`, `branded`, `alternative`.
   *
   * **Deprecated:** `white`, `lavendar`,`grey`
   */
  variant: PropTypes.oneOf([
    'white',
    'lavender',
    'grey',
    'default',
    'branded',
    'alternative',
    'defaultWithBorder',
  ]),
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired,
  /**
   * Sets the `Card`'s `height` equal to its parent.
   */
  fullHeight: PropTypes.bool,
}

Card.defaultProps = {
  variant: 'default',
  fullHeight: false,
}

export default Card
