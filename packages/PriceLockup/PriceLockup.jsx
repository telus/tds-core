import React from 'react'
import PropTypes from 'prop-types'
import styles from './PriceLockup.modules.scss'
import joinClassNames from '../../shared/utils/joinClassNames'
import safeRest from '../../shared/utils/safeRest'

/**
 * @version ./package.json
 */

const priceStyle = (element, size) => {
  switch (size) {
    case 'medium':
      return styles[`${element}--medium`]
    case 'large':
      return styles[`${element}--large`]
    default:
      return ''
  }
}

const PriceLockup = ({
  size,
  price,
  priceBold,
  topLabel,
  signDirection,
  rateLabel,
  bottomLabel,
  ...rest
}) => {
  const priceLabelClass = joinClassNames(styles.priceLabel, priceStyle('priceLabel', size))

  const priceBottomLabelClass = joinClassNames(
    styles.priceBottomLabel,
    priceStyle('priceBottomLabel', size)
  )

  const priceSignClass = joinClassNames(styles.priceSign, priceStyle('priceSign', size))

  const priceValueClass = joinClassNames(
    styles.priceValue,
    priceStyle('priceValue', size),
    priceBold ? styles['priceValue--bold'] : ''
  )

  const priceRateClass = joinClassNames(styles.priceRate, priceStyle('priceRate', size))

  const PriceValueSign = () => {
    if (signDirection === 'right') {
      return (
        <span>
          <span className={priceValueClass}>{price}</span>
          <span className={priceSignClass}>&#36;</span>
        </span>
      )
    }
    return (
      <span>
        <span className={priceSignClass}>&#36;</span>
        <span className={priceValueClass}>{price}</span>
      </span>
    )
  }

  return (
    <div {...safeRest(rest)}>
      <span className={priceLabelClass}>{topLabel}</span>
      <div>
        <PriceValueSign signDirection={signDirection} price={price} />
        <span className={priceRateClass}>{rateLabel}</span>
      </div>
      <div className={priceBottomLabelClass}>{bottomLabel}</div>
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
  topLabel: PropTypes.string,
  /**
   * Statement below Price Value
   */
  bottomLabel: PropTypes.string,
  /**
   * Statement right of Price Value
   */
  rateLabel: PropTypes.string,
  /**
   * Price value of component
   */
  price: PropTypes.string.isRequired,
  /**
   * Bold Price Value
   */
  priceBold: PropTypes.bool,
}

PriceLockup.defaultProps = {
  size: 'medium',
  signDirection: 'left',
  topLabel: '',
  bottomLabel: '',
  rateLabel: '',
  priceBold: false,
}

export default PriceLockup
