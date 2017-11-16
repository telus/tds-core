import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../../utils/safeRest'

import Responsive from '../../Responsive/Responsive'
import DisplayHeadingSup from './DisplayHeadingSup/DisplayHeadingSup'
import DisplayHeadingSub from './DisplayHeadingSub/DisplayHeadingSub'

import styles from './DisplayHeading.modules.scss'

const getClassName = (invert, desktop) => {
  if (invert && desktop) {
    return styles.invertedDesktop
  } else if (!invert && desktop) {
    return styles.defaultDesktop
  } else if (invert && !desktop) {
    return styles.inverted
  }
  return styles.default
}

/**
 * Large page titles. Renders an HTML `<h1>` element.
 */
const DisplayHeading = ({ invert, children, ...rest }) => (
  <Responsive minWidth="md">
    {matches => {
      const desktop = !!matches

      return (
        <h1 {...safeRest(rest)} className={getClassName(invert, desktop)}>
          {children}
        </h1>
      )
    }}
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
DisplayHeading.Sub = DisplayHeadingSub

export default DisplayHeading
