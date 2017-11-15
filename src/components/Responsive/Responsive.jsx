import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import { warn } from '../../utils/warn'

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const getQuery = (minBreakpoint, maxBreakpoint) => {
  if (!minBreakpoint && !maxBreakpoint) {
    return undefined
  } else if (minBreakpoint && maxBreakpoint) {
    return `(min-width: ${breakpoints[minBreakpoint]}px) and (max-width: ${breakpoints[
      maxBreakpoint
    ] - 1}px)`
  } else if (minBreakpoint) {
    return `(min-width: ${breakpoints[minBreakpoint]}px)`
  }
  return `(max-width: ${breakpoints[maxBreakpoint] - 1}px)`
}

const Responsive = ({ minWidth, maxWidth, children }) => {
  if (!minWidth && !maxWidth) {
    warn('Responsive', 'Responsive needs a minWidth or maxWith prop')
  }

  return <MediaQuery query={getQuery(minWidth, maxWidth)}>{children}</MediaQuery>
}

Responsive.propTypes = {
  minWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  children: PropTypes.node.isRequired,
}

Responsive.defaultProps = {
  minWidth: undefined,
  maxWidth: undefined,
}

export default Responsive
