import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'

import styles from './HairlineDivider.modules.scss'

const getClassName = (vertical, gradient) => {
  let hrClass

  if (vertical && gradient) {
    hrClass = 'verticalGradient'
  } else if (vertical && !gradient) {
    hrClass = 'verticalThin'
  } else if (!vertical && gradient) {
    hrClass = 'horizontalGradient'
  } else {
    hrClass = 'horizontalThin'
  }

  return hrClass
}

/**
 * Separate content.
 */
const HairlineDivider = ({ vertical, gradient, ...rest }) => {
  return (
    <hr {...safeRest(rest)} className={styles[getClassName(vertical, gradient)]} />
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
