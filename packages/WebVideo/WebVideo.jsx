import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import YouTube from 'react-youtube'

import VideoSplash from '../../shared/components/VideoSplash/VideoSplash'

import safeRest from '../../shared/utils/safeRest'

const StyledPlayerContainer = styled.div({
  width: '100%',
  minWidth: 288,
  outline: 'none',
})

const StyledYoutubePlayer = styled(YouTube)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
})

const aspectRatios = {
  '16:9': { paddingTop: '56.25%' },
  '4:3': { paddingTop: '75%' },
  '1:1': { paddingTop: '100%' },
}

const AspectLimiter = styled.div(props => ({
  ...aspectRatios[props.aspectRatio],
  position: 'relative',
  backgroundImage: `url(${props.aspectRatio})`,
}))

/**
 * @version ./package.json
 */

const WebVideo = ({
  videoId,
  aspectRatio,
  posterSrc,
  defaultVolume,
  beginMuted,
  videoLength,
  copy,
  ...rest
}) => {
  const [started, setStarted] = useState(false)

  const initializeYoutubePlayer = event => {
    if (beginMuted) {
      event.target.mute()
    }
    event.target.setVolume(defaultVolume)
    event.target.playVideo() // This plays the video after passing the splash screen on mobile.
  }
  return (
    <StyledPlayerContainer
      data-testid="youtubePlayer"
      {...safeRest(rest)}
      id="videoPlayerContainer"
    >
      <AspectLimiter aspectRatio={aspectRatio} data-testid="aspectLimiter">
        {started ? (
          <StyledYoutubePlayer
            videoId={videoId}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                playsinline: 1,
                rel: 0,
              },
            }}
            onReady={initializeYoutubePlayer}
          />
        ) : (
          <VideoSplash
            poster={posterSrc || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            videoLength={videoLength}
            label={copy === 'en' ? 'Watch the video' : 'Regardez la vidéo'}
            onClick={() => {
              setStarted(true)
            }}
          />
        )}
      </AspectLimiter>
    </StyledPlayerContainer>
  )
}

WebVideo.propTypes = {
  /**
   * The video's ID, typically available via the video's URL.
   */
  videoId: PropTypes.string.isRequired,
  /**
   * The aspect ratio of the player.
   */
  aspectRatio: PropTypes.oneOf(['16:9', '4:3', '1:1']),
  /**
   * A path of the image that will be displayed on the video's splash screen. If this is undefined, it will pull an image from the defined web video if available.
   */
  posterSrc: PropTypes.string,
  /**
   * The video's default volume, defined from 1 to 100. Please use the `beginMuted` prop to have the video start silenced.
   */
  defaultVolume: PropTypes.number,
  /**
   * Defines if the video should start muted.
   */
  beginMuted: PropTypes.bool,
  /**
   * The video's length, which will be displayed on the splash screen. This is defined in seconds.
   */
  videoLength: PropTypes.number.isRequired,
  /**
   * The splash screen UI's language as an ISO language code. It currently supports English and French.
   */
  copy: PropTypes.oneOf(['en', 'fr']).isRequired,
}

WebVideo.defaultProps = {
  aspectRatio: '16:9',
  posterSrc: undefined,
  defaultVolume: 1,
  beginMuted: false,
}

export default WebVideo
