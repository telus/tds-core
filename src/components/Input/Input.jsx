import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import joinClassNames from '../../utils/joinClassNames'

import Tooltip from '../Tooltip/Tooltip'
import InputFeedback from '../InputFeedback/InputFeedback'
import FormField from '../../../shared/components/FormField/FormField'
import FeedbackIcon from '../../../shared/components/FormField/FeedbackIcon'

import addRightPadding from '../../../shared/components/FormField/addRightPadding'

import positionStyles from '../Position.modules.scss'
import styles from './Input.modules.scss'

/**
 * <span class="docs--badge__updated">updated</span> <span class="docs--badge__version">v0.33.0</span>
 */
const Input = props => (
  <FormField {...props}>
    {({ className, ...inputProps }, showFeedbackIcon, feedback) => (
      <div className={positionStyles.relative}>
        <input
          {...inputProps}
          className={joinClassNames(className, styles.hideNumberSpinner, styles.input)}
          style={addRightPadding(showFeedbackIcon ? 1 : 0)}
        />

        {!inputProps.disabled && (
          <div className={styles.iconsPosition}>
            <FeedbackIcon showIcon={showFeedbackIcon} feedback={feedback} />
          </div>
        )}
      </div>
    )}
  </FormField>
)

Input.propTypes = {
  /**
   * The HTML5 type of the input field.
   */
  type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'search', 'tel', 'url']),
  /**
   * The label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Clarify the expected input.
   */
  hint: PropTypes.string,
  /**
   * The value.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * A feedback state.
   */
  feedback: PropTypes.oneOf(['success', 'error']),
  /**
   * An error message. Either an error or a helper should be used, not both.
   */
  error: PropTypes.string,
  /**
   * A detailed explanation of the input expected by a form field. Can be text,
   * other components, or HTML elements.
   *
   * If a function is provided, it must return an `InputFeedback`. The function will be
   * invoked with arguments below.
   *
   * **Deprecation:** As of v1.0.0, passing `Input.Helper` will no longer work.
   *
   * @param {String} feedback The input's current feedback state.
   * @param {String} value The input's current value.
   */
  helper: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /**
   * A `Tooltip`
   */
  tooltip: childrenOfType(Tooltip),
  /**
   * A callback function to be invoked when the input value changes.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * A callback function to be invoked when the input receives focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to be invoked when the input loses focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onBlur: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  hint: undefined,
  value: '',
  feedback: undefined,
  error: undefined,
  helper: undefined,
  tooltip: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

// TODO: This will no longer necessary once InputFeedback is exported on its own. Removing this will be a breaking change.
Input.Helper = InputFeedback

export default Input
