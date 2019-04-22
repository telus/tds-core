import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

const A11yContent = ({ children }) => {
  return <StyledA11yContent>{children}</StyledA11yContent>
}

A11yContent.propTypes = {
  /**
   * Accessible content.
   */
  children: PropTypes.string.isRequired,
}
A11yContent.defaultProps = {}

export default A11yContent
