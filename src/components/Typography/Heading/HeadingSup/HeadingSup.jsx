import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../../safeRest'

import styles from '../Heading.modules.scss'

/**
 * Superscript text for headings.
 *
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.22.0</span>
 *
 * _This component can only be accessed as a name-spaced component: `Heading.Sup`._
 *
 */
const HeadingSup = ({ children, ...rest }) => (
  <sup {...safeRest(rest)} className={styles.sup}>{children}</sup>
)

HeadingSup.propTypes = {
  /**
   * Text
   */
  children: PropTypes.string.isRequired
}

HeadingSup.displayName = 'Heading.Sup'

export default HeadingSup
