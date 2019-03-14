import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'

import styles from '../../shared/components/Icon/Icon.modules.scss'
import capitalize from '../../shared/utils/capitalize'

const SVGIcon = ({ children, variant, size, ...rest }) => {
  const classes = joinClassNames(
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
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  size: PropTypes.oneOf([16, 24, 48]),
}

SVGIcon.defaultProps = {
  variant: 'primary',
  size: 24,
}

export default SVGIcon
