import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Step from './Step/Step'

import './StepTracker.scss'

/**
 * Show the current position in a sequence of steps.
 *
 * @version ./package.json
 */
class StepTracker extends Component {
  getStatus(current, index) {
    if (index < current) {
      return 'completed'
    } else if (index === current) {
      return 'processing'
    }

    return 'waiting'
  }

  render() {
    const { children, className, current } = this.props
    const cls = classNames('step-tracker', className)
    const totalSteps = children.length

    let currentStepLabel
    let currentStepNumber

    if (current < totalSteps) {
      currentStepLabel = children[current].props.label
      currentStepNumber = current + 1
    } else {
      currentStepLabel = children[current - 1].props.label
      currentStepNumber = current
    }

    return (
      <div role="progressbar">
        <ul className={cls}>
          {React.Children.map(
            children,
            (element, index) => {
              const stepNumber = index + 1
              const status = this.getStatus(current, index)
              const props = {
                stepNumber,
                status,
              }
              return React.cloneElement(element, props)
            },
            this
          )}
        </ul>
        <div className="step-tracker__mobile-label">
          <span className="step-tracker__mobile-label-step-info">
            Step {currentStepNumber} of {totalSteps}:
          </span>{' '}
          {currentStepLabel}
        </div>
      </div>
    )
  }
}

StepTracker.propTypes = {
  /**
   * The active step.
   */
  current: PropTypes.number,
  /**
   * The steps. Must be TDS `StepTracker.Step` components.
   *
   * @see See [StepTracker.Step](#steptracker)
   */
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  /**
   * One or more CSS class names separated by spaces to append onto the container.
   * Don't advertise as we plan on removing this feature soon.
   *
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
}

StepTracker.defaultProps = {
  current: 0,
}

StepTracker.Step = Step

export default StepTracker
