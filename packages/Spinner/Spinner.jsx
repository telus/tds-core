import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Spinner.scss'

/**
 * @version 1.0.0
 *
 * A waiting indicator.
 */
class Spinner extends Component {
  getSpinWrapper = (spinEl, spinning) => {
    const containerCls = classnames('spinner-container', {
      'spinner-container--loading': spinning,
    })
    return (
      <div className="spinner-wrapper">
        {spinning && <div className="spinner-wrapper__content-blocker" />}
        {spinEl}
        <div className={containerCls}>{this.props.children}</div>
      </div>
    )
  }

  getSpinElement = (spinning, tip) => {
    const cls = classnames('spinner', {
      'spinner--spinning': spinning,
    })
    return (
      <div className={cls}>
        <svg className="spinner__svg" viewBox="0 0 100 100" width="0" height="0">
          <circle
            className="spinner__circle"
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
        {tip && <div className="spinner__tip">{tip}</div>}
      </div>
    )
  }

  isNestedPattern = () => {
    return !!(this.props && this.props.children)
  }

  render() {
    const { spinning, tip } = this.props
    if (this.isNestedPattern()) {
      return this.getSpinWrapper(this.getSpinElement(spinning, tip), spinning)
    }
    return this.getSpinElement(spinning, tip)
  }
}

Spinner.propTypes = {
  /**
   * A message to display along with the spinner animation.
   */
  tip: PropTypes.string, // eslint-disable-line react/require-default-props
  /**
   * Whether or not to display the component.
   */
  spinning: PropTypes.bool,
  /**
   * Content to be overlaid while the spinner is active. Can be text, any HTML element,
   * or any component.
   */
  children: PropTypes.node, // eslint-disable-line react/require-default-props
}

Spinner.defaultProps = {
  spinning: false,
}

export default Spinner
