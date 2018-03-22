import React from 'react'
import PropTypes from 'prop-types'
import { Broadcast } from 'react-broadcast'
import { Grid } from 'react-flexbox-grid'

import Col from './Col/Col'
import Row from './Row/Row'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'
import { deprecate } from '../../shared/utils/warn'

import styles from './FlexGrid.modules.scss'

/**
 * @version 1.1.0
 */
const FlexGrid = ({ centre, limitWidth, gutter, children, ...rest }) => {
  if (centre) {
    deprecate(
      'core-flex-grid',
      'The centre prop is deprecated due to the limitWidth prop centring the grid on its own. Please remove the centre prop from your grid definition.'
    )
  }

  const getClasses = () =>
    joinClassNames(styles.flexGrid, centre && styles.centre, limitWidth && styles.limitWidth)

  return (
    <Broadcast channel="flex-grid" value={gutter}>
      <Grid {...safeRest(rest)} fluid className={getClasses()}>
        {children}
      </Grid>
    </Broadcast>
  )
}

FlexGrid.propTypes = {
  /**
   * @deprecated Centres the grid horizontally. This is useful when using `limitWidth`.
   *
   * When using `limitWidth`, the grid will centre.
   */
  centre: PropTypes.bool,
  /**
   * Whether or not to give the grid a fixed width. This also centres the grid horizontally.
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
