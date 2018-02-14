import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import joinClassNames from '../../utils/joinClassNames'

import Tooltip from '../Tooltip/Tooltip'
import FormField from '../../../shared/components/FormField/FormField'
import FeedbackIcon from '../../../shared/components/FormField/FeedbackIcon'

import addRightPadding from '../../../shared/components/FormField/addRightPadding'

import styles from './TextArea.modules.scss'
import positionStyles from '../Position.modules.scss'

/**
 * <span class="docs--badge__new">new</span> <span class="docs--badge__version">v0.33.0</span>
 */
const TextArea = props => (
  <FormField {...props}>
    {({ className, ...textareaProps }, showFeedbackIcon, feedback) => (
      <div className={joinClassNames(positionStyles.relative, styles.preventWidthResizing)}>
        <textarea
          {...textareaProps}
          className={joinClassNames(className, styles.preventWidthResizing)}
          style={addRightPadding(showFeedbackIcon ? 1 : 0)}
        />

        {!textareaProps.disabled && (
          <div className={styles.feedbackIconPosition}>
            <FeedbackIcon showIcon={showFeedbackIcon} feedback={feedback} />
          </div>
        )}
      </div>
    )}
  </FormField>
)

TextArea.propTypes = {
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
  value: PropTypes.string,
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
   * invoked with the following arguments.
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

TextArea.defaultProps = {
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

export default TextArea
