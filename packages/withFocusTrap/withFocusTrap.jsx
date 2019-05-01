/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useRef } from 'react'

// Returns an array of focusable elements in the order they are found in c
const getFocusable = c =>
  c.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')

const withFocusTrap = Component => {
  const WithFocusTrap = props => {
    const componentRef = useRef(null)

    const handleFocus = isEnd => () => {
      const focusableElements = getFocusable(componentRef.current)
      focusableElements[isEnd ? 0 : focusableElements.length - 1].focus()
    }

    return (
      <div>
        <div onFocus={handleFocus(false)} tabIndex={0} />
        <Component {...props} ref={componentRef} />
        <div onFocus={handleFocus(true)} tabIndex={0} />
      </div>
    )
  }
  return WithFocusTrap
}

export default withFocusTrap
