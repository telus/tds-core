import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { baseSupSubScripts } from '@tds/shared-typography'

import { deprecate } from '../../../shared/utils/warn'
import safeRest from '../../../shared/utils/safeRest'

export const StyledHeadingSup = styled.sup(baseSupSubScripts)

/**
 * @deprecated Superscript text for `Heading` an as HTML `<sup>` element.
 *
 * _This component can only be accessed as a name-spaced component: `Heading.Sup`._
 */
const HeadingSup = ({ children, ...rest }) => {
  deprecate(
    '@tds/core-heading',
    'The Heading.Sup component is deprecated. Please use a standard HTML sup element instead.'
  )
  return <StyledHeadingSup {...safeRest(rest)}>{children}</StyledHeadingSup>
}

HeadingSup.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired,
}

HeadingSup.displayName = 'Heading.Sup'

export default HeadingSup
