import React from 'react'
import PropTypes from 'prop-types'
import { Broadcast } from 'react-broadcast'

import { Grid } from 'react-flexbox-grid'

import safeRest from '../../utils/safeRest'

import Col from './Col'
import Row from './Row'

const FlexGrid = ({ gutter, children, ...rest }) => {
  const gutterStyle = gutter ? undefined : { padding: 0, margin: 0 }

  return (
    <Broadcast channel="flex-grid" value={gutterStyle}>
      <Grid {...safeRest(rest)} fluid style={gutterStyle}>
        {children}
      </Grid>
    </Broadcast>
  )
}

FlexGrid.propTypes = {
  /**
   * Whether or not to include gutters in between columns.
   */
  gutter: PropTypes.bool,
  /**
   * The rows of the Grid. Will typically be `FlexGrid.Row` components, but could be other components such as a
   * `Responsive` wrapper.
   */
  children: PropTypes.node.isRequired,
}

FlexGrid.defaultProps = {
  gutter: true,
}

FlexGrid.Row = Row
FlexGrid.Col = Col

export default FlexGrid
