import React from 'react'
import PropTypes from 'prop-types'
import { Broadcast } from 'react-broadcast'
import { Grid } from 'react-flexbox-grid'

import Col from './Col/Col'
import Row from './Row/Row'
import calculateReverseLevel from './calculateReverseLevel'

import safeRest from '../../shared/utils/safeRest'
import joinClassNames from '../../shared/utils/joinClassNames'

import styles from './FlexGrid.modules.scss'

/**
 * A mobile-first flexbox grid.
 *
 * @version ./package.json
 */

const FlexGrid = ({
  limitWidth,
  gutter,
  xsReverse,
  smReverse,
  mdReverse,
  lgReverse,
  xlReverse,
  children,
  ...rest
}) => {
  const reverseLevel = calculateReverseLevel(xsReverse, smReverse, mdReverse, lgReverse, xlReverse)

  return (
    <Broadcast channel="flex-grid" value={gutter}>
      <Grid
        {...safeRest(rest)}
        fluid
        className={joinClassNames(
          styles.flexGrid,
          limitWidth && styles.limitWidth,
          reverseLevel[0] ? styles.xsReverse : styles.xsReverseCancel,
          reverseLevel[1] ? styles.smReverse : styles.smReverseCancel,
          reverseLevel[2] ? styles.mdReverse : styles.mdReverseCancel,
          reverseLevel[3] ? styles.lgReverse : styles.lgReverseCancel,
          reverseLevel[4] ? styles.xlReverse : styles.xlReverseCancel
        )}
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
   * Choose if the item order should be reversed within the 'xs' breakpoint range.
   */
  xsReverse: PropTypes.bool,
  /**
   * Choose if the item order should be reversed within the 'sm' breakpoint range.
   */
  smReverse: PropTypes.bool,
  /**
   * Choose if the item order should be reversed within the 'md' breakpoint range.
   */
  mdReverse: PropTypes.bool,
  /**
   * Choose if the item order should be reversed within the 'lg' breakpoint range.
   */
  lgReverse: PropTypes.bool,
  /**
   * Choose if the item order should be reversed within the 'xl' breakpoint range.
   */
  xlReverse: PropTypes.bool,
  /**
   * The rows and columns of the Grid. Will typically be `FlexGrid.Row` and `FlexGrid.Col` components.
   */
  children: PropTypes.node.isRequired,
}

FlexGrid.defaultProps = {
  limitWidth: true,
  gutter: true,
  xsReverse: undefined,
  smReverse: undefined,
  mdReverse: undefined,
  lgReverse: undefined,
  xlReverse: undefined,
}

FlexGrid.Row = Row
FlexGrid.Col = Col

export default FlexGrid
