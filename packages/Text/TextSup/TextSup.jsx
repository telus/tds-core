import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../shared/utils/safeRest'

import styles from '../../../shared/styles/Typography.modules.scss'

/**
 * @version 1.0.0
 *
 * Superscript text an as HTML `<sup>` element.
 *
 * _This component can only be accessed as a name-spaced component: `Text.Sup`._
 */
const TextSup = ({ children, ...rest }) => (
  <sup {...safeRest(rest)} className={styles.sup}>
    {children}
  </sup>
)

TextSup.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.node.isRequired,
}

TextSup.displayName = 'Text.Sup'

export default TextSup
