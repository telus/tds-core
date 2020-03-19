import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media } from '@tds/core-responsive'
import { safeRest } from '@tds/util-helpers'
import NavButton from './NavButton/NavButton'
import Item from './Item/Item'
import PageIndicator from './PageIndicator/PageIndicator'

/**
 * @version ./package.json
 */

const CarouselContainer = styled.div({
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
})

const ItemContainer = styled.ul({
  padding: '0 32px',
  ...media.from('md').css({ padding: '0 64px' }),
})

const DecoyContainer = styled.div({
  position: 'absolute',
  padding: '0 32px',
  transform: 'translateX(100%)',
  ...media.from('md').css({ padding: '0 64px' }),
})

const ItemBelt = styled.div({
  display: 'flex',
})

const NavButtonContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
})
const PageIndicatorContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 'auto',
})
const ContentCarousel = ({ children, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = children.length || 1
  return (
    <CarouselContainer {...safeRest(rest)}>
      <ItemBelt>
        <ItemContainer>{children[currentPage - 1] || children}</ItemContainer>
        {children.length && <DecoyContainer>{children[currentPage + 1]}</DecoyContainer>}
      </ItemBelt>
      <NavButtonContainer>
        {currentPage > 1 ? (
          <NavButton
            direction="left"
            onClick={() => {
              setCurrentPage(currentPage - 1)
            }}
          />
        ) : (
          <div />
        )}
        {currentPage !== totalPages && (
          <NavButton
            direction="right"
            onClick={() => {
              setCurrentPage(currentPage + 1)
            }}
          />
        )}
      </NavButtonContainer>
      <PageIndicatorContainer>
        <PageIndicator
          currentPage={currentPage}
          totalPages={totalPages}
          changePage={setCurrentPage}
        />
      </PageIndicatorContainer>
    </CarouselContainer>
  )
}

ContentCarousel.propTypes = {
  children: PropTypes.node.isRequired,
}

ContentCarousel.defaultProps = {}

ContentCarousel.Item = Item
export default ContentCarousel
