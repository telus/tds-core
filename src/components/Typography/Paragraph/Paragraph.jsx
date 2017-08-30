import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'
import TextSup from '../Text/TextSup'
import TextSub from '../Text/TextSub'

import spacingStyles from '../../Spacing.modules.scss'
import styles from './Paragraph.modules.scss'
import textStyles from '../Text/Text.modules.scss'

/**
 * Used for paragraphs of text.
 */
const Paragraph = ({ bold, size, align, invert, children, ...rest }, context) => {
  const paragraphColor = invert ? textStyles.colorInverted : textStyles.color

  const classes = classnames(
    spacingStyles.noSpacing,
    context.inheritColor ? styles.inheritColor : paragraphColor,
    textStyles[size],
    bold ? textStyles.boldFont : textStyles[`${size}Font`],
    styles[`${align}Align`]
  )

  return (
    <p {...safeRest(rest)} className={classes}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  /**
   * Set a paragraph of text stylistically different from normal text by using the boldface,
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
   * Align paragraph content.
   */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  /**
   * Invert paragraph style to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * Paragraph text.
   */
  children: PropTypes.node.isRequired
}

Paragraph.defaultProps = {
  bold: false,
  size: 'medium',
  align: 'left',
  invert: false
}

Paragraph.contextTypes = {
  inheritColor: PropTypes.bool
}

Paragraph.Sup = TextSup
Paragraph.Sub = TextSub

export default Paragraph
