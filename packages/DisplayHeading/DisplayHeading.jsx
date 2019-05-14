import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '@tds/shared-styles'
import { helveticaNeueThin35, wordBreak, baseSupSubScripts } from '@tds/shared-typography'
import { colorWhite, colorSecondary } from '@tds/core-colours'
import { media } from '@tds/core-responsive'

import safeRest from '../../shared/utils/safeRest'

import DisplayHeadingSup from './DisplayHeadingSup/DisplayHeadingSup'

const StyledDisplayHeading = styled.h1(
  spacing.noSpacing,
  wordBreak,
  helveticaNeueThin35,
  ({ invert }) => ({
    color: invert ? colorWhite : colorSecondary,
    fontSize: '2.75rem',
    lineHeight: 1.14,
    ...media.from('md').css({
      fontSize: '4.5rem',
      lineHeight: '1.11',
      letterSpacing: '0.2px',
    }),
  }),
  {
    sup: {
      ...baseSupSubScripts,
      fontSize: '1.25rem',
      top: '-1.2em',
      ...media.from('md').css({
        top: '-2.2em',
      }),
    },
  }
)

/**
 * Large page titles. Renders an HTML `<h1>` element.
 *
 * @version ./package.json
 */
const DisplayHeading = ({ invert, children, ...rest }) => (
  <StyledDisplayHeading {...safeRest(rest)} invert={invert}>
    {children}
  </StyledDisplayHeading>
)

DisplayHeading.propTypes = {
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The text. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired,
}

DisplayHeading.defaultProps = {
  invert: false,
}

DisplayHeading.Sup = DisplayHeadingSup

export default DisplayHeading
