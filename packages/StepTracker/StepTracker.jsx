import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'
import Flexbox from '../../shared/components/Flexbox/Flexbox'

import safeRest from '../../shared/utils/safeRest'

import Step from './Step/Step'

import styles from './StepTracker.modules.scss'

const parseStepText = (current, steps, mobileStepLabelTemplate) => {
  return (
    <span>
      {mobileStepLabelTemplate
        .replace('%{current}', current < steps.length ? current + 1 : steps.length)
        .replace('%{total}', steps.length)}
    </span>
  )
}

const getStepLabel = (current, steps) => {
  return current < steps.length ? steps[current] : steps[steps.length - 1]
}

/**
 * Show the current position in a sequence of steps.
 *
 * @version ./package.json
 */

const StepTracker = ({ current, steps, mobileStepLabelTemplate, ...rest }) => {
  const stepText = parseStepText(current, steps, mobileStepLabelTemplate)
  const stepLabel = getStepLabel(current, steps)
  return (
    <div {...safeRest(rest)} data-testid="stepTrackerContainer">
      <Flexbox direction="row">
        {steps.map((label, index) => {
          return (
            <Step
              status={current}
              label={label}
              stepNumber={index + 1}
              stepIndex={index}
              key={label}
              data-testid={`step-${index}`}
            />
          )
        })}
      </Flexbox>
      <div className={styles.mobileLabel}>
        <Text data-testid="mobileStepLabel">
          {stepText} {stepLabel}
        </Text>
      </div>
    </div>
  )
}

StepTracker.propTypes = {
  /**
   * The active step. The minimum value is 0, while the maximum value is the length of the steps prop.
   */
  current: PropTypes.number.isRequired,
  /**
   * The steps as an array of strings.
   */
  steps: PropTypes.array.isRequired,
  /**
   * String for text to display current step progress on mobile devices.
   * Use %current to place the current step and use %total to place the total amount of steps.
   */
  mobileStepLabelTemplate: PropTypes.string,
}

StepTracker.defaultProps = {
  mobileStepLabelTemplate: 'Step %{current} of %{total}:',
}

export default StepTracker
