import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName } from '@tds/util-prop-types'

import FormField, { FeedbackIcon } from '@tds/shared-form-field'

import joinClassNames from '../../shared/utils/joinClassNames'

import styles from './TextArea.modules.scss'
import positionStyles from '../../shared/styles/Position.modules.scss'

/**
 * @version ./package.json
 */
const TextArea = props => (
  <FormField {...props}>
    {({ className, ...textareaProps }, showFeedbackIcon, feedback) => (
      <div className={joinClassNames(positionStyles.relative, styles.preventWidthResizing)}>
        <textarea
          {...textareaProps}
          className={joinClassNames(
            className,
            showFeedbackIcon ? styles.withFeedbackIcon : styles.withoutFeedbackIcon
          )}
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
  tooltip: componentWithName('Tooltip'),
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
  value: undefined,
  feedback: undefined,
  error: undefined,
  helper: undefined,
  tooltip: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default TextArea
