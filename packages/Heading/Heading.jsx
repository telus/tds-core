/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'
import { typography } from '../../shared/styles/Typography/typography'
import { breakpoints } from '@tds/core-responsive/breakpoints'
import { colours } from '@tds/core-colours/colours'

import HeadingSup from './HeadingSup/HeadingSup'


const getClassNames = (invert, level) => {
  const style = {
    default: {
      color: colours.colorText
    },
    secondary: {
      color: colours.colorSecondary
    },
    inverted: {
      color: colours.colorWhite
    },
  }
  if (invert) {
    return style.inverted
  }
  if (level === 'h1' || level === 'h2') {
    return style.secondary
  }
  return style.default
}

/**
 * Page headings. Renders an HTML `<h1-h4>` element.
 *
 * @version ./package.json
 */
const Heading = ({ level, tag = level, invert, children, ...rest }) => {
  const smallHeading = {
    ...typography.wordBreak,
    padding: 0,
    margin: 0,
    ...typography.helveticaNeueMedium65,
    letterSpacing: '-0.6px'
  }

  const style = {
    h1: {
      ...typography.wordBreak,
      padding: 0,
      margin: 0,
      ...typography.helveticaNeueLight45,
      fontSize: '1.75rem',
      lineHeight: '1.29', // 36px
      letterSpacing: '-1.6px',
      sup: {
        fontSize: '1.25rem',
        top: '-1em'
      },
      [`@media only screen and (min-width: ${breakpoints.md}px)`]: {
        ...typography.helveticaNeueThin35,
        fontSize: '2.75rem',
        lineHeight: '1.18', // 52px
        letterSpacing: 0,
        sup: {
          fontSize: '1.25rem',
          top: '-1.3em',
        }
      }
    },
    h2: {
      ...typography.wordBreak,
      padding: 0,
      margin: 0,
      ...typography.helveticaNeueLight45,
      fontSize: '1.5rem',
      lineHeight: 1.33, // 30px
      letterSpacing: '-0.7px',
      sup: {
        fontSize: '1rem',
        top: '-0.7em',
      },
      [`@media only screen and (min-width: ${breakpoints.md}px)`]: {
        fontSize: '1.75rem',
        lineHeight: '1.29', // 36px
        letterSpacing: '-0.8px',
        sup: {
          fontSize: '1rem',
          top: '-0.7em',
        }
      }
    },
    h3: {
      ...smallHeading,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      sup: {
        fontSize: '0.875rem',
        top: '-0.5rem'
      }
    },
    h4: {
      ...smallHeading,
      fontSize: '1rem',
      lineHeight: 1.25,
      sup: {
        fontSize: '0.875rem',
        top: '-0.5em'
      }
    }
  }
  return jsx(
    tag,
    {
      ...safeRest(rest),
      css: [style[level], getClassNames(invert, level)]
    },
    children
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

/** @component */
export default Heading
