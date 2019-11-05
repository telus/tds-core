import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

export const StyledContainer = styled.div({
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none !important',
  },
})
const defaultStyle = (duration, timeout) => ({
  transition: `height ${duration || timeout}ms, opacity ${duration || timeout}ms ease-in-out`,
  opacity: 0,
  height: 0,
  overflow: 'hidden',
})

const transitionStyles = height => (duration, timeout) => ({
  entering: {
    opacity: 1,
    height,
    visibility: 'visible',
    transition: `height ${duration || timeout}ms, opacity ${duration || timeout}ms ease-in-out`,
  },
  entered: { opacity: 1, height: 'auto', visibility: 'visible' },
  exiting: {
    opacity: 0,
    height,
  },
  exited: {
    opacity: 0,
    height: '0px',
    visibility: 'hidden',
    transition: `height ${duration || timeout}ms, opacity ${duration ||
      timeout}ms ease-in-out, visibility 0s ${duration || timeout}ms`,
  },
})

const FadeAndReveal = ({ delay, height, children, ...rest }) => (
  <Transition {...rest}>
    {state => (
      <StyledContainer
        style={{
          ...defaultStyle(rest.duration, rest.timeout),
          ...transitionStyles(height)(rest.duration, rest.timeout)[state],
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
