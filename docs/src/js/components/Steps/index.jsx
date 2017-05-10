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
    if (currentStep < 2) {
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
          <Steps.Step label="Login" />
          <Steps.Step label="Purchase" />
          <Steps.Step label="Checkout" />
        </Steps>
        <div className="offset-large-5">
          <button className="button button-green" onClick={this.nextStep}>Next Step</button>
        </div>
      </div>
      
    );
  }
}

export default StepsExample;
