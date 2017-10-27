import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const defaultStyle = timeout => ({
  transition: `height ${timeout}ms ease-in-out`,
  height: 0,
  overflow: 'hidden',
})

const transitionStyles = {
  entered: { height: '200px' },
}

// TODO Fix the height! Can't do transition with "height: auto"

const Slide = ({ children, ...rest }) => (
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
Slide.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Slide
