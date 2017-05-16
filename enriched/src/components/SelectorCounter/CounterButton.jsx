/**
 * CounterButton is an element that can be clicked in order to change the
 * value of a SelectorCounter.
 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

const defaultProps = {
  label: 'Change value',
  icon: 'caret-up',
  onClick: () => {},
  disabled: false
};

const noop = () => {};

export default function counterButton(props) {
  const { label, icon, onClick, disabled, ...extraProps } = props;

  return (
    <button
      aria-label={label}
      className="tds-button--plain selector-counter__button"
      onClick={disabled ? noop : onClick}
      disabled={disabled}
      {...extraProps}
    >
      <i className={`selector-counter__icon icon icon-core-${icon}`} />
    </button>
  );
}

counterButton.propTypes = propTypes;

counterButton.defaultProps = defaultProps;
