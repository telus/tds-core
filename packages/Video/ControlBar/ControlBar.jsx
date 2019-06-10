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

const ControlBarContainer = styled.div(({ isHidden, isMobile }) => ({
  width: '100%',
  position: 'relative',
  transition: 'opacity 0.4s',
  opacity: isHidden ? 0 : 1,
  display: isMobile ? 'none' : undefined,
}))

const StyledControlBar = styled.div(({ videoPlayerWidth, compactModeThreshold }) => ({
  position: 'absolute',
  width: '100%',
  height: 56,
  paddingTop: '1rem',
  paddingBottom: '1rem',
  paddingLeft: `${videoPlayerWidth > compactModeThreshold ? 3 : 1}rem`,
  paddingRight: `calc(${videoPlayerWidth > compactModeThreshold ? 3 : 1}rem + 8px)`, // +8px to even out with left side
  bottom: 0,
  backgroundColor: 'rgba(42, 44, 46, 0.85)',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  zIndex: 9,
}))

const VideoProgressBarContainer = styled.div({
  display: 'flex',
  flexGrow: 1,
})

const MenuContainer = styled.div(({ isOpen }) => ({
  position: 'absolute',
  bottom: 64,
  right: '2rem',
  display: isOpen ? 'block' : 'none',
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
  compactModeThreshold,
  videoPlayerWidth,
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
      <StyledControlBar
        compactModeThreshold={compactModeThreshold}
        videoPlayerWidth={videoPlayerWidth}
      >
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
          compactModeThreshold={compactModeThreshold}
          videoPlayerWidth={videoPlayerWidth}
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
  compactModeThreshold: PropTypes.number.isRequired,
  videoPlayerWidth: PropTypes.number.isRequired,
}

ControlBar.defaultProps = {
  tracks: undefined,
  isHidden: false,
}

export default ControlBar
