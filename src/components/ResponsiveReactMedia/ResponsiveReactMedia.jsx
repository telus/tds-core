import React from 'react'
import PropTypes from 'prop-types'
import Media from 'react-media'

import { warn } from '../../utils/warn'

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

/**
 * Define content within viewport breakpoints
 *
 * <span class="docs--badge__new">new!</span> <span class="docs--badge__version">v0.30.0</span>
 */
// TODO: What about other media query properties such as screen, etc...
const Responsive = ({ minWidth, maxWidth, children, ...rest }) => {
  if (!minWidth && !maxWidth) {
    warn('Responsive', 'Responsive needs a minWidth or maxWith prop')
  }

  // Do it this way to not create an object with keys that have the value "undefined", which causes the generated media-query to be invalid
  // (min-width: 300px) and (max-width: undefined) is bad :(
  // (min-width: 300px) is good :)
  const query = {}
  if (minWidth) {
    query.minWidth = breakpoints[minWidth]
  }
  if (maxWidth) {
    query.maxWidth = breakpoints[maxWidth] - 1
  }

  return (
    <Media {...rest} query={query}>
      {children}
    </Media>
  )
}

Responsive.propTypes = {
  /**
   * Set browser min-width media query.
   */
  minWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /**
   * Set browser max-width media query.
   */
  maxWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
}

Responsive.defaultProps = {
  minWidth: undefined,
  maxWidth: undefined,
}

export default Responsive
