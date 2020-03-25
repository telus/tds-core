import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import anime from 'animejs'
// import { useDrag } from 'react-use-gesture'

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
  backgroundColor: 'white',
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
  padding: '0 5px'
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

  const switchPages = increment => {
    setCurrentPage(currentPage + increment)
  }

  const handleSlideTransition = (direction, increment) => {
    const decoyRight = document.getElementById('decoyRight')
    const decoyLeft = document.getElementById('decoyLeft')
    const itemBelt = document.getElementById('itemBelt')
    const itemContainer = document.getElementById('itemContainer')

    const tl = anime.timeline({ duration: 602, easing: 'cubicBezier(0.8, 0, 0.55, 0.94)' })

    tl.add({
      targets: itemContainer,
      translateX: direction === 'right' ? ['0%', '100%'] : ['0%', '-100%'],
    })
      .add({
        targets: direction === 'left' ? decoyRight : decoyLeft,
        translateX: direction === 'left' ? ['100%', '0%'] : ['-100%', '0%'],
        duration: 600,
        complete: () => {
          console.log(increment)
          switchPages(increment || (direction === 'left' ? 1 : -1))
        },
      }, 0)
      .add({
        targets: itemContainer,
        translateX: '0%',
        duration: 1,
      })
      .add({
        targets: direction === 'left' ? decoyRight : decoyLeft,
        opacity: 0,
        duration: 1,
      })
      .add({
        targets: direction === 'left' ? decoyRight : decoyLeft,
        translateX: '100%',
        opacity: 1,
        duration: 1,
      })

    if (increment > 1 || increment < -1) {
      tl.add({
        targets: itemBelt,
        filter: 'blur(5px)',
        duration: 200,
      }, 100).add({
        targets: itemBelt,
        filter: 'blur(0px)'
      }, 600)
    }
  }

  return (
    <CarouselContainer {...safeRest(rest)}>
      <ItemBelt id="itemBelt">
        <ItemContainer id="itemContainer">{children[currentPage - 1] || children}</ItemContainer>
        {children[currentPage - 1] && (
          <DecoyContainer id="decoyRight">{children[currentPage]}</DecoyContainer>
        )}
        {children[currentPage - 2] && (
          <DecoyContainer id="decoyLeft">{children[currentPage - 2]}</DecoyContainer>
        )}
      </ItemBelt>
      <NavButtonContainer>
        {currentPage > 1 ? (
          <NavButton
            direction="left"
            onClick={() => {
              if (anime.running.length === 0) {
                handleSlideTransition('right')
              }
            }}
          />
        ) : (
            <div />
          )}
        {currentPage !== totalPages && (
          <NavButton
            direction="right"
            onClick={() => {
              if (anime.running.length === 0) {
                handleSlideTransition('left')
              }
            }}
          />
        )}
      </NavButtonContainer>
      <PageIndicatorContainer>
        <PageIndicator
          currentPage={currentPage}
          totalPages={totalPages}
          changePage={setCurrentPage}
          handleSlideTransition={handleSlideTransition}
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
