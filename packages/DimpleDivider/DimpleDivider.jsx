import React from 'react'

import safeRest from '../../shared/utils/safeRest'

import styles from './DimpleDivider.modules.scss'

/**
 * Separate modules.
 *
 * @version ./package.json
 */
const DimpleDivider = ({ ...rest }) => <hr {...safeRest(rest)} className={styles.dimple} />

export default DimpleDivider
