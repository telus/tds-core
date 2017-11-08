import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const defaultStyle = timeout => ({
  transition: `transform ${timeout}ms`,
})

const transitionStyles = (direction, length) => {
  const styles = {
    transform: `translate${direction.toUpperCase()}(${length})`,
  }

  return {
    entering: styles,
    entered: styles,
  }
}

const Translate = ({ direction, length, children, ...rest }) => (
  <Transition {...rest}>
    {status => (
      <div
        style={{
          ...defaultStyle(rest.timeout),
          ...transitionStyles(direction, length)[status],
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
  length: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
}

export default Translate
