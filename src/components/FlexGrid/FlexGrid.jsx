import React from 'react'
import PropTypes from 'prop-types'

import { Row, Grid } from 'react-flexbox-grid'

import safeRest from '../../utils/safeRest'

import Col from './Col'

const FlexGrid = ({ children, ...rest }) => (
  <Grid {...safeRest(rest)} fluid>
    {children}
  </Grid>
)

FlexGrid.propTypes = {
  children: PropTypes.node.isRequired,
}

FlexGrid.Row = Row
FlexGrid.Col = Col

export default FlexGrid
