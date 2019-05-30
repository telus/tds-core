import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorShark } from '@tds/core-colours'

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
    marginLeft: props.iconLeftOffsetPx,
  },
}))

const MiddleControlButton = ({ icon, iconLeftOffsetPx, isHidden, onClick, onFocus }) => {
  return (
    <StyledMiddleControlButton
      iconLeftOffsetPx={iconLeftOffsetPx}
      isHidden={isHidden}
      onClick={onClick}
      onFocus={onFocus}
    >
      {icon}
    </StyledMiddleControlButton>
  )
}
MiddleControlButton.propTypes = {
  icon: PropTypes.node.isRequired,
  iconLeftOffsetPx: PropTypes.number,
  isHidden: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
}

MiddleControlButton.defaultProps = {
  iconLeftOffsetPx: undefined,
  isHidden: false,
  onClick: undefined,
  onFocus: undefined,
}

export default MiddleControlButton
