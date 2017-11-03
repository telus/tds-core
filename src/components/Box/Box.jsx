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

const getBetweenClasses = betweenSize => {
  if (!betweenSize) {
    return undefined
  }

  return styles[`betweenBottomMargin-${betweenSize}`]
}

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
    getBetweenClasses(between),
    dangerouslyAddClassName
  )

  return (
    <Tag {...safeRest(rest)} className={classes}>
      {children}
    </Tag>
  )
}

Box.propTypes = {
  inline: PropTypes.bool,
  tag: PropTypes.string,
  vertical: PropTypes.oneOf([1, 2, 3, 4, 6]),
  horizontal: PropTypes.oneOf([1, 2, 3, 4, 6]),
  inset: PropTypes.oneOf([1, 2, 3, 4, 6]),
  below: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  right: PropTypes.oneOf([1, 2, 3, 4, 6]),
  left: PropTypes.oneOf([1, 2, 3, 4, 6]),
  between: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  dangerouslyAddClassName: PropTypes.string,
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
