import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { boldFont } from '@tds/shared-typography'

import safeRest from '../../shared/utils/safeRest'

const StyledStrong = styled.strong(boldFont)

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
