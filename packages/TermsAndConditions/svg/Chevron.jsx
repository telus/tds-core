import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledClickable } from '../StyledClickable'

const StyledChevron = styled.span(({ isOpen }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  transition: 'transform 300ms',
  transform: `translate(6px, ${isOpen ? '-2px' : '-1px'})`,
  [`${StyledClickable}:hover &`]: {
    transform: !isOpen ? 'translate(6px, 2px)' : 'translate(6px, -5px)',
  },
}))

const Chevron = ({ isOpen }) => (
  <StyledChevron isOpen={isOpen}>
    <svg
      width="12px"
      height="8px"
      viewBox="0 0 12 8"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M11.7940812,0.183230226 C11.4424627,-0.117489399 11.0896181,0.0450442657 10.8868854,0.245275736 L5.99681615,4.74055299 L1.11722187,0.245275732 C0.93839231,0.0814520871 0.490533284,-0.180032793 0.165240429,0.183230232 C-0.160052425,0.546493257 0.0652096387,0.91610528 0.243271687,1.07992892 L5.6348225,6.87660266 C5.81365205,7.04113245 6.10607292,7.04113245 6.28490248,6.87660266 C6.28490248,6.87589653 11.7940809,1.07992896 11.7940809,1.07992896 C11.9792355,0.935042671 12.1456996,0.483949851 11.7940812,0.183230226 Z"
        id="path-1"
        transform={isOpen ? 'rotate(180, 6, 4)' : undefined}
      />
    </svg>
  </StyledChevron>
)

Chevron.propTypes = {
  isOpen: PropTypes.bool,
}

Chevron.defaultProps = {
  isOpen: false,
}

export default Chevron
