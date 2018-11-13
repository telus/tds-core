import React from 'react'
import PropTypes from 'prop-types'
import Text from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider'
import Box from '@tds/core-box'
import { warn } from '../../shared/utils/warn'
import joinClassNames from '../../shared/utils/joinClassNames'
import styles from './PriceLockup.modules.scss'

/**
 * A component presenting TELUS product pricing information.
 * @version ./package.json
 */

const PriceLockup = ({ size, price, topText, signDirection, rateText, bottomText }) => {
  const renderDollarSign = () => {
    const classes = joinClassNames(
      styles.text,
      size === 'small' && styles.mediumText,
      size === 'medium' && styles.largeText,
      size === 'large' && styles.headingText
    )
    return (
      <span data-id="dollarSign" className={classes}>
        &#36;
      </span>
    )
  }

  const renderPriceValueSign = () => {
    return (
      <Box between={size === 'large' ? 2 : 1} inline>
        {signDirection === 'left' ? renderDollarSign() : undefined}
        <span
          data-id="priceValue"
          className={joinClassNames(styles.priceValueSign, styles[`priceValueSign${size}`])}
        >
          {price}
        </span>
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
    <Box between={wrapperSpacing}>
      <Box between={size !== 'large' ? 1 : undefined}>
        {topText && <Text size={size === 'large' ? 'large' : 'small'}>{topText}</Text>}
        <Box
          between={size === 'small' ? 1 : 2}
          inline
          dangerouslyAddClassName={joinClassNames(
            styles.priceWrapper,
            size === 'small' && styles.small
          )}
        >
          {renderPriceValueSign()}
          {rateText && (
            <span
              data-id="rateText"
              className={joinClassNames(
                styles.text,
                size === 'large' ? styles.largeText : styles.mediumText
              )}
            >
              {rateText}
            </span>
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
