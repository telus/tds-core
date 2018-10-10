import React from 'react'
import PropTypes from 'prop-types'
import Heading from '@tds/core-heading'
import Text from '@tds/core-text'
import DisplayHeading from '@tds/core-display-heading'
import HairlineDivider from '@tds/core-hairline-divider'
import styles from './PriceLockup.modules.scss'
import safeRest from '../../shared/utils/safeRest'

/**
 * A component presenting Telus product pricing information.
 * @version ./package.json
 */

const TopTextStyleDecider = componentSize => {
  switch (componentSize) {
    case 'small':
    case 'medium':
      return 'small'
    case 'large':
      return 'large'
    default:
      return ''
  }
}

const DollarSignStyleDecider = componentSize => {
  switch (componentSize) {
    case 'small':
      return 'medium'
    case 'medium':
      return 'large'
    default:
      return ''
  }
}

const RateTextSizeDecider = componentSize => {
  switch (componentSize) {
    case 'small':
    case 'medium':
      return 'medium'
    case 'large':
      return 'large'
    default:
      return ''
  }
}

const PriceLockup = ({ size, price, topText, signDirection, rateText, bottomText, ...rest }) => {
  const TopText = () => {
    const topTextSize = TopTextStyleDecider(size)
    return <Text size={topTextSize}>{topText}</Text>
  }

  const BottomText = () => {
    return <Text size={size}>{bottomText}</Text>
  }

  const DollarSign = () => {
    if (size === 'large') {
      return <h1 className={styles.dollarSignH1Style}>&#36;</h1>
    }
    const DollarSignSize = DollarSignStyleDecider(size)
    return <Text size={DollarSignSize}>&#36;</Text>
  }

  const DollarValue = () => {
    if (size === 'small' || 'medium') {
      return <Heading level={size === 'small' ? 'h2' : 'h1'}>{price}</Heading>
    }
    return <DisplayHeading>{price}</DisplayHeading>
  }

  const RateText = () => {
    const RateTextSize = RateTextSizeDecider(size)
    return (
      <div className={size === 'small' ? styles.rateWrapperSmall : styles.rateWrapperMedium}>
        <Text size={RateTextSize}>{rateText}</Text>
      </div>
    )
  }

  const PriceValueSign = () => {
    return (
      <span className={styles.priceValueSign}>
        {signDirection === 'left' ? <DollarSign /> : undefined}
        <DollarValue />
        {signDirection === 'right' ? <DollarSign /> : undefined}
      </span>
    )
  }

  const Hairline = () => {
    if (rateText && bottomText && size === 'medium') {
      return (
        <div className={styles.hairlineWrapper}>
          <HairlineDivider />
        </div>
      )
    }
    return ''
  }

  return (
    <div {...safeRest(rest)}>
      <TopText />
      <div className={styles.priceWrapper}>
        <PriceValueSign />
        <RateText />
      </div>
      <Hairline />
      {size === 'medium' ? <BottomText /> : ''}
    </div>
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
  signDirection: undefined,
  topText: undefined,
  bottomText: undefined,
  rateText: undefined,
}

export default PriceLockup
