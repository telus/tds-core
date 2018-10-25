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

const PriceLockup = ({ size, price, topText, signDirection, rateText, bottomText }) => {
  const DollarSign = () => {
    if (size === 'large') {
      return <span className={styles.dollarSignH1Style}>&#36;</span>
    }
    return <Text size={size === 'small' ? 'medium' : 'large'}>&#36;</Text>
  }

  const PriceValueSign = () => {
    return (
      <Box between={size === 'large' ? 2 : 1} inline className={styles.priceValueSign}>
        {signDirection === 'left' ? <DollarSign /> : undefined}
        <span className={styles[`priceValueSign${size}`]}>{price}</span>
        {signDirection === 'right' ? <DollarSign /> : undefined}
      </Box>
    )
  }

  return (
    <Box between={3}>
      {topText && <Text size={size === 'large' ? 'large' : 'small'}>{topText}</Text>}
      <Box between={size === 'small' ? 1 : 2} inline dangerouslyAddClassName={styles.priceWrapper}>
        <PriceValueSign />
        {rateText && <Text size={size === 'large' ? 'large' : 'medium'}>{rateText}</Text>}
      </Box>
      {rateText && bottomText && size === 'medium' ? <HairlineDivider /> : ''}
      {size === 'medium' && bottomText ? <Text size={size}>{bottomText}</Text> : ''}
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
