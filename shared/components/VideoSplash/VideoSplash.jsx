import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BigVideoButton from './BigVideoButton/BigVideoButton'

import Play from './svg/Play'

import safeRest from '../../utils/safeRest'

/**
 * @version ./package.json
 */

const SplashBackground = styled.div(({ videoPoster, isCustomButton }) => ({
  backgroundImage: `url(${videoPoster})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%', // Fixes vertical alignment on IE 11
  cursor: 'pointer',
  ...(isCustomButton && { display: 'flex', alignItems: 'center', justifyContent: 'center' }),
}))

const VideoSplash = ({ poster, videoLength, label, customButton, ...rest }) => {
  return (
    <SplashBackground {...safeRest(rest)} videoPoster={poster} isCustomButton={!!customButton}>
      {customButton || <BigVideoButton icon={<Play />} label={label} videoLength={videoLength} />}
    </SplashBackground>
  )
}

VideoSplash.propTypes = {
  poster: PropTypes.string,
  videoLength: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  customButton: PropTypes.node,
}

VideoSplash.defaultProps = {
  poster: undefined,
  customButton: undefined,
}

export default VideoSplash
