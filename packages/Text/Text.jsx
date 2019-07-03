import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as typography from '@tds/shared-typography'

import safeRest from '../../shared/utils/safeRest'

import TextSup from './TextSup/TextSup'

const textColor = ({ invert }) => (invert ? typography.invertedColor : typography.color)
const textInheritColor = ({ inheritColor }) => (inheritColor ? { color: 'inherit' } : undefined)
const textSize = ({ size }) => typography[size]
const textBold = ({ bold, size }) => (bold ? typography.boldFont : typography[`${size}Font`])
const textBlock = ({ block }) => (block ? typography.blockText : undefined)

export const StyledText = styled.span(textColor, textInheritColor, textSize, textBold, textBlock, {
  sup: typography.sup,
})

/**
 * Inline text usually as an HTML `<span>` element.
 *
 * @version ./package.json
 */
const Text = ({ children, ...rest }, context) => (
  <StyledText {...safeRest(rest)} inheritColor={context.inheritColor}>
    {children}
  </StyledText>
)

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
