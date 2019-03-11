import React from 'react'
import PropTypes from 'prop-types'

import styles from '@tds/shared-typography/Typography.modules.scss'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'

import TextSup from './TextSup/TextSup'

/**
 * Inline text usually as an HTML `<span>` element.
 *
 * @version ./package.json
 */
const Text = ({ block, bold, size, invert, children, ...rest }, context) => {
  const textColor = invert ? styles.invertedColor : styles.color

  const classes = joinClassNames(
    styles[size],
    bold ? styles.boldFont : styles[`${size}Font`],
    context.inheritColor ? styles.inheritColor : textColor,
    block ? styles.blockText : null
  )

  return (
    <span {...safeRest(rest)} className={classes}>
      {children}
    </span>
  )
}

Text.propTypes = {
  /**
   * If true, renders a block level element.
   * Otherwise, renders an inline element.
   */
  block: PropTypes.bool,
  /**
   * Embolden text without conveying any special importance or relevance.
   */
  bold: PropTypes.bool,
  /**
   * The font size.
   */
  size: PropTypes.oneOf(['base', 'small', 'medium', 'large']),
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The content. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired,
}

Text.defaultProps = {
  block: false,
  bold: false,
  size: 'base',
  invert: false,
}

Text.contextTypes = {
  inheritColor: PropTypes.bool,
}

Text.Sup = TextSup

export default Text
