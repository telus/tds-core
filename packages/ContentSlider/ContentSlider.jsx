/* eslint-disable react/display-name */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import A11yContent from '@tds/core-a11y-content'
import Heading from '@tds/core-heading'

import { safeRest } from '@tds/util-helpers'
import { buttons, borders } from '@tds/shared-styles'
import { colorGainsboro } from '@tds/core-colours'

import { animated, useTransition } from 'react-spring'

/**
 * @version ./package.json
 */

const StyledContentSlider = styled.section({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& > span': {
    flex: '0 0 auto',
    width: '32px',
    zIndex: '2',
  },
})

const StyledSlideContainer = styled.ul({
  flex: '1 1 auto',
  margin: '0 -16px',
  zIndex: '1',
})

const StyledPrevButton = styled.button(buttons.noStyle, {
  border: '1px solid #ccc',
})

const StyledNextButton = styled.button(buttons.noStyle, {
  border: '1px solid #ccc',
})

const StyledSliderNav = styled.div({
  flex: '0 1 100%',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

const StyledDotButton = styled.button(buttons.noStyle, {
  border: '1px solid #ccc',
})

const cardStyles = ({ isCard }) =>
  isCard && {
    ...borders.rounded,
    boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.1)',
    border: `1px solid ${colorGainsboro}`,
  }

const StyledSlide = styled(({ isCard, ...rest }) => <animated.li {...rest} />)(cardStyles, {
  lineHeight: '0.8',
  overflow: 'hidden',
})

const DotButton = ({ index, setCurrentSlide }) => {
  const handleDotClick = () => {
    setCurrentSlide(index)
  }
  return <StyledDotButton onClick={handleDotClick}>Button {index + 1}</StyledDotButton>
}

const ContentSlider = ({ children, isCard, isCardSlider, ...rest }) => {
  const total = children.length
  const [currentSlide, setCurrentSlide] = useState(0)
  const [previousSlide, setPreviousSlide] = useState(currentSlide)
  const [slides, setSlides] = useState([])

  React.useEffect(() => {
    const slidesArray = React.Children.map(children, li => ({ style }) => (
      <StyledSlide isCard={isCard} style={{ ...style }}>
        {li.props.children}
      </StyledSlide>
    ))
    setSlides(slidesArray)
  }, [children, isCard])

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide - 1)
  }
  const handleNextClick = () => {
    setCurrentSlide(currentSlide + 1)
  }

  const transitions = useTransition(currentSlide, p => p, {
    unique: true,
    from: { opacity: 0, transform: `translate3d(${(currentSlide - previousSlide) * 100}%,0,0)` },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: {
      zIndex: 1,
      opacity: 0,
      transform: `translate3d(${(previousSlide - currentSlide) * 100}%,0,0)`,
      position: 'absolute',
    },
  })

  if (currentSlide !== previousSlide) setPreviousSlide(currentSlide)

  return (
    <section {...safeRest(rest)} aria-labelledby="content-slider-heading">
      <Heading level="h3" id="content-slider-heading">
        <A11yContent>Content slider heading</A11yContent>
      </Heading>

      <StyledContentSlider>
        <span>
          {currentSlide > 0 && <StyledPrevButton onClick={handlePrevClick}>Prev</StyledPrevButton>}
        </span>

        {slides.length > 0 && (
          <StyledSlideContainer>
            {transitions.map(({ item, props, key }) => {
              const SpringSlide = slides[item]
              return <SpringSlide isCard={isCard} key={key} style={props} />
            })}
          </StyledSlideContainer>
        )}

        <span>
          {currentSlide < total - 1 && (
            <StyledNextButton onClick={handleNextClick}>Next</StyledNextButton>
          )}
        </span>
      </StyledContentSlider>

      <StyledSliderNav>
        {React.Children.map(children, (dot, index) => (
          <DotButton index={index} setCurrentSlide={setCurrentSlide} />
        ))}
      </StyledSliderNav>
    </section>
  )
}

ContentSlider.Slide = StyledSlide

ContentSlider.propTypes = {
  children: PropTypes.node.isRequired,
  isCard: PropTypes.bool,
  isCardSlider: PropTypes.bool,
  style: PropTypes.object,
}

ContentSlider.defaultProps = {
  isCard: false,
  isCardSlider: false,
  style: {},
}

DotButton.propTypes = {
  index: PropTypes.number.isRequired,
  setCurrentSlide: PropTypes.func.isRequired,
}

export default ContentSlider
