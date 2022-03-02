import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import {
  helveticaNeueLight45,
  helveticaNeueThin35,
  helveticaNeueMedium65,
  wordBreak,
  baseSupSubScripts,
} from '@tds/shared-typography'
import { colorWhite, colorText, colorSecondary, colorGreyRaven } from '@tds/core-colours'
import { media } from '@tds/core-responsive'
import { safeRest } from '@tds/util-helpers'

const HeadingLevels = {
  h1: {
    ...helveticaNeueLight45,
    fontSize: '1.75rem',
    lineHeight: '1.29', // 36px
    letterSpacing: '-1.6px',
    ...media.from('md').css({
      ...helveticaNeueThin35,
      fontSize: '2.75rem',
      lineHeight: '1.18',
      letterSpacing: '0',
    }),
    sup: {
      ...baseSupSubScripts,
      fontSize: '1.25rem',
      top: '-1em',
      ...media.from('md').css({ fontSize: '1.25rem', top: '-1.3em' }),
    },
  },
  h2: {
    ...helveticaNeueLight45,
    fontSize: '1.5rem',
    lineHeight: '1.33', // 30px
    letterSpacing: '-0.7px',
    ...media.from('md').css({
      fontSize: '1.75rem',
      lineHeight: '1.29',
      letterSpacing: '-0.8px',
    }),
    sup: {
      ...baseSupSubScripts,
      fontSize: '1rem',
      top: '-0.8em',
      ...media.from('md').css({ fontSize: '1rem', top: '-0.7em' }),
    },
  },
  h3: {
    fontSize: '1.25rem',
    lineHeight: '1.4', // 28px
    letterSpacing: '-0.6px',
    sup: {
      ...baseSupSubScripts,
      fontSize: '0.875rem',
      top: '-0.5em',
    },
  },
  h4: {
    ...helveticaNeueMedium65,
    fontSize: '1rem',
    lineHeight: '1.25', // 20px
    letterSpacing: '-0.6px',
    sup: {
      ...baseSupSubScripts,
      fontSize: '0.875rem',
      top: '-0.5em',
    },
  },
}
export const StyledHeading = styled.h1(wordBreak, ({ level, tag, invert, light }) => {
  const baseColor = level === 'h1' || level === 'h2' ? colorSecondary : colorText
  // eslint-disable-next-line no-nested-ternary
  const color = invert
    ? colorWhite
    : level === 'h3' && light && tag === 'h3'
    ? colorGreyRaven
    : baseColor
  const fontWeight =
    level === 'h3' && light && tag === 'h3'
      ? helveticaNeueLight45.fontWeight
      : helveticaNeueMedium65.fontWeight
  return {
    color,
    fontWeight,
    ...HeadingLevels[`${level}`],
    '& > span': {
      letterSpacing: 'inherit',
    },
  }
})

/**
 * Page headings. Renders an HTML `<h1-h4>` element.
 *
 * @version ./package.json
 */
const Heading = forwardRef(({ level, tag = level, invert, light, children, ...rest }, ref) => {
  return (
    <StyledHeading
      {...safeRest(rest)}
      ref={ref}
      as={tag}
      level={level}
      invert={invert}
      light={light}
      tag={tag}
      data-testid="heading"
    >
      {children}
    </StyledHeading>
  )
})

Heading.displayName = 'Heading'

Heading.propTypes = {
  /**
   * The visual level of the heading. If `tag` is not specified, then `level` determines what HTML element to render.
   */
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  /**
   * The semantic level of the heading. Renders the specified HTML element, otherwise it matches `level`.
   */
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'div', 'span']),
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * Apply a light text color on the h3 tags.
   */
  light: PropTypes.bool,
  /**
   * The content. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired,
}
Heading.defaultProps = {
  invert: false,
  tag: undefined,
  light: false,
}

export default Heading
