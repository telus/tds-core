import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import safeRest from '../../shared/utils/safeRest'

const StyledA11yContent = styled.span({
  position: 'absolute',
  height: '1px',
  width: '1px',
  overflow: 'hidden',
  clip: 'rect(1px, 1px, 1px, 1px)',
})

/**
 * @version ./package.json
 */

const A11yContent = ({ children, ...rest }) => {
  return <StyledA11yContent {...safeRest(rest)}>{children}</StyledA11yContent>
}

A11yContent.propTypes = {
  /**
   * Accessible content.
   */
  children: PropTypes.string.isRequired,
}
A11yContent.defaultProps = {}

export default A11yContent
