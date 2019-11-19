import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../shared/components/Icon/Icon'
import { deprecate } from '../../shared/utils/warn'

/**
 * @deprecated An icon used for visual aesthetics only.
 *
 * @version ./package.json
 */
const DecorativeIcon = ({ symbol, variant, size, ...rest }) => {
  useEffect(() => {
    deprecate(
      '@tds/core-decorative-icon',
      'The DecorativeIcon component is deprecated. Please use the SVG exports from @tds/core-decorative-icon, or other Icon components.'
    )
  }, [])
  return <Icon {...rest} symbol={symbol} variant={variant} size={size} aria-hidden="true" />
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
  size: PropTypes.oneOf([16, 20, 24, 32, 48]),
}

DecorativeIcon.defaultProps = {
  variant: undefined,
  size: 24,
}

export default DecorativeIcon
