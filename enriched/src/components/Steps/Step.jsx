import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const currentStatusOptions = ['waiting', 'processing', 'completed'];

const Step = ({ label, status, stepNumber }) => {
  const cls = classNames('step-tracker__step', {
    'step-tracker__step--completed': status === 'completed',
    'step-tracker__step--processing': status === 'processing',
    'step-tracker__step--waiting': status === 'waiting'
  });
  /* eslint-disable jsx-a11y/aria-props */
  return (
    <li className={cls} aria-label={label} aria-current={status === 'processing' ? 'true' : 'false'}>
      <span className="step-tracker__icon" />
      <span className="step-tracker__label">{stepNumber}. {label}</span>
    </li>
  );
  /* eslint-enable jsx-a11y/aria-props */
};

Step.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.oneOf(currentStatusOptions),
  stepNumber: PropTypes.number
};

export default Step;
