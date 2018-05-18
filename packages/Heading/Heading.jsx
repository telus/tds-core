import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'

import HeadingSup from './HeadingSup/HeadingSup'

import styles from './Heading.modules.scss'

const BaseHeading = ({ level, color, size, children, ...rest }) =>
  React.createElement(
    level,
    {
      ...safeRest(rest),
      className: joinClassNames(size, color),
    },
    children
  )

BaseHeading.propTypes = {
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

/**
 * Page headings. Renders an HTML `<h1-h4>` element.
 *
 * @version ./package.json
 */
const Heading = ({ level, size = level, invert, children, ...rest }) => {
  const baseHeadingProps = {
    ...rest,
    level,
  }
  if (level === 'h1' || level === 'h2') {
    const color = invert ? styles.inverted : styles.secondary

    return (
      <BaseHeading {...baseHeadingProps} color={color} size={styles[size]}>
        {children}
      </BaseHeading>
    )
  }

  return (
    <BaseHeading
      {...baseHeadingProps}
      color={invert ? styles.inverted : styles.default}
      size={styles[size]}
    >
      {children}
    </BaseHeading>
  )
}

Heading.propTypes = {
  /**
   * The semantic level of the heading.
   */
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  /**
   * The size of the heading.
   */
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
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
  size: undefined,
}

Heading.Sup = HeadingSup

export default Heading
