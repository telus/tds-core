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

const getBetweenClasses = (betweenSize, inline) => {
  if (!betweenSize) {
    return undefined
  } else if (inline) {
    return styles[`betweenRightMargin-${betweenSize}`]
  }

  return styles[`betweenBottomMargin-${betweenSize}`]
}

/**
 * Box - apply spacing within or around components
 */
const Box = ({
  inline,
  tag,
  vertical,
  horizontal,
  inset,
  below,
  right,
  left,
  between,
  dangerouslyAddClassName,
  children,
  ...rest
}) => {
  const xSize = inset || horizontal
  const ySize = inset || vertical

  let Tag = ''
  if (tag) {
    Tag = tag
  } else if (inline) {
    Tag = 'span'
  } else {
    Tag = 'div'
  }

  const classes = joinClassNames(
    getClassName('padding', 'horizontal', xSize),
    getClassName('padding', 'vertical', ySize),
    getClassName('margin', 'bottom', below),
    getClassName('margin', 'right', right),
    getClassName('margin', 'left', left),
    getBetweenClasses(between, inline),
    dangerouslyAddClassName
  )

  return React.createElement(
    Tag,
    {
      ...safeRest(rest),
      className: classes || undefined,
    },
    children
  )
}

Box.propTypes = {
  /**
   * If `true`, render a `<span>` instead of `<div>`.
   */
  inline: PropTypes.bool,
  /**
   *
   */
  tag: PropTypes.node,
  /**
   * Sets a `padding-top` and `padding-bottom`.
   */
  vertical: PropTypes.oneOf([1, 2, 3, 4, 6]),
  /**
   * Sets a `padding-left` and `padding-right`.
   */
  horizontal: PropTypes.oneOf([1, 2, 3, 4, 6]),
  /**
   * Sets `padding` on all four sides.
   */
  inset: PropTypes.oneOf([1, 2, 3, 4, 6]),
  /**
   * Sets a `margin-bottom`.
   */
  below: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * Sets a `margin-right`.
   */
  right: PropTypes.oneOf([1, 2, 3, 4, 6]),
  /**
   * Sets a `margin-left`.
   */
  left: PropTypes.oneOf([1, 2, 3, 4, 6]),
  /**
   * Sets a `margin-bottom` to all direct children except the last. If the `inline` prop is set to `true`, this sets a `margin-right` to all direct children except the last.
   */
  between: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * Append custom classes to `className`.
   */
  dangerouslyAddClassName: PropTypes.string,
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired,
}

Box.defaultProps = {
  inline: false,
  tag: undefined,
  vertical: undefined,
  horizontal: undefined,
  inset: undefined,
  below: undefined,
  right: undefined,
  left: undefined,
  between: undefined,
  dangerouslyAddClassName: undefined,
}

export default Box
