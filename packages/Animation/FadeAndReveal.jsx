import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const defaultStyle = (duration, timeout) => ({
  transition: `height ${duration || timeout}ms, opacity ${duration || timeout}ms ease-in-out`,
  opacity: 0,
  height: 0,
  overflow: 'hidden',
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
      <div
        style={{
          ...defaultStyle(rest.duration, rest.timeout),
          ...transitionStyles(height)(rest.duration, rest.timeout)[state],
        }}
      >
        {children()}
      </div>
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
