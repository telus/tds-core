import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../src/utils/safeRest'

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
 * Separate content within modules.
 */
const HairlineDivider = ({ vertical, gradient, ...rest }) => (
  <hr {...safeRest(rest)} className={styles[getClassName(vertical, gradient)]} />
)

HairlineDivider.propTypes = {
  /**
   * Draw the divider vertically.
   */
  vertical: PropTypes.bool,
  /**
   * Use a subtle gradient instead of a solid thin line.
   */
  gradient: PropTypes.bool,
}

HairlineDivider.defaultProps = {
  vertical: false,
  gradient: false,
}

export default HairlineDivider
