import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../../safeRest'

import styles from '../Heading.modules.scss'

/**
 * Subscript text for headings.
 */
const HeadingSub = ({ children, ...rest }) => (
  <sub {...safeRest(rest)} className={styles.sub}>{children}</sub>
)

HeadingSub.propTypes = {
  children: PropTypes.string.isRequired
}

HeadingSub.displayName = 'Heading.Sub'

export default HeadingSub
