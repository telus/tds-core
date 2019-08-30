import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { small, smallFont, sup } from '@tds/shared-typography'
import { safeRest } from '@tds/util-helpers'

const StyledSmall = styled.small(small, smallFont, { sup })

/**
 * Small print, such as copyright and legal text.
 *
 * @version ./package.json
 */
const Small = ({ children, ...rest }) => <StyledSmall {...safeRest(rest)}>{children}</StyledSmall>

Small.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired,
}

export default Small
