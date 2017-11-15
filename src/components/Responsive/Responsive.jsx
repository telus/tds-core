import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import safeRest from '../../utils/safeRest'
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
const Responsive = ({ minWidth, maxWidth, children, ...rest }) => {
  if (!minWidth && !maxWidth) {
    warn('Responsive', 'Responsive needs a minWidth or maxWith prop')
  }

  const props = {
    ...safeRest(rest),
    minWidth: minWidth ? breakpoints[minWidth] : undefined,
    maxWidth: maxWidth ? breakpoints[maxWidth] - 1 : undefined,
  }

  return <MediaQuery {...props}>{children}</MediaQuery>
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
  children: PropTypes.node.isRequired,
}

Responsive.defaultProps = {
  minWidth: undefined,
  maxWidth: undefined,
}

export default Responsive
