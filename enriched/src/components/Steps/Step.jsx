import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const currentStatusOptions = ['waiting', 'processing', 'completed', 'error'];

const Step = ({ label, status, stepNumber }) => {
  const cls = classNames('step-tracker__step', {
    'step-tracker__step--completed': status === 'completed',
    'step-tracker__step--processing': status === 'processing',
    'step-tracker__step--waiting': status === 'waiting',
    'step-tracker__step--error': status === 'error',
  });
  return (
    <li className={cls}>
      <span className="step-tracker__icon"></span>
      <span className="step-tracker__label">{stepNumber}. {label}</span>
    </li>
  );
};

Step.propTypes = {
  label: PropTypes.string.isRequired
};

export default Step;
