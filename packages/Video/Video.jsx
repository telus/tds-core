import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import fscreen from 'fscreen'

import { colorGreyGainsboro } from '@tds/core-colours'
import Spinner from '@tds/core-spinner'
import { safeRest } from '@tds/util-helpers'

import VideoSplash from '../../shared/components/VideoSplash/VideoSplash'

import MiddleControlButton from './MiddleControlButton/MiddleControlButton'
import ControlBar from './ControlBar/ControlBar'

import videoText from './videoText'

import Pause from './svg/Pause'
import Play from './svg/Play'
import Replay from './svg/Replay'

const VideoPlayerContainer = styled.div(({ videoBorder }) => ({
  width: '100%',
  outline: 'none',
  position: 'relative',
  border: videoBorder ? `1px solid ${colorGreyGainsboro}` : undefined,
}))

const VideoElementContainer = styled.div({
  outline: 'none',
  width: '100%',
  height: '100%',
  fontSize: 0,
})

const VideoPlayer = styled.video({
  width: '100%',
  height: '100%',
})

const VideoOverlayContainer = styled.div(({ mouseInactive }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  cursor: mouseInactive ? 'none' : 'pointer',
}))

const VideoSplashContainer = styled.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 5,
})

const VideoOverlayElementContainer = styled.div({
  position: 'absolute',
  zIndex: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
})

/**
 * @version ./package.json
 */

class Video extends React.Component {
  constructor(props) {
    super(props)
    this.refVideoPlayer = React.createRef()
    this.refVideoPlayerContainer = React.createRef()
    this.refKeyboardInstructions = React.createRef()

    this.playerOptions = {
      mouseTimeout: props.simpleMode ? 750 : 1500, // defined in ms
      keyboardSeekIncrement: 5, // defined in s
      keyboardVolumeIncrement: 0.1, // from 0 to 1
      compactModeThreshold: 700, // in px
    }

    this.state = {
      sources: null,
      tracks: null,
      videoLength: 0,
      videoCurrentTime: -1,
      videoBufferEnd: 0,
      videoUnplayed: true,
      videoIsBuffering: false,
      videoCurrentVolume: 1,
      videoIsPlaying: false,
      videoIsMuted: false,
      videoIsFullscreen: false,
      mouseInactive: false,
      videoEnded: false,
      videoQuality: this.props.defaultDesktopQuality,
      videoQualityChanged: false,
      selectedTextTrack: -1,
      mouseOnControlBar: false,
      qualityMenuOpen: false,
      captionsMenuOpen: false,
      isMobile: false,
      videoPlayerWidth: 0,
    }
  }

  componentDidMount() {
    // Initializes Settings
    this.refVideoPlayer.current.volume = this.props.defaultVolume / 100
    this.refVideoPlayer.current.muted = this.props.beginMuted || this.props.simpleMode
    this.getPlayerWidth()

    // Prepares video and caption files
    this.refreshMedia()

    // ******** Begin Video Event Handlers *********

    // **** Begin Initialization Events ****

    // Reports when the video has completed loading metadata (used for seeking after quality switch)
    this.refVideoPlayer.current.onloadedmetadata = this.qualitySwitchSeek

    // Reports the video's duration when the video player is ready to play
    this.refVideoPlayer.current.oncanplay = this.initializeVideoDuration

    // Reports the video's width on resize
    window.onresize = this.getPlayerWidth

    // **** End Initialization Events ****

    // **** Begin Update Events ****

    // Reports the current video timestamp
    this.refVideoPlayer.current.ontimeupdate = this.updateVideoTimestamp

    // Reports when the video has paused due to buffering
    this.refVideoPlayer.current.onwaiting = this.setAsBuffering

    // Reports the video's latest buffering progress if video player is properly initialized
    this.refVideoPlayer.current.onprogress = this.updateBufferProgress

    // Reports when the video has recovered from buffering
    this.refVideoPlayer.current.oncanplaythrough = this.playAfterBuffer

    // Reports when the video has ended
    this.refVideoPlayer.current.onended = this.setAsEnded

    // **** End Update Events ****

    // **** Begin Interaction Events ****

    // Reports when the video is playing and disables the buffer spinner (even if buffering is still needed)
    this.refVideoPlayer.current.onplay = this.setAsPlaying

    // Reports when the video has been paused
    this.refVideoPlayer.current.onpause = this.setAsPaused

    // Reports when the video has been seeked
    this.refVideoPlayer.current.onseeked = this.returnFromEndState

    // Reports when the video's volume has been changed, or if the video has been muted
    this.refVideoPlayer.current.onvolumechange = this.updateVolumeState

    // **** End Interaction Events ****

    // ******** End Video Event Handlers *********
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state || nextProps !== this.props) {
      return true
    }
    return false
  }

  componentWillUnmount() {
    this.clearInactivityTimer()
    window.onresize = undefined
  }

  // ******** Begin Initialization Functions *********

  generateSources = () => {
    return this.props.sources.map(source => {
      if (source.qualityRank === this.state.videoQuality) {
        return React.createElement('source', {
          src: source.source,
          type: source.mediaType,
          key: source.source,
        })
      }
      return undefined
    })
  }

  generateTracks = () => {
    return this.props.tracks.map(track => {
      return React.createElement('track', {
        label: track.label,
        kind: track.kind,
        srcLang: track.language,
        src: track.source,
        default: track.isDefault,
        key: track.source,
      })
    })
  }

  refreshMedia = async () => {
    // Handle mobile check
    const isMobile = navigator && navigator.userAgent.indexOf('Mobi') >= 0
    if (this.state.videoUnplayed && isMobile) {
      await this.setState({
        isMobile,
        videoQuality: isMobile ? this.props.defaultMobileQuality : this.props.defaultDesktopQuality,
      })
    }

    // Load media
    this.setState({
      sources: this.generateSources(),
      tracks: this.props.tracks && this.generateTracks(),
    })
  }

  // ******** End Initialization Functions *********

  // ******** Begin Event Listener Functions ********

  qualitySwitchSeek = () => {
    // The following setState gets the video length on the splash screen in iOS
    this.setState({ videoLength: this.refVideoPlayer.current.duration })

    if (this.state.videoCurrentTime > -1) {
      this.setSeek(this.state.videoCurrentTime)
    }
  }

  updateVideoTimestamp = () => {
    this.setState({
      videoCurrentTime: this.refVideoPlayer.current.currentTime,
    })
  }

  initializeVideoDuration = () => {
    // This will run on every load() call, meaning it will also run when video quality is changed.
    this.setState(prevState => {
      return {
        videoLength: this.refVideoPlayer.current.duration,
        videoBufferEnd:
          this.refVideoPlayer.current.buffered.length === 0
            ? 0
            : this.refVideoPlayer.current.buffered.end(
                this.refVideoPlayer.current.buffered.length - 1
              ),
        videoUnplayed:
          this.refVideoPlayer.current.played.length === 0 && !prevState.videoQualityChanged,
      }
    })

    // Prevents an IE 11 bug where the video will not continue playing after a quality switch
    if (this.state.videoQualityChanged && this.state.videoIsPlaying) {
      this.setPlaying(true)
    }
  }

  setAsBuffering = () => {
    // Prevent IE infinite buffer bug with readyState
    if (this.refVideoPlayer.current.readyState < 4) {
      this.clearInactivityTimer()
      this.setState({ videoIsPlaying: false, videoIsBuffering: true, mouseInactive: true })
      this.setPlaying(false)
    }
  }

  playAfterBuffer = () => {
    if (
      this.state.videoIsBuffering &&
      this.state.videoCurrentTime !== -1 &&
      !this.state.videoQualityChanged
    ) {
      this.setPlaying(true)
      this.setState({ videoIsBuffering: false })
    }
  }

  setAsPlaying = () => {
    this.setState({
      videoIsPlaying: true,
      videoIsBuffering: false,
      videoEnded: false,
      videoUnplayed: false,
      videoQualityChanged: false,
    })
    this.resetInactivityTimer()
  }

  setAsPaused = () => {
    this.clearInactivityTimer()
    this.setState({ videoIsPlaying: false })
  }

  returnFromEndState = () => {
    this.resetInactivityTimer()
    this.setState({ videoEnded: false })
  }

  setAsEnded = () => {
    this.setState({ videoIsPlaying: false, videoEnded: true })
    this.clearInactivityTimer()
  }

  updateBufferProgress = () => {
    if (this.refVideoPlayer.current && this.refVideoPlayer.current.readyState >= 2) {
      this.setState({
        videoBufferEnd:
          this.refVideoPlayer.current.buffered.length === 0
            ? 0
            : this.refVideoPlayer.current.buffered.end(
                this.refVideoPlayer.current.buffered.length - 1
              ),
      })
    } else if (
      this.state.videoCurrentTime !== -1 &&
      !this.state.videoQualityChanged &&
      !this.refVideoPlayer.current
    ) {
      this.setState({ videoIsPlaying: false, videoIsBuffering: true })
    }
  }

  updateVolumeState = () => {
    this.resetInactivityTimer()
    this.setState({
      videoCurrentVolume: this.refVideoPlayer.current.volume,
      videoIsMuted: this.refVideoPlayer.current.muted,
    })
  }

  getPlayerWidth = () => {
    this.setState({
      videoPlayerWidth: this.refVideoPlayerContainer.current.offsetWidth,
    })
  }

  // ******** End Event Listener Functions ********

  // ******** Begin Helper Functions *********
  resetInactivityTimer = () => {
    this.clearInactivityTimer()
    if (!this.state.videoQualityChanged && this.state.videoIsPlaying) {
      this.inactivityTimer = setTimeout(() => {
        if (!this.state.mouseOnControlBar) {
          this.setState({ mouseInactive: true })
        }
      }, this.playerOptions.mouseTimeout)
    }
  }

  clearInactivityTimer = () => {
    this.setState({ mouseInactive: false })
    clearTimeout(this.inactivityTimer)
  }

  setMouseOnControlBar = isOver => {
    this.setState({ mouseOnControlBar: isOver })
  }

  // ********** Play/Pausing **********
  togglePlayPause = () => {
    this.setPlaying(!this.state.videoIsPlaying)
  }

  beginVideo = () => {
    this.setTextTracks(-1)
    this.setPlaying(true)
    this.refVideoPlayerContainer.current.focus()
  }

  setPlaying = isPlaying => {
    if (isPlaying) {
      this.refVideoPlayer.current.play()
    } else {
      this.refVideoPlayer.current.pause()
    }
  }

  closeSubMenus = () => {
    this.setState({
      qualityMenuOpen: false,
      captionsMenuOpen: false,
    })
  }

  // ********** Video Seeking **********
  setSeek = seconds => {
    this.refVideoPlayer.current.currentTime = seconds
  }

  incrementSeek = seconds => {
    this.refVideoPlayer.current.currentTime += seconds
  }

  replayVideo = async () => {
    await this.setSeek(0)
    await this.togglePlayPause()
  }

  // ********** Sound Control **********
  incrementVolume = amount => {
    this.refVideoPlayer.current.volume += amount
  }

  setVolume = amount => {
    this.refVideoPlayer.current.volume = amount
  }

  toggleMute = () => {
    this.refVideoPlayer.current.muted = !this.refVideoPlayer.current.muted
  }

  // ********** CC Control **********

  setTextTracks = trackNumber => {
    for (let i = 0; i < this.refVideoPlayer.current.textTracks.length; i += 1) {
      this.refVideoPlayer.current.textTracks[i].mode = i === trackNumber ? 'showing' : 'hidden'
    }
    this.setState({
      selectedTextTrack: trackNumber,
    })
  }

  setCaptionsMenuOpen = isOpen => {
    this.setState({
      captionsMenuOpen: isOpen,
    })
  }

  // ********** Video Display Control **********
  toggleFullscreen = () => {
    if (fscreen.fullscreenEnabled) {
      if (fscreen.fullscreenElement === null) {
        fscreen.requestFullscreen(this.refVideoPlayerContainer.current)
      } else {
        fscreen.exitFullscreen()
      }
      this.setState(prevState => {
        return { videoIsFullscreen: !prevState.videoIsFullscreen }
      })
    }
  }

  setVideoQuality = async quality => {
    const currentTime = this.state.videoCurrentTime
    await this.setPlaying(false)
    await this.setState({
      videoLength: 0,
      videoBufferEnd: 0,
      videoQuality: quality,
      videoQualityChanged: true,
    })
    await this.refreshMedia()
    await this.refVideoPlayer.current.load()
    this.resetInactivityTimer()
    this.setSeek(currentTime)
  }

  setQualityMenuOpen = isOpen => {
    this.setState({
      qualityMenuOpen: isOpen,
    })
  }

  // ******** End Helper Functions *********

  handleKeyboard = event => {
    const key = event.key || event.keyCode

    // *** Begin Seek & Play Control ****
    if (key === ' ' || key === 32 || key === 'k' || key === 75) {
      event.preventDefault()
      this.resetInactivityTimer()
      this.togglePlayPause()
    }

    // Disables all keys except for play/pause when in simpleMode
    if (!this.props.simpleMode) {
      if (key === 'ArrowRight' || key === 39 || key === '.' || key === 190) {
        this.resetInactivityTimer()

        this.incrementSeek(this.playerOptions.keyboardSeekIncrement)
      }

      if (key === 'ArrowLeft' || key === 37 || key === ',' || key === 188) {
        this.resetInactivityTimer()

        this.incrementSeek(-this.playerOptions.keyboardSeekIncrement)
      }

      if (key === '0' || key === 48 || key === 'numpad 0' || key === 96) {
        this.setSeek(0)
      }

      if (key === '1' || key === 49 || key === 'numpad 1' || key === 97) {
        this.setSeek(this.state.videoLength * 0.1)
      }

      if (key === '2' || key === 50 || key === 'numpad 2' || key === 98) {
        this.setSeek(this.state.videoLength * 0.2)
      }

      if (key === '3' || key === 51 || key === 'numpad 3' || key === 99) {
        this.setSeek(this.state.videoLength * 0.3)
      }

      if (key === '4' || key === 52 || key === 'numpad 4' || key === 100) {
        this.setSeek(this.state.videoLength * 0.4)
      }

      if (key === '5' || key === 53 || key === 'numpad 5' || key === 101) {
        this.setSeek(this.state.videoLength * 0.5)
      }

      if (key === '6' || key === 54 || key === 'numpad 6' || key === 102) {
        this.setSeek(this.state.videoLength * 0.6)
      }

      if (key === '7' || key === 55 || key === 'numpad 7' || key === 103) {
        this.setSeek(this.state.videoLength * 0.7)
      }

      if (key === '8' || key === 56 || key === 'numpad 8' || key === 104) {
        this.setSeek(this.state.videoLength * 0.8)
      }

      if (key === '9' || key === 57 || key === 'numpad 9' || key === 105) {
        this.setSeek(this.state.videoLength * 0.9)
      }

      // **** End Seek & Play Control ****

      // **** Begin Volume Control ****

      if (
        key === 'ArrowUp' ||
        key === 38 ||
        key === '=' ||
        key === 187 ||
        key === 'add' ||
        key === 107
      ) {
        this.resetInactivityTimer()

        if (this.state.videoCurrentVolume + this.playerOptions.keyboardVolumeIncrement < 1) {
          this.incrementVolume(this.playerOptions.keyboardVolumeIncrement)
        } else {
          this.setVolume(1)
        }
      }

      if (
        key === 'ArrowDown' ||
        key === 40 ||
        key === '-' ||
        key === 189 ||
        key === 'subtract' ||
        key === 109
      ) {
        this.resetInactivityTimer()

        if (this.state.videoCurrentVolume - this.playerOptions.keyboardVolumeIncrement > 0) {
          this.incrementVolume(-this.playerOptions.keyboardVolumeIncrement)
        } else {
          this.setVolume(0)
        }
      }

      if (key === 'm' || key === 77) {
        this.resetInactivityTimer()

        this.toggleMute()
      }

      // **** End Volume Control ****

      // **** Begin Accessibility Controls ****

      if (key === 'f' || key === 70) {
        this.resetInactivityTimer()

        this.toggleFullscreen()
      }

      if (key === 'Escape' || key === 27) {
        // Resets focus back to container if user is focused on ControlBar button
        this.refVideoPlayerContainer.current.focus()
        this.closeSubMenus()
      }

      if (key === 'q' || key === 81) {
        this.refKeyboardInstructions.current.focus()
      }
    }

    // **** End Accessibility Controls ****
  }

  render() {
    const { ...rest } = this.props

    return (
      <VideoPlayerContainer
        {...safeRest(rest)}
        ref={this.refVideoPlayerContainer}
        videoBorder={this.props.videoBorder}
        onMouseMove={this.resetInactivityTimer}
        onClick={this.resetInactivityTimer}
        onKeyDown={this.handleKeyboard}
        tabIndex="0"
        aria-label={
          this.props.simpleMode
            ? videoText[this.props.copy].videoSelectedSimple
            : videoText[this.props.copy].videoSelected
        }
        data-testid="videoPlayer"
      >
        <VideoOverlayContainer
          mouseInactive={this.state.mouseInactive}
          onClick={() => {
            this.closeSubMenus()
            this.togglePlayPause()
          }}
        >
          {/* ======== Video Splash Screen ======== */}
          {this.state.videoUnplayed && !this.state.videoQualityChanged && (
            <VideoSplashContainer>
              <VideoSplash
                poster={this.props.posterSrc}
                videoLength={this.state.videoLength}
                label={videoText[this.props.copy].watch}
                customButton={
                  this.props.simpleMode ? <MiddleControlButton icon={<Play />} /> : undefined
                }
                iconLeftOffsetPx={2}
                onClick={this.beginVideo}
              />
            </VideoSplashContainer>
          )}
          {/* =================================== */}
          <VideoOverlayElementContainer>
            {/* ======== Replay Button ======== */}
            {this.state.videoEnded && (
              <MiddleControlButton icon={<Replay />} onClick={this.replayVideo} />
            )}
            {/* ================================ */}
            {/* ======== Middle Play/Pause Button ======= */}
            {!this.state.videoUnplayed &&
              !this.state.videoIsBuffering &&
              !this.state.videoEnded &&
              !this.state.isMobile && (
                <MiddleControlButton
                  icon={this.state.videoIsPlaying ? <Pause /> : <Play />}
                  iconLeftOffsetPx={this.state.videoIsPlaying ? 0 : 2}
                  isHidden={this.state.mouseInactive}
                  onClick={this.togglePlayPause}
                  onFocus={this.resetInactivityTimer}
                />
              )}
            {/* ========================================== */}

            {/* ======== Spinner Display ======= */}
            {this.state.videoIsBuffering && !this.state.isMobile && <Spinner spinning />}
            {/* ================================ */}
          </VideoOverlayElementContainer>
        </VideoOverlayContainer>

        {/* ======== Video Element ======= */}
        <VideoElementContainer
          videoIsFullscreen={this.state.videoIsFullscreen}
          mouseInactive={this.state.mouseInactive}
        >
          <VideoPlayer
            ref={this.refVideoPlayer}
            controls={this.state.isMobile}
            videoIsFullscreen={this.state.videoIsFullscreen}
            crossOrigin={this.props.crossOrigin}
            playsinline
          >
            {this.state.sources}
            {this.state.tracks}
            Your browser does not support the video tag.
          </VideoPlayer>
        </VideoElementContainer>
        {/* ============================== */}

        {!this.props.simpleMode && (
          <ControlBar
            videoPlayer={this.refVideoPlayer}
            videoPlayerContainer={this.refVideoPlayerContainer}
            sources={this.props.sources}
            tracks={this.props.tracks}
            videoLength={this.state.videoLength}
            videoBufferEnd={this.state.videoBufferEnd}
            videoCurrentTime={this.state.videoCurrentTime}
            videoPlaying={
              this.refVideoPlayer.current !== null ? !this.refVideoPlayer.current.paused : false
            }
            videoDefaultVolume={this.props.defaultVolume / 100}
            videoCurrentVolume={this.state.videoCurrentVolume}
            videoIsMuted={this.state.videoIsMuted}
            setVolume={this.setVolume}
            isHidden={
              (this.state.mouseInactive || this.state.videoUnplayed) && !this.state.videoEnded
            }
            isMobile={this.state.isMobile}
            tracksAvailable={this.props.tracks !== undefined}
            togglePlayPause={this.togglePlayPause}
            setSeek={this.setSeek}
            toggleMute={this.toggleMute}
            toggleFullscreen={this.toggleFullscreen}
            videoIsFullscreen={this.state.videoIsFullscreen}
            setTextTracks={this.setTextTracks}
            selectedTextTrack={this.state.selectedTextTrack}
            resetInactivityTimer={this.resetInactivityTimer}
            videoQuality={this.state.videoQuality}
            setVideoQuality={this.setVideoQuality}
            qualityMenuOpen={this.state.qualityMenuOpen}
            setQualityMenuOpen={this.setQualityMenuOpen}
            captionsMenuOpen={this.state.captionsMenuOpen}
            setCaptionsMenuOpen={this.setCaptionsMenuOpen}
            clearInactivityTimer={this.clearInactivityTimer}
            copy={this.props.copy}
            compactModeThreshold={this.playerOptions.compactModeThreshold}
            videoPlayerWidth={this.state.videoPlayerWidth}
            onMouseOver={() => this.setMouseOnControlBar(true)}
            onMouseOut={() => this.setMouseOnControlBar(false)}
            onFocus={() => {}}
            onBlur={() => {}}
          />
        )}

        {/* ======== Screen Reader Keyboard Instructions ======= */}
        <span
          tabIndex="-1"
          ref={this.refKeyboardInstructions}
          aria-label={videoText[this.props.copy].videoPlayer}
        />
        {/* ==================================================== */}
      </VideoPlayerContainer>
    )
  }
}

Video.propTypes = {
  /**
   * An array of objects that defines each video file. See the "Basic Usage" section for more information.
   */
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      /** A path to a video file */
      source: PropTypes.string.isRequired,
      /** The video's MIME type (example: `video/mp4`) */
      mediaType: PropTypes.string.isRequired,
      /** The label to be given to this file in the quality selector (example: `1080p`) */
      qualityName: PropTypes.string.isRequired,
      /** A number indicating the video's quality, with 1 being the best, and the number increasing from there as quality degrades */
      qualityRank: PropTypes.number.isRequired,
      /** A boolean that defines its source as a fallback for another source with the same `qualityRank` */
      isFallback: PropTypes.bool,
    })
  ).isRequired,
  /**
   * A path of the image that will be displayed on the video's splash screen.
   */
  posterSrc: PropTypes.string.isRequired,
  /**
   * An array of objects that defines each caption file. See the "Basic Usage" section for more information.
   */
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      /** A path to the track file */
      source: PropTypes.string.isRequired,
      /** The name of the track file as it will appear in the "Captions" dialogue */
      label: PropTypes.string.isRequired,
      /** The track's file type, typically one of "subtitles", "captions", or "descriptions". See [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track#Attributes) for more information on these types */
      kind: PropTypes.string.isRequired.isRequired,
      /** The language of the track file represented as a ISO 639-1 language code */
      language: PropTypes.string.isRequired,
    })
  ),
  /**
   * The video's default volume, defined from 1 to 100. Please use the `beginMuted` prop to have the video start silenced.
   */
  defaultVolume: PropTypes.number,
  /**
   * Defines if the video should start muted.
   */
  beginMuted: PropTypes.bool,
  /**
   * The default quality level if the user is on mobile. See the `sources` prop for available quality levels.
   */
  defaultMobileQuality: PropTypes.number,
  /**
   * The default quality level if the user is on desktop. See the `sources` prop for available quality levels.
   */
  defaultDesktopQuality: PropTypes.number,
  /**
   * The video player UI's language as an ISO language code. It currently supports English and French.
   */
  copy: PropTypes.oneOf(['en', 'fr']).isRequired,
  /**
   * Sets the `video` tag's `crossorigin` mode. Please note that content loaded without CORS approval may be insecure.
   * @since 1.1.0
   */
  crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials']),
  /**
   * Disables the control bar during playback and reduces the amount of time until the UI hides itself.
   * For special approved internal uses only.
   * @since 1.2.0
   */
  simpleMode: PropTypes.bool,
  /**
   * Renders a gainsboro coloured border around the video. Used to seperate the video from the rest of the page if the video's background is the same colour as the container's.
   * @since 1.2.0
   */
  videoBorder: PropTypes.bool,
}

Video.defaultProps = {
  tracks: undefined,
  defaultVolume: 100,
  beginMuted: false,
  defaultMobileQuality: 1,
  defaultDesktopQuality: 1,
  crossOrigin: undefined,
  simpleMode: false,
  videoBorder: false,
}

export default Video
