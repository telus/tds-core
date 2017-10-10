import React from 'react'

import safeRest from '../../../utils/safeRest'

import styles from './DimpleDivider.modules.scss'

/**
 * Separate modules.
 *
 * <span class="docs--badge__new">new!</span> <span class="docs--badge__version">v0.24.0</span>
 */
const DimpleDivider = ({ ...rest }) => (
  <hr {...safeRest(rest)} className={styles.dimple} />
)

export default DimpleDivider
