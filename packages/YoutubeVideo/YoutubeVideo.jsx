import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import YouTube from 'react-youtube'

import VideoSplash from '../../shared/components/VideoSplash/VideoSplash'

import safeRest from '../../shared/utils/safeRest'

/**
 * @version ./package.json
 */

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

const YoutubeVideo = ({
  videoId,
  aspectRatio,
  posterSrc,
  defaultVolume,
  beginMuted,
  videoLength,
  ...rest
}) => {
  const [started, setStarted] = useState(false)

  const aspectRatios = {
    '16:9': { paddingTop: '56.25%' },
    '4:3': { paddingTop: '75%' },
    '1:1': { paddingTop: '100%' },
  }

  const AspectLimiter = styled.div({ ...aspectRatios[aspectRatio], position: 'relative' })

  const initializeYoutubePlayer = event => {
    if (beginMuted) {
      event.target.mute()
    }
    event.target.setVolume(defaultVolume * 100)
    event.target.playVideo() // This plays the video after passing the splash screen on mobile.
  }
  return (
    <StyledPlayerContainer
      data-testid="youtubePlayer"
      {...safeRest(rest)}
      id="videoPlayerContainer"
    >
      <AspectLimiter data-testid="aspectLimiter">
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
            onClick={() => {
              setStarted(true)
            }}
          />
        )}
      </AspectLimiter>
    </StyledPlayerContainer>
  )
}

YoutubeVideo.propTypes = {
  videoId: PropTypes.string.isRequired,
  aspectRatio: PropTypes.oneOf(['16:9', '4:3', '1:1']),
  posterSrc: PropTypes.string,
  defaultVolume: PropTypes.number,
  beginMuted: PropTypes.bool,
  videoLength: PropTypes.number.isRequired,
}

YoutubeVideo.defaultProps = {
  aspectRatio: '16:9',
  posterSrc: undefined,
  defaultVolume: 1,
  beginMuted: false,
}

export default YoutubeVideo
