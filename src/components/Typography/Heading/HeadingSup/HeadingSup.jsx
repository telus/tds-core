import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../../utils/safeRest'

import styles from '../Heading.modules.scss'

/**
 * Superscript text for `Heading` an as HTML `<sup>` element.
 *
 * _This component can only be accessed as a name-spaced component: `Heading.Sup`._
 */
const HeadingSup = ({children, ...rest}) => (
  <sup {...safeRest(rest)} className={styles.sup}>
    {children}
  </sup>
)

HeadingSup.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired,
}

HeadingSup.displayName = 'Heading.Sup'

export default HeadingSup
