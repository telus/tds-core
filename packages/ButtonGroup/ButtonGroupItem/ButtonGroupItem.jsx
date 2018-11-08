import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../shared/utils/safeRest'

import styles from './ButtonGroupItem.modules.scss'

const ButtonGroupItem = ({ name, value, selectedValue, onChange, children, ...rest }) => (
  <div className={styles.itemContainer}>
    <input
      id={value}
      name={name}
      value={value}
      type="radio"
      checked={selectedValue === value}
      onChange={onChange}
      className={styles.hiddenRadio}
      {...safeRest(rest)}
    />
    <label htmlFor={value} className={styles.itemButton}>
      {children}
    </label>
  </div>
)

ButtonGroupItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
}

ButtonGroupItem.defaultProps = {
  selectedValue: undefined,
  name: undefined,
  onChange: undefined,
}

ButtonGroupItem.displayName = 'ButtonGroup.Item'

export default ButtonGroupItem
