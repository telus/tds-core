import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../../safeRest'

import styles from '../DisplayHeading.modules.scss'

/**
 * Superscript text for headings.
 *
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.22.0</span>
 *
 * _This component can only be accessed as a name-spaced component: `DisplayHeading.Sup`._
 *
 */
const DisplayHeadingSup = ({ children, ...rest }) => (
  <sup {...safeRest(rest)} className={styles.sup}>{children}</sup>
)

DisplayHeadingSup.propTypes = {
  children: PropTypes.string.isRequired
}

DisplayHeadingSup.displayName = 'DisplayHeading.Sup'

export default DisplayHeadingSup
