import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'

import Icon from '../../shared/components/Icon/Icon'
import Clickable from '../../shared/components/Clickable/Clickable'

const mobileDeviceTapArea = 32 // https://www.w3.org/TR/mobile-accessibility-mapping/#touch-target-size-and-spacing
const touchAreaStyles = iconSize => {
  const length = (mobileDeviceTapArea - iconSize) / 2

  return {
    padding: `${length}px`,
    margin: `-${length}px`,
  }
}

/**
 * An icon that has meaning within the context of the page, which should be communicated to screen readers.
 *
 * @version ./package.json
 */
const StandaloneIcon = ({ symbol, variant, size, onClick, a11yText, innerRef, ...rest }) => {
  const iconProps = {
    symbol,
    variant,
    size,
    'aria-label': a11yText,
  }

  if (onClick) {
    const needsExpandedTouchArea = size < mobileDeviceTapArea

    return (
      <Clickable
        {...safeRest(rest)}
        innerRef={innerRef}
        onClick={onClick}
        style={needsExpandedTouchArea ? touchAreaStyles(size) : undefined}
      >
        <Icon {...iconProps} />
      </Clickable>
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
  /* @ignore */
  innerRef: PropTypes.object,
}

StandaloneIcon.defaultProps = {
  variant: undefined,
  size: 24,
  onClick: undefined,
  innerRef: undefined,
}

export default StandaloneIcon
