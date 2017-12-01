import React from 'react'
import PropTypes from 'prop-types'
import { Broadcast } from 'react-broadcast'

import { Grid } from 'react-flexbox-grid'

import safeRest from '../../utils/safeRest'

import Col from './Col'
import Row from './Row'

const FlexGrid = ({ gutterless, children, ...rest }) => {
  const css = gutterless ? { padding: 0, margin: 0 } : undefined

  return (
    <Broadcast channel="gutterless" value={css}>
      <Grid {...safeRest(rest)} fluid style={css}>
        {children}
      </Grid>
    </Broadcast>
  )
}

FlexGrid.propTypes = {
  gutterless: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

FlexGrid.defaultProps = {
  gutterless: false,
}

FlexGrid.Row = Row
FlexGrid.Col = Col

export default FlexGrid
