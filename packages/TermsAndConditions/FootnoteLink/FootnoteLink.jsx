import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorText } from '@tds/core-colours'
import A11yContent from '@tds/core-a11y-content'

const copyDict = {
  en: {
    a11yLabel: 'Read legal footnote',
  },
  fr: {
    a11yLabel: 'Lire la note de bas de page légale',
  },
}

const getCopy = copy => {
  if (typeof copy === 'string') {
    return copyDict[copy]
  }
  return copy
}

const StyledFootnoteLink = styled.button({
  backgroundColor: 'transparent',
  border: 0,
  textDecoration: 'underline',
  padding: '0 0.25rem',
  color: colorText,
})

const FootnoteLink = ({ number, onClick, copy }) => {
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
        <sup key={n}>
          <StyledFootnoteLink
            key={numbers[i]}
            ref={refs[i]}
            onClick={() => handleClick(i)}
            data-tds-id="footnote-link"
          >
            <A11yContent>{getCopy(copy).a11yLabel}</A11yContent>
            {`${numbers[i]}${i !== numbers.length - 1 ? ',' : ''}`}
          </StyledFootnoteLink>
        </sup>
      ))}
    </>
  )
}

FootnoteLink.displayName = 'FootnoteLink'

const copyShape = PropTypes.shape({
  a11yLabel: PropTypes.string.isRequired,
})

FootnoteLink.propTypes = {
  /**
   * The terms and conditions UI's language as an ISO language code. Use `en`, `fr` for default copy. If copy needs to be overridden, provide an object with `heading` and `close` properties.
   */
  copy: PropTypes.oneOfType([PropTypes.oneOf(['en', 'fr']), copyShape]).isRequired,
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
