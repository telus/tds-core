import React from 'react';
import { Spinner } from 'telus-thorium-enriched';

class SpinnerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSpinning: true
    }
    this.toggleSpinning = this.toggleSpinning.bind(this);
  }

  toggleSpinning(){
    this.setState({
      isSpinning: !this.state.isSpinning
    });
  }
  render(){
    const sty = {
      background: 'rgba(0,0,0,0.05)',
      height: '100px'
    };
    const isSpinning = this.state.isSpinning;
    return (
      <div>
        <div style={sty}>
          <Spinner spinning={isSpinning} tip="Loading..." />
        </div>
        <button onClick={this.toggleSpinning} className="tds-button tds-button--primary">Toggle spinner</button>
      </div>
    );
  }
}

export default SpinnerExample;
