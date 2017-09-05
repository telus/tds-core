import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../../safeRest'

import styles from '../DisplayHeading.modules.scss'

/**
 * Superscript text for headings.
 */
const DisplayHeadingSup = ({ children, ...rest }) => (
  <sup {...safeRest(rest)} className={styles.sup}>{children}</sup>
)

DisplayHeadingSup.propTypes = {
  children: PropTypes.string.isRequired
}

DisplayHeadingSup.displayName = 'DisplayHeading.Sup'

export default DisplayHeadingSup
