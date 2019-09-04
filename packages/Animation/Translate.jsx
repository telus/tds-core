import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

const StyledContainer = styled.div({
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none !important',
  },
})

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

const Translate = ({ initialStyle, direction, distance, children, ...rest }) => (
  <Transition {...rest}>
    {status => (
      <StyledContainer
        style={{
          ...initialStyle,
          ...defaultStyle(rest.timeout),
          ...transitionStyles(direction, distance)[status],
        }}
      >
        {children()}
      </StyledContainer>
    )}
  </Transition>
)

Translate.propTypes = {
  timeout: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(['x', 'y']).isRequired,
  distance: PropTypes.string.isRequired,
  initialStyle: PropTypes.object,
  children: PropTypes.func.isRequired,
}

Translate.defaultProps = {
  initialStyle: undefined,
}

export default Translate
