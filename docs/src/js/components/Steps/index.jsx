import React from 'react';
import { Steps } from 'telus-thorium-enriched';

class StepsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      currentStatus: ''
    }
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    const currentStep = this.state.currentStep;
    if (currentStep < 4) {
      this.setState({
        currentStep: currentStep + 1
      });
    } else {
      this.setState({
        currentStatus: 'error'
      });

    }
  }

  render() {
    return (
      <div className="grid-row">
        <Steps current={this.state.currentStep} currentStatus={this.state.currentStatus}>
          <Steps.Step label="Plans & Addons" />
          <Steps.Step label="Account creation" />
          <Steps.Step label="Phone Information" />
          <Steps.Step label="Payment setup" />
          <Steps.Step label="Submit" />
        </Steps>
        <div className="offset-large-5">
          <button className="tds-button tds-button--primary" onClick={this.nextStep}>Next Step</button>
        </div>
      </div>

    );
  }
}

export default StepsExample;
