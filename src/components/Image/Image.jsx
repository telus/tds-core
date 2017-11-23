import React from 'react'
import PropTypes from 'prop-types'
import joinClasses from '../../utils/joinClassNames'
import { warn } from '../../utils/warn'

import safeRest from '../../utils/safeRest'

import styles from './Image.modules.scss'

/**
 * An image is a graphic representation of something.
 */

const Image = ({
  src,
  width,
  height,
  alt,
  rounded,
  circular,
  fluid,
  dangerouslyAddClassName,
  ...rest
}) => {
  if (rounded && circular) {
    warn(
      'Image',
      'The props `rounded` and `circular` cannot be used together. `rounded` will be overwritten'
    )
  }

  const classes = joinClasses(
    styles[fluid && 'fluid'],
    styles[circular && 'circular'],
    styles[rounded && !circular && 'rounded'],
    dangerouslyAddClassName
  )

  return (
    <img
      {...safeRest(rest)}
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={classes}
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
  width: PropTypes.number,
  /**
   * The height attribute from img element tag
   */
  height: PropTypes.number,
  /**
   * Makes the border of the image rounded (4pxs)
   */
  rounded: PropTypes.bool,
  /**
   * Transform the image circular
   */
  circular: PropTypes.bool,
  /**
   * Makes the image be fluid
   */
  fluid: PropTypes.bool,
  /**
   * Can dangerously pass a custom css className
   */
  dangerouslyAddClassName: PropTypes.string,
}

Image.defaultProps = {
  rounded: undefined,
  circular: undefined,
  fluid: undefined,
  width: undefined,
  height: undefined,
  dangerouslyAddClassName: undefined,
}

export default Image
