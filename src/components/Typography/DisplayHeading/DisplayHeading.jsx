import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../utils/safeRest'
import joinClassNames from '../../../utils/joinClassNames'

import Responsive from '../../Responsive/Responsive'
import DisplayHeadingSup from './DisplayHeadingSup/DisplayHeadingSup'

import styles from './DisplayHeading.modules.scss'

const getClassName = (invert, desktop) => {
  return joinClassNames(
    styles.heading,
    desktop ? styles.headingSizeDesktop : styles.headingSize,
    invert ? styles.inverted : styles.default
  )
}

/**
 * Large page titles. Renders an HTML `<h1>` element.
 */
const DisplayHeading = ({ invert, children, ...rest }) => (
  <Responsive minWidth="md">
    {desktop => (
      <h1 {...safeRest(rest)} className={getClassName(invert, desktop)}>
        {children}
      </h1>
    )}
  </Responsive>
)

DisplayHeading.propTypes = {
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The text. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired,
}

DisplayHeading.defaultProps = {
  invert: false,
}

DisplayHeading.Sup = DisplayHeadingSup

export default DisplayHeading
