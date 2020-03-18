import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName } from '@tds/util-prop-types'

import Text, { StyledText } from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider'
import Box from '@tds/core-box'
import { colorText } from '@tds/core-colours'
import { media } from '@tds/core-responsive'
import {
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
    '&& sup': {
      top: '-1em',
    },
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
    '&& sup': {
      top: '-1.5em',
    },
  },
  large: {
    fontSize: '2.75rem',
    ...helveticaNeueThin35,
    ...media.from('md').css({
      fontSize: '4.5rem',
      letterSpacing: '0.2px',
    }),
    '&& sup': {
      top: '-3em',
    },
  },
}

const StyledRateText = styled.span(({ size }) => {
  if (size === 'large') {
    return large
  }
  if (size === 'medium') {
    return medium
  }
  return { ...medium, lineHeight: 1 }
})

const StyledPriceValue = styled.span(wordBreak, spacing.noSpacing, ({ size }) => {
  return {
    lineHeight: 1,
    ...priceValue[size],
  }
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
  alignSelf: 'flex-start',
})

const StyledRateTextWrapper = styled(Box)({
  display: 'flex',
})

const StyledFootnoteLinks = styled(StyledText)(({ inline }) => ({
  display: 'inline-block',
  alignSelf: 'flex-start',
  marginTop: !inline && '0.5rem',
}))

const StyledBottomText = styled(StyledText)({ display: 'inline-block' })

const renderDollarSign = size => {
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

const renderFootnoteLinks = (footnoteLinksRef, footnoteLinks, inline) => (
  <StyledFootnoteLinks ref={footnoteLinksRef} inline={inline}>
    {footnoteLinks}
  </StyledFootnoteLinks>
)

const renderBottomText = (size, bottomText, bottomTextRef) => {
  if (size !== 'large' && bottomText) {
    return (
      <StyledBottomText ref={bottomTextRef} size={size}>
        {bottomText}
      </StyledBottomText>
    )
  }
  if (size === 'large' && bottomText) {
    warn('PriceLockup', "The props bottomText and size='large' cannot be used together")
  }
  return undefined
}

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
  const rateTextWrapperRef = useRef()
  const footnoteLinksRef = useRef()
  const containerRef = useRef()
  const bottomTextRef = useRef()

  const [footnoteLinksInline, setFootnoteLinksInline] = useState(true)

  const checkInline = () => {
    if (containerRef.current && footnoteLinksRef.current) {
      const footnoteLinksWidth = footnoteLinksRef.current.offsetWidth
      const containerWidth = containerRef.current.offsetWidth

      let textWidth
      if (bottomText) {
        textWidth = bottomTextRef.current ? bottomTextRef.current.offsetWidth : 0
      } else {
        textWidth = rateTextWrapperRef.current.offsetWidth
      }

      const combinedWidth = textWidth + footnoteLinksWidth

      setFootnoteLinksInline(combinedWidth < containerWidth)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkInline)
    return () => {
      window.removeEventListener('resize', checkInline)
    }
  })
  useEffect(checkInline, [])

  let wrapperSpacing
  if (size === 'small') {
    if (bottomText && rateText) {
      wrapperSpacing = 2
    } else {
      wrapperSpacing = 1
    }
  } else if (size === 'medium') {
    wrapperSpacing = 3
  }

  return (
    <StyledWrapperAlignment between={wrapperSpacing}>
      <Box between={size !== 'large' ? 1 : undefined}>
        {topText && <Text size={size === 'large' ? 'large' : 'small'}>{topText}</Text>}
        <StyledRateTextWrapper ref={containerRef}>
          <StyledPriceWrapper ref={rateTextWrapperRef} between={size === 'small' ? 1 : 2} inline>
            <Box between={size === 'large' ? 2 : 1} inline>
              {signDirection === 'left' && renderDollarSign(size)}
              <StyledPriceValue data-testid="priceValue" size={size}>
                {price}
              </StyledPriceValue>
              {signDirection === 'right' && renderDollarSign(size)}
              {!bottomText &&
                !rateText &&
                renderFootnoteLinks(footnoteLinksRef, footnoteLinks, footnoteLinksInline)}
            </Box>
            {rateText && (
              <StyledRateText data-testid="rateText" size={size}>
                {rateText}
                {!bottomText &&
                  rateText &&
                  footnoteLinksInline &&
                  renderFootnoteLinks(footnoteLinksRef, footnoteLinks, footnoteLinksInline)}
              </StyledRateText>
            )}
          </StyledPriceWrapper>
        </StyledRateTextWrapper>
      </Box>
      {size !== 'large' && bottomText && rateText && <HairlineDivider />}
      {bottomText && (
        <div>
          {renderBottomText(size, bottomText, bottomTextRef)}
          {renderFootnoteLinks(footnoteLinksRef, footnoteLinks, footnoteLinksInline)}
        </div>
      )}
      {!bottomText &&
        !footnoteLinksInline &&
        renderFootnoteLinks(footnoteLinksRef, footnoteLinks, footnoteLinksInline)}
    </StyledWrapperAlignment>
  )
}

PriceLockup.propTypes = {
  /**
   * Font Size of Labels, Price, and Signs.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  /**
   * Position of Dollar Sign relative to Price Value.
   */
  signDirection: PropTypes.oneOf(['left', 'right']),
  /**
   * Statement above Price Value.
   */
  topText: PropTypes.string,
  /**
   * Statement below Price Value.
   */
  bottomText: PropTypes.string,
  /**
   * Statement right of Price Value.
   */
  rateText: PropTypes.string,
  /**
   * Price value of component.
   */
  price: PropTypes.string.isRequired,
  /**
   * A [FootnoteLink](/#/Terms%20and%20Conditions?id=footnotelink) component, which may include multiple footnotes.
   *
   * Depending on the amount of available space, and what other `PriceLockup` props are defined,
   * `FootnoteLink`s will be automatically positioned to the most appropriate place.
   * See [FootnoteLink with PriceLockup](#/Typography?id=pricelockupWithFootnotelink) for more details.
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
