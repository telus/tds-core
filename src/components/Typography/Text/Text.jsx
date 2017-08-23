import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'

import styles from './Text.modules.scss'

const Text = ({ bold, size, children, ...rest }) => {
  const classes = classnames(
    styles.color,
    styles[size],
    bold ? styles.boldFont : styles[`${size}Font`]
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
  children: PropTypes.node.isRequired
}

Text.defaultProps = {
  bold: false,
  size: 'medium'
}

export default Text
