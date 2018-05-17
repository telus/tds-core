import React from 'react'
import PropTypes from 'prop-types'
import { Broadcast } from 'react-broadcast'
import { Grid } from 'react-flexbox-grid'

import Col from './Col/Col'
import Row from './Row/Row'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'

import styles from './FlexGrid.modules.scss'

/**
 * A mobile-first flexbox grid.
 *
 * @version ./package.json
 */
const FlexGrid = ({ limitWidth, gutter, children, ...rest }) => {
  return (
    <Broadcast channel="flex-grid" value={gutter}>
      <Grid
        {...safeRest(rest)}
        fluid
        className={joinClassNames(styles.flexGrid, limitWidth && styles.limitWidth)}
      >
        {children}
      </Grid>
    </Broadcast>
  )
}

FlexGrid.propTypes = {
  /**
   * Whether or not to give the grid a fixed width. This also centres the grid horizontally.
   */
  limitWidth: PropTypes.bool,
  /**
   * Whether or not to include gutters in between columns.
   */
  gutter: PropTypes.bool,
  /**
   * The rows and columns of the Grid. Will typically be `FlexGrid.Row` and `FlexGrid.Col` components.
   */
  children: PropTypes.node.isRequired,
}

FlexGrid.defaultProps = {
  limitWidth: true,
  gutter: true,
}

FlexGrid.Row = Row
FlexGrid.Col = Col

export default FlexGrid
