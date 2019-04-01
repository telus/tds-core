import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import VideoButton from '../VideoButton/VideoButton'

import videoText from '../../../videoText'

import Unmuted from '../../svg/Unmuted'
import Muted from '../../svg/Muted'

const VolumeSliderContainer = styled.div({
  display: 'flex',
  width: '10%',
  maxWidth: 120,
  margin: '0 1rem',
  alignItems: 'center',
})

const StyledVolumeSlider = styled.input(props => ({
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
    background: `linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,1)${props.videoCurrentVolume *
      100 -
      0.01}% ,rgba(255,255,255,0.5) ${props.videoCurrentVolume * 100}%)`,
  },
  'input[type=range]&::-moz-range-track': {
    width: '100%',
    height: 2,
    cursor: 'pointer',
    borderRadius: 1.3,
    background: `linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,1)${props.videoCurrentVolume *
      100 -
      0.01}% ,rgba(255,255,255,0.5) ${props.videoCurrentVolume * 100}%)`,
  },
  'input[type=range]&::-ms-track': {
    width: '100%',
    height: 2,
    margin: '6px 0',
    cursor: 'pointer',
    borderRadius: 1.3,
    border: 'none',
    background: `linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,1)${props.videoCurrentVolume *
      100 -
      0.01}% ,rgba(255,255,255,0.5) ${props.videoCurrentVolume * 100}%)`,
  },
  'input[type=range]&::-ms-fill-lower': {
    background: 'transparent',
  },
  'input[type=range]&::-ms-tooltip': {
    display: 'none',
  },
}))

class VolumeSlider extends React.PureComponent {
  constructor() {
    super()
    this.refVolumeSlider = React.createRef()
  }

  componentDidMount() {
    this.refVolumeSlider.current.defaultValue = this.props.videoDefaultVolume
    this.props.setVolume(this.refVolumeSlider.current.value)
  }

  handleVolumeChange = () => {
    this.props.setVolume(this.refVolumeSlider.current.value)
  }

  render() {
    return (
      <VolumeSliderContainer>
        <VideoButton
          icon={this.props.videoIsMuted ? <Muted /> : <Unmuted />}
          label={
            this.props.videoIsMuted
              ? videoText[this.props.copy].unmute
              : videoText[this.props.copy].mute
          }
          onClick={this.props.toggleMute}
          onFocus={this.props.resetInactivityTimer}
        />
        <StyledVolumeSlider
          type="range"
          min="0"
          max="1"
          step="any"
          value={this.props.videoCurrentVolume}
          videoCurrentVolume={this.props.videoCurrentVolume}
          ref={this.refVolumeSlider}
          onChange={this.handleVolumeChange}
          onFocus={this.props.resetInactivityTimer}
          id="volumeSlider"
          tabIndex="-1"
        />
      </VolumeSliderContainer>
    )
  }
}

VolumeSlider.propTypes = {
  videoDefaultVolume: PropTypes.number.isRequired,
  videoCurrentVolume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
  videoIsMuted: PropTypes.bool.isRequired,
  toggleMute: PropTypes.func.isRequired,
  resetInactivityTimer: PropTypes.func.isRequired,
  copy: PropTypes.oneOf(['en', 'fr']).isRequired,
}

VolumeSlider.defaultProps = {}

export default VolumeSlider
