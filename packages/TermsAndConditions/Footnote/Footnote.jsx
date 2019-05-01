import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFootnote = styled.button({})

const Footnote = React.forwardRef(({ number, onClick }, ref) => {
  const footnoteRef = ref || useRef(null)

  return (
    <>
      <sup>
        <StyledFootnote ref={footnoteRef} onClick={onClick}>
          {number}
        </StyledFootnote>
      </sup>
    </>
  )
})

Footnote.displayName = 'Footnote'

Footnote.propTypes = {
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Footnote
