import React from 'react'
import PropTypes from 'prop-types'

import Icon from '@tds/core-decorative-icon'
import Text from '@tds/core-text'

import styles from '../StepTracker.modules.scss'

/**
 * A single step of a StepTracker.
 */

const Step = ({ label, status, stepNumber, stepIndex }) => {
  const isStepActive = () => {
    return status > stepIndex || status === stepIndex
  }
  return (
    <div
      className={styles.step}
      aria-label={label}
      aria-current={status === stepIndex ? 'true' : 'false'}
      data-testid={`singleStepContainer-${stepIndex}`}
      data-isactive={isStepActive()}
    >
      <span className={isStepActive() ? styles.iconActive : styles.icon}>
        {status > stepIndex ? <Icon symbol="checkmark" size={16} variant="inverted" /> : <br />}
      </span>
      <div className={styles.label}>
        <Text bold={status === stepIndex}>
          {stepNumber}. {label}
        </Text>
      </div>
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
