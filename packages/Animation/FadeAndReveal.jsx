import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

export const StyledContainer = styled.div({
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none !important',
  },
})
const defaultStyle = () => ({
  opacity: 0,
  height: 0,
  overflow: 'hidden',
})

const transitionStyles = (height, timeout) => ({
  entering: {
    opacity: 1,
    height,
    transition: `height ${timeout}ms ease-in-out, opacity ${timeout}ms ease-in-out`,
  },
  entered: {
    opacity: 1,
    height: 'auto',
    visibility: 'visible',
    transition: 'unset',
  },
  exiting: {
    opacity: 1,
    height,
    visibility: 'visible',
    transition: `height ${timeout}ms ease-in-out, opacity ${timeout}ms ease-in-out, visibility 0ms ${timeout}ms`,
  },
  exited: {
    opacity: 0,
    height: '0px',
    visibility: 'hidden',
    transition: `height ${timeout}ms ease-in-out, opacity ${timeout}ms ease-in-out, visibility 0ms ${timeout}ms`,
  },
})

const FadeAndReveal = ({ timeout, height, children, ...rest }) => (
  <CSSTransition {...rest} timeout={{ appear: timeout, enter: timeout, exit: 0 }}>
    {state => (
      <StyledContainer
        style={{
          ...defaultStyle(timeout),
          ...transitionStyles(height, timeout)[state],
        }}
        aria-hidden={state === 'exiting' || state === 'exited'}
      >
        {children()}
      </StyledContainer>
    )}
  </CSSTransition>
)

FadeAndReveal.propTypes = {
  height: PropTypes.number.isRequired,
  timeout: PropTypes.number,
  children: PropTypes.func.isRequired,
}

FadeAndReveal.defaultProps = {
  timeout: 0,
}

export default FadeAndReveal
