import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import joinClassNames from '../../utils/joinClassNames'

import DecorativeIcon from '../../../packages/DecorativeIcon/DecorativeIcon'
import Tooltip from '../Tooltip/Tooltip'
import FormField from '../../../shared/components/FormField/FormField'
import FeedbackIcon from '../../../shared/components/FormField/FeedbackIcon'
import Box from '../../../packages/Box/Box'

import addRightPadding from '../../../shared/components/FormField/addRightPadding'

import styles from './Select.modules.scss'
import iconWrapperStyles from '../IconWrapper.modules.scss'

/**
 * <span class="docs--badge__new">new</span> <span class="docs--badge__version">v0.33.0</span>
 */
const Select = ({ options, placeholder, ...props }) => (
  <FormField {...props}>
    {({ className, ...selectProps }, showFeedbackIcon, feedback) => (
      <div className={styles.wrapper}>
        <select
          {...selectProps}
          className={joinClassNames(className, styles.select)}
          style={addRightPadding(showFeedbackIcon ? 2 : 1)}
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
          <Box inline between={3} dangerouslyAddClassName={styles.iconsPosition}>
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
