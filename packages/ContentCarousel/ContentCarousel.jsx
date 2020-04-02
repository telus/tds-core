import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import anime from 'animejs'
import { useDrag } from 'react-use-gesture'

import { media } from '@tds/core-responsive'
import { safeRest, getCopy } from '@tds/util-helpers'
import NavButton from './NavButton/NavButton'
import Item from './Item/Item'
import PageIndicator from './PageIndicator/PageIndicator'

import carouselText from './carouselText'

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
  padding: '0 1.5rem',
  ...media.from('md').css({ padding: '0 4rem' }),
})

const DecoyContainer = styled.div(({ position }) => ({
  position: 'absolute',
  padding: '0 1.5rem',
  transform: position === 'right' ? 'translateX(100%)' : 'translateX(-100%)',
  backgroundColor: 'white',
  ...media.from('md').css({ padding: '0 4rem' }),
}))

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
  padding: '0 5px',
})
const PageIndicatorContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 'auto',
})
const ContentCarousel = ({ copy, children, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = (children && children.length) || 1

  const switchPages = increment => {
    setCurrentPage(currentPage + increment)
  }

  const handleSlideTransition = (direction, increment) => {
    const decoyRight = document.getElementById('decoyRight')
    const decoyLeft = document.getElementById('decoyLeft')
    const itemContainer = document.getElementById('itemContainer')

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      const tl = anime.timeline({ duration: 400, easing: 'cubicBezier(0.8, 0, 0.55, 0.94)' })
      tl.add({
        targets: itemContainer,
        opacity: 0,
        complete: () => {
          switchPages(increment || (direction === 'left' ? 1 : -1))
        },
      }).add({
        targets: itemContainer,
        opacity: 1,
      })
    } else if (anime.running.length === 0) {
      const tl = anime.timeline({ duration: 602, easing: 'cubicBezier(0.8, 0, 0.55, 0.94)' })

      tl.add({
        targets: itemContainer,
        translateX: direction === 'right' ? ['0%', '100%'] : ['0%', '-100%'],
      })
        .add(
          {
            targets: direction === 'left' ? decoyRight : decoyLeft,
            translateX: direction === 'left' ? ['100%', '0%'] : ['-100%', '0%'],
            duration: 600,
            complete: () => {
              switchPages(increment || (direction === 'left' ? 1 : -1))
            },
          },
          0
        )
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
    }
  }

  const handleSlideSkip = increment => {
    const itemBelt = document.getElementById('itemBelt')
    const decoyRight = document.getElementById('decoyRight')
    const decoyLeft = document.getElementById('decoyLeft')

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      const tl = anime.timeline({ duration: 400, easing: 'cubicBezier(0.8, 0, 0.55, 0.94)' })
      tl.add({
        targets: itemBelt,
        opacity: 0,
        complete: () => {
          switchPages(increment)
        },
      }).add({
        targets: itemBelt,
        opacity: 1,
      })
    } else if (anime.running.length === 0) {
      if (increment > 1 || increment < -1) {
        const tl = anime.timeline({ duration: 400, easing: 'cubicBezier(0.8, 0, 0.55, 0.94)' })
        tl.add({ targets: [decoyRight, decoyLeft], opacity: 0, duration: 1 })
          .add({
            targets: itemBelt,
            filter: 'blur(18px)',
            translateX: increment > 0 ? '-100%' : '100%',
            complete: () => {
              switchPages(increment)
            },
          })
          .add({ targets: itemBelt, translateX: increment > 0 ? '100%' : '-100%', duration: 1 })
          .add({
            targets: itemBelt,
            filter: 'blur(0px)',
            translateX: '0%',
          })
          .add({ targets: [decoyRight, decoyLeft], opacity: 1 })
      } else {
        handleSlideTransition(increment < 1 ? 'right' : 'left', increment)
      }
    }
  }

  const handleSwipeGesture = useDrag(
    ({ dragging, movement, event }) => {
      if (dragging) {
        document.body.ontouchmove = e => {
          e.preventDefault()
          return false
        }
      }
      if (!dragging && event.type === 'touchend') {
        document.body.ontouchmove = () => {}
        if (movement[0] < 0 && currentPage < totalPages) {
          handleSlideTransition('left', 1)
        } else if (movement[0] > 0 && currentPage > 1) {
          handleSlideTransition('right', -1)
        }
      }
    },
    { filterTaps: true, axis: 'x', threshold: 100 }
  )

  const preloadImage = url => {
    const img = new Image()
    img.src = url
  }

  const findImages = () => {
    for (let i = 0; i < (children.length || 0); i += 1) {
      preloadImage(children[i].props.picture.props.src)
    }
  }

  useEffect(() => {
    findImages()
  })

  return (
    <CarouselContainer {...safeRest(rest)}>
      <ItemBelt id="itemBelt" {...handleSwipeGesture()}>
        <DecoyContainer position="left" id="decoyLeft" aria-hidden={true}>
          {(children && children[currentPage - 2]) || ''}
        </DecoyContainer>
        <ItemContainer id="itemContainer" data-testid="itemContainer">
          {(children && children[currentPage - 1]) || ''}
        </ItemContainer>
        <DecoyContainer position="right" id="decoyRight" aria-hidden={true}>
          {(children && children[currentPage]) || ''}
        </DecoyContainer>
      </ItemBelt>
      <NavButtonContainer>
        {currentPage > 1 ? (
          <NavButton
            direction="left"
            onClick={() => {
              handleSlideTransition('right')
            }}
            aria-label={getCopy(carouselText, copy).prevNavButton}
          />
        ) : (
          <div />
        )}
        {currentPage !== totalPages && (
          <NavButton
            direction="right"
            onClick={() => {
              handleSlideTransition('left')
            }}
            aria-label={getCopy(carouselText, copy).nextNavButton}
          />
        )}
      </NavButtonContainer>
      <PageIndicatorContainer>
        <PageIndicator
          currentPage={currentPage}
          totalPages={totalPages}
          changePage={setCurrentPage}
          handleSlideSkip={handleSlideSkip}
          copy={copy}
        />
      </PageIndicatorContainer>
    </CarouselContainer>
  )
}

ContentCarousel.propTypes = {
  /**
   * The carousel's style.
   */
  variant: PropTypes.oneOf(['open']),
  /**
   * Use the copy prop to either select provided English or French copy
   * by passing `'en'` or `'fr'` respectively.
   *
   * To provide your own, pass a JSON object.
   */
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
  children: PropTypes.node.isRequired,
}

ContentCarousel.defaultProps = { variant: 'open' }

ContentCarousel.Item = Item
export default ContentCarousel
