import { media } from '@tds/core-responsive'

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl']
const MOBILE_BREAKPOINTS = ['xs', 'sm']
const DESKTOP_BREAKPOINTS = ['md', 'lg', 'xl']

export const isMobileBreakpoint = breakpoint => MOBILE_BREAKPOINTS.indexOf(breakpoint) !== -1
export const isDesktopBreakpoint = breakpoint => DESKTOP_BREAKPOINTS.indexOf(breakpoint) !== -1

const isResponsiveProp = prop =>
  prop && BREAKPOINTS.find(breakpoint => Object.prototype.hasOwnProperty.call(prop, breakpoint))

const getResponsiveProps = props => Object.keys(props).filter(prop => isResponsiveProp(props[prop]))
const getStaticProps = props => Object.keys(props).filter(prop => !isResponsiveProp(props[prop]))

const sortBreakpointAsc = (a, b) => {
  if (BREAKPOINTS.indexOf(a.from) > BREAKPOINTS.indexOf(b.from)) {
    return 1
  }
  if (BREAKPOINTS.indexOf(a.from) < BREAKPOINTS.indexOf(b.from)) {
    return -1
  }
  return 0
}

const collectBreakpoints = props => breakpoint => {
  const o = {
    from: breakpoint,
    until: undefined,
    props: {
      ...getStaticProps(props).reduce((acc, staticProp) => {
        if (typeof props[staticProp] !== 'undefined') {
          acc[staticProp] = props[staticProp]
        }
        return acc
      }, {}),
      ...getResponsiveProps(props).reduce((acc, responsiveProp) => {
        if (typeof props[responsiveProp][breakpoint] !== 'undefined') {
          acc[responsiveProp] = props[responsiveProp][breakpoint]
        }
        return acc
      }, {}),
    },
  }
  return o
}

const inheritAndPopulateUntil = (bp, index, src) => {
  const breakpoint = bp
  if (index !== 0) {
    breakpoint.props = { ...src[index - 1].props, ...bp.props }
  }
  if (index < src.length - 1) {
    breakpoint.until = src[index + 1].from
  }
  return breakpoint
}

export const prepareArray = props => {
  // gather all breakpoints
  const responsivePropNames = getResponsiveProps(props)
  const breakpoints = []
  responsivePropNames.forEach(responsivePropName => {
    Object.keys(props[responsivePropName]).forEach(breakpoint => {
      if (breakpoints.indexOf(breakpoint) === -1) {
        breakpoints.push(breakpoint)
      }
    })
  })

  // build object
  if (breakpoints.length === 0) {
    breakpoints.push('xs')
  }

  const preparedArray = breakpoints
    .map(collectBreakpoints(props))
    .sort(sortBreakpointAsc)
    .map(inheritAndPopulateUntil)

  return preparedArray
}

export const generateStyles = (breakpoints, style) => {
  const styles = breakpoints.reduce((acc, breakpoint) => {
    const props = breakpoint.props

    if (!(typeof breakpoint.from === 'undefined' && typeof breakpoint.until === 'undefined')) {
      const result = media
        .from(breakpoint.from === 'xs' ? undefined : breakpoint.from)
        .until(breakpoint.until === 'xl' ? undefined : breakpoint.until)
        .css(typeof style === 'function' ? style(props, breakpoint.from, breakpoint.until) : style)

      return {
        ...acc,
        ...result,
      }
    }
    return acc
  }, {})

  return styles
}

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

export const generateResponsiveStyles = (props, styleFn) => {
  const breakpoints = prepareArray(props)
  return generateStyles(breakpoints, styleFn)
}

export const handleResponsiveStyles = (props, styleFn) => {
  const breakpoints = prepareArray(props)
    .filter(bp => Object.keys(bp.props).length > 0)
    .reduce(handleBoundaryCrossing, [])
  return generateStyles(breakpoints, styleFn)
}

export default generateResponsiveStyles
