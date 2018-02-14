import React from 'react'
import PropTypes from 'prop-types'

import Choice from '../../../shared/components/Choice/Choice'

import styles from './Radio.modules.scss'

/**
 *
 * <span class="docs--badge__new">new</span> <span class="docs--badge__version">v0.32.0</span>
 */
const Radio = props => (
  <Choice {...props} type="radio" inputTypeStyles={styles}>
    {(checked, disabled) => {
      return (
        checked && (
          <span
            className={disabled ? styles.innerDisabledChecked : styles.innerChecked}
            data-testid="fake-inner-radio"
          />
        )
      )
    }}
  </Choice>
)

Radio.propTypes = {
  /**
   * The label.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Associate this radio with a group. Set as the HTML name attribute.
   */
  name: PropTypes.string.isRequired,
  /**
   * The value. Must be unique within the group.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The checked state
   */
  checked: PropTypes.bool,
  /**
   * A feedback state.
   */
  feedback: PropTypes.oneOf(['error']),
  /**
   * A callback function to be invoked when the radio is checked or unchecked.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * A callback function to be invoked when the radio receives focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to be invoked when the radio loses focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onBlur: PropTypes.func,
}

Radio.defaultProps = {
  checked: false,
  feedback: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Radio
