import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { safeRest } from '@tds/util-helpers'
import { ChevronLeft, ChevronRight } from '@tds/core-interactive-icon'
import { media } from '@tds/core-responsive'
import { colorWhite, colorGreyGainsboro, colorGreyRaven, colorGreyAthens } from '@tds/core-colours'

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
  outline: 'none',
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

  '&:focus': {
    borderColor: colorGreyGainsboro,
    '& div': {
      opacity: 1,
    },
  },
  '&:active': { backgroundColor: colorGreyAthens },
}))

const FocusOutline = styled.div(({ direction }) => ({
  width: 28,
  height: 41,
  position: 'absolute',
  top: '50%',
  ...(direction === 'right' ? { right: 5 } : { left: 5 }),
  transform: 'translateY(-50%)',
  opacity: 0,
  border: `3px solid ${colorGreyGainsboro}`,
  ...media.from('md').css({
    width: 58,
    height: 58,
    right: 'initial',
    left: 'initial',
    borderRadius: '50%',
    borderLeftWidth: 3,
    borderRightWidth: 3,
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
      <FocusOutline direction={direction} />
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
