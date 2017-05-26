import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { currentStatusOptions } from './Step';

if (process.env.BROWSER) {
  require('./Steps.scss');
}

class Steps extends Component {

  getStatus(current, status, index) {
    if (index < current) {
      return 'completed';
    } else if (index === current) {
      return 'processing';
    }

    return 'waiting';
  }

  render() {
    const { children, className, current, currentStatus } = this.props;
    const cls = classNames('step-tracker', className);
    const totalSteps = children.length;

    let currentStepLabel;
    let currentStepNumber;

    if (current < totalSteps) {
      currentStepLabel = children[current].props.label;
      currentStepNumber = current + 1;
    } else {
      currentStepLabel = children[current - 1].props.label;
      currentStepNumber = current;
    }

    return (
      <div>
        <ul className={cls} role="progressbar">
          {
            React.Children.map(children, (element, index) => {
              const stepNumber = index + 1;
              const status = this.getStatus(current, currentStatus, index);
              const props = {
                stepNumber: stepNumber.toString(),
                status
              };
              return React.cloneElement(element, props);
            }, this)
          }
        </ul>
        <div className="step-tracker__mobile-label">
          <span className="step-tracker__mobile-label-step-info">
            Step {currentStepNumber} of {totalSteps}:
          </span> {currentStepLabel}
        </div>
      </div>
    );
  }
}

Steps.propTypes = {
  current: PropTypes.number,
  currentStatus: PropTypes.oneOf(currentStatusOptions),
  children: PropTypes.node,
  className: PropTypes.string
};

Steps.defaultProps = {
  current: 0,
  currentStatus: 'processing'
};

export default Steps;
