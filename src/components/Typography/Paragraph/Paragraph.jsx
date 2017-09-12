import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

import spacingStyles from '../../Spacing.modules.scss'
import styles from './Paragraph.modules.scss'
import textStyles from '../Text/Text.modules.scss'

/**
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.22.0</span>
 */
const Paragraph = ({ bold, size, align, invert, children, ...rest }, context) => {
  const paragraphColor = invert ? textStyles.invertedColor : textStyles.color

  const classes = `
    ${spacingStyles.noSpacing}
    ${context.inheritColor ? textStyles.inheritColor : paragraphColor}
    ${textStyles[size]}
    ${bold ? textStyles.boldFont : textStyles[`${size}Font`]}
    ${styles[`${align}Align`]}
    `

  return (
    <p {...safeRest(rest)} className={classes}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  /**
   * Embolden paragraph text without conveying any special importance or relevance.
   */
  bold: PropTypes.bool,
  /**
   * Font size.
   */
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  /**
   * Align content.
   */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  /**
   * Invert to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The content. Can be text, other components, or HTML elements.
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

export default Paragraph
