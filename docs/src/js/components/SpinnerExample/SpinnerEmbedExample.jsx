import React from 'react';
import { Spinner } from 'telus-thorium-enriched';

class SpinnerEmbedExample extends React.Component {
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
    const isSpinning = this.state.isSpinning;
    return (
      <div>
        <Spinner spinning={isSpinning} tip="Loading..." wrapperClassNames="test test2">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Spinner>
        <button onClick={this.toggleSpinning} className="tds-button tds-button--primary">Toggle spinner</button>
      </div>
    );
  }
}

export default SpinnerEmbedExample;