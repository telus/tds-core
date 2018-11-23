import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../shared/utils/safeRest'

import styles from './ButtonGroupItem.modules.scss'

const ButtonGroupItem = ({
  name,
  value,
  selectedValue,
  onChange,
  onFocus,
  onBlur,
  children,
  ...rest
}) => (
  <div className={styles.itemContainer} {...safeRest(rest)}>
    <input
      id={value}
      name={name}
      value={value}
      type="radio"
      checked={selectedValue === value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={styles.hiddenRadio}
      {...safeRest(rest)}
    />
    <label htmlFor={value} className={styles.itemButton}>
      {children}
    </label>
  </div>
)

ButtonGroupItem.propTypes = {
  /**
   *@ignore
   *
   * The name of the ButtonGroup this item is in. (Passed in from parent)
   */
  name: PropTypes.string,
  /**
   * The value of this button.
   */
  value: PropTypes.string.isRequired,
  /**
   *@ignore
   *
   * The current selected value of the full ButtonGroup. (Passed in from parent)
   */
  selectedValue: PropTypes.string,
  /**
   *@ignore
   *
   * A callback to communicate which button has been selected. (Passed in from parent)
   */
  onChange: PropTypes.func,
  /**
   *@ignore
   *
   * A callback that triggers when a button is given focus. (Passed in from parent)
   */
  onFocus: PropTypes.func,
  /**
   *@ignore
   *
   * A callback that triggers when a button loses focus. (Passed in from parent)
   */
  onBlur: PropTypes.func,
  /**
   * The button's label. (A11yContent supported)
   */

  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

ButtonGroupItem.defaultProps = {
  selectedValue: undefined,
  name: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

ButtonGroupItem.displayName = 'ButtonGroup.Item'

export default ButtonGroupItem
