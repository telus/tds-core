import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { baseSupSubScripts } from '@tds/shared-typography'
import { media } from '@tds/core-responsive'
import safeRest from '../../../shared/utils/safeRest'

const StyledDisplayHeadingSup = styled.sup(baseSupSubScripts, {
  fontSize: '1.25rem',
  top: '-1.2em',
  ...media.from('md').css({
    top: '-2.2em',
  }),
})

/**
 * Superscript text for `DisplayHeading` an as HTML `<sup>` element.
 *
 * _This component can only be accessed as a name-spaced component: `DisplayHeading.Sup`._
 */
const DisplayHeadingSup = ({ children, ...rest }) => (
  <StyledDisplayHeadingSup {...safeRest(rest)}>{children}</StyledDisplayHeadingSup>
)

DisplayHeadingSup.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired,
}

DisplayHeadingSup.displayName = 'DisplayHeading.Sup'

export default DisplayHeadingSup
