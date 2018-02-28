import React from 'react'

import safeRest from '../../shared/utils/safeRest'

import styles from './DimpleDivider.modules.scss'

/**
 * @version 0.0.0-development
 *
 * Separate modules.
 */
const DimpleDivider = ({ ...rest }) => <hr {...safeRest(rest)} className={styles.dimple} />

export default DimpleDivider
