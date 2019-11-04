import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const defaultStyle = (timeout, delay) => {
  return {
    transition: `height ${timeout}ms ${delay ? `${delay}ms` : ''}`,
    overflow: 'hidden',
  }
}

const transitionStyles = height => ({
  entering: { height: `${height}px` },
  entered: { height: `${height}px`, overflow: 'visible' },
  exiting: { height: 0 },
  exited: { height: 0, visibility: 'hidden' },
})

const Reveal = ({ duration, timeout, height, delay, children, ...rest }) => {
  const transitionTimeout = duration || timeout
  return (
    <Transition {...rest} timeout={transitionTimeout + delay}>
      {status => (
        <div
          style={{
            ...defaultStyle(transitionTimeout, delay),
            ...transitionStyles(height)[status],
          }}
          aria-hidden={status === 'exited'}
          data-testid="childrenContainer"
        >
          {children()}
        </div>
      )}
    </Transition>
  )
}
Reveal.propTypes = {
  timeout: PropTypes.number.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.func.isRequired,
}

Reveal.defaultProps = {
  duration: undefined,
  delay: undefined,
}

export default Reveal
