/* eslint-disable import/prefer-default-export */

export const deprecate = (componentName, message) => {
  if (process.env.NODE_ENV === 'production') {
    return
  }

  console.warn(`[TDS] [Deprecate] ${componentName}: ${message}`) // eslint-disable-line no-console
}

export const warn = (componentName, message) => {
  if (process.env.NODE_ENV === 'production') {
    return
  }

  console.warn(`[TDS] ${componentName}: ${message}`) // eslint-disable-line no-console
}
