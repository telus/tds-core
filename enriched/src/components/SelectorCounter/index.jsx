import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import CounterButton from './CounterButton';

if (process.env.BROWSER) {
  require('./SelectorCounter.scss');
}

class SelectorCounter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.state = {
      value: props.defaultValue
    };
  }

  handleChange(value) {
    this.setState({ value });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value);
    }
  }

  handleIncrement(e) {
    e.preventDefault();
    this.handleChange(this.state.value + 1);
  }

  handleDecrement(e) {
    e.preventDefault();
    this.handleChange(this.state.value - 1);
  }

  render() {
    const {
      className,
      incrementorLabel,
      decrementorLabel,
      disabled,
      invalid,
      min,
      successful
    } = this.props;

    const cssClasses = {
      'selector-counter--disabled': disabled,
      'selector-counter--error': invalid,
      'selector-counter--successful': successful
    };

    return (
      <div className={classNames('selector-counter', className, cssClasses)}>
        <span
          aria-live="polite"
          aria-atomic="true"
          className="selector-counter__value"
        >
          {this.state.value}
        </span>
        <CounterButton
          label={incrementorLabel}
          icon="caret-up"
          onClick={this.handleIncrement}
          disabled={disabled}
        />
        <CounterButton
          label={decrementorLabel}
          icon="caret-down"
          onClick={this.handleDecrement}
          disabled={(disabled === true || this.state.value <= min)}
        />
      </div>
    );
  }
}

SelectorCounter.propTypes = {
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  incrementorLabel: PropTypes.string,
  decrementorLabel: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  successful: PropTypes.bool
};

SelectorCounter.defaultProps = {
  defaultValue: 0,
  min: 0,
  incrementorLabel: 'Increase value',
  decrementorLabel: 'Decrease value'
};

export default SelectorCounter;
