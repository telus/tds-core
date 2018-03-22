import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'

import joinClassNames from '../../shared/utils/joinClassNames'
import safeRest from '../../shared/utils/safeRest'

import styles from './Spinner.modules.scss'

// TODO: maybe make this a component instead of a function
const getSpinner = (tip, overlay, rest) => (
  <div
    className={joinClassNames(styles.container, overlay && styles.centered)}
    data-testid="spinner"
  >
    {/* TODO: hard coded colour. Can we use a class instead? */}
    {/* TODO: accessibility props for the svg? */}
    <svg
      {...safeRest(rest)}
      className={styles.svg}
      viewBox="0 0 100 100"
      width="0"
      height="0"
      data-testid="svg"
    >
      <circle
        className={styles.circle}
        stroke="#177a00"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="89, 200"
        strokeDashoffset="0"
        cx="50"
        cy="50"
        r="20"
      />
    </svg>
    {tip && <Text size="small">{tip}</Text>}
  </div>
)

// TODO: don't forget to bump the version here!

/**
 * @version 1.0.0
 *
 * A waiting indicator.
 */
const Spinner = ({ spinning, tip, children, ...rest }) => {
  if (!spinning) {
    return children || null
  }

  if (children) {
    return (
      <div className={styles.overlayContainer}>
        {getSpinner(tip, true, rest)}

        <div className={styles.overlay} data-testid="overlay" />

        <div className={styles.opaque}>{children}</div>
      </div>
    )
  }

  return getSpinner(tip, false, rest)
}

Spinner.propTypes = {
  /**
   * Whether or not to render the spinner.
   */
  spinning: PropTypes.bool,
  /**
   * A additional message.
   */
  tip: PropTypes.string,
  /**
   * Content to be overlaid while the spinner is active. Can be text, any HTML element,
   * or any component.
   */
  children: PropTypes.node,
}

Spinner.defaultProps = {
  spinning: false,
  tip: undefined,
  children: undefined,
}

export default Spinner
