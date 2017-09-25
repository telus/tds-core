import React from 'react'

import safeRest from '../../../utils/safeRest'

import styles from './WaveDivider.modules.scss'

const WaveDivider = ({ ...rest }) => (
  <hr {...safeRest(rest)} className={styles.wave} />
)

export default WaveDivider
