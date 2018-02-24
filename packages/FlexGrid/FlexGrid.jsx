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
 * @version 0.0.0-development
 */
const FlexGrid = ({ centre, limitWidth, gutter, children, ...rest }) => {
  const gutterStyle = gutter ? undefined : styles.gutterless

  const getClasses = () =>
    joinClassNames(styles.flexGrid, centre && styles.centre, limitWidth && styles.limitWidth)

  return (
    <Broadcast channel="flex-grid" value={gutterStyle}>
      <Grid {...safeRest(rest)} fluid className={getClasses()}>
        {children}
      </Grid>
    </Broadcast>
  )
}

FlexGrid.propTypes = {
  /**
   * Centres the grid horizontally. This is useful when using `limitWidth`.
   */
  centre: PropTypes.bool,
  /**
   * Whether or not to give the grid a fixed width.
   */
  limitWidth: PropTypes.bool,
  /**
   * Whether or not to include gutters in between columns.
   */
  gutter: PropTypes.bool,
  /**
   * The rows or columns of the Grid. Will typically be `FlexGrid.Row` or `FlexGrid.Col` components,
   * but could be other components such as a `Responsive` wrapper.
   */
  children: PropTypes.node.isRequired,
}

FlexGrid.defaultProps = {
  centre: undefined,
  limitWidth: undefined,
  gutter: true,
}

FlexGrid.Row = Row
FlexGrid.Col = Col

export default FlexGrid
