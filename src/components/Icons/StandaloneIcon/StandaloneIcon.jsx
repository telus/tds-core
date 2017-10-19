import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'

import Icon from '../Icon/Icon'

import styles from './StandaloneIcon.modules.scss'

/**
 * An icon that has meaning within the context of the page, which should be communicated to screen readers.
 *
 * <span class="docs--badge__new">new!</span> <span class="docs--badge__version">v0.24.0</span>
 */
class StandaloneIcon extends React.Component {
  onClick = event => {
    const {onClick} = this.props

    if (onClick) {
      onClick(event)
    }
  }

  render() {
    const {symbol, variant, size, interactive, onClick, a11yText, ...rest} = this.props

    if (interactive) {
      return (
        <button {...safeRest(rest)} className={styles.interactive} aria-label={a11yText}>
          <Icon symbol={symbol} variant={variant} size={size} />
        </button>
      )
    }

    return <Icon {...rest} symbol={symbol} variant={variant} size={size} aria-label={a11yText} />
  }
}

StandaloneIcon.propTypes = {
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
    'location',
    'minus',
    'plus',
    'questionMarkCircle',
    'spyglass',
    'times',
  ]).isRequired,
  /**
   * The appearance of the Icon.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted', 'error']),
  /**
   * The icon size in pixels.
   */
  size: PropTypes.oneOf([16, 24, 48]),
  /**
   * Make the icon interactive
   */
  interactive: PropTypes.bool,
  /**
  * A callback function to be invoked when the interactive icon is clicked.
  */
  onClick: PropTypes.func,
  /**
   * A description of the icon for screen readers.
   */
  a11yText: PropTypes.string.isRequired,
}

StandaloneIcon.defaultProps = {
  variant: undefined,
  size: 24,
  interactive: false,
  onClick: undefined,
}

export default StandaloneIcon
