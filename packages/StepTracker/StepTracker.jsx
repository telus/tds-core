import React from 'react'
import PropTypes from 'prop-types'

import Step from './Step/Step'

import styles from './StepTracker.modules.scss'

/**
 * Show the current position in a sequence of steps.
 *
 * @version ./package.json
 */

const StepTracker = props => {
  return (
    <div>
      <ul className={styles.container}>
        {props.steps.map((label, index) => {
          return React.createElement(StepTracker.Step, {
            label,
            status: props.current,
            label: props.steps[index], // eslint-disable-line no-dupe-keys
            stepNumber: index + 1,
            stepIndex: index,
            key: index, // eslint-disable-line react/no-array-index-key
          })
        })}
      </ul>
      <div className={styles.mobileLabel}>
        <span className={styles.mobileLabelStepInfo}>
          {props.stepText}{' '}
          {props.current < props.steps.length ? props.current + 1 : props.steps.length}{' '}
          {props.outOfText} {props.steps.length}:{' '}
        </span>
        {props.current < props.steps.length
          ? props.steps[props.current]
          : props.steps[props.steps.length - 1]}
      </div>
    </div>
  )
}

StepTracker.propTypes = {
  /**
   * The active step. The minimum value is 0, while the maximum value is the length of the steps prop.
   */

  // eslint-disable-next-line consistent-return
  current: (props, propName, componentName) => {
    let error
    if (props[propName] == null) {
      error = 'Value is null. `current` prop is required.'
    } else if (!Number.isInteger(props[propName])) {
      error = 'Value is not an integer.'
    } else if (props[propName] < 0) {
      error = 'Value is less than 0.'
    } else if (props[propName] > props.steps.length) {
      error = 'Prop is greater then the length of the `steps` prop.'
    }

    if (error) {
      return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. ${error}`)
    }
  },
  /**
   * The steps as an array of strings.
   */
  steps: PropTypes.array.isRequired,
  /**
   * String for text to display in front of current step number.
   */
  stepText: PropTypes.string,
  /**
   * String for text to display in between current step and total step numbers.
   */
  outOfText: PropTypes.string,
}

StepTracker.defaultProps = {
  stepText: 'Step',
  outOfText: 'of',
}

StepTracker.Step = Step

export default StepTracker
