import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'
import capitalize from '../../shared/utils/capitalize'

const BoxTag = ({
  tag,
  vertical,
  horizontal,
  inset,
  below,
  between,
  inline,
  className,
  children,
}) => {
  return React.createElement(tag, { className: className }, children)
}

const spacingBase = 1 // 16px

const mobileSize = {
  1: spacingBase * 0.25 + 'rem',
  2: spacingBase * 0.5 + 'rem',
  3: spacingBase + 'rem',
  4: spacingBase * 1.5 + 'rem',
  5: spacingBase * 2 + 'rem',
  6: spacingBase * 2.5 + 'rem',
  7: spacingBase * 3 + 'rem',
  8: spacingBase * 4 + 'rem',
}

const desktopSize = {
  1: spacingBase * 0.25 + 'rem',
  2: spacingBase * 0.5 + 'rem',
  3: spacingBase + 'rem',
  4: spacingBase * 2 + 'rem',
  5: spacingBase * 3 + 'rem',
  6: spacingBase * 4 + 'rem',
  7: spacingBase * 4.5 + 'rem',
  8: spacingBase * 6 + 'rem',
}

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const StyledBoxTag = styled(BoxTag)`
  display: ${props => (props.between ? 'flex' : 'initial')};
  flex-direction: ${props =>
    props.inline && props.between ? 'row' : props.between ? 'column' : 'initial'};
  padding-top: ${props => (props.inset ? mobileSize[props.inset] : mobileSize[props.vertical])};
  padding-bottom: ${props => (props.inset ? mobileSize[props.inset] : mobileSize[props.vertical])};
  padding-left: ${props => (props.inset ? mobileSize[props.inset] : mobileSize[props.horizontal])};
  padding-right: ${props => (props.inset ? mobileSize[props.inset] : mobileSize[props.horizontal])};
  margin-bottom: ${props =>
    !props.inline && props.below && !props.between ? mobileSize[props.below] : '0rem'};

  > *:not(:last-child) {
    margin-bottom: ${props =>
      !props.inline && !props.below && props.between ? mobileSize[props.between] : '0rem'};
    margin-right: ${props => (props.inline && props.between ? mobileSize[props.between] : '0rem')};
  }

  @media only screen and (min-width: ${breakpoints.md}px) {
    padding-top: ${props => (props.inset ? desktopSize[props.inset] : desktopSize[props.vertical])};
    padding-bottom: ${props =>
      props.inset ? desktopSize[props.inset] : desktopSize[props.vertical]};
    padding-left: ${props =>
      props.inset ? desktopSize[props.inset] : desktopSize[props.horizontal]};
    padding-right: ${props =>
      props.inset ? desktopSize[props.inset] : desktopSize[props.horizontal]};
    margin-bottom: ${props =>
      !props.inline && props.below && !props.between ? desktopSize[props.below] : '0rem'};

    > *:not(:last-child) {
      margin-bottom: ${props =>
        !props.inline && !props.below && props.between ? desktopSize[props.between] : '0rem'};
      margin-right: ${props =>
        props.inline && props.between ? desktopSize[props.between] : '0rem'};
    }
  }
`

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
  return (
    <StyledBoxTag
      tag={tag}
      vertical={vertical}
      horizontal={horizontal}
      inset={inset}
      below={below}
      between={between}
      inline={inline}
    >
      {children}
    </StyledBoxTag>
  )
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
