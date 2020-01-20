import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as typography from '@tds/shared-typography'
import { spacing } from '@tds/shared-styles'
import { safeRest, DependentIconSizeContext } from '@tds/util-helpers'

const paragraphColor = ({ invert }) => (invert ? typography.invertedColor : typography.color)
const paragraphInheritColor = ({ inheritColor }) =>
  inheritColor ? { color: 'inherit' } : undefined

const paragraphSize = ({ size }) => typography[size]
const paragraphBold = ({ bold, size }) => (bold ? typography.boldFont : typography[`${size}Font`])
const paragraphAlign = ({ align }) => ({
  textAlign: align,
})

export const StyledParagraph = styled.p(
  paragraphColor,
  typography.wordBreak,
  spacing.noSpacing,
  paragraphInheritColor,
  paragraphSize,
  paragraphBold,
  paragraphAlign,
  { sup: typography.sup }
)

/**
 * Block text as an HTML `<p>` element.
 *
 * @version ./package.json
 */
const Paragraph = ({ size, invert, children, ...rest }, context) => {
  return (
    <DependentIconSizeContext.Provider value={{ paragraphSize: size, invert }}>
      <StyledParagraph
        {...safeRest(rest)}
        size={size}
        invert={invert}
        inheritColor={context.inheritColor}
      >
        {children}
      </StyledParagraph>
    </DependentIconSizeContext.Provider>
  )
}

Paragraph.propTypes = {
  /**
   * Embolden paragraph text without conveying any special importance or relevance.
   */
  bold: PropTypes.bool,
  /**
   * The font size.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Content alignment.
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The content. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired,
}

Paragraph.defaultProps = {
  bold: false,
  size: 'medium',
  align: 'left',
  invert: false,
}

Paragraph.contextTypes = {
  inheritColor: PropTypes.bool,
}

export default Paragraph
