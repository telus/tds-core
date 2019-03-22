import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import { Time } from '@tds/core-decorative-icon'
import Paragraph from '@tds/core-paragraph'
import { media } from '@tds/core-responsive'

import Play from './svg/Play'

import safeRest from '../../utils/safeRest'

/**
 * @version ./package.json
 */

const getTimestamp = videoLength => {
  const minutes = Math.floor(videoLength / 60)
  const seconds = videoLength - 60 * minutes

  return {
    minutes,
    seconds,
    timestamp: `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`,
  }
}

const SplashBackground = styled.div(props => ({
  backgroundImage: `url(${props.poster})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '#bigButton': {
    backgroundColor: 'rgba(42,44,46,0.9)',
    transition: 'background-color 0.2s',
  },
  fill: 'rgba(255,255,255,0)',
  transition: 'background-color 0.2s fill 0.2s',
  ':hover': {
    '#bigButton': {
      backgroundColor: 'rgba(42,44,46,1)',
      transition: 'background-color 0.2s',
    },
    fill: 'rgba(255,255,255,1)',
    transition: 'fill 0.2s',
  },
}))

const BigPlayButton = styled.div({
  width: 144,
  height: 144,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  ...media.from('md').css({
    width: 200,
    height: 200,
  }),
})

const PlayIconContainer = styled.span({
  'svg>path': { fill: 'inherit' },
})

const BigWatchTextContainer = styled.span({
  display: 'none',
  ...media.from('md').css({ display: 'block' }),
})

const LittleWatchTextContainer = styled.span({
  display: 'block',
  ...media.from('md').css({ display: 'none' }),
})

const VideoSplash = ({ poster, videoLength, ...rest }) => {
  const IconAdjust = styled.span({ paddingTop: 2 })

  const timestamp = getTimestamp(videoLength)

  // TODO: After Box moves to Styled Components, use one Box with the between prop for spacing
  return (
    <SplashBackground
      {...safeRest(rest)}
      role="button"
      aria-label={`Play video. Video length is ${timestamp.minutes} minute${
        timestamp.minutes !== 1 ? 's' : ''
      } and ${timestamp.seconds} second${timestamp.minutes !== 1 ? 's' : ''} long`}
      poster={poster}
      tabIndex="0"
    >
      <BigPlayButton id="bigButton">
        <PlayIconContainer>
          <Play />
        </PlayIconContainer>

        <BigWatchTextContainer>
          <Box vertical={1}>
            <Paragraph size="medium" align="center" bold invert>
              Watch the video
            </Paragraph>
          </Box>
        </BigWatchTextContainer>

        <LittleWatchTextContainer>
          <Paragraph size="small" align="center" bold invert>
            Watch the video
          </Paragraph>
        </LittleWatchTextContainer>

        <Box vertical={1}>
          <Box between={2} inline>
            <IconAdjust>
              <Time size={16} variant="inverted" />
            </IconAdjust>
            <Paragraph invert data-testid="timestamp">
              {timestamp.timestamp}
            </Paragraph>
          </Box>
        </Box>
      </BigPlayButton>
    </SplashBackground>
  )
}

VideoSplash.propTypes = {
  poster: PropTypes.string.isRequired,
  videoLength: PropTypes.number.isRequired,
}

VideoSplash.defaultProps = {}

export default VideoSplash
