import React from 'react'
import PropTypes from 'prop-types'
import { Subscriber } from 'react-broadcast'

import { Row as ReactFlexboxGridRow } from 'react-flexbox-grid'

import safeRest from '../../utils/safeRest'

const Row = ({ children, ...rest }) => (
  <Subscriber channel="flex-grid">
    {gutterStyle => (
      <ReactFlexboxGridRow {...safeRest(rest)} style={gutterStyle}>
        {children}
      </ReactFlexboxGridRow>
    )}
  </Subscriber>
)

Row.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Row
