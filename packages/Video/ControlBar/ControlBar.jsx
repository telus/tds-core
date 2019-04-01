import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'

import VideoProgressBar from './Controls/VideoProgressBar/VideoProgressBar'
import VolumeSlider from './Controls/VolumeSlider/VolumeSlider'
import VideoButton from './Controls/VideoButton/VideoButton'
import VideoMenu from './Controls/VideoMenu/VideoMenu'

import videoText from '../videoText'

import ClosedCaptions from './svg/ClosedCaptions'
import Gear from './svg/Gear'
import FsExpand from './svg/FsExpand'
import FsMinimize from './svg/FsMinimize'

const ControlBarContainer = styled.div(props => ({
  width: '100%',
  position: 'relative',
  transition: 'opacity 0.4s',
  opacity: props.isHidden ? 0 : 1,
  display: props.isMobile ? 'none' : undefined,
}))

const StyledControlBar = styled.div({
  position: 'absolute',
  width: '100%',
  height: 56,
  padding: '1rem 3rem',
  bottom: 0,
  backgroundColor: 'rgba(42, 44, 46, 0.85)',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  zIndex: 9,
})

const VideoProgressBarContainer = styled.div({
  display: 'flex',
  flexGrow: 1,
})

const MenuContainer = styled.div(props => ({
  position: 'absolute',
  bottom: 64,
  right: '2rem',
  display: props.isOpen ? 'block' : 'none',
  marginLeft: '1rem',
}))

const ControlBar = ({
  videoPlayer,
  videoPlayerContainer,
  sources,
  tracks,
  videoPlaying,
  videoBufferEnd,
  isHidden,
  videoLength,
  videoCurrentTime,
  videoDefaultVolume,
  videoCurrentVolume,
  videoIsMuted,
  setVolume,
  isMobile,
  tracksAvailable,
  togglePlayPause,
  setSeek,
  toggleMute,
  toggleFullscreen,
  videoIsFullscreen,
  setTextTracks,
  selectedTextTrack,
  resetInactivityTimer,
  videoQuality,
  setVideoQuality,
  captionsMenuOpen,
  setCaptionsMenuOpen,
  qualityMenuOpen,
  setQualityMenuOpen,
  clearInactivityTimer,
  copy,
  ...rest
}) => {
  const parseVideoQuality = () => {
    return sources.map(source => {
      if (!source.isFallback) {
        return { name: source.qualityName, value: source.qualityRank }
      }
      return {}
    })
  }

  const parseTracks = () => {
    const stuff = tracks.map((track, trackNumber) => {
      return { name: track.label, value: trackNumber }
    })
    stuff.unshift({ name: videoText[copy].captionsNone, value: -1 })
    return stuff
  }

  return (
    <ControlBarContainer isHidden={isHidden} isMobile={isMobile} {...rest}>
      <StyledControlBar>
        <VideoProgressBarContainer>
          <VideoProgressBar
            videoPlayer={videoPlayer}
            videoLength={videoLength}
            videoCurrentTime={videoCurrentTime}
            videoBufferEnd={videoBufferEnd}
            setSeek={setSeek}
            resetInactivityTimer={resetInactivityTimer}
          />
        </VideoProgressBarContainer>

        <VolumeSlider
          videoPlayer={videoPlayer}
          videoDefaultVolume={videoDefaultVolume}
          videoCurrentVolume={videoCurrentVolume}
          setVolume={setVolume}
          videoIsMuted={videoIsMuted}
          toggleMute={toggleMute}
          resetInactivityTimer={resetInactivityTimer}
          copy={copy}
        />

        <Box between={3} inline>
          {tracksAvailable && (
            <VideoButton
              label={videoText[copy].captionsToggle}
              icon={<ClosedCaptions />}
              onClick={event => {
                event.stopPropagation()
                setCaptionsMenuOpen(!captionsMenuOpen)
                setQualityMenuOpen(false)
                clearInactivityTimer()
              }}
              onFocus={resetInactivityTimer}
              onBlur={resetInactivityTimer}
            />
          )}
          {captionsMenuOpen && (
            <MenuContainer isOpen={captionsMenuOpen}>
              <VideoMenu
                menuLabel={videoText[copy].captionsDialogue}
                menuOptions={parseTracks()}
                setSelection={setTextTracks}
                selectedItem={selectedTextTrack}
                copy={copy}
              />
            </MenuContainer>
          )}
          <VideoButton
            label={videoText[copy].qualityToggle}
            icon={<Gear />}
            onClick={event => {
              event.stopPropagation()
              setQualityMenuOpen(!qualityMenuOpen)
              setCaptionsMenuOpen(false)
              clearInactivityTimer()
            }}
            onFocus={resetInactivityTimer}
            onBlur={resetInactivityTimer}
          />
          {qualityMenuOpen && (
            <MenuContainer isOpen={qualityMenuOpen}>
              <VideoMenu
                menuLabel={videoText[copy].qualityDialogue}
                menuOptions={parseVideoQuality()}
                setSelection={setVideoQuality}
                selectedItem={videoQuality}
                copy={copy}
              />
            </MenuContainer>
          )}
          <VideoButton
            label={videoText[copy].fullScreenToggle}
            icon={videoIsFullscreen ? <FsMinimize /> : <FsExpand />}
            onClick={toggleFullscreen}
            onFocus={resetInactivityTimer}
            onBlur={resetInactivityTimer}
          />
        </Box>
      </StyledControlBar>
    </ControlBarContainer>
  )
}

ControlBar.propTypes = {
  videoPlayer: PropTypes.object.isRequired,
  videoPlayerContainer: PropTypes.object.isRequired,
  sources: PropTypes.array.isRequired,
  tracks: PropTypes.array,
  videoPlaying: PropTypes.bool.isRequired,
  videoBufferEnd: PropTypes.number.isRequired,
  isHidden: PropTypes.bool,
  videoLength: PropTypes.number.isRequired,
  videoCurrentTime: PropTypes.number.isRequired,
  videoDefaultVolume: PropTypes.number.isRequired,
  videoCurrentVolume: PropTypes.number.isRequired,
  videoIsMuted: PropTypes.bool.isRequired,
  setVolume: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  tracksAvailable: PropTypes.bool.isRequired,
  togglePlayPause: PropTypes.func.isRequired,
  setSeek: PropTypes.func.isRequired,
  toggleMute: PropTypes.func.isRequired,
  toggleFullscreen: PropTypes.func.isRequired,
  videoIsFullscreen: PropTypes.bool.isRequired,
  setTextTracks: PropTypes.func.isRequired,
  selectedTextTrack: PropTypes.number.isRequired,
  resetInactivityTimer: PropTypes.func.isRequired,
  videoQuality: PropTypes.number.isRequired,
  setVideoQuality: PropTypes.func.isRequired,
  captionsMenuOpen: PropTypes.bool.isRequired,
  setCaptionsMenuOpen: PropTypes.func.isRequired,
  qualityMenuOpen: PropTypes.bool.isRequired,
  setQualityMenuOpen: PropTypes.func.isRequired,
  clearInactivityTimer: PropTypes.func.isRequired,
  copy: PropTypes.oneOf(['en', 'fr']).isRequired,
}

ControlBar.defaultProps = {
  tracks: undefined,
  isHidden: false,
}

export default ControlBar
