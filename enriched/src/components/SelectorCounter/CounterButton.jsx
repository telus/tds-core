import React, { PropTypes } from 'react';
import classNames from 'classnames';

function counterButton({ label, icon, onClick, disabled }) {
  return (
    <button
      aria-label={label}
      className="selector-counter__button"
      onClick={onClick}
      disabled={disabled}
    >
      <i className={`selector-counter__icon icon icon-core-${icon}`} />
    </button>
  )
}

counterButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

counterButton.defaultProps = {
  label: 'Change value',
  icon: 'caret-up',
  onClick: () => {},
  disabled: false
};

export default counterButton;
