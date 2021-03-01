import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { buttons } from '@tds/shared-styles'
import { safeRest } from '@tds/util-helpers'
import A11yContent from '@tds/core-a11y-content'

import Icon from './icon.svg'

const TooltipIconClickable = styled.button(buttons.noStyle, { display: 'flex' })

const mobileDeviceTapArea = 32 // https://www.w3.org/TR/mobile-accessibility-mapping/#touch-target-size-and-spacing
const touchAreaStyles = iconSize => {
  const length = (mobileDeviceTapArea - iconSize) / 2

  return {
    padding: `${length}px`,
    margin: `-${length}px`,
  }
}

const TooltipIcon = ({ a11yText, onClick, ...rest }) => {
  return (
    <TooltipIconClickable {...safeRest(rest)} onClick={onClick} style={touchAreaStyles(24)}>
      <>
        <A11yContent>{a11yText}</A11yContent>
        <Icon />
      </>
    </TooltipIconClickable>
  )
}

TooltipIcon.propTypes = {
  /**
   * Pass a handler to the icon to make it interactive. Wraps the icon with a `<button>`.
   */
  onClick: PropTypes.func,
  /**
   * A description of the icon for screen readers.
   */
  a11yText: PropTypes.string.isRequired,
}

TooltipIcon.defaultProps = {
  onClick: undefined,
}

export default TooltipIcon
