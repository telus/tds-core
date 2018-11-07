import React from 'react'
import PropTypes from 'prop-types'
import Text from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider'
import Box from '@tds/core-box'
import { warn } from '../../shared/utils/warn'
import styles from './PriceLockup.modules.scss'

/**
 * A component presenting TELUS product pricing information.
 * @version ./package.json
 */

const PriceLockup = ({ size, price, topText, signDirection, rateText, bottomText }) => {
  const renderDollarSign = () => {
    if (size === 'large') {
      return (
        <span data-id="dollarSign" className={styles.dollarSignH1Style}>
          &#36;
        </span>
      )
    }
    if (size === 'medium') {
      return <Text size="large">&#36;</Text>
    }
    return <Text size={size}>&#36;</Text>
  }

  const renderPriceValueSign = () => {
    return (
      <Box between={size === 'large' ? 2 : 1} inline className={styles.priceValueSign}>
        {signDirection === 'left' ? renderDollarSign() : undefined}
        <span data-id="priceValue" className={styles[`priceValueSign${size}`]}>
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
      return ''
    }
    return ''
  }

  const renderHairLineBottomText = () => {
    return (
      <Box between={2} data-id="price-hairline">
        {size !== 'large' && bottomText && rateText && <HairlineDivider />}
        {renderBottomText()}
      </Box>
    )
  }

  return (
    <Box between={3}>
      {topText && <Text size={size === 'large' ? 'large' : 'small'}>{topText}</Text>}
      <Box between={size === 'small' ? 2 : 3}>
        <Box between={2} inline dangerouslyAddClassName={styles.priceWrapper}>
          {renderPriceValueSign()}
          {rateText && <Text size={size === 'large' ? 'large' : 'medium'}>{rateText}</Text>}
        </Box>
        {renderHairLineBottomText()}
      </Box>
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
