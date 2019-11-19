import { media } from '@tds/core-responsive'

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl']
const MOBILE_BREAKPOINTS = ['xs', 'sm']
const DESKTOP_BREAKPOINTS = ['md', 'lg', 'xl']

const isMobileBreakpoint = breakpoint => MOBILE_BREAKPOINTS.indexOf(breakpoint) !== -1
const isDesktopBreakpoint = breakpoint => DESKTOP_BREAKPOINTS.indexOf(breakpoint) !== -1

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
    props: Object.assign(
      {},
      getStaticProps(props).reduce((acc, staticProp) => {
        if (typeof props[staticProp] !== 'undefined') {
          acc[staticProp] = props[staticProp]
        }
        return acc
      }, {}),
      getResponsiveProps(props).reduce((acc, responsiveProp) => {
        if (typeof props[responsiveProp][breakpoint] !== 'undefined') {
          acc[responsiveProp] = props[responsiveProp][breakpoint]
        }
        return acc
      }, {})
    ),
  }
  return o
}

const inheritAndPopulateUntil = (bp, index, src) => {
  const breakpoint = bp
  if (index !== 0) {
    breakpoint.props = Object.assign({}, src[index - 1].props, bp.props)
  }
  if (index < src.length - 1) {
    breakpoint.until = src[index + 1].from
  }
  return breakpoint
}

const handleBoundaryCrossing = (acc, curr) => {
  if (isMobileBreakpoint(curr.from) && (isDesktopBreakpoint(curr.until) && curr.until !== 'md')) {
    const mobileBreakpoint = Object.assign({}, curr, { props: curr.props })
    const desktopBreakpoint = Object.assign({}, curr, { props: curr.props })

    mobileBreakpoint.until = 'md'
    desktopBreakpoint.from = 'md'

    return [...acc, mobileBreakpoint, desktopBreakpoint]
  }
  return [...acc, curr]
}

export const prepareArray = props => {
  // gather all breakpoints
  const responsivePropNames = getResponsiveProps(props)
  const breakpoints = new Set()
  responsivePropNames.forEach(responsivePropName => {
    Object.keys(props[responsivePropName]).forEach(breakpoint => {
      breakpoints.add(breakpoint)
    })
  })

  // build object
  if (breakpoints.size === 0) {
    breakpoints.add('xs')
  }

  const preparedArray = Array.from(breakpoints)
    .map(collectBreakpoints(props))
    .sort(sortBreakpointAsc)
    .map(inheritAndPopulateUntil)
    .reduce(handleBoundaryCrossing, [])

  return preparedArray
}

export const generateStyles = (breakpoints, style) => {
  const styles = breakpoints.reduce((acc, breakpoint) => {
    const props = breakpoint.props

    if (!(typeof breakpoint.from === 'undefined' && typeof breakpoint.until === 'undefined')) {
      const result = media
        .from(breakpoint.from === 'xs' ? undefined : breakpoint.from)
        .until(breakpoint.until === 'xl' ? undefined : breakpoint.until)
        .css(typeof style === 'function' ? style(props, breakpoint.from) : style)

      return {
        ...acc,
        ...result,
      }
    }
    return acc
  }, {})

  return styles
}

export const generateResponsiveStyles = (props, styleFn) => {
  const breakpoints = prepareArray(props)
  return generateStyles(breakpoints, styleFn)
}

export default generateResponsiveStyles
