import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'

import joinClassNames from '../../../utils/joinClassNames'
import styles from './HairlineDivider.modules.scss'

/**
 * Separate content.
 */
const HairlineDivider = ({ vertical, gradient, ...rest }) => {
  const classes = joinClassNames(
    vertical ? styles.vertical : styles.horizontal,
    gradient ? styles.gradient : styles.thin
  )

  return (
    <hr {...safeRest(rest)} className={classes} />
  )
}

HairlineDivider.propTypes = {
  vertical: PropTypes.bool,
  gradient: PropTypes.bool
}

HairlineDivider.defaultProps = {
  vertical: false,
  gradient: false
}

export default HairlineDivider
