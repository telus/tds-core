import React from 'react'

import safeRest from '../../../utils/safeRest'

import wave from './wave.svg'
import styles from './WaveDivider.modules.scss'

/**
 * Separate page content blocks.
 */
const WaveDivider = ({ ...rest }) => (
  <img {...safeRest(rest)} src={wave} alt="" className={styles.wave} />
)

export default WaveDivider
