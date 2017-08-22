import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'

import styles from '../Paragraph/Paragraph.modules.scss'


const Text = ({ bold, size, children, ...rest }) => {
  const classes = classnames(
    styles.color,
    styles[size],
    {
      [styles.bold]: bold
    }
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
