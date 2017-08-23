import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'

import styles from './Text.modules.scss'

const Text = ({ bold, size, invert, children, ...rest }) => {
  const classes = classnames(
    styles[size],
    bold ? styles.boldFont : styles[`${size}Font`],
    invert ? styles.colorInverted : styles.color
  )

  return (
    <span {...safeRest(rest)} className={classes}>
      {children}
    </span>
  )
}

Text.propTypes = {
  bold: PropTypes.bool,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Text.defaultProps = {
  bold: false,
  size: 'medium',
  invert: false
}

export default Text
