import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'
import joinClassNames from '../../../utils/joinClassNames'

import Responsive from '../../ResponsiveReactMedia/ResponsiveReactMedia'
import HeadingSup from './HeadingSup/HeadingSup'

import styles from './Heading.modules.scss'

const getDesktopClassName = (level, desktop) =>
  desktop ? styles[`${level}Desktop`] : styles[level]

const getColorClassName = (level, invert) => {
  if (invert) {
    return styles.inverted
  }

  return level === 'h1' || level === 'h2' ? styles.secondary : styles.default
}

/**
 * Page headings. Renders an HTML `<h1-h4>` element.
 */
const Heading = ({ level, invert, children, ...rest }) => {
  if (level === 'h1' || level === 'h2') {
    return (
      <Responsive minWidth="md">
        {desktop => {
          return React.createElement(
            level,
            {
              ...safeRest(rest),
              className: joinClassNames(
                getDesktopClassName(level, desktop),
                getColorClassName(level, invert)
              ),
            },
            children
          )
        }}
      </Responsive>
    )
  }

  return React.createElement(
    level,
    {
      ...safeRest(rest),
      className: joinClassNames(styles[level], getColorClassName(level, invert)),
    },
    children
  )
}

Heading.propTypes = {
  /**
   * The heading level.
   */
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The text. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired,
}
Heading.defaultProps = {
  invert: false,
}

Heading.Sup = HeadingSup

export default Heading
