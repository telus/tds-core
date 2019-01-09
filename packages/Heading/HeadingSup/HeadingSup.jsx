import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import safeRest from '../../../shared/utils/safeRest'

import { typography } from '../../../shared/styles/Typography/typography'

/**
 * Superscript text for `Heading` an as HTML `<sup>` element.
 *
 * _This component can only be accessed as a name-spaced component: `Heading.Sup`._
 */

const StyledSup = styled.sup({
  ...typography.baseSupSubScripts,
})
const HeadingSup = ({ children, ...rest }) => <StyledSup {...safeRest(rest)}>{children}</StyledSup>

HeadingSup.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired,
}

HeadingSup.displayName = 'Heading.Sup'

export default HeadingSup
