import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorTelusGreen } from '@tds/core-colours'

const videoProgressBar = React.createRef()

const ProgressBarContainer = styled.div({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
})
const StyledProgressBar = styled.input.attrs(({ videoCurrentTime }) => ({
  value: videoCurrentTime,
}))(({ videoBufferDisplay }) => ({
  width: '100%',
  cursor: 'pointer',
  padding: '5px 0',
  'input[type=range]&': {
    appearance: 'none',
    width: '100%',
    background: 'transparent',
  },

  'input[type=range]&:focus': {
    outline: 'none',
  },

  'input[type=range]&::-webkit-slider-thumb': {
    appearance: 'none',
    height: 8,
    width: 8,
    borderRadius: '50%',
    background: '#ffffff',
    cursor: 'pointer',
    marginTop: -3,
  },

  'input[type=range]&::-moz-range-thumb': {
    appearance: 'none',
    height: 8,
    width: 8,
    borderRadius: '50%',
    background: '#ffffff',
    cursor: 'pointer',
    marginTop: -3,
    border: 'none',
  },

  'input[type=range]&::-ms-thumb': {
    appearance: 'none',
    height: 8,
    width: 8,
    borderRadius: '50%',
    background: '#ffffff',
    cursor: 'pointer',
    margin: 0,
    border: 'none',
  },

  'input[type=range]&::-webkit-slider-thumb:hover': {
    transform: 'scale(1.5)',
  },
  'input[type=range]&::-moz-range-thumb:hover': {
    transform: 'scale(1.5)',
  },
  'input[type=range]&::-ms-thumb:hover': {
    transform: 'scale(1.5)',
  },

  'input[type=range]&::-webkit-slider-runnable-track': {
    width: '100%',
    height: 2,
    cursor: 'pointer',
    borderRadius: 1.3,
    background: `linear-gradient(to right, ${colorTelusGreen} 0%,${colorTelusGreen} ${videoBufferDisplay -
      0.01}% ,rgba(255,255,255,0.5) ${videoBufferDisplay}%)`,
  },

  'input[type=range]&::-moz-range-track': {
    width: '100%',
    height: 2,
    cursor: 'pointer',
    borderRadius: 1.3,
    background: `linear-gradient(to right, ${colorTelusGreen} 0%,${colorTelusGreen} ${videoBufferDisplay -
      0.01}% ,rgba(255,255,255,0.5) ${videoBufferDisplay}%)`,
  },

  'input[type=range]&::-ms-track': {
    width: '100%',
    height: 2,
    margin: '6px 0',
    cursor: 'pointer',
    borderRadius: 1.3,
    border: 'none',
    background: `linear-gradient(to right, ${colorTelusGreen} 0%,${colorTelusGreen} ${videoBufferDisplay -
      0.01}% ,rgba(255,255,255,0.5) ${videoBufferDisplay}%)`,
  },
  'input[type=range]&::-ms-fill-lower': {
    background: 'transparent',
  },
  'input[type=range]&::-ms-tooltip': {
    display: 'none',
  },
}))

const StyledTimestamp = styled.p(({ isRemaining }) => ({
  color: isRemaining ? 'white' : colorTelusGreen,
  margin: '0 0.5rem',
}))

const VideoProgressBar = ({
  videoLength,
  videoCurrentTime,
  videoBufferEnd,
  setSeek,
  resetInactivityTimer,
}) => {
  const handleVideoSkip = () => {
    setSeek(videoProgressBar.current.value)
  }

  const videoBufferDisplay = (videoBufferEnd / videoLength) * 100

  const getCurrentTimestamp = () => {
    const minutes = Math.floor(videoCurrentTime / 60)
    const seconds = Math.floor(videoCurrentTime - 60 * minutes)

    return `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
  }
  const getRemainingTimestamp = () => {
    const minutes = Math.floor((videoLength - videoCurrentTime) / 60)
    const seconds = Math.floor(videoLength - videoCurrentTime - 60 * minutes)

    return `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
  }

  return (
    <ProgressBarContainer>
      <StyledTimestamp>{getCurrentTimestamp()}</StyledTimestamp>
      <StyledProgressBar
        type="range"
        step="any"
        max={videoLength}
        videoCurrentTime={videoCurrentTime}
        onChange={handleVideoSkip}
        onFocus={resetInactivityTimer}
        videoBufferDisplay={videoBufferDisplay}
        ref={videoProgressBar}
        tabIndex="-1"
      />
      <StyledTimestamp isRemaining>{getRemainingTimestamp('remaining')}</StyledTimestamp>
    </ProgressBarContainer>
  )
}

VideoProgressBar.propTypes = {
  videoLength: PropTypes.number.isRequired,
  videoCurrentTime: PropTypes.number.isRequired,
  videoBufferEnd: PropTypes.number.isRequired,
  setSeek: PropTypes.func.isRequired,
  resetInactivityTimer: PropTypes.func.isRequired,
}

VideoProgressBar.defaultProps = {}

export default VideoProgressBar
