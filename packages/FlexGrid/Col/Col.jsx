import React from 'react'
import PropTypes from 'prop-types'
import { Subscriber } from 'react-broadcast'

import { Col as ReactFlexboxGridCol } from 'react-flexbox-grid'

import safeRest from '../../../shared/utils/safeRest'
import { deprecate } from '../../../shared/utils/warn'
import styles from './Col.modules.scss'

const removeProps = ({ xsOffset, smOffset, mdOffset, lgOffset, xlOffset, ...rest }) =>
  safeRest(rest)

const Col = ({ span, offset, xs, sm, md, lg, xl, children, ...rest }) => {
  if (span) {
    deprecate(
      'core-flex-grid',
      'The span prop is deprecated due to the addition of the xs, sm, md, lg and xl responsive props. Please replace the span prop in your Col definition with the xs prop for identical functionality.'
    )
  }

  return (
    <Subscriber channel="flex-grid">
      {gutter => (
        <ReactFlexboxGridCol
          {...removeProps(rest)}
          xs={xs || span || true}
          sm={sm || 0}
          md={md || 0}
          lg={lg || 0}
          xl={xl || 0}
          xsOffset={offset}
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
   * Specify number of columns within the 'xs' breakpoint range. (0px - 575px)
   */
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Specify number of columns within the 'sm' breakpoint range. (576px - 767px)
   */
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Specify number of columns within the 'md' breakpoint range. (768px - 991px)
   */
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Specify number of columns within the 'lg' breakpoint range. (992px - 1199px)
   */
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Specify number of columns after the 'xl' breakpoint. (1200px+)
   */
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Offset the specified number of columns.
   */
  offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
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
}

export default Col
