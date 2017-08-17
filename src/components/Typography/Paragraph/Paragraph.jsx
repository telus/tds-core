import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Paragraph.modules.scss'

const Paragraph = ({ bold, children }, context) => {
  const classes = classnames(
    styles.base,
    context.inheritColor ? styles.inheritColor : styles.color,
    {
      [styles.bold]: bold
    }
  )

  return (
    <p className={classes}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Paragraph.defaultProps = {
  bold: false
}

Paragraph.contextTypes = {
  inheritColor: PropTypes.bool
}

export default Paragraph
