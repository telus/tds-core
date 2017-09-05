import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../../safeRest'

import styles from '../Heading.modules.scss'

/**
 * Superscript text for headings.
 *
 * _This component can only be accessed as a name-spaced component: `Heading.Sup`._
 *
 */
const HeadingSup = ({ children, ...rest }) => (
  <sup {...safeRest(rest)} className={styles.sup}>{children}</sup>
)

HeadingSup.propTypes = {
  children: PropTypes.string.isRequired
}

HeadingSup.displayName = 'Heading.Sup'

export default HeadingSup
