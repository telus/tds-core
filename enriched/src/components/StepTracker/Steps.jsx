import React, { Component } from 'react';
import classnames from 'classnames';
import Step from './Step';

class StepTracker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, current, ...others } = this.props;
    const cls = classnames({
      'c-step-tracker': true,
      [className]: !!className
    });

    let children = React.Children.map(this.props.children, (item, index) => {
      return (
        <Step
          {...item.props}
          isFinished={index + 1 < current}
          isProcess={index + 1 === current}
          index={index + 1}
        />
      );
    });
    return (
      <div {...others} className={cls}>
        {children}
      </div>
    );
  }
}

export default StepTracker;
