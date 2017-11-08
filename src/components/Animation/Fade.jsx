import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

// Based off of the Fade example at https://reactcommunity.org/react-transition-group/

const defaultStyle = timeout => ({
  transition: `opacity ${timeout}ms ease-in-out`,
  opacity: 0,
})

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
}

const Fade = ({ children, ...rest }) => (
  <Transition {...rest}>
    {status => (
      <div
        style={{
          ...defaultStyle(rest.timeout),
          ...transitionStyles[status],
        }}
      >
        {children()}
      </div>
    )}
  </Transition>
)
Fade.propTypes = {
  timeout: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired,
}

export default Fade
