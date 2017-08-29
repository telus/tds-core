import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import safeRest from '../../../safeRest'

import spacingStyles from '../../Spacing.modules.scss'
import styles from './Paragraph.modules.scss'
import textStyles from '../Text/Text.modules.scss'

const Paragraph = ({ bold, size, align, invert, children, ...rest }, context) => {
  const paragraphColor = invert ? textStyles.colorInverted : textStyles.color

  const classes = classnames(
    spacingStyles.noSpacing,
    context.inheritColor ? styles.inheritColor : paragraphColor,
    textStyles[size],
    bold ? textStyles.boldFont : textStyles[`${size}Font`],
    styles[`${align}Align`]
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
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Paragraph.defaultProps = {
  bold: false,
  size: 'medium',
  align: 'left',
  invert: false
}

Paragraph.contextTypes = {
  inheritColor: PropTypes.bool
}

export default Paragraph
