/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// Returns an array of focusable elements in the order they are found in c
const selector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), audio[controls], video[controls], [contenteditable]:not([contenteditable=false]'
const getFocusable = c => c.querySelectorAll(selector)

const withFocusTrap = Component => {
  const WithFocusTrap = props => {
    const componentRef = useRef(null)

    useEffect(() => {
      // setting the focus to the first focusable element
      const focusableElements = getFocusable(componentRef.current)[0]
      if (focusableElements) focusableElements.focus()
    })

    // To force VoiceOver to treat the dialog as a modal we need to set the aria-label attribute.
    // Also the modal-dialog html needs to be inserted into the page using JS after the page loads (this isn't a real problem)
    const { ariaLabel, ...rest } = props

    const handleFocus = isEnd => () => {
      const focusableElements = getFocusable(componentRef.current)
      focusableElements[isEnd ? 0 : focusableElements.length - 1].focus()
    }

    return (
      <div role="dialog" aria-modal="true" aria-label={ariaLabel}>
        <div onFocus={handleFocus(false)} tabIndex={0} />
        <Component {...rest} ref={componentRef} />
        <div onFocus={handleFocus(true)} tabIndex={0} />
      </div>
    )
  }
  WithFocusTrap.propTypes = {
    ariaLabel: PropTypes.string,
  }

  WithFocusTrap.defaultProp = {
    ariaLabel: 'modal dialog',
  }

  return WithFocusTrap
}

export default withFocusTrap
