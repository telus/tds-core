import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../../safeRest'

import styles from '../DisplayHeading.modules.scss'

/**
 * Subscript text for headings.
 *
 * _This component can only be accessed as a name-spaced component: `DisplayHeading.Sub`._
 *
 */
const DisplayHeadingSub = ({ children, ...rest }) => (
  <sub {...safeRest(rest)} className={styles.sub}>{children}</sub>
)

DisplayHeadingSub.propTypes = {
  children: PropTypes.string.isRequired
}

DisplayHeadingSub.displayName = 'DisplayHeading.Sub'

export default DisplayHeadingSub
