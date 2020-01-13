import { prepareArray, generateStyles } from '@tds/util-helpers'

const MOBILE_BREAKPOINTS = ['xs', 'sm']
const DESKTOP_BREAKPOINTS = ['md', 'lg', 'xl']

export const isMobileBreakpoint = breakpoint => MOBILE_BREAKPOINTS.indexOf(breakpoint) !== -1
export const isDesktopBreakpoint = breakpoint => DESKTOP_BREAKPOINTS.indexOf(breakpoint) !== -1

const handleBoundaryCrossing = (acc, curr) => {
  if (
    isMobileBreakpoint(curr.from) &&
    ((isDesktopBreakpoint(curr.until) && curr.until !== 'md') || typeof curr.until === 'undefined')
  ) {
    const mobileBreakpoint = Object.assign({}, curr, { props: curr.props })
    const desktopBreakpoint = Object.assign({}, curr, { props: curr.props })

    mobileBreakpoint.until = 'md'
    desktopBreakpoint.from = 'md'

    return acc.concat(mobileBreakpoint, desktopBreakpoint)
  }
  return acc.concat(curr)
}

const generateResponsiveStyles = (props, styleFn) => {
  const breakpoints = prepareArray(props)
    .filter(bp => Object.keys(bp.props).length > 0)
    .reduce(handleBoundaryCrossing, [])
  return generateStyles(breakpoints, styleFn)
}

export default generateResponsiveStyles
