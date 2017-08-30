import React from 'react'
import PropTypes from 'prop-types'

import styles from './Text.modules.scss'


/**
 * Used for text that should be displayed higher than the main text.
 */
const TextSup = ({ children }) => (
  <sup className={styles.sup}>{children}</sup>
)

TextSup.propTypes = {

  /**
   * Superscript text
   */
  children: PropTypes.node.isRequired
}

TextSup.displayName = 'Text.Sup'

export default TextSup
