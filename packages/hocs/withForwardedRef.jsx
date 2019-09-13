import React, { forwardRef } from 'react'

const getDisplayName = Component => {
  return Component.displayName || Component.name || 'Component'
}

const withForwardedRef = Component => {
  const WithForwardedRef = forwardRef((props, ref) => <Component {...props} forwardedRef={ref} />)

  WithForwardedRef.displayName = `WithForwardedRef(${getDisplayName(Component)})`

  return WithForwardedRef
}

export default withForwardedRef
