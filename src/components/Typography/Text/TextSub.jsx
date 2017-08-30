import React from 'react'
import PropTypes from 'prop-types'

import styles from './Text.modules.scss'


/**
 * Used for text that should be displayed lower than the main text.
 */
const TextSub = ({ children }) => (
  <sub className={styles.sub}>{children}</sub>
)

TextSub.propTypes = {

  /**
   * Text
   */
  children: PropTypes.node.isRequired
}

TextSub.displayName = 'Text.Sub'

export default TextSub
