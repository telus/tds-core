import React, { useRef, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName } from '@tds/util-prop-types'

import Text, { StyledText } from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider'
import Box from '@tds/core-box'
import { colorText, colorGreyRaven } from '@tds/core-colours'
import { media } from '@tds/core-responsive'
import A11yContent from '@tds/core-a11y-content'
import {
  medium,
  large,
  wordBreak,
  helveticaNeueLight45,
  helveticaNeueThin35,
} from '@tds/shared-typography'
import { spacing } from '@tds/shared-styles'

import { warn } from '../../shared/utils/warn'

const FOOTNOTE_COUNT_LIMIT = 3
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

const hasStrikethrough = strikethroughValue => {
  if (strikethroughValue) {
    return {
      '&::before': {
        display: 'block',
        width: '100%',
        content: '""',
        borderBottom: `2px solid ${colorGreyRaven}`,
        position: 'absolute',
        top: '50%',
      },
    }
  }
  return undefined
}

const addStrikethroughPadding = strikethroughValue => {
  if (strikethroughValue) {
    return {
      paddingBottom: '3px',
    }
  }
  return undefined
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

const StyledPriceValue = styled.span(wordBreak, spacing.noSpacing, ({ size, strikethrough }) => {
  return {
    lineHeight: 1,
    ...priceValue[size],
    position: 'relative',
    ...hasStrikethrough(strikethrough),
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

const StyledRateTextWrapper = styled.div(({ strikethrough }) => {
  return {
    display: 'flex',
    color: strikethrough ? colorGreyRaven : undefined,
    ...addStrikethroughPadding(strikethrough),
  }
})

const StyledFootnoteLinks = styled(StyledText)(({ inline }) => ({
  display: 'inline-block',
  alignSelf: 'flex-start',
  marginTop: !inline && '0.5rem',
}))

const StyledBottomText = styled(StyledText)({ display: 'inline-block' })

const StrikehroughText = styled.s({
  textDecoration: 'none',
})

const renderDollarSign = (size, a11yText) => {
  if (size === 'large') {
    return (
      <StyledLargeDollarSign aria-hidden={a11yText ? 'true' : 'false'} data-testid="dollarSign">
        &#36;
      </StyledLargeDollarSign>
    )
  }
  return (
    <StyledDollarSign
      aria-hidden={a11yText ? 'true' : 'false'}
      data-testid="dollarSign"
      size={size}
    >
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
  strikethrough,
  a11yText,
}) => {
  const rateTextWrapperRef = useRef()
  const footnoteLinksRef = useRef()
  const containerRef = useRef()
  const bottomTextRef = useRef()

  const [footnoteLinksInline, setFootnoteLinksInline] = useState(true)

  const footnoteCount = useCallback(() => {
    let count = 0
    if (footnoteLinks) {
      if (Array.isArray(footnoteLinks)) {
        count = footnoteLinks.reduce((acc, curr) => acc + curr.props.number.length, 0)
      } else {
        count = footnoteLinks.props.number.length
      }
    }
    return count
  }, [footnoteLinks])

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
      setFootnoteLinksInline(
        combinedWidth < containerWidth && footnoteCount() <= FOOTNOTE_COUNT_LIMIT
      )
    }
  }

  useEffect(checkInline, [])
  useEffect(() => {
    window.addEventListener('resize', checkInline)
    return () => {
      window.removeEventListener('resize', checkInline)
    }
  })
  useEffect(checkInline, [footnoteLinks])

  let wrapperSpacing
  if (size === 'small') {
    wrapperSpacing = 2
  } else if (size === 'medium') {
    wrapperSpacing = 3
  } else {
    wrapperSpacing = {
      xs: 2,
      md: 3,
    }
  }

  if (strikethrough && !a11yText) {
    warn('PriceLockup', 'a11yText must be provided with strikethrough pricing')
  }

  return (
    <StyledWrapperAlignment between={wrapperSpacing}>
      <Box between={size !== 'large' ? 1 : undefined}>
        {topText && <Text size={size === 'large' ? 'large' : 'small'}>{topText}</Text>}
        <StyledRateTextWrapper ref={containerRef} strikethrough={strikethrough}>
          <StyledPriceWrapper ref={rateTextWrapperRef} between={size === 'small' ? 1 : 2} inline>
            <Box between={size === 'large' ? 2 : 1} inline>
              {a11yText && <A11yContent>{a11yText}</A11yContent>}
              {signDirection === 'left' && renderDollarSign(size, a11yText)}
              <StyledPriceValue
                data-testid="priceValue"
                size={size}
                strikethrough={strikethrough}
                aria-hidden={a11yText ? 'true' : 'false'}
              >
                {strikethrough ? <StrikehroughText>{price}</StrikehroughText> : <>{price}</>}
              </StyledPriceValue>
              {signDirection === 'right' && renderDollarSign(size, a11yText)}
              {!bottomText && !rateText && footnoteLinksInline && (
                <>
                  {strikethrough && <A11yContent>{a11yText}</A11yContent>}
                  <StyledPriceValue
                    data-testid="priceValue"
                    size={size}
                    strikethrough={strikethrough}
                  >
                    {renderFootnoteLinks(footnoteLinksRef, footnoteLinks, footnoteLinksInline)}
                  </StyledPriceValue>
                </>
              )}
            </Box>
            {rateText && (
              <StyledRateText
                aria-hidden={a11yText ? 'true' : 'false'}
                data-testid="rateText"
                size={size}
              >
                {rateText}
                {!bottomText &&
                  footnoteLinksInline &&
                  renderFootnoteLinks(footnoteLinksRef, footnoteLinks, footnoteLinksInline)}
              </StyledRateText>
            )}
          </StyledPriceWrapper>
        </StyledRateTextWrapper>
      </Box>
      {((size !== 'large' && bottomText) || (footnoteLinks && !footnoteLinksInline)) && (
        <>
          <HairlineDivider />
          <span>
            {renderBottomText(size, bottomText, bottomTextRef)}
            {renderFootnoteLinks(footnoteLinksRef, footnoteLinks, footnoteLinksInline)}
          </span>
        </>
      )}
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
  topText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Statement below Price Value.
   */
  bottomText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Statement right of Price Value.
   */
  rateText: PropTypes.string,
  /**
   * Price value of component.
   */
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  /**
   * A [FootnoteLink](/#/Terms%20and%20Conditions?id=footnotelink) component, which may include multiple footnotes.
   *
   * Depending on the amount of available space, and what other `PriceLockup` props are defined,
   * `FootnoteLink`s will be automatically positioned to the most appropriate place.
   * See [FootnoteLink with PriceLockup](#/Typography?id=pricelockupWithFootnotelink) for more details.
   */
  footnoteLinks: componentWithName('FootnoteLink'),
  /**
   * Use to show price with strikethrough for savings comparison.
   */
  strikethrough: PropTypes.bool,
  /**
   * Accessibility label for strikethrough pricing, as screen readers will not pick up strikethrough. *MUST be included if using
   * strikethrough pricing.
   */
  a11yText: PropTypes.string,
}

PriceLockup.defaultProps = {
  signDirection: 'left',
  topText: undefined,
  bottomText: undefined,
  rateText: undefined,
  footnoteLinks: undefined,
  strikethrough: false,
  a11yText: undefined,
}

export default PriceLockup
