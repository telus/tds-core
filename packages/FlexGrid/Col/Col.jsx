import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { responsiveProps } from '@tds/util-prop-types'
import { media } from '@tds/core-responsive'
import { safeRest } from '@tds/util-helpers'

import GutterContext from '../gutterContext'
import { deprecate } from '../../../shared/utils/warn'
import calculateLevel from '../calculateLevel'

const toPercent = num => {
  return `${(num / 12) * 100}%`
}

const calculateWidth = (breakpoint, value) => {
  if (typeof value === 'undefined') {
    return {}
  }

  if (typeof value === 'number') {
    const percent = toPercent(value)

    return media.from(breakpoint).css({
      maxWidth: percent,
      flexBasis: percent,
    })
  }

  return {
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: '100%',
  }
}

const calculateOffset = (breakpoint, value) => {
  if (typeof value === 'number') {
    const percent = toPercent(value)

    return media.from(breakpoint).css({
      marginLeft: percent,
    })
  }
  return {}
}

const sizeStyles = ({ xs, sm, md, lg, xl }) => ({
  flex: '0 0 auto',
  flexBasis: '100%',
  maxWidth: '100%',
  ...calculateWidth('xs', xs),
  ...calculateWidth('sm', sm),
  ...calculateWidth('md', md),
  ...calculateWidth('lg', lg),
  ...calculateWidth('xl', xl),
})

const offsetStyles = ({ xsOffset, smOffset, mdOffset, lgOffset, xlOffset }) => ({
  ...calculateOffset('xs', xsOffset),
  ...calculateOffset('sm', smOffset),
  ...calculateOffset('md', mdOffset),
  ...calculateOffset('lg', lgOffset),
  ...calculateOffset('xl', xlOffset),
})

export const StyledCol = styled.div(
  sizeStyles,
  offsetStyles,
  ({ hiddenLevel, gutter, horizontalAlignLevel }) => ({
    paddingLeft: gutter ? '1rem' : 0,
    paddingRight: gutter ? '1rem' : 0,
    ...media.until('sm').css({
      display: hiddenLevel[0] === 0 ? 'none' : 'block',
      textAlign: horizontalAlignLevel[0],
    }),
    ...media.from('sm').css({
      display: hiddenLevel[1] === 0 ? 'none' : 'block',
      textAlign: horizontalAlignLevel[1],
    }),
    ...media.from('md').css({
      display: hiddenLevel[2] === 0 ? 'none' : 'block',
      textAlign: horizontalAlignLevel[2],
    }),
    ...media.from('lg').css({
      display: hiddenLevel[3] === 0 ? 'none' : 'block',
      textAlign: horizontalAlignLevel[3],
    }),
    ...media.from('xl').css({
      display: hiddenLevel[4] === 0 ? 'none' : 'block',
      textAlign: horizontalAlignLevel[4],
    }),
  })
)

const Col = ({ span, offset, horizontalAlign, children, ...rest }) => {
  if (offset) {
    deprecate(
      'core-flex-grid',
      'The `offset` prop is deprecated due to the addition of the responsive offset props. Use `xsOffset` instead.'
    )
  }
  if (span) {
    deprecate(
      'core-flex-grid',
      'The `span` prop is deprecated due to the addition of the responsive props. Use `xs` instead.'
    )
  }

  const props = { ...rest }

  if (offset && !props.xsOffset) {
    props.xsOffset = offset
  }

  const hiddenLevel = calculateLevel(rest.xs, rest.sm, rest.md, rest.lg, rest.xl)

  const horizontalAlignLevel = () => {
    if (typeof horizontalAlign === 'object') {
      return calculateLevel(
        horizontalAlign.xs,
        horizontalAlign.sm,
        horizontalAlign.md,
        horizontalAlign.lg,
        horizontalAlign.xl
      )
    }
    if (typeof horizontalAlign === 'string') {
      return [horizontalAlign, horizontalAlign, horizontalAlign, horizontalAlign, horizontalAlign]
    }
    return ['inherit', 'inherit', 'inherit', 'inherit', 'inherit']
  }

  return (
    <GutterContext.Consumer>
      {gutter => (
        <StyledCol
          {...safeRest(props)}
          xs={rest.xs || span || true}
          hiddenLevel={hiddenLevel}
          gutter={gutter}
          horizontalAlignLevel={horizontalAlignLevel()}
        >
          {children}
        </StyledCol>
      )}
    </GutterContext.Consumer>
  )
}

/* eslint-disable react/require-default-props */
/*
 * We're disabling default props since passing undefined props to
 * the react-flexbox-grid component sets up blank classes that may cause
 * styling issues.
 */
Col.propTypes = {
  /**
   * Specify number of columns within the 'xs' breakpoint range. `0` hides the column.
   *
   * `true` sets the column width automatically;
   * `false` disables the prop
   *
   * @since 1.2.0
   */
  xs: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns within the 'sm' breakpoint range. `0` hides the column.
   *
   * `true` sets the column width automatically;
   * `false` disables the prop
   *
   * @since 1.2.0
   */
  sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns within the 'md' breakpoint range. `0` hides the column.
   *
   * `true` sets the column width automatically;
   * `false` disables the prop
   *
   * @since 1.2.0
   */
  md: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns within the 'lg' breakpoint range. `0` hides the column.
   *
   * `true` sets the column width automatically;
   * `false` disables the prop
   *
   * @since 1.2.0
   */
  lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns after the 'xl' breakpoint. `0` hides the column.
   *
   * `true` sets the column width automatically;
   * `false` disables the prop
   *
   * @since 1.2.0
   */
  xl: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Offset the specified number of columns within the 'xs' breakpoint range. `0` hides the column.
   *
   * @since 1.2.0
   */
  xsOffset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * Offset the specified number of columns within the 'sm' breakpoint range.
   *
   * @since 1.2.0
   */
  smOffset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * Offset the specified number of columns within the 'md' breakpoint range.
   *
   * @since 1.2.0
   */
  mdOffset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * Offset the specified number of columns within the 'lg' breakpoint range.
   *
   * @since 1.2.0
   */
  lgOffset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * Offset the specified number of columns within the 'xl' breakpoint range.
   *
   * @since 1.2.0
   */
  xlOffset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * The columns of the Grid. Will typically be `FlexGrid.Col` components.
   *
   * @since 1.2.0
   */
  children: PropTypes.node.isRequired,
  /**
   * @deprecated Span the specified number of columns.
   * @since 1.2.0
   *
   * Use the xs prop instead for identical functionality.
   */
  span: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * @deprecated Offset the specified number of columns.
   * @since 1.2.0
   *
   * Use the xsOffset prop instead for identical functionality.
   */
  offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * @since 2.3.0
   *
   * Align content horizontally within the column.
   *
   *
   * Accepts a `PropType.string` following the [responsive prop](#/Layout?id=responsive) structure.
   */
  horizontalAlign: responsiveProps(PropTypes.string),
}
/* eslint-enable */

Col.defaultProps = {
  span: undefined,
  offset: undefined,
  horizontalAlign: undefined,
}

export default Col
