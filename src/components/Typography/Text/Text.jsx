import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'
import Sup from '../Sup/Sup'

import styles from './Text.modules.scss'


const renderSup = (size, children) => {
  let sup = null

  if (children) {
    sup = (
      <Sup size={size}>
        {children}
      </Sup>
    )
  }

  return sup
}

const Text = ({ bold, size, invert, children, sup, ...rest }) => {
  const classes = classnames(
    styles[size],
    bold ? styles.boldFont : styles[`${size}Font`],
    invert ? styles.colorInverted : styles.color
  )

  return (
    <span {...safeRest(rest)} className={classes}>
      {children}
      {renderSup(size, sup)}
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
  sup: PropTypes.string,
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Text.defaultProps = {
  bold: false,
  size: 'medium',
  invert: false,
  sup: null
}

export default Text
