import React from 'react'
import PropTypes from 'prop-types'

import { Row as ReactFlexboxGridRow } from 'react-flexbox-grid'

import styles from './Row.modules.scss'

import safeRest from '../../../shared/utils/safeRest'

/**
 * @version 1.0.0
 */
const Row = ({ horizontalAlign, verticalAlign, distribute, children, ...rest }) => {
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

  return (
    <ReactFlexboxGridRow
      {...safeRest(rest)}
      {...getAlignment()}
      {...getDistribution()}
      className={styles.flexRow}
    >
      {children}
    </ReactFlexboxGridRow>
  )
}

Row.propTypes = {
  /**
   * Align columns horizontally at the start, center, or end of their Row.
   */
  horizontalAlign: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * Align columns vertically at the top, middle, or bottom of their Row.
   */
  verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  /**
   * Choose which flexbox distribution to use on your nested columns.
   */
  distribute: PropTypes.oneOf(['around', 'between']),
  children: PropTypes.node.isRequired,
}

Row.defaultProps = {
  horizontalAlign: undefined,
  verticalAlign: undefined,
  distribute: undefined,
}

export default Row
