
import React, { Component } from 'react';
import StepTracker from '../../src/components/StepTracker';
import hljs from 'highlight.js';
import Document from '../components/Document';
class StepTrackerPage extends Component {
  componentDidMount() {
    hljs.initHighlightingOnLoad();
  }
  render() {
    return (
      <div className="example">
        <div className="title">
          <h1>Step Tracker</h1>
        </div>
      <Document title="Step Tracker"
          demo={
            <StepTracker current={2}>
              <StepTracker.Step>Step A</StepTracker.Step>
              <StepTracker.Step>Step B</StepTracker.Step>
              <StepTracker.Step>Step C</StepTracker.Step>
            </StepTracker>
          }
          code={
`import { StepTracker } from 'telus-thorium-enriched';
ReactDOM.render(
  <StepTracker current={2}>
    <StepTracker.Step>Step A</StepTracker.Step>
    <StepTracker.Step>Step B</StepTracker.Step>
    <StepTracker.Step>Step C</StepTracker.Step>
  </StepTracker>
, document.getElementById('app'));`
        } />
      </div>
    );
  }
}

export default StepTrackerPage;
