import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import { Time } from '@tds/core-decorative-icon'
import Paragraph from '@tds/core-paragraph'
import { media } from '@tds/core-responsive'

const getTimestamp = videoLength => {
  const minutes = Math.floor(videoLength / 60)
  const seconds = Math.ceil(videoLength - 60 * minutes)

  return {
    minutes,
    seconds,
    timestamp: `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`,
  }
}

const BigPlayButtonContainer = styled.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 8,
  cursor: 'pointer',
  pointerEvents: 'auto',
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
})
const BigPlayButton = styled.button({
  width: 144,
  height: 144,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  verticalAlign: 'middle',

  ...media.from('md').css({
    width: 200,
    height: 200,
  }),
})

const IconContainer = styled.span({
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

const IconAdjust = styled.span({ paddingTop: 2 })

const BigVideoButton = ({ icon, label, videoLength, ...rest }) => {
  const timestamp = getTimestamp(videoLength)

  // TODO: After Box moves to Styled Components, use one Box with the between prop for spacing
  return (
    <BigPlayButtonContainer {...rest}>
      <BigPlayButton
        id="bigButton"
        aria-label={`Play video. Video length is ${timestamp.minutes} minute${
          timestamp.minutes !== 1 ? 's' : ''
        } and ${timestamp.seconds} second${timestamp.minutes !== 1 ? 's' : ''} long`}
      >
        <IconContainer>{icon}</IconContainer>

        <BigWatchTextContainer>
          <Box vertical={1}>
            <Paragraph size="medium" align="center" bold invert>
              {label}
            </Paragraph>
          </Box>
        </BigWatchTextContainer>

        <LittleWatchTextContainer>
          <Paragraph size="small" align="center" bold invert>
            {label}
          </Paragraph>
        </LittleWatchTextContainer>

        {videoLength && (
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
        )}
      </BigPlayButton>
    </BigPlayButtonContainer>
  )
}

BigVideoButton.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  videoLength: PropTypes.number,
}

BigVideoButton.defaultProps = {
  videoLength: undefined,
}

export default BigVideoButton
