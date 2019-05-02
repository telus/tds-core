import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { sizeSmall, helveticaNeueThin35 } from '@tds/shared-typography'

const StyledFootnoteSup = styled.sup({
  ...sizeSmall,
  ...helveticaNeueThin35,
  top: '-0.5rem',
  position: 'relative',
})

const StyledFootnoteLink = styled.button({
  backgroundColor: 'transparent',
  border: 0,
  textDecoration: 'underline',
  paddingLeft: '0 0 0 0.5rem',
})

const FootnoteLink = React.forwardRef(({ number, onClick }, ref) => {
  const footnoteLinkRef = ref || useRef(null)

  return (
    <StyledFootnoteSup>
      <StyledFootnoteLink ref={footnoteLinkRef} onClick={onClick} data-tds-id="footnote-link">
        {number}
      </StyledFootnoteLink>
    </StyledFootnoteSup>
  )
})

FootnoteLink.displayName = 'FootnoteLink'

FootnoteLink.propTypes = {
  /**
   * The number
   */
  number: PropTypes.number.isRequired,
  /**
   * A callback function to handle the click of a FootnoteLink
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onClick: PropTypes.func.isRequired,
}

export default FootnoteLink
