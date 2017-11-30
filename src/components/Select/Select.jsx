import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import joinClassNames from '../../utils/joinClassNames'

import DecorativeIcon from '../Icons/DecorativeIcon/DecorativeIcon'
import Tooltip from '../Tooltip/Tooltip'
import FormField from '../FormField/FormField'
import FeedbackIcon from '../FormField/FeedbackIcon'

import styles from './Select.modules.scss'
import formFieldStyles from '../FormFields.modules.scss'
import iconWrapperStyles from '../Icons/IconWrapper.modules.scss'

const Select = ({ options, placeholder, ...props }) => (
  <FormField {...props}>
    {({ className, ...selectProps }, showIcon, feedback) => (
      <div className={styles.wrapper}>
        <select
          {...selectProps}
          className={joinClassNames(
            className,
            styles.select,
            !selectProps.disabled && styles.positionSelectOnTop,
            formFieldStyles.height
          )}
        >
          {placeholder && (
            <option value="" hidden disabled>
              {placeholder}
            </option>
          )}
          {options.map(({ text, value }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>

        {!selectProps.disabled && (
          <div className={styles.feedbackIconPosition}>
            <FeedbackIcon showIcon={showIcon} feedback={feedback} />
          </div>
        )}

        {!selectProps.disabled && (
          <div className={joinClassNames(iconWrapperStyles.fixLineHeight, styles.caretPosition)}>
            <DecorativeIcon
              symbol="caretDown"
              variant={feedback === 'error' ? 'error' : 'primary'}
              size={16}
            />
          </div>
        )}
      </div>
    )}
  </FormField>
)

Select.propTypes = {
  /**
   * The selectable options.
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  /**
   * The label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Clarify the expected input.
   */
  hint: PropTypes.string,
  /**
   * Show a un-selectable initial option.
   */
  placeholder: PropTypes.string,
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
   * If a function is provided, it must return a `Helper`. The function will be
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

Select.defaultProps = {
  hint: undefined,
  placeholder: undefined,
  value: '',
  feedback: undefined,
  error: undefined,
  helper: undefined,
  tooltip: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Select
