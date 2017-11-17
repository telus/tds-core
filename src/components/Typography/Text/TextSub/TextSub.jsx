import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../../utils/safeRest'

import styles from '../Text.modules.scss'

/**
 * Text that should be displayed lower than the main text (subscript).
 *
 * _This component can only be accessed as a name-spaced component: `Text.Sub`._
 *
 */
const TextSub = ({ children, ...rest }) => (
  <sub {...safeRest(rest)} className={styles.sub}>
    {children}
  </sub>
)

TextSub.propTypes = {
  /**
   * Text
   */
  children: PropTypes.node.isRequired,
}

TextSub.displayName = 'Text.Sub'

export default TextSub
