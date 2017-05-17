import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import currentStatusOptions from './Step';

if ( process.env.BROWSER ) {
  require('./Steps.scss');
}

class Steps extends Component {
  getStatus(current, status, index) {
    if (status === 'error' && current === index) {
      return 'error';
    } else if (index < current) {
      return 'completed';
    } else if (index === current) {
      return 'processing';
    } else {
      return 'waiting';
    }
  }

  render() {
    const { children, className, current, currentStatus } = this.props;
    const cls = classNames('step-tracker', className);
    const mobileLabeCls = classNames('step-tracker__mobile-label', {
      'step-tracker__mobile-label--error': currentStatus === 'error'
    });
    const totalSteps = children.length;
    const currentChild = children[current];
    return (
      <div>
        <ul className={cls}>
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
        <div className={mobileLabeCls}>
          <span className="step-tracker__mobile-label-step-info">
            Step {current + 1} of {totalSteps}:
          </span> {currentChild.props.label}
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
