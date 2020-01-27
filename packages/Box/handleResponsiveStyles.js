import { prepareArray, generateStyles } from '@tds/util-helpers'

const MOBILE_BREAKPOINTS = ['xs', 'sm']
const DESKTOP_BREAKPOINTS = ['md', 'lg', 'xl']

export const isMobileBreakpoint = breakpoint => MOBILE_BREAKPOINTS.indexOf(breakpoint) !== -1
export const isDesktopBreakpoint = breakpoint => DESKTOP_BREAKPOINTS.indexOf(breakpoint) !== -1

const handleBoundaryCrossing = (acc, curr) => {
  if (
    isMobileBreakpoint(curr.from) &&
    ((curr.until !== 'md' && isDesktopBreakpoint(curr.until)) || typeof curr.until === 'undefined')
  ) {
    const props = Object.keys(curr.props).filter(
      prop => typeof curr.props[prop] === 'number' && curr.props[prop] > 3
    )
    if (props.length !== 0) {
      const mobileBreakpoint = { ...curr, props: curr.props }
      const desktopBreakpoint = { ...curr, props: curr.props }

      mobileBreakpoint.until = 'md'
      desktopBreakpoint.from = 'md'

      return acc.concat([mobileBreakpoint, desktopBreakpoint])
    }
  }
  return acc.concat([curr])
}

const handleResponsiveStyles = (props, styleFn) => {
  const breakpoints = prepareArray(props)
    .filter(bp => Object.keys(bp.props).length > 0)
    .reduce(handleBoundaryCrossing, [])
  return generateStyles(breakpoints, styleFn)
}

export default handleResponsiveStyles
