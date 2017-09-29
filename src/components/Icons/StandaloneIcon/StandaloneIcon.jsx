import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'

/**
 * An icon that has meaning within the context of the page,
 * which should be communicated to screen readers.
 *
 * <span class="docs--badge__wip">wip</span>
 */
const StandaloneIcon = ({ symbol, variant, size, a11yText, ...rest }) => (
  <Icon {...rest} symbol={symbol} variant={variant} size={size} aria-label={a11yText} />
)

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
  /**
   * A description of the icon for screen readers.
   */
  a11yText: PropTypes.string.isRequired
}

StandaloneIcon.defaultProps = {
  variant: undefined,
  size: 24
}

export default StandaloneIcon
