import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'
import capitalize from '../../shared/utils/capitalize'

import styles from './Box.modules.scss'

const getClassName = (spacing, location, scale) => {
  if (!scale) {
    return undefined
  }
  return styles[`${location}${capitalize(spacing)}-${scale}`]
}

const getBetweenClasses = (scale, inline) => {
  if (!scale) {
    return undefined
  }

  const direction = inline ? 'Right' : 'Bottom'
  return joinClassNames(
    styles[`between${direction}Margin-${scale}`],
    inline ? styles.inline : styles.stack
  )
}

/**
 * Apply spacing within or around components.
 *
 * @version ./package.json
 */
const Box = ({
  tag,
  vertical,
  horizontal,
  inset,
  below,
  between,
  inline,
  dangerouslyAddClassName,
  children,
  ...rest
}) => {
  const xSize = inset || horizontal
  const ySize = inset || vertical

  const classes = joinClassNames(
    getClassName('padding', 'horizontal', xSize),
    getClassName('padding', 'vertical', ySize),
    getClassName('margin', 'bottom', below),
    getBetweenClasses(between, inline),
    dangerouslyAddClassName
  )

  return React.createElement(tag, { ...safeRest(rest), className: classes }, children)
}

Box.propTypes = {
  /**
   * Specify an HTML element to render, such as `section`.
   */
  tag: PropTypes.string,
  /**
   * Indent content from the container's top and bottom edge by applying padding.
   */
  vertical: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * Indent content from the container's left and right edge by applying padding.
   */
  horizontal: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * Indent content from all of the container's edges by applying padding.
   */
  inset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * @ignore
   *
   * We are keeping this hidden for now as we are not sold on the necessity. We use it internally still to apply
   * spacing to Markdown components, but would like to use between instead if the library allows it.
   *
   * Sets a `margin-bottom`.
   */
  below: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * Create either a block or an inline stack, applying margin in between every direct child. Margin will not be
   * applied to the last component in the stack.
   *
   * By default, `between` will arrange the Box's children as a flex column. Combine with `inline` to arrange them
   * as a flex row.
   */
  between: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  /**
   * Arrange children in a row. Combine with `between` to apply margins in between the row's elements.
   */
  inline: PropTypes.bool,
  /**
   * Append custom classes to `className`. Use sparingly, and do not attempt to override Box style properties as that
   * may cause unexpected behaviour.
   *
   * You would typically use this feature to apply flex alignment properties in combination with `between`.
   */
  dangerouslyAddClassName: PropTypes.string,
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired,
}

Box.defaultProps = {
  inline: false,
  tag: 'div',
  vertical: undefined,
  horizontal: undefined,
  inset: undefined,
  below: undefined,
  between: undefined,
  dangerouslyAddClassName: undefined,
}

export default Box
