import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'

import styles from './Heading.modules.scss'

const getClassName = (size, invert) => {
  return classnames(
    styles[size],
    invert ? styles.inverted : null
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
  size: PropTypes.oneOf([
    'h1', 'h2', 'h3', 'h4'
  ]).isRequired,
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired
}
Heading.defaultProps = {
  size: 'h1',
  invert: false
}

export default Heading
