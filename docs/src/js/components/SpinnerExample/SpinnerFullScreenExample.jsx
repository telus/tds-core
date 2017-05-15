import React from 'react';
import { Spinner } from 'telus-thorium-enriched';

class SpinnerFullScreenExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSpinning: false
    }
    this.activeSpinning = this.activeSpinning.bind(this);
  }

  activeSpinning(){
    this.setState({
      isSpinning: true
    });

    setTimeout(() => {
      this.setState({
        isSpinning: false
      });
    }, 3000);
  }
  render(){
    const isSpinning = this.state.isSpinning;
    return (
      <div>
        <Spinner spinning={isSpinning} tip="This is full screen..." fullScreen={true} />
        <button onClick={this.activeSpinning} className="tds-button tds-button--primary">Active full screen spinner for 3 seconds</button>
      </div>
    );
  }
}

export default SpinnerFullScreenExample;