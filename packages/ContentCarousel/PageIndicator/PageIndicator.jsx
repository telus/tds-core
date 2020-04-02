import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { safeRest, getCopy } from '@tds/util-helpers'
import { colorWhite, colorGreyRaven } from '@tds/core-colours'

import carouselText from '../carouselText'

/**
 * @version ./package.json
 */

const IndicatorContainer = styled.div({
  margin: 'auto',
  paddingBottom: 2,
  backgroundColor: colorWhite,
})

const Dot = styled.button(({ isCurrentPage }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  position: 'relative',
  border: `1px solid ${colorGreyRaven}`,
  backgroundColor: colorWhite,
  appearance: 'none',
  padding: 0,
  margin: '0 8px',
  outline: 'none',
  '&:focus': {
    '& div': { opacity: 1 },
  },
  '&:hover': {
    transform: 'scale(1.3)',
    border: `3px solid ${colorGreyRaven}`,
    '& div': { opacity: 0 },
    transformOrigin: 'bottom',
  },
  '&:active': {
    transform: 'scale(1)',
    border: `1px solid ${colorGreyRaven}`,
    backgroundColor: colorGreyRaven,
  },
  ...(isCurrentPage && {
    transform: 'scale(1)',
    border: `1px solid ${colorGreyRaven}`,
    backgroundColor: colorGreyRaven,
  }),
}))

const FocusOutline = styled.div({
  width: '1.125rem',
  height: '1.125rem',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  transformOrigin: 'bottom',
  border: `2px solid ${colorGreyRaven}`,
  borderRadius: '50%',
  opacity: 0,
})

const PageDot = ({ isCurrentPage, pageNumber, copy, onClick }) => {
  return (
    <Dot
      onClick={onClick}
      isCurrentPage={isCurrentPage}
      aria-current={isCurrentPage}
      aria-label={`${getCopy(carouselText, copy).goto} ${
        getCopy(carouselText, copy).slide
      } ${pageNumber}`}
      data-testid="pageDot"
    >
      <FocusOutline />
    </Dot>
  )
}

const PageIndicator = ({ currentPage, totalPages, changePage, handleSlideSkip, copy, ...rest }) => {
  const generateDots = () => {
    const dots = []
    for (let i = 0; i < totalPages; i += 1) {
      dots.push(
        <PageDot
          isCurrentPage={currentPage === i + 1}
          pageNumber={i + 1}
          copy={copy}
          onClick={() => {
            if (currentPage > i + 1) {
              handleSlideSkip(i + 1 - currentPage)
            } else if (currentPage < i + 1) {
              handleSlideSkip(i - (currentPage - 1))
            }
          }}
          key={i}
        />
      )
    }
    return dots
  }

  return <IndicatorContainer {...safeRest(rest)}>{generateDots()}</IndicatorContainer>
}

PageIndicator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  handleSlideSkip: PropTypes.func.isRequired,
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      prevNavButton: PropTypes.string.isRequired,
      nextNavButton: PropTypes.string.isRequired,
      slide: PropTypes.string.isRequired,
      of: PropTypes.string.isRequired,
      goto: PropTypes.string.isRequired,
    }),
  ]).isRequired,
}

PageIndicator.defaultProps = {}

PageDot.propTypes = {
  isCurrentPage: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      prevNavButton: PropTypes.string.isRequired,
      nextNavButton: PropTypes.string.isRequired,
      slide: PropTypes.string.isRequired,
      of: PropTypes.string.isRequired,
      goto: PropTypes.string.isRequired,
    }),
  ]).isRequired,
}

export default PageIndicator
