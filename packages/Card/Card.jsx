import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import { colorWhite, colorWhiteLilac, colorAthensGrey } from '@tds/core-colours'
import { borders } from '@tds/shared-styles'
import safeRest from '../../shared/utils/safeRest'

const StyledCard = styled(({ variant, ...rest }) => <Box {...rest} />)(({ variant }) => ({
  ...borders.none,
  ...borders.rounded,
  ...(variant === 'white' && {
    boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.1)',
    backgroundColor: colorWhite,
  }),
  ...(variant === 'lavender' && {
    backgroundColor: colorWhiteLilac,
  }),
  ...(variant === 'grey' && {
    backgroundColor: colorAthensGrey,
  }),
}))
/**
 * A content container.
 *
 * @version ./package.json
 */
const Card = ({ variant, children, ...rest }) => (
  <StyledCard {...safeRest(rest)} horizontal={4} vertical={5} variant={variant}>
    {children}
  </StyledCard>
)

Card.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['white', 'lavender', 'grey']),
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired,
}

Card.defaultProps = {
  variant: 'white',
}

export default Card
