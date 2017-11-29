import React from 'react'
import PropTypes from 'prop-types'

import joinClasses from '../../utils/joinClassNames'

import safeRest from '../../utils/safeRest'

import styles from './Image.modules.scss'

/**
 * An image is a graphic representation of something.
 */

const ImageCicularlyMasked = ({ y, x, children }) => {
  const smaller = Math.min(x, y)
  // const perfectRadius = Math.sqrt(smaller / 100) * 90

  const perfectRadius = smaller / 2

  const getStyle = () => {
    const css = {}

    if (x === y) {
      css.borderRadius = '50%'
    }

    if (x > y || x < y) {
      css.clipPath = `circle(${perfectRadius}px at center)`
    }

    return {
      style: { ...css },
    }
  }

  return (
    <div width={smaller} height={smaller} className={styles.wrapper}>
      {React.cloneElement(children, getStyle())}
    </div>
  )
}

ImageCicularlyMasked.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

const Image = ({ src, width, height, alt, rounded, fluid, ...rest }) => {
  const isCircle = rounded === 'circle'
  const classes = joinClasses(fluid && styles.fluid, isCircle ? styles.circle : styles.corners)

  const hidratedImage = (
    <img
      {...safeRest(rest)}
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={classes}
    />
  )

  if (isCircle) {
    return (
      <ImageCicularlyMasked y={height} x={width}>
        {hidratedImage}
      </ImageCicularlyMasked>
    )
  }
  return hidratedImage
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
  /**
   * Makes the image be fluid
   */
  fluid: PropTypes.bool,
}

Image.defaultProps = {
  fluid: false,
  rounded: undefined,
}

export default Image
