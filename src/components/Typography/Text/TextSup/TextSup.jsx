import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../../safeRest'

import styles from '../Text.modules.scss'

/**
 * Used for text that should be displayed higher than the main text (superscript).
 */
const TextSup = ({ children, ...rest }) => (
  <sup {...safeRest(rest)} className={styles.sup}>{children}</sup>
)

TextSup.propTypes = {
  /**
   * Text
   */
  children: PropTypes.node.isRequired
}

TextSup.displayName = 'Text.Sup'

export default TextSup
