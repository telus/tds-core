import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

export const StyledContainer = styled.div({
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none !important',
  },
})
const defaultStyle = (duration, timeout, state) => ({
  transition: `height ${duration || timeout}ms, opacity ${duration || timeout}ms ease-in-out`,
  opacity: 0,
  height: 0,
  overflow: 'hidden',
  visibility: state === 'exited' || state === 'exiting' ? 'hidden' : 'visible',
})

const transitionStyles = height => (duration, timeout) => ({
  entering: { opacity: 1, height },
  entered: { opacity: 1, height: 'auto' },
  exiting: {
    opacity: 0,
    height,
    transition: `height ${duration || timeout}ms, opacity ${duration || timeout}ms ease-in-out`,
  },
  exited: { opacity: 0 },
})

const FadeAndReveal = ({ delay, height, children, ...rest }) => (
  <Transition {...rest}>
    {state => (
      <StyledContainer
        style={{
          ...defaultStyle(rest.duration, rest.timeout, state),
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
