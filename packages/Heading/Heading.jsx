import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { typography } from '../../shared/styles/Typography/typography'
import { breakpoints } from '@tds/core-responsive/breakpoints.js'
import colors from '../../shared/utils/colors'
import safeRest from '../../shared/utils/safeRest'

import HeadingSup from './HeadingSup/HeadingSup'

const h1Styles = {
  ...typography.wordBreak,
  padding: 0,
  margin: 0,

  ...typography.helveticaNeueLight45,
  color: colors.tokens.secondary,

  fontSize: '1.75rem',
  lineHeight: 1.29,
  letterSpacing: -1.6,
  sup: {
    fontSize: '1.25rem',
    top: '-1em',
  },

  [`@media (min-width: ${breakpoints.md}px)`]: {
    ...typography.helveticaNeueThin35,
    fontSize: '2.75rem',
    lineHeight: 1.18,
    letterSpacing: 0,
    sup: {
      fontSize: '1.25rem',
      top: '-1.3em',
    },
  },
}

const h2Styles = {
  ...typography.wordBreak,
  padding: 0,
  margin: 0,

  ...typography.helveticaNeueLight45,
  color: colors.tokens.secondary,

  fontSize: '1.5rem',
  lineHeight: 1.33,
  letterSpacing: -0.7,
  sup: {
    fontSize: '1rem',
    top: '-0.8em',
  },

  [`@media (min-width: ${breakpoints.md}px)`]: {
    ...typography.helveticaNeueThin35,
    fontSize: '1.75rem',
    lineHeight: 1.29,
    letterSpacing: -0.8,
    sup: {
      fontSize: '1rem',
      top: '-0.7em',
    },
  },
}

const smallHeading = {
  ...typography.wordBreak,
  ...typography.helveticaNeueMedium65,
  padding: 0,
  margin: 0,
  letterSpacing: -0.6,
  color: colors.typography.text,
  sup: {
    fontSize: '0.875rem',
    top: '-0.5em',
  },
}

const h3Styles = {
  ...smallHeading,
  fontSize: '1.25rem',
  lineHeight: 1.4,
}

const h4Styles = {
  ...smallHeading,
  fontSize: '1rem',
  lineHeight: 1.25,
}

const StyledHeadingTag = styled.span(props => ({
  ...(props.level === 'h1' && h1Styles),
  ...(props.level === 'h2' && h2Styles),
  ...(props.level === 'h3' && h3Styles),
  ...(props.level === 'h4' && h4Styles),
  ...(props.invert && { color: colors.white }),
}))

/**
 * Page headings. Renders an HTML `<h1-h4>` element.
 *
 * @version ./package.json
 */
const Heading = ({ level, tag = level, invert, children, ...rest }) => {
  return (
    <StyledHeadingTag {...safeRest(rest)} as={tag} level={level} invert={invert}>
      {children}
    </StyledHeadingTag>
  )
}

Heading.propTypes = {
  /**
   * The visual level of the heading. If `tag` is not specified, then `level` determines what HTML element to render.
   */
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  /**
   * The semantic level of the heading. Renders the specified HTML element, otherwise it matches `level`.
   */
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The content. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired,
}
Heading.defaultProps = {
  invert: false,
  tag: undefined,
}

Heading.Sup = HeadingSup

export default Heading
