import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../safeRest'
import joinClassNames from '../../utils/joinClassNames'
import capitalize from '../../capitalize'

import styles from './DecorativeIcon.modules.scss'

const DecorativeIcon = ({ symbol, variant, size, ...rest }) => {

  const classes = joinClassNames(
    styles[`icon${capitalize(symbol)}`],
    variant && styles[variant],
    size && styles[`size${size}`]
  )

  return (
    <i {...safeRest(rest)} className={classes} aria-hidden="true" />
  )
}

DecorativeIcon.propTypes = {
  /**
   * Name of the icon symbol.
   */
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
  /**
   * The appearance of the Icon.
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'inverted',
    'error'
  ]),
  /**
   * The icon size in pixels.
   */
  size: PropTypes.oneOf([16, 24, 48]),
}

DecorativeIcon.defaultProps = {
  variant: undefined,
  size: 24
}

export default DecorativeIcon
