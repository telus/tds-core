import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'

import styles from './Paragraph.modules.scss'
import textStyles from '../Text/Text.modules.scss'

const Paragraph = ({ bold, size, children, ...rest }, context) => {
  const classes = classnames(
    styles.base,
    context.inheritColor ? styles.inheritColor : textStyles.color,
    textStyles[size],
    bold ? textStyles.boldFont : textStyles[`${size}Font`]
  )

  return (
    <p {...safeRest(rest)} className={classes}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  bold: PropTypes.bool,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  children: PropTypes.node.isRequired
}

Paragraph.defaultProps = {
  bold: false,
  size: 'medium'
}

Paragraph.contextTypes = {
  inheritColor: PropTypes.bool
}

export default Paragraph
