import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'
import TextSup from './TextSup'
import TextSub from './TextSub'

import styles from './Text.modules.scss'


/**
 * Used for inline text.
 */
const Text = ({ bold, size, invert, children, ...rest }) => {
  const classes = classnames(
    styles[size],
    bold ? styles.boldFont : styles[`${size}Font`],
    invert ? styles.colorInverted : styles.color
  )

  return (
    <span {...safeRest(rest)} className={classes}>
      {children}
    </span>
  )
}

Text.propTypes = {
  /**
   * Set a span of text stylistically different from normal text by using the boldface,
   * without conveying any special importance or relevance.
   */
  bold: PropTypes.bool,
  /**
   * Font size (default is `medium`)
   */
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  /**
   * Invert span style to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * Text
   */
  children: PropTypes.node.isRequired
}

Text.defaultProps = {
  bold: false,
  size: 'medium',
  invert: false
}

Text.Sup = TextSup
Text.Sub = TextSub

export default Text
