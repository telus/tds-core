import React from 'react'
import PropTypes from 'prop-types'
import Text from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider'
import Box from '@tds/core-box'
import styles from './PriceLockup.modules.scss'

/**
 * A component presenting Telus product pricing information.
 * @version ./package.json
 */

const Hairline = ({ rateText, bottomText, size }) => {
  if (rateText && bottomText && size === 'medium') {
    return (
      <div className={styles.hairlineWrapper}>
        <HairlineDivider />
      </div>
    )
  }
  return ''
}

const PriceLockup = ({ size, price, topText, signDirection, rateText, bottomText }) => {
  const BottomText = () => {
    return <Text size={size}>{bottomText}</Text>
  }

  const DollarSign = () => {
    if (size === 'large') {
      return <span className={styles.dollarSignH1Style}>&#36;</span>
    }
    return <Text size={size === 'small' ? 'medium' : 'large'}>&#36;</Text>
  }

  const RateText = () => {
    if (size === 'small') {
      return <Text size="medium">{rateText}</Text>
    }
    return (
      <div className={styles.rateTextWrapper}>
        <Text size={size === 'large' ? 'large' : 'medium'}>{rateText}</Text>
      </div>
    )
  }
  const PriceValueSign = () => {
    return (
      <span className={styles.priceValueSign}>
        {signDirection === 'left' ? <DollarSign /> : undefined}
        {size === 'small' ? (
          <span className={styles.priceValueSignsmall}>{price}</span>
        ) : (
          <span className={styles.priceValueSignmedium}>{price}</span>
        )}
        {signDirection === 'right' ? <DollarSign /> : undefined}
      </span>
    )
  }

  return (
    <Box between={3}>
      {topText && <Text size={size === 'large' ? 'large' : 'small'}>{topText}</Text>}
      <div className={styles.priceWrapper}>
        <PriceValueSign />
        {rateText ? <RateText /> : ''}
      </div>
      <Hairline rateText={rateText} bottomText={bottomText} size={size} />
      {size === 'medium' && bottomText ? <BottomText /> : ''}
    </Box>
  )
}

PriceLockup.propTypes = {
  /**
   * Font Size of Labels, Price, and Signs
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
  size: undefined,
  signDirection: 'left',
  topText: undefined,
  bottomText: undefined,
  rateText: undefined,
}

export default PriceLockup
