import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

import styles from './Heading.modules.scss'

const getColorClassName = level => (
  level === 'h1' || level === 'h2' ? styles.secondary : styles.default
)

const getClassName = (level, invert) => {
  const colorClassName = invert ? styles.inverted : getColorClassName(level)

  return `${styles[level]} ${colorClassName}`
}

const Heading = ({ level, invert, children, ...rest }) => (
  React.createElement(
    level,
    {
      ...safeRest(rest),
      className: getClassName(level, invert)
    },
    children
  )
)
Heading.propTypes = {
  level: PropTypes.oneOf([
    'h1', 'h2', 'h3', 'h4'
  ]).isRequired,
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired
}
Heading.defaultProps = {
  level: 'h1',
  invert: false
}

export default Heading
