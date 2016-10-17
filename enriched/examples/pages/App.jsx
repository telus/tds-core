
import React, { Component, PropTypes } from 'react';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.element.isRequired,
  error    : PropTypes.object,
};

export default App;
