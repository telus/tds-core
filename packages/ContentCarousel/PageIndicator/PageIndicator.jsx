import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { safeRest } from '@tds/util-helpers'
import { colorWhite, colorGreyRaven } from '@tds/core-colours'

/**
 * @version ./package.json
 */

const IndicatorContainer = styled.div({ margin: 'auto' })
const PageDot = ({ isCurrentPage, onClick }) => {
  const Dot = styled.button({
    width: 12,
    height: 12,
    borderRadius: '50%',
    border: `1px solid ${colorGreyRaven}`,
    backgroundColor: colorWhite,
    appearance: 'none',
    padding: 0,
    margin: '0 8px',
    transformOrigin: 'bottom',
    '&:hover': {
      transform: 'scale(1.3)',
      border: `3px solid ${colorGreyRaven}`,
    },
    [`:focus, :active`]: {
      transform: 'scale(1)',
      border: `1px solid ${colorGreyRaven}`,
      backgroundColor: colorGreyRaven,
    },
    ...(isCurrentPage && {
      transform: 'scale(1)',
      border: `1px solid ${colorGreyRaven}`,
      backgroundColor: colorGreyRaven,
    }),
  })
  return <Dot onClick={onClick} isCurrentPage={isCurrentPage} aria-current={isCurrentPage} />
}

const PageIndicator = ({ currentPage, totalPages, changePage, handleSlideTransition, ...rest }) => {
  const generateDots = () => {
    const dots = []
    for (let i = 0; i < totalPages; i += 1) {
      dots.push(
        <PageDot
          isCurrentPage={currentPage === i + 1}
          onClick={() => {
            console.log(i + 1)
            if (currentPage > i + 1) {
              handleSlideTransition('right', (i + 1) - currentPage) // Seems like it's not updating properly between transitions?
            }
            else if (currentPage < i + 1) {
              handleSlideTransition('left', i)
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
  handleSlideTransition: PropTypes.func.isRequired,
}

PageIndicator.defaultProps = {}

PageDot.propTypes = {
  isCurrentPage: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PageIndicator
