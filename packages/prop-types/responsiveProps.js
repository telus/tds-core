import PropTypes from 'prop-types'

/**
 * Offset the specified number of columns within the 'sm' breakpoint range.
 *
 * @since 1.2.0
 */
export default function responsiveProps(type) {
  return PropTypes.oneOfType([
    type,
    PropTypes.shape({
      xs: type,
      sm: type,
      md: type,
      lg: type,
      xl: type,
    }),
  ])
}
