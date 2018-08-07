import React from 'react'
import PropTypes from 'prop-types'
import { Subscriber } from 'react-broadcast'

import { Col as ReactFlexboxGridCol } from 'react-flexbox-grid'

import joinClassNames from '../../../shared/utils/joinClassNames'
import safeRest from '../../../shared/utils/safeRest'
import { deprecate } from '../../../shared/utils/warn'
import calculateLevel from '../calculateLevel'

import styles from './Col.modules.scss'

const Col = ({
  span,
  offset,
  xsHidden,
  smHidden,
  mdHidden,
  lgHidden,
  xlHidden,
  children,
  ...rest
}) => {
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

  const hiddenLevel = calculateLevel(xsHidden, smHidden, mdHidden, lgHidden, xlHidden)

  return (
    <Subscriber channel="flex-grid">
      {gutter => (
        <ReactFlexboxGridCol
          {...safeRest(props)}
          xs={rest.xs || span || true}
          className={joinClassNames(
            hiddenLevel[0] ? styles.xsHidden : styles.xsVisible,
            hiddenLevel[1] ? styles.smHidden : styles.smVisible,
            hiddenLevel[2] ? styles.mdHidden : styles.mdVisible,
            hiddenLevel[3] ? styles.lgHidden : styles.lgVisible,
            hiddenLevel[4] ? styles.xlHidden : styles.xlVisible,
            gutter ? styles.padding : styles.gutterless
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
   * Specify number of columns within the 'xs' breakpoint range.
   *
   * `true` sets the column width automatically;
   * `false` disables the prop
   *
   * @since 1.2.0
   */
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns within the 'sm' breakpoint range.
   *
   * `true` sets the column width automatically;
   * `false` disables the prop
   *
   * @since 1.2.0
   */
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns within the 'md' breakpoint range.
   *
   * `true` sets the column width automatically;
   * `false` disables the prop
   *
   * @since 1.2.0
   */
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns within the 'lg' breakpoint range.
   *
   * `true` sets the column width automatically;
   * `false` disables the prop
   *
   * @since 1.2.0
   */
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns after the 'xl' breakpoint.
   *
   * `true` sets the column width automatically;
   * `false` disables the prop
   *
   * @since 1.2.0
   */
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Offset the specified number of columns within the 'xs' breakpoint range.
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
   * Hides the column from the 'xs' breakpoint range.
   *
   * `true` hides the column from xs;
   * `false` shows the column;
   * By default, the column is visible.
   *
   * @since 2.1.0
   */
  xsHidden: PropTypes.bool,
  /**
   * Hides the column from the 'sm' breakpoint range.
   *
   * `true` hides the column from sm;
   * `false` shows the column;
   * By default, it inherits the behaviour set by the preceding prop.
   * @since 2.1.0
   */
  smHidden: PropTypes.bool,
  /**
   * Hides the column from the 'md' breakpoint range.
   *
   * `true` hides the column from md;
   * `false` shows the column;
   * By default, it inherits the behaviour set by the preceding prop.
   * @since 2.1.0
   */
  mdHidden: PropTypes.bool,
  /**
   * Hides the column from the 'lg' breakpoint range.
   *
   * `true` hides the column from lg;
   * `false` shows the column;
   * By default, it inherits the behaviour set by the preceding prop.
   * @since 2.1.0
   */
  lgHidden: PropTypes.bool,
  /**
   * Hides the column from the 'xl' breakpoint range.
   *
   * `true` hides the column from xl;
   * `false` shows the column;
   * By default, it inherits the behaviour set by the preceding prop.
   * @since 2.1.0
   */
  xlHidden: PropTypes.bool,
}
/* eslint-enable */

Col.defaultProps = {
  span: undefined,
  offset: undefined,
  xsHidden: undefined,
  smHidden: undefined,
  mdHidden: undefined,
  lgHidden: undefined,
  xlHidden: undefined,
}

export default Col
