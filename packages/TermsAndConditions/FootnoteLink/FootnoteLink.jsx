import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFootnoteLink = styled.button({})

const FootnoteLink = React.forwardRef(({ number, onClick }, ref) => {
  const footnoteLinkRef = ref || useRef(null)

  return (
    <>
      <sup>
        <StyledFootnoteLink ref={footnoteLinkRef} onClick={onClick}>
          {number}
        </StyledFootnoteLink>
      </sup>
    </>
  )
})

FootnoteLink.displayName = 'FootnoteLink'

FootnoteLink.propTypes = {
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default FootnoteLink
