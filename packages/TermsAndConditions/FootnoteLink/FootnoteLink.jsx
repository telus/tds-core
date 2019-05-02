import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { helveticaNeueThin35 } from '@tds/shared-typography'

const StyledFootnoteSup = styled.sup({
  ...helveticaNeueThin35,
  top: '-0.5rem',
  position: 'relative',
  fontSize: '0.75rem',
  letterSpacing: '0.46',
})

const StyledFootnoteLink = styled.button({
  backgroundColor: 'transparent',
  border: 0,
  textDecoration: 'underline',
  padding: '0',
  margin: '0 0 0 0.5rem',
})

const FootnoteLink = ({ number, onClick }) => {
  let numbers = []
  const refs = []

  if (!Array.isArray(number)) {
    numbers[0] = number
  } else {
    numbers = number
  }

  numbers.forEach(() => {
    refs.push(useRef(null))
  })

  const handleClick = index => {
    onClick(numbers[index], refs[index])
  }

  return (
    <>
      {numbers.map((n, i) => (
        <StyledFootnoteSup key={n}>
          <StyledFootnoteLink
            key={numbers[i]}
            ref={refs[i]}
            onClick={() => handleClick(i)}
            data-tds-id="footnote-link"
          >
            {numbers[i]}
          </StyledFootnoteLink>
          {i !== numbers.length - 1 ? ',' : ''}
        </StyledFootnoteSup>
      ))}
    </>
  )
}

FootnoteLink.displayName = 'FootnoteLink'

FootnoteLink.propTypes = {
  /**
   * The number or numbers, if passed an array, a superscript will be created for each number.
   */
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]).isRequired,
  /**
   * A callback function to handle the click of a FootnoteLink
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onClick: PropTypes.func.isRequired,
}

export default FootnoteLink
