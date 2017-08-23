import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

const Heading = ({ size, children, ...rest }) => (
  React.createElement(
    size,
    safeRest(rest),
    children
  )
)
Heading.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}
Heading.defaultProps = {
  size: 'h1'
}

export default Heading
