import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'

import styles from './Heading.modules.scss'

const getClassName = (size, display, invert) => {
  return classnames(
    display ? styles.displayHeading : styles[size],
    invert ? styles.inverted : null
  )
}

const Heading = ({ size, display, invert, children, ...rest }) => (
  React.createElement(
    size,
    {
      ...safeRest(rest),
      className: getClassName(size, display, invert)
    },
    children
  )
)
Heading.propTypes = {
  size: PropTypes.oneOf([
    'h1', 'h2', 'h3', 'h4'
  ]).isRequired,
  display: PropTypes.bool,
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired
}
Heading.defaultProps = {
  size: 'h1',
  display: false,
  invert: false
}

export default Heading
