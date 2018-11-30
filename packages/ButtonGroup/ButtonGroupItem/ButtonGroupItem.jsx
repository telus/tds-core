import React from 'react'
import PropTypes from 'prop-types'

import { or } from 'airbnb-prop-types'
import { componentWithName } from '@tds/util-prop-types'

import safeRest from '../../../shared/utils/safeRest'
import generateId from '../../../shared/utils/generateId/generateId'

import styles from './ButtonGroupItem.modules.scss'

const ButtonGroupItem = ({
  name,
  value,
  checked,
  onChange,
  onFocus,
  onBlur,
  children,
  ...rest
}) => {
  const itemId = generateId(name).postfix(value)
  return (
    <div {...safeRest(rest)} className={styles.itemContainer}>
      <input
        id={itemId}
        name={name}
        value={value}
        type="radio"
        checked={checked}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={styles.hiddenRadio}
      />
      <label htmlFor={itemId} className={styles.itemButton}>
        {children}
      </label>
    </div>
  )
}

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
  checked: PropTypes.bool,
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

  children: or([PropTypes.string, componentWithName('A11yContent')]).isRequired,
}

ButtonGroupItem.defaultProps = {
  checked: undefined,
  name: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

ButtonGroupItem.displayName = 'ButtonGroup.Item'

export default ButtonGroupItem
