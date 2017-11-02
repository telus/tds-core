import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'
// import capitalize from '../../utils/capitalize'

import styles from './Box.modules.scss'

const getXClasses = xSize => {
  if (!xSize) {
    return undefined
  }

  return styles[`horizontalPadding-${xSize}`]
}

const getYClasses = ySize => {
  if (!ySize) {
    return undefined
  }

  return styles[`verticalPadding-${ySize}`]
}

const getBelowClasses = belowSize => {
  if (!belowSize) {
    return undefined
  }

  return styles[`bottomMargin-${belowSize}`]
}

const getBetweenClasses = (betweenSize, inline) => {
  if (!betweenSize) {
    return undefined
  }

  return styles[`betweenBottomMargin-${betweenSize}`]
}

const Box = ({
  inline,
  tag,
  spacing,
  all,
  vertical,
  horizontal,
  top,
  right,
  bottom,
  left,
  inset,
  x,
  y,
  below,
  between,
  dangerouslyAddClassName,
  children,
  ...rest
}) => {
  const xSize = inset || x
  const ySize = inset || y

  let Tag = ''
  if (tag) {
    Tag = tag
  } else if (inline) {
    Tag = 'span'
  } else {
    Tag = 'div'
  }

  const classes = joinClassNames(
    getXClasses(xSize),
    getYClasses(ySize),
    getBelowClasses(below),
    getBetweenClasses(between, inline),
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
  spacing: PropTypes.oneOf(['margin', 'padding']),
  all: PropTypes.oneOf([1, 2, 3, 4, 6]),
  vertical: PropTypes.oneOf([1, 2, 3, 4, 6]),
  horizontal: PropTypes.oneOf([1, 2, 3, 4, 6]),
  top: PropTypes.oneOf([1, 2, 3, 4, 6]),
  right: PropTypes.oneOf([1, 2, 3, 4, 6]),
  bottom: PropTypes.oneOf([1, 2, 3, 4, 6]),
  left: PropTypes.oneOf([1, 2, 3, 4, 6]),
  inset: PropTypes.oneOf([1, 2, 3, 4, 6]),
  x: PropTypes.oneOf([1, 2, 3, 4, 6]),
  y: PropTypes.oneOf([1, 2, 3, 4, 6]),
  below: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  between: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  dangerouslyAddClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Box.defaultProps = {
  inline: false,
  tag: undefined,
  spacing: undefined,
  all: undefined,
  vertical: undefined,
  horizontal: undefined,
  top: undefined,
  right: undefined,
  bottom: undefined,
  left: undefined,
  inset: undefined,
  x: undefined,
  y: undefined,
  below: undefined,
  between: undefined,
  dangerouslyAddClassName: undefined,
}

export default Box
