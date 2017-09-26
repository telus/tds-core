import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../../utils/safeRest'

import styles from '../DisplayHeading.modules.scss'

/**
 * Superscript text for `DisplayHeading` an as HTML `<sup>` element.
 *
 * _This component can only be accessed as a name-spaced component: `DisplayHeading.Sup`._
 *
 * <span class="docs--badge__new">new!</span> <span class="docs--badge__version">v0.22.0</span>
 */
const DisplayHeadingSup = ({ children, ...rest }) => (
  <sup {...safeRest(rest)} className={styles.sup}>{children}</sup>
)

DisplayHeadingSup.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired
}

DisplayHeadingSup.displayName = 'DisplayHeading.Sup'

export default DisplayHeadingSup
