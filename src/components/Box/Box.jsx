import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'
import capitalize from '../../utils/capitalize'

import styles from './Box.modules.scss'

const getClassName = (spacing, location, scale) => {
  if (!scale) {
    return undefined
  }

  return styles[`${location}${capitalize(spacing)}-${scale}`]
}

const getClasses = (
  spacing,
  all,
  vertical,
  horizontal,
  top,
  right,
  bottom,
  left,
  dangerousClassName
) =>
  joinClassNames(
    getClassName(spacing, 'all', all),
    getClassName(spacing, 'vertical', vertical),
    getClassName(spacing, 'horizontal', horizontal),
    getClassName(spacing, 'top', top),
    getClassName(spacing, 'right', right),
    getClassName(spacing, 'bottom', bottom),
    getClassName(spacing, 'left', left),
    dangerousClassName
  )

const Box = ({
  spacing,
  all,
  vertical,
  horizontal,
  top,
  right,
  bottom,
  left,
  dangerouslyAddClassName,
  children,
  ...rest
}) => (
  <div
    {...safeRest(rest)}
    className={getClasses(
      spacing,
      all,
      vertical,
      horizontal,
      top,
      right,
      bottom,
      left,
      dangerouslyAddClassName
    )}
  >
    {children}
  </div>
)

Box.propTypes = {
  spacing: PropTypes.oneOf(['margin', 'padding']).isRequired,
  all: PropTypes.oneOf([1, 2, 3, 4, 6]),
  vertical: PropTypes.oneOf([1, 2, 3, 4, 6]),
  horizontal: PropTypes.oneOf([1, 2, 3, 4, 6]),
  top: PropTypes.oneOf([1, 2, 3, 4, 6]),
  right: PropTypes.oneOf([1, 2, 3, 4, 6]),
  bottom: PropTypes.oneOf([1, 2, 3, 4, 6]),
  left: PropTypes.oneOf([1, 2, 3, 4, 6]),
  dangerouslyAddClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Box.defaultProps = {
  all: undefined,
  vertical: undefined,
  horizontal: undefined,
  top: undefined,
  right: undefined,
  bottom: undefined,
  left: undefined,
  dangerouslyAddClassName: undefined,
}

export default Box
