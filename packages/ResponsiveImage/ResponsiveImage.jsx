import React from 'react'
import PropTypes from 'prop-types'
import { breakpoints } from '@tds/core-responsive'
import { safeRest } from '@tds/util-helpers'

/**
 * Provide different image sources for different screen sizes.
 *
 * @version ./package.json
 */
const ResponsiveImage = ({ xsSrc, smSrc, mdSrc, lgSrc, xlSrc, fallbackSrc, alt, ...rest }) => (
  <picture {...safeRest(rest)}>
    <source srcSet={xlSrc} media={`(min-width: ${breakpoints.xl}px)`} />
    <source srcSet={lgSrc} media={`(min-width: ${breakpoints.lg}px)`} />
    <source srcSet={mdSrc} media={`(min-width: ${breakpoints.md}px)`} />
    <source srcSet={smSrc} media={`(min-width: ${breakpoints.sm}px)`} />
    <source srcSet={xsSrc} media={`(max-width: ${breakpoints.sm - 1}px)`} />
    <img src={fallbackSrc} alt={alt} style={{ width: '100%' }} />
  </picture>
)

ResponsiveImage.propTypes = {
  /**
   * The src attribute used for screen widths up to 575px
   */
  xsSrc: PropTypes.string.isRequired,
  /**
   * The src attribute used for screen widths greater than 576px
   */
  smSrc: PropTypes.string.isRequired,
  /**
   * The src attribute used for screen widths greater than 768px
   */
  mdSrc: PropTypes.string,
  /**
   * The src attribute used for screen widths greater than 992px
   */
  lgSrc: PropTypes.string,
  /**
   * The src attribute used for screen widths greater than 1200px
   */
  xlSrc: PropTypes.string,
  /**
   * The src attribute used for browsers that don't support responsive images (InternetExplorer)
   */
  fallbackSrc: PropTypes.string.isRequired,
  /**
   * The alt attribute for the HTML img element. Setting this attribute to an empty string (alt="") indicates that this image is not a key part of the content, and that non-visual browsers may omit it from rendering.
   */
  alt: PropTypes.string.isRequired,
}

ResponsiveImage.defaultProps = {
  mdSrc: undefined,
  lgSrc: undefined,
  xlSrc: undefined,
}

export default ResponsiveImage
