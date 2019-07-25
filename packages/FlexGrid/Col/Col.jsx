import React from 'react'
import PropTypes from 'prop-types'
import { Subscriber } from 'react-broadcast'

import { Col as ReactFlexboxGridCol } from 'react-flexbox-grid'
import { responsiveProps } from '@tds/util-prop-types'

import joinClassNames from '../../../shared/utils/joinClassNames'
import safeRest from '../../../shared/utils/safeRest'
import { deprecate } from '../../../shared/utils/warn'
import calculateLevel from '../calculateLevel'

import styles from './Col.modules.scss'

const createResponsivePropsClassNames = (responsivePropsObject, cb) =>
  Object.keys(responsivePropsObject).map(breakpoint =>
    cb(breakpoint, responsivePropsObject[breakpoint])
  )

const getHorizontalAlignClasses = horizontalAlign => {
  if (typeof horizontalAlign === 'object') {
    return joinClassNames(
      ...createResponsivePropsClassNames(
        horizontalAlign,
        (breakpoint, value) => styles[`${breakpoint}HorizontalAlign-${value}`]
      )
    )
  }
  return horizontalAlign && styles[`xsHorizontalAlign-${horizontalAlign}`]
}

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

  return (
    <Subscriber channel="flex-grid">
      {gutter => (
        <ReactFlexboxGridCol
          {...safeRest(props)}
          xs={rest.xs || span || true}
          className={joinClassNames(
            hiddenLevel[0] === 0 ? styles.xsHidden : styles.xsVisible,
            hiddenLevel[1] === 0 ? styles.smHidden : styles.smVisible,
            hiddenLevel[2] === 0 ? styles.mdHidden : styles.mdVisible,
            hiddenLevel[3] === 0 ? styles.lgHidden : styles.lgVisible,
            hiddenLevel[4] === 0 ? styles.xlHidden : styles.xlVisible,
            gutter ? styles.padding : styles.gutterless,
            getHorizontalAlignClasses(horizontalAlign)
          )}
        >
          {children}
        </ReactFlexboxGridCol>
      )}
    </Subscriber>
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
   * Accepts a `PropType.string` following the [responsive prop](#responsiveProps) structure.
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
