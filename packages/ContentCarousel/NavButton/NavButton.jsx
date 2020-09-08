import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { safeRest } from '@tds/util-helpers'
import { ChevronLeft, ChevronRight } from '@tds/core-interactive-icon'
import { media } from '@tds/core-responsive'
import { colorWhite, colorGreyGainsboro, colorGreyAthens } from '@tds/core-colours'

/**
 * @version ./package.json
 */

const NavButtonContainer = styled.button(({ direction }) => ({
  width: '2rem',
  height: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // Edge fix
  padding: '0',
  border: `1px solid ${colorGreyGainsboro}`,
  backgroundColor: colorWhite,
  outline: 'none',
  ...media.from('md').css({
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    borderLeftWidth: '1px',
    borderRightWidth: '1px',
    boxShadow: '0 0 16px 0 rgba(0,0,0,0.1)',
  }),
  ...(direction === 'left' && {
    borderTopRightRadius: '4rem',
    borderBottomRightRadius: '4rem',
    borderLeftWidth: '0',
  }),
  ...(direction === 'right' && {
    borderTopLeftRadius: '4rem',
    borderBottomLeftRadius: '4rem',
    borderRightWidth: '0',
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
  width: '2.3rem',
  height: '2.6rem',
  position: 'absolute',
  top: '50%',
  ...(direction === 'right' ? { right: 0 } : { left: 0 }),
  ...media.from('md').css(direction === 'right' ? { right: 5 } : { left: 5 }),
  transform: 'translateY(-50%)',
  opacity: 0,
  border: `3px solid ${colorGreyGainsboro}`,
  ...media.from('md').css({
    width: '3.625rem',
    height: '3.625rem',
    right: 'initial',
    left: 'initial',
    borderRadius: '50%',
    borderLeftWidth: '0.1875rem',
    borderRightWidth: '0.1875rem',
  }),
  ...(direction === 'left' && {
    borderTopRightRadius: '4rem',
    borderBottomRightRadius: '4rem',
    borderLeftWidth: '0',
  }),
  ...(direction === 'right' && {
    borderTopLeftRadius: '4rem',
    borderBottomLeftRadius: '4rem',
    borderRightWidth: '0',
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
      {direction === 'left' && (
        <ChevronLeft variant="basic" forceHover={isHovered} data-testid="leftNavButton" />
      )}
      {direction === 'right' && (
        <ChevronRight variant="basic" forceHover={isHovered} data-testid="rightNavButton" />
      )}
    </NavButtonContainer>
  )
}

NavButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
}

NavButton.defaultProps = {}

export default NavButton
