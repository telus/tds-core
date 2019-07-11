import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media } from '@tds/core-responsive'

const spacing = {
  mobile: {
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '2rem',
    6: '2.5rem',
    7: '3rem',
    8: '4rem',
  },
  desktop: {
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '2rem',
    5: '3rem',
    6: '4rem',
    7: '4.5rem',
    8: '6rem',
  },
}

const boxSpacing = (level, f) => {
  const mobileStyle = f(spacing.mobile[level])
  if (spacing.mobile[level] === spacing.desktop[level]) {
    return mobileStyle
  }

  const desktopStyle = media.from('md').css(f(spacing.desktop[level]))

  return { ...mobileStyle, ...desktopStyle }
}

const betweenStyles = ({ between, inline }) => {
  if (between === undefined) {
    return undefined
  }

  if (between === 'space-between') {
    return { justifyContent: 'space-between' }
  }

  return boxSpacing(between, space => ({
    '> *:not(:last-child)': {
      ...(inline ? { marginRight: space } : { marginBottom: space }),
    },
  }))
}

const horizontalStyles = ({ horizontal }) => {
  if (horizontal === undefined) {
    return undefined
  }
  return boxSpacing(horizontal, space => ({
    paddingLeft: space,
    paddingRight: space,
  }))
}

const verticalStyles = ({ vertical }) => {
  if (vertical === undefined) {
    return undefined
  }

  return boxSpacing(vertical, space => ({
    paddingTop: space,
    paddingBottom: space,
  }))
}

const insetStyles = ({ inset }) => {
  if (inset === undefined) {
    return undefined
  }

  return boxSpacing(inset, space => ({
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
  }))
}

const belowStyles = ({ below }) => {
  if (below === undefined) {
    return undefined
  }

  return boxSpacing(below, space => ({
    marginBottom: space,
  }))
}

const StyledBox = styled.div.attrs(({ className, tag }) => {
  return { className, as: tag }
})(
  betweenStyles,
  horizontalStyles,
  verticalStyles,
  insetStyles,
  belowStyles,
  ({ between, inline }) => {
    return {
      display: between ? 'flex' : 'block',
      flexDirection: inline ? 'row' : 'column',
    }
  }
)

/**
 * Apply spacing within or around components.
 *
 * @version ./package.json
 */
const Box = props => <StyledBox {...props} />

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
   *
   * Use `space-between` to set an equal amount of space between all items, within the bounds of the parent.
   */
  between: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 'space-between']),
  /**
   * Arrange children in a row. Combine with `between` to apply margins in between the row's elements.
   */
  inline: PropTypes.bool,
  /**
   * @ignore
   */
  className: PropTypes.string,
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
  className: undefined,
}

/** @component */
export default Box
