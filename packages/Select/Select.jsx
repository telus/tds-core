import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName } from '@tds/util-prop-types'

import DecorativeIcon from '@tds/core-decorative-icon'
import Box from '@tds/core-box'

import FormField, { FeedbackIcon } from '@tds/shared-form-field'

import joinClassNames from '../../shared/utils/joinClassNames'

import styles from './Select.modules.scss'
import iconWrapperStyles from '../../shared/styles/IconWrapper.modules.scss'

/**
 * @version ./package.json
 */
const Select = ({ options, placeholder, ...props }) => {
  const extraProps = {}
  // Need to set defaultValue for value prop to empty string so placeholder option is first selected
  // This allows the developer to programmatically change selected value and still allow defaultValue usage
  if (placeholder && !props.value && !props.defaultValue) {
    extraProps.value = ''
  }
  return (
    <FormField {...props} {...extraProps}>
      {({ className, ...selectProps }, showFeedbackIcon, feedback) => (
        <div className={styles.wrapper}>
          <select
            {...selectProps}
            className={joinClassNames(
              className,
              showFeedbackIcon ? styles.withFeedbackIcon : styles.withoutFeedbackIcon
            )}
          >
            {placeholder && (
              <option value="" disabled>
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
            <Box inline between={3} className={styles.iconsPosition}>
              <FeedbackIcon showIcon={showFeedbackIcon} feedback={feedback} />

              <div className={iconWrapperStyles.fixLineHeight}>
                <DecorativeIcon
                  symbol="caretDown"
                  variant={feedback === 'error' ? 'error' : 'primary'}
                  size={16}
                />
              </div>
            </Box>
          )}
        </div>
      )}
    </FormField>
  )
}

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
   * The value. Set this prop to change selected option.
   *
   * Only one of defaultValue or value should be set / mutated.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The default value. Set this prop to set the inital selected option.
   *
   * Only one of defaultValue or value should be set / mutated.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
   * If a function is provided, it must return an `InputFeedback` component. The function will be
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

Select.defaultProps = {
  hint: undefined,
  placeholder: undefined,
  value: undefined,
  defaultValue: undefined,
  feedback: undefined,
  error: undefined,
  helper: undefined,
  tooltip: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Select
