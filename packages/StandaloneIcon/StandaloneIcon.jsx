import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import A11yContent from '@tds/core-a11y-content'
import { buttons } from '@tds/shared-styles'
import { safeRest } from '@tds/util-helpers'

import { deprecate } from '../../shared/utils/warn'

import Icon from '../../shared/components/Icon/Icon'

const mobileDeviceTapArea = 32 // https://www.w3.org/TR/mobile-accessibility-mapping/#touch-target-size-and-spacing
const touchAreaStyles = iconSize => {
  const length = (mobileDeviceTapArea - iconSize) / 2

  return {
    padding: `${length}px`,
    margin: `-${length}px`,
  }
}

const StandaloneIconClickable = styled.button(buttons.noStyle)

/**
 * @deprecated An icon that has meaning within the context of the page, which should be communicated to screen readers.
 *
 * @version ./package.json
 */
const StandaloneIcon = ({ symbol, variant, size, onClick, a11yText, innerRef, ...rest }) => {
  useEffect(() => {
    deprecate(
      '@tds/core-standalone-icon',
      'The StandaloneIcon component is deprecated. Please use a InteractiveIcon instead.'
    )
  }, [])
  const iconProps = {
    symbol,
    variant,
    size,
  }

  if (onClick) {
    const needsExpandedTouchArea = size < mobileDeviceTapArea

    return (
      <StandaloneIconClickable
        {...safeRest(rest)}
        ref={innerRef}
        onClick={onClick}
        style={needsExpandedTouchArea ? touchAreaStyles(size) : undefined}
      >
        <Icon {...iconProps}>
          <A11yContent>{a11yText}</A11yContent>
        </Icon>
      </StandaloneIconClickable>
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
  size: PropTypes.oneOf([16, 20, 24, 32, 48]),
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
