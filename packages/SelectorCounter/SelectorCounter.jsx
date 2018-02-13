import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CounterButton from './CounterButton'

import './SelectorCounter.scss'

/**
 * Choose a number.
 */
class SelectorCounter extends Component {
  state = {
    value: this.props.defaultValue,
  }

  handleChange = value => {
    this.setState({ value })

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value)
    }
  }

  /**
   * Handle the "increment" button
   * @param event
   */
  handleIncrement = event => {
    event.preventDefault()
    this.handleChange(parseInt(this.state.value, 10) + 1)
  }

  /**
   * Handle the "decrement" button
   * @param event
   */
  handleDecrement = event => {
    event.preventDefault()
    this.handleChange(parseInt(this.state.value, 10) - 1)
  }

  /**
   * Handle when the user types in a freeform value
   * @param event
   */
  handleInput = event => {
    this.handleChange(event.target.value)
  }

  focus = () => {
    this.input.focus()
  }

  render() {
    const {
      className,
      contextPrefix,
      contextSuffix,
      incrementorLabel,
      decrementorLabel,
      disabled,
      id,
      invalid,
      max,
      min,
      successful,
    } = this.props
    const value = this.state.value

    const cssClasses = {
      'selector-counter--disabled': disabled,
      'selector-counter--error': invalid,
      'selector-counter--successful': successful,
    }
    /* eslint-disable */
    return (
      <div className={classNames('selector-counter', className, cssClasses)}>
        <div className="accessible-hide" aria-live="assertive" aria-atomic="true">
          {`${contextPrefix} ${value} ${contextSuffix}`}
        </div>
        <input
          ref={input => (this.input = input)}
          id={id}
          type="number"
          pattern="\d*"
          value={value}
          className="selector-counter__value"
          disabled={disabled}
          onChange={this.handleInput}
          max={max}
          min={min}
          aria-invalid={invalid}
          aria-labelledby={this.props['aria-labelledby']}
          aria-describedby={this.props['aria-describedby']}
        />
        <CounterButton
          label={incrementorLabel}
          icon="caret-up"
          onClick={this.handleIncrement}
          disabled={disabled === true || (typeof max === 'number' && value >= max)}
          aria-controls={id}
        />
        <CounterButton
          label={decrementorLabel}
          icon="caret-down"
          onClick={this.handleDecrement}
          disabled={disabled === true || value <= min}
          aria-controls={id}
        />
      </div>
    )
    /* eslint-enable */
  }
}

SelectorCounter.propTypes = {
  /**
   * A unique HTML ID for the input element.
   */
  id: PropTypes.string,
  /**
   * One or more CSS class names separated by spaces to append onto the container.
   * Don't advertise as we plan on removing this feature soon.
   *
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /**
   * The initial value.
   */
  defaultValue: PropTypes.number,
  /**
   * The maximum allowed value.
   */
  max: PropTypes.number,
  /**
   * The minimum allowed value.
   */
  min: PropTypes.number,
  /**
   * An accessibility label for the incrementor button.
   */
  incrementorLabel: PropTypes.string,
  /**
   * An accessibility label for the decrementor button.
   */
  decrementorLabel: PropTypes.string,
  /**
   * A callback to be invoked when the value changes.
   *
   * @param {number} value The value.
   */
  onChange: PropTypes.func, // eslint-disable-line react/require-default-props
  /**
   * Whether or not to disable the input.
   */
  disabled: PropTypes.bool,
  /**
   * If true, marks the input as invalid.
   */
  invalid: PropTypes.bool,
  /**
   * If true, marks the input as successful.
   */
  successful: PropTypes.bool,
  /**
   * Accessible text prefix for the change event announcement.
   */
  contextPrefix: PropTypes.string,
  /**
   *
   * Accessible text suffix for the change event announcement.
   */
  contextSuffix: PropTypes.string,
}

SelectorCounter.defaultProps = {
  defaultValue: 0,
  max: null,
  min: 0,
  id: `sc${Math.ceil(Math.random() * 10000)}`,
  incrementorLabel: 'Increase value',
  decrementorLabel: 'Decrease value',
  disabled: false,
  invalid: false,
  successful: false,
  contextPrefix: '',
  contextSuffix: '',
}

export default SelectorCounter
