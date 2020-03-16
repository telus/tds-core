import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { safeRest } from '@tds/util-helpers'
import { ChevronLeft, ChevronRight } from '@tds/core-interactive-icon'
import { media } from '@tds/core-responsive'
import { colorWhite, colorGreyGainsboro, colorGreyRaven } from '@tds/core-colours'

/**
 * @version ./package.json
 */

const NavButtonContainer = styled.button(({ direction }) => ({
  width: 24,
  height: 32,
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  border: `1px solid ${colorGreyGainsboro}`,
  backgroundColor: colorWhite,
  ...media.from('md').css({
    width: 48,
    height: 48,
    borderRadius: '50%',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    boxShadow: '0 0 16px 0 rgba(0,0,0,0.1)',
  }),
  ...(direction === 'left' && {
    borderTopRightRadius: 64,
    borderBottomRightRadius: 64,
    borderLeftWidth: 0,
  }),
  ...(direction === 'right' && {
    borderTopLeftRadius: 64,
    borderBottomLeftRadius: 64,
    borderRightWidth: 0,
  }),

  '&:focus': { borderColor: colorGreyRaven },
  '&:active': { backgroundColor: colorGreyGainsboro },
}))

const NavButton = ({ direction, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <NavButtonContainer
      direction={direction}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
      {...safeRest(rest)}
    >
      {direction === 'left' && <ChevronLeft variant="basic" forceHover={isHovered} />}
      {direction === 'right' && <ChevronRight variant="basic" forceHover={isHovered} />}
    </NavButtonContainer>
  )
}

NavButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
}

NavButton.defaultProps = {}

export default NavButton
