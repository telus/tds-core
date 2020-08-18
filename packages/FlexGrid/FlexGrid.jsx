import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media, breakpoints } from '@tds/core-responsive'
import { safeRest } from '@tds/util-helpers'

import { Grid } from 'react-styled-flexboxgrid'

import Col from './Col/Col'
import Row from './Row/Row'
import calculateLevel from './calculateLevel'
import GutterContext from './gutterContext'

const rem = breakpoint => {
  return `${breakpoints[breakpoint] / 16}rem`
}

const StyledGrid = styled(({ reverseLevel, limitWidth, ...rest }) => <Grid {...rest} />)(
  ({ reverseLevel, limitWidth }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    width: '100%',
    'div&': { padding: 0 },
    ...media.until('sm').css({
      flexDirection: reverseLevel[0] ? 'column-reverse' : 'column',
    }),
    ...media.from('sm').css({
      ...(limitWidth && { maxWidth: rem('sm') }),
      flexDirection: reverseLevel[1] ? 'column-reverse' : 'column',
    }),
    ...media.from('md').css({
      ...(limitWidth && { maxWidth: rem('md') }),
      flexDirection: reverseLevel[2] ? 'column-reverse' : 'column',
    }),
    ...media.from('lg').css({
      ...(limitWidth && { maxWidth: rem('lg') }),
      flexDirection: reverseLevel[3] ? 'column-reverse' : 'column',
    }),
    ...media.from('xl').css({
      ...(limitWidth && { maxWidth: rem('xl') }),
      flexDirection: reverseLevel[4] ? 'column-reverse' : 'column',
    }),
  })
)

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
  const reverseLevel = calculateLevel(xsReverse, smReverse, mdReverse, lgReverse, xlReverse)
  return (
    <GutterContext.Provider value={gutter}>
      <StyledGrid {...safeRest(rest)} fluid reverseLevel={reverseLevel} limitWidth={limitWidth}>
        {children}
      </StyledGrid>
    </GutterContext.Provider>
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
   * Choose if the item order should be reversed from the 'xs' breakpoint. When you pass in false, the order will be normal from the xs breakpoint. By default, it inherits the behaviour set by the preceding prop.
   */
  xsReverse: PropTypes.bool,
  /**
   * Choose if the item order should be reversed from the 'sm' breakpoint. When you pass in false, the order will be normal from the sm breakpoint. By default, it inherits the behaviour set by the preceding prop.
   */
  smReverse: PropTypes.bool,
  /**
   * Choose if the item order should be reversed from the 'md' breakpoint. When you pass in false, the order will be normal from the md breakpoint. By default, it inherits the behaviour set by the preceding prop.
   */
  mdReverse: PropTypes.bool,
  /**
   * Choose if the item order should be reversed from the 'lg' breakpoint. When you pass in false, the order will be normal from the lg breakpoint. By default, it inherits the behaviour set by the preceding prop.
   */
  lgReverse: PropTypes.bool,
  /**
   * Choose if the item order should be reversed from the 'xl' breakpoint. When you pass in false, the order will be normal from the xl breakpoint. By default, it inherits the behaviour set by the preceding prop.
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
