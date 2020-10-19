import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import {
  helveticaNowLight,
  helveticaNowExtraLight,
  helveticaNowMedium,
  wordBreak,
  baseSupSubScripts,
} from '@tds/shared-typography'
import { colorWhite, colorText, colorSecondary } from '@tds/core-colours'
import { media } from '@tds/core-responsive'
import { safeRest } from '@tds/util-helpers'

const HeadingLevels = {
  h1: {
    ...helveticaNowLight,
    fontSize: '1.75rem', // 28px
    lineHeight: '1.285', // 36px
    letterSpacing: '-0.5px',
    ...media.from('md').css({
      ...helveticaNowExtraLight,
      fontSize: '2.75rem', // 44px
      lineHeight: '1.18', // 52px
      letterSpacing: '0px',
    }),
    sup: {
      ...baseSupSubScripts,
      fontSize: '1.25rem',
      top: '-1em',
      ...media.from('md').css({ fontSize: '1.25rem', top: '-1.3em' }),
    },
  },
  h2: {
    ...helveticaNowLight,
    fontSize: '1.5rem', // 24px
    lineHeight: '1.416', // 32px
    letterSpacing: '-0.5px',
    ...media.from('md').css({
      fontSize: '1.75rem', // 28px
      lineHeight: '1.289', // 36px
    }),
    sup: {
      ...baseSupSubScripts,
      fontSize: '1rem',
      top: '-0.8em',
      ...media.from('md').css({ fontSize: '1rem', top: '-0.7em' }),
    },
  },
  h3: {
    ...helveticaNowMedium,
    fontSize: '1.25rem', // 20px
    lineHeight: '1.4', // 28px
    letterSpacing: '0px',
    sup: {
      ...baseSupSubScripts,
      fontSize: '0.875rem',
      top: '-0.5em',
    },
  },
  h4: {
    ...helveticaNowMedium,
    fontSize: '1rem', // 16px
    lineHeight: '1.5', // 24px
    letterSpacing: '0px',
    sup: {
      ...baseSupSubScripts,
      fontSize: '0.875rem',
      top: '-0.5em',
    },
  },
}
export const StyledHeading = styled.h1(wordBreak, ({ level, invert }) => {
  const baseColor = level === 'h1' || level === 'h2' ? colorSecondary : colorText
  const color = invert ? colorWhite : baseColor
  return {
    color,
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
const Heading = forwardRef(({ level, tag = level, invert, children, ...rest }, ref) => {
  return (
    <StyledHeading
      {...safeRest(rest)}
      ref={ref}
      as={tag}
      level={level}
      invert={invert}
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
   * The content. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired,
}
Heading.defaultProps = {
  invert: false,
  tag: undefined,
}

export default Heading
