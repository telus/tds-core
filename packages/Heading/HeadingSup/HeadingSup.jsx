/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../shared/utils/safeRest'
import { typography } from '../../../shared/styles/Typography/typography'

/**
 * Superscript text for `Heading` an as HTML `<sup>` element.
 *
 * _This component can only be accessed as a name-spaced component: `Heading.Sup`._
 */
const HeadingSup = ({ children, ...rest }) => (
  <sup css={{...typography.baseSupSubScripts}} {...safeRest(rest)}>
    {children}
  </sup>
)

HeadingSup.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired,
}

HeadingSup.displayName = 'Heading.Sup'

/** @component */
export default HeadingSup
