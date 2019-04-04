import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider'
import Box from '@tds/core-box'
import { media } from '@tds/core-responsive'
import {
  medium,
  large,
  wordBreak,
  helveticaNeueLight45,
  helveticaNeueThin35,
} from '@tds/shared-typography'
import { spacing } from '@tds/shared-styles'
import { StyledHeading } from '@tds/core-heading'

import { warn } from '../../shared/utils/warn'
import joinClassNames from '../../shared/utils/joinClassNames'
import styles from './PriceLockup.modules.scss'

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

const StyledRateText = styled.span(({ size }) => (size === 'large' ? large : medium))
const StyledPriceValue = styled.span(wordBreak, spacing.noSpacing, ({ size }) => {
  return {
    lineHeight: 1,
    ...priceValue[size],
  }
})
const StyledDollarSign = styled.span(({ size }) => {
  if (size === 'small') {
    return medium
  }
  return large
})
const StyledLargeDollarSign = styled(StyledHeading)({
  lineHeight: '1.3',
})

/**
 * A component presenting TELUS product pricing information.
 * @version ./package.json
 */

const PriceLockup = ({ size, price, topText, signDirection, rateText, bottomText }) => {
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

  const renderPriceValueSign = () => {
    return (
      <Box between={size === 'large' ? 2 : 1} inline>
        {signDirection === 'left' ? renderDollarSign() : undefined}
        <StyledPriceValue data-testid="priceValue" size={size}>
          {price}
        </StyledPriceValue>
        {signDirection === 'right' ? renderDollarSign() : undefined}
      </Box>
    )
  }

  const renderBottomText = () => {
    if (size !== 'large' && bottomText) {
      return <Text size={size}>{bottomText}</Text>
    }
    if (size === 'large' && bottomText) {
      warn('PriceLockup', "The props bottomText and size='large' cannot be used together")
      return undefined
    }
    return undefined
  }

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
    <Box between={wrapperSpacing} className={styles.wrapperAlignment}>
      <Box between={size !== 'large' ? 1 : undefined}>
        {topText && <Text size={size === 'large' ? 'large' : 'small'}>{topText}</Text>}
        <Box
          between={size === 'small' ? 1 : 2}
          inline
          className={joinClassNames(styles.priceWrapper, size === 'small' && styles.small)}
        >
          {renderPriceValueSign()}
          {rateText && (
            <StyledRateText data-testid="rateText" size={size}>
              {rateText}
            </StyledRateText>
          )}
        </Box>
      </Box>
      {size !== 'large' && bottomText && rateText && <HairlineDivider />}
      {renderBottomText()}
    </Box>
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
}

PriceLockup.defaultProps = {
  signDirection: 'left',
  topText: undefined,
  bottomText: undefined,
  rateText: undefined,
}

export default PriceLockup
