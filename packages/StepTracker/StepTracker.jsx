import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'
import Box from '@tds/core-box'

import Step from './Step/Step'

import styles from './StepTracker.modules.scss'

/**
 * Show the current position in a sequence of steps.
 *
 * @version ./package.json
 */

const StepTracker = ({ current, steps, stepText }) => {
  return (
    <div>
      <Box vertical={2} dangerouslyAddClassName={styles.container}>
        {steps.map((label, index) => {
          return (
            /* eslint-disable react/no-array-index-key */
            <StepTracker.Step
              status={current}
              label={steps[index]}
              stepNumber={index + 1}
              stepIndex={index}
              key={index}
            />
            /* eslint-enable react/no-array-index-key */
          )
        })}
      </Box>
      <div className={styles.mobileLabel}>
        <Text>
          {stepText
            .replace('%current', current < steps.length ? current + 1 : steps.length)
            .replace('%total', steps.length)}{' '}
          {current < steps.length ? steps[current] : steps[steps.length - 1]}
        </Text>
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
   * String for text to display current step progress on mobile devices.
   * Use %current to place the current step and use %total to place the total amount of steps.
   */
  stepText: PropTypes.string,
}

StepTracker.defaultProps = {
  stepText: 'Step %current of %total:',
}

StepTracker.Step = Step

export default StepTracker
