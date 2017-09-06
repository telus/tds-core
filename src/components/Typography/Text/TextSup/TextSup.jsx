import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../../safeRest'

import styles from '../Text.modules.scss'

/**
 * Text that should be displayed higher than the main text (superscript).
 *
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.22.0</span>
 *
 * _This component can only be accessed as a name-spaced component: `Text.Sup`._
 *
 */
const TextSup = ({ children, ...rest }) => (
  <sup {...safeRest(rest)} className={styles.sup}>{children}</sup>
)

TextSup.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.node.isRequired
}

TextSup.displayName = 'Text.Sup'

export default TextSup
