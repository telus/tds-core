import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const defaultStyle = timeout => ({
  transition: `height ${timeout}ms`,
  height: 0,
  overflow: 'hidden',
})

const transitionStyles = height => {
  const styles = {
    height: `${height}px`,
  }

  const hiddenContent = {
    visibility: 'hidden',
  }

  return {
    entering: styles,
    entered: styles,
    exited: hiddenContent,
  }
}

const Reveal = ({ height, children, ...rest }) => (
  <Transition {...rest}>
    {status => (
      <div
        style={{
          ...defaultStyle(rest.timeout),
          ...transitionStyles(height)[status],
        }}
      >
        {children()}
      </div>
    )}
  </Transition>
)
Reveal.propTypes = {
  timeout: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired,
}

export default Reveal
