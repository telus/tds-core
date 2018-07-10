import React from 'react'
import PropTypes from 'prop-types'

import { Row as ReactFlexboxGridRow } from 'react-flexbox-grid'

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

  const calculateReverseLevel = () => {
    const levelToggles = [xsReverse, smReverse, mdReverse, lgReverse, xlReverse]
    const enabledLevels = [false, false, false, false, false]

    for (let toggles = 0; toggles < levelToggles.length; toggles += 1) {
      for (let levels = toggles; levels < enabledLevels.length; levels += 1) {
        if (levelToggles[toggles] !== undefined) {
          enabledLevels[levels] = levelToggles[toggles]
        }
      }
    }

    return enabledLevels
  }

  const reverseLevel = calculateReverseLevel()

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
