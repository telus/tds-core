import React from 'react'
import PropTypes from 'prop-types'

import joinClasses from '../../utils/joinClassNames'

import safeRest from '../../utils/safeRest'

import styles from './Image.modules.scss'
import borderStyles from '../Borders.modules.scss'

const getClipPathStyles = (width, height) => {
  const radius = Math.min(width, height) / 2

  const clipPath = `circle(${radius}px at center)`

  return { clipPath }
}

/**
 * An image is a graphic representation of something.
 */
const Image = ({ src, width, height, alt, rounded, ...rest }) => {
  const isCircle = rounded === 'circle'
  const isSquare = width === height

  const classes = joinClasses(
    styles.fluid,
    rounded === 'corners' && borderStyles.rounded,
    isCircle && isSquare && borderStyles.circular
  )

  const style = isCircle && !isSquare ? getClipPathStyles(width, height) : undefined

  return (
    <img
      {...safeRest(rest)}
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={classes}
      style={style}
    />
  )
}

Image.propTypes = {
  /**
   * The source attribute from img element tag
   */
  src: PropTypes.string.isRequired,
  /**
   * The alt attribute from img element tag for accessibility
   */
  alt: PropTypes.string.isRequired,
  /**
   * The width attribute from img element tag
   */
  width: PropTypes.number.isRequired,
  /**
   * The height attribute from img element tag
   */
  height: PropTypes.number.isRequired,
  /**
   * Makes the border of the image rounded (4pxs)
   */
  rounded: PropTypes.oneOf(['circle', 'corners']),
}

Image.defaultProps = {
  rounded: undefined,
}

export default Image
