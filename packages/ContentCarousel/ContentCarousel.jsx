import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import anime from 'animejs'
import { useDrag } from 'react-use-gesture'

import { media, breakpoints } from '@tds/core-responsive'
import { safeRest, getCopy } from '@tds/util-helpers'
import NavButton from './NavButton/NavButton'
import Item from './Item/Item'
import PageIndicator from './PageIndicator/PageIndicator'

import carouselText from './carouselText'

/**
 * @version ./package.json
 */

const CarouselContainer = styled.div(({ tallestHeight }) => ({
  width: '100%',
  height: `calc(${tallestHeight}px + 3rem)`,
  position: 'relative',
  overflow: 'hidden',
  ...media
    .from('md')
    .until('xl')
    .css({ height: `calc(${tallestHeight}px + 3rem)` }),
  ...media
    .from('sm')
    .until('md')
    .css({ height: `calc(${tallestHeight}px + 2rem)` }),
}))

const ItemContainer = styled.ul(({ variant }) => ({
  width: variant === 'open' ? '100%' : '70%',
  padding: variant === 'open' ? '0 2rem' : '0 0.5rem',
  zIndex: 101,
  position: 'relative',
  ...media
    .from('md')
    .css({ width: '100%', padding: variant === 'open' ? '0 4rem' : '0 1.8125rem' }),
}))

const DecoyContainer = styled.div(({ position, offset, variant }) => ({
  width: variant === 'open' ? '100%' : '70%',
  position: 'absolute',
  zIndex: 100 - offset,
  padding: variant === 'open' ? '0 2rem' : '0 0.5rem',
  transform:
    position === 'right'
      ? `translateX(${100 + 30 * offset}%)`
      : `translateX(-${100 + 30 * offset}%)`,
  backgroundColor: 'white',
  opacity: variant === 'card' && 1,
  ...media.from('md').css({
    width: '100%',
    padding: variant === 'open' ? '0 4rem' : '0 1.8125rem',
    opacity: variant === 'card' && offset !== 0 && 0,
  }),
}))

const ItemBelt = styled.div(({ variant, heightBelt }) => ({
  display: 'flex',
  ...(variant === 'card' &&
    !heightBelt && { position: 'relative', left: '50%', transform: 'translateX(-33%)' }),
  ...(heightBelt && {
    width: '100%',
    position: 'absolute',
    opacity: 0,
    top: 999999,
    left: 990999,
    pointerEvents: 'none',
    marginBottom: '1rem',
    ...media.from('md').css({ marginBottom: '3rem' }),
  }),
  ...media.from('md').css({
    ...(heightBelt && {
      width: 'initial',
      height: 'initial',
      transform: 'initial',
    }),
    position: 'initial',
    left: 'initial',
    transform: 'translateX(0%)',
  }),
}))

const NavButtonContainer = styled.div(({ variant }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  padding: 0,
  top: variant === 'open' ? '50%' : '35%',
  transform: 'translateY(-50%)',
  zIndex: 101,
  ...media.from('xs').css({ top: '50%' }),
  ...media.from('md').css({ padding: '0 5px' }),
}))
const PageIndicatorContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 'auto',
  position: 'absolute',
  bottom: 0,
})
const ContentCarousel = ({ variant, copy, children, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = (children && children.length) || 1

  const [tallestHeight, setTallestHeight] = useState('auto')

  const decoyRight = useRef(null)
  const decoyLeft = useRef(null)
  const decoyFarRight = useRef(null)
  const decoyFarLeft = useRef(null)
  const itemContainer = useRef(null)
  const itemBelt = useRef(null)
  const heightBelt = useRef(null)

  const switchPages = increment => {
    setCurrentPage(currentPage + increment)
  }

  const slideVariantStyles = {
    open: {
      name: 'open',
      itemContainer: {
        width: { desktop: '100%', mobile: '100%' },
        height: { desktop: 'inherit', mobile: 'inherit' },
        maxHeight: { desktop: '480px', mobile: '' },
      },
      pictureContainer: {
        width: { desktop: '', mobile: '' },
        height: { desktop: '100%', mobile: '' },
        maxWidth: { desktop: '100%', mobile: '100%' },
        maxHeight: { desktop: '', mobile: '' },
        marginBottom: { desktop: '0', mobile: '1.5rem' },
      },
    },
    card: {
      name: 'card',
      itemContainer: {
        width: { desktop: '100%', mobile: '60%' },
        height: { desktop: 'inherit', mobile: `calc(${tallestHeight}px - 5rem)` },
        maxHeight: { desktop: '468px', mobile: 'initial' },
      },
      pictureContainer: {
        width: { desktop: 'initial', mobile: 'auto' },
        height: { desktop: 'initial', mobile: 'initial' },
        maxWidth: { desktop: '55vw', mobile: '' },
        maxHeight: { desktop: '480px', mobile: '' },
        margin: { desktop: '-3rem 0 -4.125rem -2rem', mobile: '-2rem -2rem 0 -1.5rem' },
        marginBottom: { desktop: '', mobile: '' },
      },
    },
  }

  const handleSlideTransition = (direction, increment) => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches && anime.running.length === 0) {
      const tl = anime.timeline({ duration: 400, easing: 'cubicBezier(0.8, 0, 0.55, 0.94)' })
      tl.add({
        targets: itemContainer.current,
        opacity: 0,
        complete: () => {
          switchPages(increment || (direction === 'left' ? 1 : -1))
        },
      }).add({
        targets: itemContainer.current,
        opacity: 1,
      })
    } else if (anime.running.length === 0) {
      const tl = anime.timeline({ duration: 602, easing: 'cubicBezier(0.8, 0, 0.55, 0.94)' })

      tl.add({
        targets: itemContainer.current,
        translateX: direction === 'left' ? ['0%', '-100%'] : ['0%', '100%'],
      })
        .add(
          {
            targets: direction === 'right' ? decoyRight.current : decoyLeft.current,
            translateX: direction === 'right' ? '130%' : '-130%',
            duration: variant === 'open' ? 200 : 400,
          },
          0
        )
        .add(
          {
            targets: direction === 'left' ? decoyRight.current : decoyLeft.current,
            translateX: direction === 'left' ? ['100%', '0%'] : ['-100%', '0%'],
            duration: 600,
            complete: () => {
              switchPages(increment || (direction === 'left' ? 1 : -1))
            },
          },
          variant === 'open' ? 300 : 0
        )
        .add({
          targets: direction === 'right' ? decoyRight.current : decoyLeft.current,
          translateX: direction === 'right' ? '100%' : '-100%',
          duration: 1,
        })
        .add({
          targets: itemContainer.current,
          translateX: '0%',
          duration: 1,
        })
        .add({
          targets: direction === 'left' ? decoyRight.current : decoyLeft.current,
          translateX: direction === 'left' ? '100%' : '-100%',
          duration: 1,
        })
        .add(
          {
            targets: direction === 'left' ? decoyFarRight.current : decoyFarLeft.current,
            translateX: [
              {
                value: direction === 'left' ? ['120%', '100%'] : ['-120%', '-100%'],
                duration: 400,
              },
              { value: direction === 'left' ? '120%' : '-120%', delay: 500, duration: 1 },
            ],
          },
          variant === 'open' ? null : 247
        )
    }
  }

  const handleSlideSkip = increment => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matche && anime.running.length === 0) {
      const tl = anime.timeline({ duration: 400, easing: 'cubicBezier(0.8, 0, 0.55, 0.94)' })
      tl.add({
        targets: itemBelt.current,
        opacity: 0,
        complete: () => {
          switchPages(increment)
        },
      }).add({
        targets: itemBelt.current,
        opacity: 1,
      })
    } else if (anime.running.length === 0) {
      if (increment > 1 || increment < -1) {
        if (variant === 'open') {
          const tl = anime.timeline({ duration: 400, easing: 'cubicBezier(0.8, 0, 0.55, 0.94)' })
          tl.add({
            targets: [
              decoyRight.current,
              decoyFarRight.current,
              decoyLeft.current,
              decoyFarLeft.current,
            ],
            ...(variant === 'open' && { opacity: 0 }),
            duration: 1,
          })
            .add({
              targets: itemBelt.current,
              filter: 'blur(18px)',
              translateX: increment > 0 ? '-100%' : '100%',
              complete: () => {
                switchPages(increment)
              },
            })
            .add({
              targets: itemBelt.current,
              translateX: increment > 0 ? '100%' : '-100%',
              duration: 1,
            })
            .add({
              targets: itemBelt.current,
              filter: 'blur(0px)',
              translateX: '0%',
            })
            .add({ targets: [decoyRight.current, decoyLeft.current], opacity: 1 })
        } else if (variant === 'card') {
          const tl = anime.timeline({ duration: 250, easing: 'cubicBezier(0.8, 0, 0.55, 0.94)' })

          tl.add({
            targets: [
              decoyRight.current,
              decoyFarRight.current,
              decoyLeft.current,
              decoyFarLeft.current,
            ],
            opacity: 0,
            duration: 100,
          })
            .add({
              targets: itemBelt.current,
              filter: 'blur(18px)',
              translateX: increment > 0 ? '-300%' : '300%',
              complete: () => {
                switchPages(increment)
              },
            })
            .add({ targets: itemContainer.current, opacity: 0, duration: 400 }, 150)
            .add({
              targets: itemBelt.current,
              translateX: increment > 0 ? '300%' : '-300%',
              duration: 1,
            })
            .add({
              targets: itemBelt.current,
              filter: 'blur(0px)',
              translateX: window.innerWidth <= breakpoints.md ? '-33%' : '0%',
            })
            .add({ targets: itemContainer.current, opacity: 1, duration: 400 }, '-=150')
            .add({ targets: [decoyRight.current, decoyLeft.current], opacity: 1 }, '-=200')
        }
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

  const getTallest = () => {
    let winner = 0
    for (let i = 0; i < totalPages; i += 1) {
      const height =
        heightBelt.current.children && heightBelt.current.children[0].children[i].clientHeight
      if (height > winner) {
        winner = height
      }
    }
    return winner
  }

  const handleResize = () => {
    setTallestHeight(getTallest())
    if (window.innerWidth > breakpoints.md) {
      anime({
        targets: itemBelt.current,
        translateX: '0%',
        easing: 'linear',
        duration: 1,
      })
    } else if (variant === 'card') {
      anime({
        targets: itemBelt.current,
        translateX: '-35%',
        easing: 'linear',
        duration: 1,
      })
    }
  }

  const generateHeightBelt = () =>
    React.createElement(
      ItemContainer,
      { variant },
      React.Children.map(children, child => React.cloneElement(child, { variant }))
    )

  useEffect(() => {
    findImages()
    handleResize()
    window.addEventListener('resize', handleResize)
    setTallestHeight(getTallest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Behaves like componentDidMount
  return (
    <CarouselContainer tallestHeight={tallestHeight} {...safeRest(rest)}>
      <ItemBelt variant={variant} ref={itemBelt} {...handleSwipeGesture()}>
        <DecoyContainer
          position="left"
          offset={1}
          variant={variant}
          ref={decoyFarLeft}
          aria-hidden={true}
        >
          <ThemeProvider theme={slideVariantStyles[variant]}>
            {(children && children[currentPage - 3]) || ''}
          </ThemeProvider>
        </DecoyContainer>

        <DecoyContainer
          position="left"
          offset={0}
          variant={variant}
          ref={decoyLeft}
          aria-hidden={true}
        >
          <ThemeProvider theme={slideVariantStyles[variant]}>
            {(children && children[currentPage - 2]) || ''}
          </ThemeProvider>
        </DecoyContainer>

        <ItemContainer variant={variant} ref={itemContainer} data-testid="itemContainer">
          <ThemeProvider theme={slideVariantStyles[variant]}>
            {(children && children[currentPage - 1]) || children}
          </ThemeProvider>
        </ItemContainer>

        <DecoyContainer
          position="right"
          offset={0}
          variant={variant}
          ref={decoyRight}
          aria-hidden={true}
        >
          <ThemeProvider theme={slideVariantStyles[variant]}>
            {(children && children[currentPage]) || ''}
          </ThemeProvider>
        </DecoyContainer>
        <DecoyContainer
          position="right"
          offset={1}
          variant={variant}
          ref={decoyFarRight}
          aria-hidden={true}
        >
          <ThemeProvider theme={slideVariantStyles[variant]}>
            {(children && children[currentPage + 1]) || ''}
          </ThemeProvider>
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

      <ItemBelt
        heightBelt
        variant={variant}
        ref={heightBelt}
        aira-hidden={true}
        {...handleSwipeGesture()}
      >
        <ThemeProvider theme={slideVariantStyles[variant]}>{generateHeightBelt()}</ThemeProvider>
      </ItemBelt>
    </CarouselContainer>
  )
}

ContentCarousel.propTypes = {
  /**
   * The carousel's style.
   */
  variant: PropTypes.oneOf(['open', 'card']),
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
