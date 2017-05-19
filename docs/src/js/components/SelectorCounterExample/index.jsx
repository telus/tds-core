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

    const invalid = (this.state.curr === 5);
    this.setState({ succeeded: !invalid});

    if (invalid) {
      this.counter.focus();
    }
  }

  render() {
    const succeessful = this.state.succeeded;
    const invalid = (this.state.curr === 5);
    const fieldClasses = classNames('tds-field', {
      'tds-field--error': invalid,
      'tds-field--success': succeessful
    });
    const listClasses = classNames('list', 'list--compact', {
      'list--error': invalid,
      'list--checked': succeessful
    });
    const helperClasses = classNames('tds-helper', {
      'tds-helper--error': invalid,
      'tds-helper--success': succeessful
    });

    return (
        <form onSubmit={this.handleSubmit}>
          <div className={fieldClasses}>
            <label htmlFor="ex-selcounter">How many smartphone plans?</label>
            <div className={helperClasses} id="ex-selcounter-desc">
              <p className="text--small">Instructions</p>
              <ul className={listClasses}>
                <li className="list__item">Do not pick 5</li>
              </ul>
            </div>
            <SelectorCounter
              ref={(counter) => this.counter = counter}
              id="ex-selcounter"
              incrementorLabel="Add a plan"
              decrementorLabel="Remove a plan"
              onChange={this.handleNumber}
              invalid={invalid}
              successful={succeessful}
              aria-describedby="ex-selcounter-desc"
              contextPrefix="You chose"
              contextSuffix="smartphone plans"
            />
          </div>
          <button className="tds-button tds-button--primary">Submit</button>
        </form>
    );
  }
}

export default SelectorCounterExample;
