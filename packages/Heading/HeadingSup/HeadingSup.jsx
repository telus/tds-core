import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { baseSupSubScripts } from '@tds/shared-typography'
import safeRest from '../../../shared/utils/safeRest'

export const StyledHeadingSup = styled.sup(baseSupSubScripts)

/**
 * Superscript text for `Heading` an as HTML `<sup>` element.
 *
 * _This component can only be accessed as a name-spaced component: `Heading.Sup`._
 */
const HeadingSup = ({ children, ...rest }) => (
  <StyledHeadingSup {...safeRest(rest)}>{children}</StyledHeadingSup>
)

HeadingSup.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired,
}

HeadingSup.displayName = 'Heading.Sup'

export default HeadingSup
