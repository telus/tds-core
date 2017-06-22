import React from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
  require('./RadioSelectorItem.scss');
}

const RadioSelectorItem = ({ id, value, groupName, onSelect, children }) => {
  return (
    <div className="large-12 radio-selector-item__outer-container">
      <label htmlFor={id} className="choice radio-selector-item__inner-container">
        <input
          type="radio"
          name={groupName}
          id={id}
          value={value}
          onClick={onSelect}
        />
        <div className="choice__text">{children}</div>
      </label>
    </div>
  );
};

RadioSelectorItem.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default RadioSelectorItem;