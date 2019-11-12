import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

export const StyledContainer = styled.div({
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none !important',
  },
})
const defaultStyle = timeout => ({
  transition: `height ${timeout}ms ease-in-out, opacity ${timeout}ms ease-in-out`,
  opacity: 0,
  height: 0,
  overflow: 'hidden',
})

const transitionStyles = height => ({
  entering: {
    opacity: 1,
    height,
    // visibility: 'visible',
  },
  entered: {
    opacity: 1,
    height: 'auto',
    // visibility: 'visible'
  },
  exiting: {
    opacity: 0,
    height,
  },
  exited: {
    opacity: 0,
    height: '0px',
    // visibility: 'hidden',
  },
})

const FadeAndReveal = ({ delay, height, children, ...rest }) => (
  <Transition {...rest}>
    {state => (
      <StyledContainer
        style={{
          ...defaultStyle(rest.timeout),
          ...transitionStyles(height)[state],
        }}
        aria-hidden={state === 'exiting' || state === 'exited'}
      >
        {children()}
      </StyledContainer>
    )}
  </Transition>
)

FadeAndReveal.propTypes = {
  height: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  delay: PropTypes.number,
  children: PropTypes.func.isRequired,
}

FadeAndReveal.defaultProps = {
  delay: 0,
}

export default FadeAndReveal
