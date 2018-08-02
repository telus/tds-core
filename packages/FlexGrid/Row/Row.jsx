import React from 'react'
import PropTypes from 'prop-types'

import { Row as ReactFlexboxGridRow } from 'react-flexbox-grid'
import calculateLevel from '../calculateLevel'

import styles from './Row.modules.scss'

import safeRest from '../../../shared/utils/safeRest'
import joinClassNames from '../../../shared/utils/joinClassNames'

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
  const getAlignment = () => {
    return {
      start: horizontalAlign === 'start' ? 'xs' : undefined,
      center: horizontalAlign === 'center' ? 'xs' : undefined,
      end: horizontalAlign === 'end' ? 'xs' : undefined,
      top: verticalAlign === 'top' ? 'xs' : undefined,
      middle: verticalAlign === 'middle' ? 'xs' : undefined,
      bottom: verticalAlign === 'bottom' ? 'xs' : undefined,
    }
  }

  const getDistribution = () => {
    return {
      around: distribute === 'around' ? 'xs' : undefined,
      between: distribute === 'between' ? 'xs' : undefined,
    }
  }

  const reverseLevel = calculateLevel(xsReverse, smReverse, mdReverse, lgReverse, xlReverse)

  return (
    <ReactFlexboxGridRow
      {...safeRest(rest)}
      {...getAlignment()}
      {...getDistribution()}
      className={joinClassNames(
        styles.flexRow,
        reverseLevel[0] ? styles.xsReverse : styles.xsReverseCancel,
        reverseLevel[1] ? styles.smReverse : styles.smReverseCancel,
        reverseLevel[2] ? styles.mdReverse : styles.mdReverseCancel,
        reverseLevel[3] ? styles.lgReverse : styles.lgReverseCancel,
        reverseLevel[4] ? styles.xlReverse : styles.xlReverseCancel
      )}
    >
      {children}
    </ReactFlexboxGridRow>
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
