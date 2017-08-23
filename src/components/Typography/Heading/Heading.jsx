import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'

import styles from './Heading.modules.scss'

const getClassName = (size, invert) => {
  if (invert) {
    return styles.invert
  }

  return classnames(
    styles.heading,
    styles.size
  )
}

const Heading = ({ size, invert, children, ...rest }) => (
  React.createElement(
    size,
    {
      ...safeRest(rest),
      className: getClassName(size, invert)
    },
    children
  )
)
Heading.propTypes = {
  size: PropTypes.string.isRequired,
  invert: PropTypes.bool,
  children: PropTypes.string.isRequired
}
Heading.defaultProps = {
  size: 'h1',
  invert: false
}

export default Heading
