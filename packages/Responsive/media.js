export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export default {
  query: {},
  from(breakpoint) {
    this.query.minWidth = breakpoint
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

    const min = minWidth ? `(min-width: ${breakpoints[minWidth]}px)` : null
    const max = maxWidth ? `(max-width: ${breakpoints[maxWidth]}px)` : null

    const mediaQuery = `@media ${[min, max, and].filter(a => a).join(' and ')}`
    this.query = {}

    return {
      [mediaQuery]: {
        ...(typeof style === 'function' ? style() : style),
      },
    }
  },
}
