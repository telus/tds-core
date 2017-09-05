import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../../safeRest'

import styles from '../Text.modules.scss'


/**
 * Used for text that should be displayed lower than the main text (subscript).
 */
const TextSub = ({ children, ...rest }) => (
  <sub {...safeRest(rest)} className={styles.sub}>{children}</sub>
)

TextSub.propTypes = {
  /**
   * Text
   */
  children: PropTypes.node.isRequired
}

TextSub.displayName = 'Text.Sub'

export default TextSub
