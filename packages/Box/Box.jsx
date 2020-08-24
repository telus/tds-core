import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { responsiveProps } from '@tds/util-prop-types'

import { handleResponsiveStyles } from '@tds/util-helpers'

const spacing = {
  mobile: {
    0: '0rem',
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
    0: '0rem',
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

export const convertToRem = (level, breakpoint) => {
  if (['xs', 'sm'].indexOf(breakpoint) !== -1) {
    return spacing.mobile[level]
  }
  return spacing.desktop[level]
}

const inlineBetweenStyles = props =>
  handleResponsiveStyles(
    { between: props.between, inline: props.inline },
    ({ between, inline }, breakpoint) => {
      const base = {
        display: between !== undefined ? 'flex' : 'block',
        flexDirection: inline ? 'row' : 'column',
      }

      if (between === undefined) {
        return base
      }

      if (between === 'space-between') {
        return Object.assign(base, { justifyContent: 'space-between' })
      }

      const rem = convertToRem(between, breakpoint)

      return Object.assign(base, {
        '> *:not(:last-child)': {
          ...(inline ? { marginRight: rem } : { marginBottom: rem }),
        },
      })
    }
  )

const horizontalStyles = props =>
  handleResponsiveStyles({ horizontal: props.horizontal }, ({ horizontal }, breakpoint) => {
    if (horizontal === undefined) {
      return undefined
    }

    const rem = convertToRem(horizontal, breakpoint)

    return { paddingLeft: rem, paddingRight: rem }
  })

const verticalStyles = props =>
  handleResponsiveStyles({ vertical: props.vertical }, ({ vertical }, breakpoint) => {
    if (vertical === undefined) {
      return undefined
    }

    const rem = convertToRem(vertical, breakpoint)

    return { paddingTop: rem, paddingBottom: rem }
  })

const insetStyles = props =>
  handleResponsiveStyles({ inset: props.inset }, ({ inset }, breakpoint) => {
    if (inset === undefined) {
      return undefined
    }

    const rem = convertToRem(inset, breakpoint)

    return {
      paddingTop: rem,
      paddingBottom: rem,
      paddingLeft: rem,
      paddingRight: rem,
    }
  })

const belowStyles = props =>
  handleResponsiveStyles({ below: props.below }, ({ below }, breakpoint) => {
    if (below === undefined) {
      return undefined
    }

    const rem = convertToRem(below, breakpoint)

    return {
      marginBottom: rem,
    }
  })

const StyledBox = styled.div.attrs(({ className, tag }) => {
  return { className, as: tag }
})(inlineBetweenStyles, horizontalStyles, verticalStyles, insetStyles, belowStyles)

/**
 * Apply spacing within or around components.
 *
 * @version ./package.json
 */
const Box = forwardRef((props, ref) => <StyledBox {...props} ref={ref} />)
Box.displayName = 'Box'

Box.propTypes = {
  /**
   * Specify an HTML element to render, such as `section`.
   */
  tag: PropTypes.string,
  /**
   * Indent content from the container's top and bottom edge by applying padding.
   *
   * One of: `0,1,2,3,4,5,6,7,8` as a [**responsive prop**](#responsiveProps)
   */
  vertical: responsiveProps(PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8])),
  /**
   * Indent content from the container's left and right edge by applying padding.
   *
   * One of: `0,1,2,3,4,5,6,7,8` as a [**responsive prop**](#responsiveProps)
   */
  horizontal: responsiveProps(PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8])),
  /**
   * Indent content from all of the container's edges by applying padding.
   *
   * One of: `0,1,2,3,4,5,6,7,8` as a [**responsive prop**](#responsiveProps)
   */
  inset: responsiveProps(PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8])),
  /**
   * Indent content from the container's bottom edge by applying margin-bottom.
   *
   * One of: `0,1,2,3,4,5,6,7,8` as a [**responsive prop**](#responsiveProps)
   */
  below: responsiveProps(PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8])),
  /**
   * Create either a block or an inline stack, applying margin in between every direct child. Margin will not be
   * applied to the last component in the stack.
   *
   * By default, `between` will arrange the Box's children as a flex column. Combine with `inline` to arrange them
   * as a flex row.
   *
   * Use `space-between` to set an equal amount of space between all items, within the bounds of the parent.
   *
   * One of: `0,1,2,3,4,5,6,7,8,space-between` as a [**responsive prop**](#responsiveProps)
   */
  between: responsiveProps(PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 'space-between'])),
  /**
   * Arrange children in a row. Combine with `between` to apply margins in between the row's elements.
   *
   * One of: `true,false` as a [**responsive prop**](#responsiveProps)
   */
  inline: responsiveProps(PropTypes.bool),
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
