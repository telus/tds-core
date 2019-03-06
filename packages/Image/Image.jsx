import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { borders } from '@tds/shared-styles'
import { warn } from '../../shared/utils/warn'
import safeRest from '../../shared/utils/safeRest'

const StyledImage = styled.img({
  height: 'auto',
  maxWidth: '100%',
})
const StyledRoundedImage = styled(StyledImage)(borders.rounded)
const StyledCircularImage = styled(StyledImage)(borders.circular)

/**
 * @version ./package.json
 */
const Image = ({ src, width, height, alt, rounded, ...rest }) => {
  const isCircle = rounded === 'circle'
  const isCorners = rounded === 'corners'
  const isSquare = width === height

  if (isCircle && !isSquare) {
    warn(
      'Image',
      'rounded="circle" is not supported for non-square images. Please provide a square image, otherwise the resulting shape will not be a circle.'
    )
  }

  let ImageComponent
  if (isCircle) {
    ImageComponent = StyledCircularImage
  } else if (isCorners) {
    ImageComponent = StyledRoundedImage
  } else {
    ImageComponent = StyledImage
  }

  return <ImageComponent {...safeRest(rest)} src={src} width={width} height={height} alt={alt} />
}

Image.propTypes = {
  /**
   * The src attribute for the HTML img element.
   */
  src: PropTypes.string.isRequired,
  /**
   * The alt attribute for the HTML img element. Setting this attribute to an empty string (alt="") indicates that this image is not a key part of the content, and that non-visual browsers may omit it from rendering.
   */
  alt: PropTypes.string.isRequired,
  /**
   * The image's width.
   */
  width: PropTypes.number.isRequired,
  /**
   * The image's height.
   */
  height: PropTypes.number.isRequired,
  /**
   * Apply rounding.
   */
  rounded: PropTypes.oneOf(['circle', 'corners']),
}

Image.defaultProps = {
  rounded: undefined,
}

export default Image
