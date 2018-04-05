import React from 'react'
import PropTypes from 'prop-types'
import { Subscriber } from 'react-broadcast'

import { Col as ReactFlexboxGridCol } from 'react-flexbox-grid'

import safeRest from '../../../shared/utils/safeRest'
import { deprecate } from '../../../shared/utils/warn'
import styles from './Col.modules.scss'

const removeProps = ({ ...rest }) => safeRest(rest)

const Col = ({
  span,
  offset,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,
  xs,
  sm,
  md,
  lg,
  xl,
  children,
  ...rest
}) => {
  const flexProps = {}

  if (sm) flexProps.sm = sm
  if (md) flexProps.md = md
  if (lg) flexProps.lg = lg
  if (xl) flexProps.xl = xl

  if (span) {
    deprecate(
      'core-flex-grid',
      'The span prop is deprecated due to the addition of the new responsive props. Replace span in your Col definition with xs for identical functionality.'
    )
  }
  return (
    <Subscriber channel="flex-grid">
      {gutter => (
        <ReactFlexboxGridCol
          {...removeProps(rest)}
          xs={xs || span || true}
          {...flexProps}
          xsOffset={xsOffset || offset}
          smOffset={smOffset}
          mdOffset={mdOffset}
          lgOffset={lgOffset}
          xlOffset={xlOffset}
          className={gutter ? styles.padding : styles.gutterless}
        >
          {children}
        </ReactFlexboxGridCol>
      )}
    </Subscriber>
  )
}

Col.propTypes = {
  /**
   * @deprecated Span the specified number of columns.
   */
  span: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Specify number of columns within the 'xs' breakpoint range.
   */
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns within the 'sm' breakpoint range.
   */
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns within the 'md' breakpoint range.
   */
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns within the 'lg' breakpoint range.
   */
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * Specify number of columns after the 'xl' breakpoint.
   */
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, false]),
  /**
   * @deprecated Offset the specified number of columns.
   */
  offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * Offset the specified number of columns within the 'xs' breakpoint range.
   */
  xsOffset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * Offset the specified number of columns within the 'sm' breakpoint range.
   */
  smOffset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * Offset the specified number of columns within the 'md' breakpoint range.
   */
  mdOffset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * Offset the specified number of columns within the 'lg' breakpoint range.
   */
  lgOffset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * Offset the specified number of columns within the 'xl' breakpoint range.
   */
  xlOffset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  /**
   * The columns of the Grid. Will typically be `FlexGrid.Col` components, but could be other components such as a
   * `Responsive` wrapper.
   */
  children: PropTypes.node.isRequired,
}

Col.defaultProps = {
  span: undefined,
  offset: undefined,
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  xsOffset: undefined,
  smOffset: undefined,
  mdOffset: undefined,
  lgOffset: undefined,
  xlOffset: undefined,
}

export default Col
