import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button({
  background: 'red!important',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
})
const VideoButton = ({ icon, label, disableFocus, children, ...rest }) => {
  const handleOnKeyDown = event => {
    const key = event.key || event.keyCode

    // Disables playing by space bar, as that can be used to click a button
    if (key === ' ' || key === 32) {
      event.stopPropagation()
    }
  }

  return (
    <StyledButton
      aria-label={label}
      onKeyDown={handleOnKeyDown}
      tabIndex={disableFocus && '-1'}
      {...rest}
    >
      {icon}
      {children}
    </StyledButton>
  )
}
VideoButton.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  disableFocus: PropTypes.bool.isRequired,
  children: PropTypes.node,
}

VideoButton.defaultProps = {
  children: undefined,
}

export default VideoButton
