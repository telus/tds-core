import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'

import styles from './Paragraph.modules.scss'
import textStyles from '../Text/Text.modules.scss'

const Paragraph = ({ bold, size, invert, children, ...rest }, context) => {

  const paragraphColor = invert ? textStyles.colorInverted : textStyles.color

  const classes = classnames(
    styles.base,
    context.inheritColor ? styles.inheritColor : paragraphColor,
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
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Paragraph.defaultProps = {
  bold: false,
  size: 'medium',
  invert: false
}

Paragraph.contextTypes = {
  inheritColor: PropTypes.bool
}

export default Paragraph
