import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../../safeRest'

import styles from '../DisplayHeading.modules.scss'

/**
 * Subscript text for headings.
 */
const DisplayHeadingSub = ({ children, ...rest }) => (
  <sub {...safeRest(rest)} className={styles.sub}>{children}</sub>
)

DisplayHeadingSub.propTypes = {
  children: PropTypes.string.isRequired
}

export default DisplayHeadingSub
