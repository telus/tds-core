import React from 'react'
import PropTypes from 'prop-types'
import { Subscriber } from 'react-broadcast'

import { Col as ReactFlexboxGridCol } from 'react-flexbox-grid'

import safeRest from '../../../shared/utils/safeRest'
import { deprecate } from '../../../shared/utils/warn'
import styles from './Col.modules.scss'

const Col = ({ children, span, offset, ...rest }) => {
  if (offset) {
    deprecate(
      'core-flex-grid',
      `The offset prop is deprecated due to the addition of the new responsive
    offset props.
    Replace offset in your Col definition with xsOffset for identical functionality.`
    )
  }
  if (span) {
    deprecate(
      'core-flex-grid',
      `The span prop is deprecated due to the addition of the new responsive props.
      Replace span in your Col definition with xs for identical functionality.`
    )
  }

  const props = rest

  if (offset && !props.xsOffset) props.xsOffset = offset

  return (
    <Subscriber channel="flex-grid">
      {gutter => (
        <ReactFlexboxGridCol
          {...safeRest(rest)}
          xs={rest.xs || span || true}
          className={gutter ? styles.padding : styles.gutterless}
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
   * @deprecated Span the specified number of columns.
   *
   * Use the xs prop instead for identical functionality.
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
   *
   * Use the xsOffset prop instead for identical functionality.
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
/* eslint-enable */

Col.defaultProps = {
  span: undefined,
  offset: undefined,
}

export default Col
