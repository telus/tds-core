import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import joinClassNames from '../../../utils/joinClassNames'
import capitalize from '../../../capitalize'

import styles from './Icon.modules.scss'

const Icon = ({ symbol, variant, size, ...rest }) => {
  const classes = joinClassNames(
    styles[`icon${capitalize(symbol)}`],
    variant && styles[variant],
    size && styles[`size${size}`]
  )

  return (
    <i {...safeRest(rest)} className={classes} />
  )
}

Icon.propTypes = {
  symbol: PropTypes.oneOf([
    'caretDown',
    'caretUp',
    'checkmark',
    'chevron',
    'leftChevron',
    'exclamationPointCircle',
    'expander',
    'hamburger',
    'incomplete',
    'location',
    'minus',
    'plus',
    'questionMarkCircle',
    'spyglass',
    'times'
  ]).isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'inverted',
    'error'
  ]),
  size: PropTypes.oneOf([16, 24, 48])
}

Icon.defaultProps = {
  variant: undefined,
  size: 24
}

export default Icon
