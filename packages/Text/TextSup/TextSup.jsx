import React from 'react'
import PropTypes from 'prop-types'

import styles from '@tds/shared-typography/Typography.modules.scss'

import safeRest from '../../../shared/utils/safeRest'

/**
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
