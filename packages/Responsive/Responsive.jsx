import React from 'react'
import PropTypes from 'prop-types'
import Media from 'react-media'

import { warn } from '../../shared/utils/warn'

import { breakpoints } from './media'

/**
 * Respond to device features, most commonly the browser viewport size.
 *
 * @version ./package.json
 */
const Responsive = ({ minWidth, maxWidth, query, children, ...rest }) => {
  if (!minWidth && !maxWidth) {
    warn('Responsive', 'Responsive needs a minWidth or maxWith prop')
  }

  // Do it this way to not create an object where some keys have the value "undefined", which causes the generated media-query to be invalid.
  // (min-width: 300px) and (max-width: undefined) is bad :(
  // (min-width: 300px) is good :)
  const mediaQuery = {}
  if (minWidth) {
    mediaQuery.minWidth = breakpoints[minWidth]
  }
  if (maxWidth) {
    mediaQuery.maxWidth = breakpoints[maxWidth] - 1
  }

  return (
    <Media {...rest} query={{ ...mediaQuery, ...query }}>
      {children}
    </Media>
  )
}

Responsive.propTypes = {
  /**
   * Set a min-width media query.
   */
  minWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /**
   * Set a max-width media query.
   */
  maxWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /**
   * An object containing any valid CSS media query characteristics. It will be converted to a CSS media query.
   * Use `query` if you need characteristics other than `minWidth` and `maxWidth`.
   *
   * Any `minWidth` or `maxWidth` values here will override the props by the same name.
   */
  query: PropTypes.object,
  /**
   * The content. Can be text, any HTML element, a function, or any component.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}

Responsive.defaultProps = {
  minWidth: undefined,
  maxWidth: undefined,
  query: {},
  children: undefined,
}

export default Responsive
