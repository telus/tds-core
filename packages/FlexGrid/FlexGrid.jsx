import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media, breakpoints } from '@tds/core-responsive'
import { safeRest, pixelToRem } from '@tds/util-helpers'

import Col from './Col/Col'
import Row from './Row/Row'
import calculateLevel from './calculateLevel'
import GutterContext from './gutterContext'

const rem = breakpoint => pixelToRem(breakpoints[breakpoint])

export const StyledGrid = styled.div(({ reverseLevel, limitWidth, outsideGutter }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: `0 ${!outsideGutter ? '-1rem' : 'auto'}`,
  width: !outsideGutter ? undefined : '100%',
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
}))

/**
 * A mobile-first flexbox grid.
 *
 * @version ./package.json
 */

const FlexGrid = ({
  limitWidth,
  gutter,
  outsideGutter,
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
      <StyledGrid
        {...safeRest(rest)}
        outsideGutter={outsideGutter}
        reverseLevel={reverseLevel}
        limitWidth={limitWidth}
      >
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
   * @since 3.1.0
   * Whether or not to include gutter at the ends to the left and right of the FlexGrid
   */
  outsideGutter: PropTypes.bool,
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
  outsideGutter: true,
  xsReverse: undefined,
  smReverse: undefined,
  mdReverse: undefined,
  lgReverse: undefined,
  xlReverse: undefined,
}

FlexGrid.Row = Row
FlexGrid.Col = Col

export default FlexGrid
