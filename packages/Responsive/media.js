export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export default {
  from: breakpoint => style => ({
    [`@media (min-width: ${breakpoints[breakpoint]}px)`]: {
      ...style,
    },
  }),
}
