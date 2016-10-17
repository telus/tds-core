import React, { Component, PropTypes } from 'react';
import { SelectorCounter } from 'telus-thorium-enriched';
import classNames from 'classnames';

class SelectorCounterExample extends Component {
  constructor(props) {
    super(props);

    this.handleNumber = this.handleNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      curr: 0,
      succeeded: false
    };
  }

  handleNumber(curr) {
    this.setState({ curr, succeeded: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ succeeded: (this.state.curr !== 5)});
  }

  render() {
    const succeessful = this.state.succeeded;
    const invalid = (this.state.curr === 5);
    const fieldClasses = classNames('field', {
      'field--error': invalid,
      'field--success': succeessful
    });
    const listClasses = classNames('list', 'list--compact', {
      'list--error': invalid,
      'list--checked': succeessful
    });
    const helperClasses = classNames('helper', {
      'helper--error': invalid,
      'helper--success': succeessful
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field-col">
          <div className={fieldClasses}>
            <label>Choose a number</label>
            <div className={helperClasses}>
              <p className="text--small">Instructions</p>
              <ul className={listClasses}>
                <li className="list__item">Do not pick 5</li>
              </ul>
            </div>
            <SelectorCounter
              onChange={this.handleNumber}
              invalid={invalid}
              successful={succeessful}
            />
          </div>
          <button className="button button-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default SelectorCounterExample;
