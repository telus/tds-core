import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/**
 * A single step of a Steps component.
 *
 * _This component can only be used as a child of `Steps`, and must be accessed as a
 * name-spaced component: `Steps.Step`._
 *
 * @see See [Steps](#steps) for usage.
 */
const Step = ({ label, status, stepNumber }) => {
  const cls = classNames('step-tracker__step', {
    'step-tracker__step--completed': status === 'completed',
    'step-tracker__step--processing': status === 'processing',
    'step-tracker__step--waiting': status === 'waiting',
  })
  /* eslint-disable jsx-a11y/aria-props */
  return (
    <li
      className={cls}
      aria-label={label}
      aria-current={status === 'processing' ? 'true' : 'false'}
    >
      <span className="step-tracker__icon" />
      <span className="step-tracker__label">
        {stepNumber}. {label}
      </span>
    </li>
  )
  /* eslint-enable jsx-a11y/aria-props */
}

Step.propTypes = {
  /**
   * The label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Each step's status is determined by its parent Steps component.
   *
   * @ignore
   */
  status: PropTypes.oneOf(['waiting', 'processing', 'completed']), // eslint-disable-line react/require-default-props
  /**
   * Each step's status is determined by its parent Steps component.
   *
   * @ignore
   */
  stepNumber: PropTypes.number, // eslint-disable-line react/require-default-props
}

export default Step
