import React from 'react'
import PropTypes from 'prop-types'

import Icon from '@tds/core-decorative-icon'
import Text from '@tds/core-text'
import Flexbox from '../../../shared/components/Flexbox/Flexbox'

import styles from '../StepTracker.modules.scss'

/**
 * A single step of a StepTracker.
 */

const Step = ({ label, status, stepNumber, stepIndex }) => {
  const isStepActive = () => {
    if (status > stepIndex || status === stepIndex) {
      return styles.stepActive
    }
    return styles.step
  }
  return (
    <div
      className={isStepActive()}
      aria-label={label}
      aria-current={status === stepIndex ? 'true' : 'false'}
      data-testid={`singleStepContainer-${stepIndex}`}
    >
      <span className={styles.icon}>
        {status > stepIndex ? <Icon symbol="checkmark" size={16} variant="inverted" /> : <br />}
      </span>
      <Flexbox direction="row" justifyContent="center" dangerouslyAddClassName={styles.label}>
        <Text bold={status === stepIndex}>
          {stepNumber}. {label}
        </Text>
      </Flexbox>
    </div>
  )
}

Step.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  stepNumber: PropTypes.number.isRequired,
  stepIndex: PropTypes.number.isRequired,
}

export default Step
