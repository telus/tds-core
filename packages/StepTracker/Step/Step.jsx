import React from 'react'
import PropTypes from 'prop-types'

import Icon from '@tds/core-decorative-icon'

import styles from '../StepTracker.modules.scss'

/**
 * A single step of a StepTracker.
 */

const Step = ({ label, status, stepNumber, stepIndex }) => {
  const cls = [styles.step]
  if (status > stepIndex) {
    cls.push(styles.completed)
  } else if (status === stepIndex) {
    cls.push(styles.processing)
  }

  /* eslint-disable jsx-a11y/aria-props */
  return (
    <li
      className={cls.join(' ')}
      aria-label={label}
      aria-current={status === stepIndex ? 'true' : 'false'}
    >
      <span className={styles.icon}>
        <span style={{ opacity: status > stepIndex ? 1 : 0 }}>
          <Icon symbol="checkmark" size={16} variant="inverted" />
        </span>
      </span>
      <span className={styles.label}>
        {stepNumber}. {label}
      </span>
    </li>
  )
  /* eslint-enable jsx-a11y/aria-props */
}

Step.propTypes = {
  /**
   * The label of this step.
   */
  label: PropTypes.string,
  /**
   * The current step the user is on.
   *
   * @ignore
   */
  status: PropTypes.number, // eslint-disable-line react/require-default-props
  /**
   * The real, user-friendly step number. This is the stepIndex + 1.
   *
   * @ignore
   */
  stepNumber: PropTypes.number, // eslint-disable-line react/require-default-props
  /**
   * The step's index. This represents its place in the steps array of the StepTracker component.
   *
   * @ignore
   */
  stepIndex: PropTypes.number, // eslint-disable-line react/require-default-props
}

export default Step
