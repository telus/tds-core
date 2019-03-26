import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'

import styles from '../../shared/components/Icon/Icon.modules.scss'
import capitalize from '../../shared/utils/capitalize'
/**
 * SVG Icons are a type of DecorativeIcon that use SVGs instead of fonts to render the icons.
 *
 * @version ./package.json
 */
const SVGIcon = ({ children, variant, size, ...rest }) => {
  const classes = joinClassNames(
    styles.svgBase,
    variant && styles[`svgVariant${capitalize(variant)}`],
    size && styles[`svgSize${size}`]
  )

  return (
    <i {...safeRest(rest)} className={classes} aria-hidden="true">
      {children}
    </i>
  )
}

SVGIcon.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
  /**
   * The appearance of the Icon.
   */
  variant: PropTypes.oneOf(['default', 'alternative', 'inverted']),
  /**
   * The icon size in pixels.
   */
  size: PropTypes.oneOf([16, 24, 48]),
}

SVGIcon.defaultProps = {
  variant: 'default',
  size: 24,
}

export default SVGIcon
