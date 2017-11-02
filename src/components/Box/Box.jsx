import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'

import styles from './Box.modules.scss'

const getHorizontalClasses = xSize => {
  if (!xSize) {
    return undefined
  }

  return styles[`horizontalPadding-${xSize}`]
}

const getVerticalClasses = ySize => {
  if (!ySize) {
    return undefined
  }

  return styles[`verticalPadding-${ySize}`]
}

const getBelowClass = belowSize => {
  if (!belowSize) {
    return undefined
  }

  return styles[`bottomMargin-${belowSize}`]
}

const getRightClass = rightSize => {
  if (!rightSize) {
    return undefined
  }

  return styles[`rightMargin-${rightSize}`]
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
    getHorizontalClasses(xSize),
    getVerticalClasses(ySize),
    getBelowClass(below),
    getRightClass(right),
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
  between: undefined,
  dangerouslyAddClassName: undefined,
}

export default Box
