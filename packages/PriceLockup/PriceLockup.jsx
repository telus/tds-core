import React, { useEffect, useCallback, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName } from '@tds/util-prop-types'

import Text, { StyledText } from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider'
import Box from '@tds/core-box'
import { colorText } from '@tds/core-colours'
import { media } from '@tds/core-responsive'
import {
  small,
  medium,
  large,
  wordBreak,
  helveticaNeueLight45,
  helveticaNeueThin35,
} from '@tds/shared-typography'
import { spacing } from '@tds/shared-styles'

import { warn } from '../../shared/utils/warn'

const priceValue = {
  small: {
    fontSize: '1.5rem',
    ...helveticaNeueLight45,
    letterSpacing: '-0.7px',
    ...media.from('md').css({
      fontSize: '1.75rem',
      letterSpacing: '-0.8px',
    }),
  },
  medium: {
    fontSize: '1.75rem',
    letterSpacing: '-1.6px',
    ...helveticaNeueLight45,
    ...media.from('md').css({
      ...helveticaNeueThin35,
      fontSize: '2.75rem',
      letterSpacing: 0,
    }),
  },
  large: {
    fontSize: '2.75rem',
    ...helveticaNeueThin35,
    ...media.from('md').css({
      fontSize: '4.5rem',
      letterSpacing: '0.2px',
    }),
  },
}

const StyledRateText = styled(StyledText)(({ size }) => {
  if (size === 'large') {
    return large
  }
  if (size === 'medium') {
    return medium
  }
  return { ...small, lineHeight: 1 }
})

const StyledPriceValue = styled.span(wordBreak, spacing.noSpacing, ({ size }) => {
  return {
    lineHeight: 1,
    ...priceValue[size],
  }
})

const StyledFootnoteLinks = styled(StyledText)({
  display: 'inline-block',
})

const StyledDollarSign = styled.span(({ size }) => {
  if (size === 'small') {
    return { medium, lineHeight: 1.5 }
  }
  return large
})

const StyledLargeDollarSign = styled.span({
  color: colorText,
  ...helveticaNeueLight45,
  fontSize: '1.75rem',
  lineHeight: '1.3',
  letterSpacing: '-1.6px',
  ...media.from('md').css({
    ...helveticaNeueThin35,
    fontSize: '2.75rem',
    letterSpacing: '0',
  }),
})

const StyledWrapperAlignment = styled(Box)({
  textAlign: 'left',
})

const StyledPriceWrapper = styled(Box)({
  alignItems: 'flex-end',
})

const StyledBottomText = styled(StyledText)({})

/**
 * A component presenting TELUS product pricing information.
 * @version ./package.json
 */

const PriceLockup = ({
  size,
  price,
  topText,
  signDirection,
  rateText,
  bottomText,
  footnoteLinks,
}) => {
  const [hasTooManyFootnoteLinks, setHasTooManyFootnoteLinks] = useState(false)
  const [hasEnoughFootnoteSpace, setHasEnoughFootnoteSpace] = useState(true)

  const footnoteLinksRef = useRef()
  const containerRef = useRef()
  const priceWrapperRef = useRef()

  const countFootnoteLinks = useCallback(links => {
    let count = 0
    if (links) {
      if (Array.isArray(links)) {
        count = links.reduce((acc, curr) => acc + curr.props.number.length, 0)
      } else {
        count = links.props.number.length
      }
    }
    setHasTooManyFootnoteLinks(count > 3)
  }, [])

  const checkEnoughSpace = useCallback(() => {
    if (containerRef.current && footnoteLinksRef.current && priceWrapperRef.current) {
      const footnoteLinksWidth = footnoteLinksRef.current.offsetWidth
      const containerWidth = containerRef.current.offsetWidth
      const priceWrapperWidth = priceWrapperRef.current.offsetWidth

      const contentWidth = footnoteLinksWidth + containerWidth + footnoteLinksWidth
      setHasEnoughFootnoteSpace(contentWidth < priceWrapperWidth)
    }
  }, [])

  useEffect(() => {
    checkEnoughSpace()
    window.addEventListener('resize', checkEnoughSpace)
    return () => {
      window.removeEventListener('resize', checkEnoughSpace)
    }
  }, [checkEnoughSpace])

  useEffect(() => {
    countFootnoteLinks(footnoteLinks)
  }, [countFootnoteLinks, footnoteLinks])

  const renderDollarSign = () => {
    if (size === 'large') {
      return (
        <StyledLargeDollarSign data-testid="dollarSign" as="span" level="h1">
          &#36;
        </StyledLargeDollarSign>
      )
    }
    return (
      <StyledDollarSign data-testid="dollarSign" size={size}>
        &#36;
      </StyledDollarSign>
    )
  }

  const renderFootnoteLinks = (links, s) => {
    return (
      <StyledFootnoteLinks id="footnoteLinks" ref={footnoteLinksRef} size={s}>
        {links}
      </StyledFootnoteLinks>
    )
  }

  const shouldRenderWithPriceText =
    !rateText && !bottomText && !hasTooManyFootnoteLinks && hasEnoughFootnoteSpace
  const shouldRenderWithRateText =
    rateText && !bottomText && !hasTooManyFootnoteLinks && hasEnoughFootnoteSpace
  const shouldRenderWithBottomText =
    bottomText || hasTooManyFootnoteLinks || !hasEnoughFootnoteSpace

  const renderPriceValueSign = () => {
    return (
      <div id="containerRef" ref={containerRef}>
        <Box between={size === 'large' ? 2 : 1} inline>
          {signDirection === 'left' ? renderDollarSign() : undefined}
          <StyledPriceValue data-testid="priceValue" size={size}>
            {price}
          </StyledPriceValue>
          {signDirection === 'right' ? renderDollarSign() : undefined}
          {shouldRenderWithPriceText && renderFootnoteLinks(footnoteLinks, size)}
        </Box>
      </div>
    )
  }

  const renderBottomText = () => {
    if (!bottomText && shouldRenderWithBottomText) {
      return <div>{renderFootnoteLinks(footnoteLinks, size)}</div>
    }
    if (size !== 'large' && (bottomText || (footnoteLinks && shouldRenderWithBottomText))) {
      return (
        <div>
          <StyledBottomText size={size}>{bottomText}</StyledBottomText>
          {renderFootnoteLinks(footnoteLinks, size)}
        </div>
      )
    }
    if (size === 'large' && bottomText) {
      warn('PriceLockup', "The props bottomText and size='large' cannot be used together")
      return undefined
    }
    return undefined
  }

  let wrapperSpacing
  if (size === 'small') {
    wrapperSpacing = 2
  } else if (size === 'medium') {
    wrapperSpacing = 3
  } else {
    wrapperSpacing = 2
  }

  return (
    <StyledWrapperAlignment between={wrapperSpacing}>
      <Box between={size !== 'large' ? 1 : undefined}>
        {topText && <Text size={size === 'large' ? 'large' : 'small'}>{topText}</Text>}
        <StyledPriceWrapper
          id="wrapperRef"
          ref={priceWrapperRef}
          between={size === 'small' ? 1 : 2}
          inline
        >
          {renderPriceValueSign()}
          {rateText && (
            <StyledRateText data-testid="rateText" size={size}>
              {rateText}
              {shouldRenderWithRateText && renderFootnoteLinks(footnoteLinks, size)}
            </StyledRateText>
          )}
        </StyledPriceWrapper>
      </Box>
      {size !== 'large' && bottomText && rateText && <HairlineDivider />}
      {renderBottomText()}
    </StyledWrapperAlignment>
  )
}

PriceLockup.propTypes = {
  /**
   * Font Size of Labels, Price, and Signs
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  /**
   * Position of Dollar Sign relative to Price Value
   */
  signDirection: PropTypes.oneOf(['left', 'right']),
  /**
   * Statement above Price Value
   */
  topText: PropTypes.string,
  /**
   * Statement below Price Value
   */
  bottomText: PropTypes.string,
  /**
   * Statement right of Price Value
   */
  rateText: PropTypes.string,
  /**
   * Price value of component
   */
  price: PropTypes.string.isRequired,

  /**
   * A `FootnoteLink` component or array of `FootnoteLink` compoenents, can be
   * used to add superscripts to a `PriceLockup`
   */
  footnoteLinks: componentWithName('FootnoteLink'),
}

PriceLockup.defaultProps = {
  signDirection: 'left',
  topText: undefined,
  bottomText: undefined,
  rateText: undefined,
  footnoteLinks: undefined,
}

export default PriceLockup
