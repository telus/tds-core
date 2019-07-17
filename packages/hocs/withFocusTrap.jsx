/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// Returns an array of focusable elements in the order they are found in c
const selector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), audio[controls], video[controls], [contenteditable]:not([contenteditable=false])'
const getFocusable = c => c.querySelectorAll(selector)

const withFocusTrap = Component => {
  const WithFocusTrap = props => {
    const componentRef = useRef(null)

    // To force VoiceOver to treat the dialog as a modal we need to set the aria-label attribute.
    // Also the modal-dialog html needs to be inserted into the page using JS after the page loads (this isn't a real problem)
    const { a11yText, autofocus, ...rest } = props

    useEffect(() => {
      if (autofocus) {
        // setting the focus to the first focusable element on mount only
        const focusableElements = componentRef.current && getFocusable(componentRef.current)[0]
        if (focusableElements) focusableElements.focus()
      }
    }, [autofocus])

    const handleFocus = isEnd => () => {
      const focusableElements = getFocusable(componentRef.current)
      focusableElements[isEnd ? 0 : focusableElements.length - 1].focus()
    }

    return (
      <div role="dialog" aria-modal="true" aria-label={a11yText}>
        <div onFocus={handleFocus(false)} tabIndex={0} />
        <div ref={componentRef}>
          <Component {...rest} />
        </div>
        <div onFocus={handleFocus(true)} tabIndex={0} />
      </div>
    )
  }

  WithFocusTrap.propTypes = {
    a11yText: PropTypes.string,
    autofocus: PropTypes.bool,
  }

  WithFocusTrap.defaultProps = {
    a11yText: 'modal dialog',
    autofocus: true,
  }

  return WithFocusTrap
}

export default withFocusTrap
