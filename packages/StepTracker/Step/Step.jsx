import React from 'react'
import PropTypes from 'prop-types'

import Icon from '@tds/core-decorative-icon'
import Text from '@tds/core-text'

import styles from '../StepTracker.modules.scss'

/**
 * A single step of a StepTracker.
 */

const Step = ({ label, status, stepNumber, stepIndex }) => {
  return (
    <div
      className={status > stepIndex || status === stepIndex ? styles.stepActive : styles.step}
      aria-label={label}
      aria-current={status === stepIndex ? 'true' : 'false'}
    >
      <span className={styles.icon}>
        {status > stepIndex ? <Icon symbol="checkmark" size={16} variant="inverted" /> : <br />}
      </span>
      <span className={styles.label}>
        <Text bold={status === stepIndex}>
          {stepNumber}. {label}
        </Text>
      </span>
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
