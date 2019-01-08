import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import { componentWithName } from '@tds/util-prop-types'

import InputFeedback from '@tds/core-input-feedback'

import FormField from '../../shared/components/FormField/FormField'
import FeedbackIcon from '../../shared/components/FormField/FeedbackIcon'

/**
 * @version ./package.json
 */
const Input = props => {
  const StyledInputContainer = styled.div`
    position: relative;
  `
  const betweenSpacing = 1 // rem
  const iconWidth = 16 // px

  const StyledInput = styled.input`
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    min-height: 3.25rem;
    max-height: 3.25rem;
    padding-right: ${props =>
      `calc(${iconWidth * props.showIcon}px + ${betweenSpacing *
        (props.showIcon + 1)}rem)`} !important;
  `

  const StyledIcon = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  `

  return (
    <FormField {...props}>
      {({ className, ...inputProps }, showFeedbackIcon, feedback) => (
        <StyledInputContainer>
          <StyledInput {...inputProps} showIcon={showFeedbackIcon ? 1 : 0} className={className} />

          {!inputProps.disabled && (
            <StyledIcon>
              <FeedbackIcon showIcon={showFeedbackIcon} feedback={feedback} />
            </StyledIcon>
          )}
        </StyledInputContainer>
      )}
    </FormField>
  )
}

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

// TODO: This will no longer be necessary once InputFeedback is exported on its own. Removing this will be a breaking change.
Input.Helper = InputFeedback

export default Input
