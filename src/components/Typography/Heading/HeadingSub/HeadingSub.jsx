import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../../safeRest'

import styles from '../Heading.modules.scss'

/**
 * Subscript text for headings.
 *
 * _This component can only be accessed as a name-spaced component: `Heading.Sub`._
 *
 */
const HeadingSub = ({ children, ...rest }) => (
  <sub {...safeRest(rest)} className={styles.sub}>{children}</sub>
)

HeadingSub.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired
}

HeadingSub.displayName = 'Heading.Sub'

export default HeadingSub
