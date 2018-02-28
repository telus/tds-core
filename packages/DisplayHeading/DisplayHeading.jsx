import React from 'react'
import PropTypes from 'prop-types'

import Responsive from '@tds/core-responsive'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'

import DisplayHeadingSup from './DisplayHeadingSup/DisplayHeadingSup'

import styles from './DisplayHeading.modules.scss'

const getClassName = (invert, desktop) =>
  joinClassNames(
    desktop ? styles.headingDesktop : styles.heading,
    invert ? styles.inverted : styles.default
  )

/**
 * @version 0.0.0-development
 *
 * Large page titles. Renders an HTML `<h1>` element.
 */
const DisplayHeading = ({ invert, children, ...rest }) => (
  <Responsive minWidth="md" defaultMatches={false}>
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
