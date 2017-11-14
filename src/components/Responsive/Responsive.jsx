import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const getQuery = breakpoint => {
  if (!breakpoint) {
    return undefined
  }

  return `(min-width: ${breakpoints[breakpoint]}px)`
}

const Responsive = ({ minWidth, children }) => (
  <MediaQuery query={getQuery(minWidth)}>{children}</MediaQuery>
)

Responsive.propTypes = {
  minWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  // maxWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  children: PropTypes.node.isRequired,
}

Responsive.defaultProps = {
  minWidth: undefined,
  // maxWidth: undefined,
}

export default Responsive
