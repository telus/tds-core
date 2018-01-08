import React from 'react'
import PropTypes from 'prop-types'
import { Broadcast } from 'react-broadcast'
import { Grid } from 'react-flexbox-grid'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'
import styles from './FlexGrid.modules.scss'

import Col from './Col'
import Row from './Row'

const getClasses = (centre, limitedWidth, gutterless) =>
  joinClassNames(
    centre && styles.centre,
    limitedWidth && styles.limitedWidth,
    gutterless && styles.gutterless
  )

const FlexGrid = ({ centre, limitedWidth, gutter, children, ...rest }) => {
  const gutterStyle = gutter ? undefined : styles.gutterless

  return (
    <Broadcast channel="flex-grid" value={gutterStyle}>
      <Grid {...safeRest(rest)} fluid className={getClasses(centre, limitedWidth, !gutter)}>
        {children}
      </Grid>
    </Broadcast>
  )
}

FlexGrid.propTypes = {
  /**
   * Centres the grid horizontally. This is useful when using `limitedWidth`.
   */
  centre: PropTypes.bool,
  /**
   * Whether or not to give the grid a fixed width.
   */
  limitedWidth: PropTypes.bool,
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
  centre: undefined,
  limitedWidth: undefined,
  gutter: true,
}

FlexGrid.Row = Row
FlexGrid.Col = Col

export default FlexGrid
