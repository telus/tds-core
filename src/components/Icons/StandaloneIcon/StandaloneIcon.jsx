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
const StandaloneIcon = ({ symbol, variant, size, onClick, a11yText, ...rest }) => {
  const iconProps = {
    symbol,
    variant,
    size,
    'aria-label': a11yText,
  }

  if (onClick) {
    return (
      <button {...safeRest(rest)} onClick={onClick} className={styles.interactive}>
        <Icon {...iconProps} />
      </button>
    )
  }

  return <Icon {...safeRest(rest)} {...iconProps} />
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
   * Pass a handler to the icon to make it interactive. Wraps the icon with a `<button>`.
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
  onClick: undefined,
}

export default StandaloneIcon
