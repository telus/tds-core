import React from 'react'
import PropTypes from 'prop-types'

import DecorativeIcon from '../DecorativeIcon/DecorativeIcon'
import Choice from '../../shared/components/Choice/Choice'

import styles from './Checkbox.modules.scss'

/**
 *
 * <span class="docs--badge__new">new</span> <span class="docs--badge__version">v0.32.0</span>
 */
const Checkbox = props => (
  <Choice {...props} type="checkbox" inputTypeStyles={styles}>
    {checked => {
      return checked && <DecorativeIcon symbol="checkmark" size={16} variant="inverted" />
    }}
  </Choice>
)

Checkbox.propTypes = {
  /**
   * The label.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Associate this checkbox with a group. Set as the HTML name attribute.
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
   * An error message.
   */
  error: PropTypes.string,
  /**
   * A callback function to be invoked when the checkbox is checked or unchecked.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * A callback function to be invoked when the checkbox receives focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to be invoked when the checkbox loses focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onBlur: PropTypes.func,
}

Checkbox.defaultProps = {
  checked: false,
  feedback: undefined,
  error: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Checkbox
