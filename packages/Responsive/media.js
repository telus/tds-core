export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export default {
  query: {},
  from(breakpoint) {
    if (breakpoint !== 'xs') {
      this.query.minWidth = breakpoint
    }
    return this
  },
  until(breakpoint) {
    this.query.maxWidth = breakpoint
    return this
  },
  and(custom) {
    this.query.and = custom
    return this
  },
  css(style) {
    const { minWidth, maxWidth, and } = this.query

    const min = minWidth ? `(min-width: ${breakpoints[minWidth]}px)` : undefined
    const max = maxWidth ? `(max-width: ${breakpoints[maxWidth] - 1}px)` : undefined

    if (typeof min !== 'undefined' || typeof max !== 'undefined' || typeof and !== 'undefined') {
      const mediaQuery = `@media ${[min, max, and].filter(a => a).join(' and ')}`
      this.query = {}

      return {
        [mediaQuery]: {
          ...(typeof style === 'function' ? style() : style),
        },
      }
    }

    return typeof style === 'function' ? style() : style
  },
}
