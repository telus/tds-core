import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { boldFont, sup } from '@tds/shared-typography'
import { safeRest } from '@tds/util-helpers'

const StyledStrong = styled.strong(boldFont, { sup })

/**
 * Give portions of a sentence added importance.
 *
 * @version ./package.json
 */
const Strong = ({ children, ...rest }) => (
  <StyledStrong {...safeRest(rest)}>{children}</StyledStrong>
)

Strong.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.node.isRequired,
}

export default Strong
