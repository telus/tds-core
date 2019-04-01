import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BigVideoButton from './BigVideoButton/BigVideoButton'

import Play from './svg/Play'

import safeRest from '../../utils/safeRest'

/**
 * @version ./package.json
 */

const SplashBackground = styled.div(props => ({
  backgroundImage: `url(${props.poster})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  cursor: 'pointer',
}))

const VideoSplash = ({ poster, videoLength, label, ...rest }) => {
  return (
    <SplashBackground {...safeRest(rest)} poster={poster}>
      <BigVideoButton icon={<Play />} label={label} videoLength={videoLength} />
    </SplashBackground>
  )
}

VideoSplash.propTypes = {
  poster: PropTypes.string,
  videoLength: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
}

VideoSplash.defaultProps = {
  poster: undefined,
}

export default VideoSplash
