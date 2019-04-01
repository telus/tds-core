import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorShark } from '@tds/core-colours'

import Pause from './svg/Pause'
import Play from './svg/Play'

const StyledMiddleControlButton = styled.div(props => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  transition: 'opacity 0.4s',
  opacity: props.isHidden ? 0 : 1,
  background: colorShark,
  display: 'flex',
  justifyContent: 'center',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  alignItems: 'center',
  svg: {
    marginLeft: props.isPlaying ? 0 : 2,
  },
}))

const MiddleControlButton = ({ isPlaying, isHidden, onClick, onFocus }) => {
  return (
    <StyledMiddleControlButton
      isPlaying={isPlaying}
      isHidden={isHidden}
      onClick={onClick}
      onFocus={onFocus}
    >
      {isPlaying ? <Pause /> : <Play />}
    </StyledMiddleControlButton>
  )
}
MiddleControlButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isHidden: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
}

MiddleControlButton.defaultProps = {
  onClick: undefined,
  onFocus: undefined,
}

export default MiddleControlButton
