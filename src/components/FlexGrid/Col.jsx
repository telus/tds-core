import React from 'react'
import PropTypes from 'prop-types'

import { Col as ReactFlexboxGridCol } from 'react-flexbox-grid'

import safeRest from '../../utils/safeRest'

const removeProps = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,
  ...rest
}) => safeRest(rest)

const Col = ({ span, offset, children, ...rest }) => (
  <ReactFlexboxGridCol {...removeProps(rest)} xs={span || true} xsOffset={offset}>
    {children}
  </ReactFlexboxGridCol>
)

Col.propTypes = {
  span: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  children: PropTypes.node.isRequired,
}

Col.defaultProps = {
  span: undefined,
  offset: undefined,
}

export default Col
