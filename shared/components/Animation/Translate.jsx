import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const defaultStyle = timeout => ({
  transition: `transform ${timeout}ms`,
})

const transitionStyles = (direction, distance) => {
  const styles = {
    transform: `translate${direction.toUpperCase()}(${distance})`,
  }

  return {
    entering: styles,
    entered: styles,
  }
}

const Translate = ({ direction, distance, children, ...rest }) => (
  <Transition {...rest}>
    {status => (
      <div
        style={{
          ...defaultStyle(rest.timeout),
          ...transitionStyles(direction, distance)[status],
        }}
      >
        {children()}
      </div>
    )}
  </Transition>
)
Translate.propTypes = {
  timeout: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(['x', 'y']).isRequired,
  distance: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
}

export default Translate
