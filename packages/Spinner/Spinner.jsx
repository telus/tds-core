import React from 'react'
import PropTypes from 'prop-types'

import SpinnerSvg from './SpinnerSvg/SpinnerSvg'

import positionStyles from '../../shared/styles/Position.modules.scss'
import styles from './Spinner.modules.scss'

// TODO: don't forget to bump the version here!
/**
 * @version 1.0.0
 *
 * A waiting indicator.
 */
const Spinner = ({ spinning, tip, a11yLabel, children, ...rest }) => {
  if (!spinning) {
    return children || null
  }

  if (children) {
    return (
      <div className={positionStyles.relative}>
        {<SpinnerSvg {...rest} tip={tip} a11yLabel={a11yLabel} overlay={true} />}

        <div className={styles.overlay} data-testid="overlay" />

        <div className={styles.opaque}>{children}</div>
      </div>
    )
  }

  return <SpinnerSvg {...rest} tip={tip} a11yLabel={a11yLabel} />
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
  // TODO: Document me and mark as a new prop
  a11yLabel: PropTypes.string,
  /**
   * Content to be overlaid while the spinner is active. Can be text, any HTML element,
   * or any component.
   */
  children: PropTypes.node,
}

Spinner.defaultProps = {
  spinning: false,
  tip: undefined,
  // TODO: Consider using aria-live assertive here too...
  a11yLabel: 'A spinner is active. Please wait while the page completes a task.',
  children: undefined,
}

export default Spinner
