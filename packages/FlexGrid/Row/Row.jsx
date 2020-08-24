import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media } from '@tds/core-responsive'
import { safeRest } from '@tds/util-helpers'

import calculateLevel from '../calculateLevel'

const horizontalAlignStyles = ({ horizontalAlign }) => {
  switch (horizontalAlign) {
    case 'start':
      return {
        justifyContent: 'flex-start',
        textAlign: 'left',
      }
    case 'center':
      return {
        justifyContent: 'center',
        textAlign: 'center',
      }
    case 'end':
      return {
        justifyContent: 'flex-end',
        textAlign: 'right',
      }
    default:
      return {}
  }
}

const verticalAlignStyles = ({ verticalAlign }) => {
  switch (verticalAlign) {
    case 'top':
      return { alignItems: 'flex-start' }
    case 'middle':
      return { alignItems: 'center' }
    case 'bottom':
      return { alignItems: 'flex-end' }
    default:
      return {}
  }
}

const distributeStyles = ({ distribute }) => {
  let justifyContent
  if (distribute === 'between') {
    justifyContent = 'space-between'
  }
  if (distribute === 'around') {
    justifyContent = 'space-around'
  }
  return { justifyContent }
}

export const StyledRow = styled.div(
  horizontalAlignStyles,
  verticalAlignStyles,
  distributeStyles,
  ({ reverseLevel }) => ({
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 0,
    ...media.until('sm').css({
      flexDirection: reverseLevel[0] ? 'row-reverse' : 'row',
    }),
    ...media.from('sm').css({
      flexDirection: reverseLevel[1] ? 'row-reverse' : 'row',
    }),
    ...media.from('md').css({
      flexDirection: reverseLevel[2] ? 'row-reverse' : 'row',
    }),
    ...media.from('lg').css({
      flexDirection: reverseLevel[3] ? 'row-reverse' : 'row',
    }),
    ...media.from('xl').css({
      flexDirection: reverseLevel[4] ? 'row-reverse' : 'row',
    }),
  })
)

const Row = ({
  horizontalAlign,
  verticalAlign,
  distribute,
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
    <StyledRow
      {...safeRest(rest)}
      horizontalAlign={horizontalAlign}
      verticalAlign={verticalAlign}
      distribute={distribute}
      reverseLevel={reverseLevel}
    >
      {children}
    </StyledRow>
  )
}

Row.propTypes = {
  /**
   * Align columns horizontally within their row.
   */
  horizontalAlign: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * Align columns vertically within their row.
   */
  verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  /**
   * Distribute empty space around columns.
   */
  distribute: PropTypes.oneOf(['around', 'between']),
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
  children: PropTypes.node.isRequired,
}

Row.defaultProps = {
  horizontalAlign: undefined,
  verticalAlign: undefined,
  distribute: undefined,
  xsReverse: undefined,
  smReverse: undefined,
  mdReverse: undefined,
  lgReverse: undefined,
  xlReverse: undefined,
}

export default Row
