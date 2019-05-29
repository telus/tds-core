import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import DecorativeIcon from '@tds/core-decorative-icon'
import { FeedbackIcon } from '@tds/shared-form-field'
import Text from '@tds/core-text'
import Paragraph from '@tds/core-paragraph'
import { componentWithName } from '@tds/util-prop-types'
import InputFeedback from '@tds/core-input-feedback'

import { borders, position, forms } from '@tds/shared-styles'
import {
  colorShuttleGrey,
  colorWhite,
  colorPrimary,
  colorCardinal,
  colorAthensGrey,
} from '@tds/core-colours'
import { medium, mediumFont, color } from '@tds/shared-typography'

import safeRest from '../../shared/utils/safeRest'
import generateId from '../../shared/utils/generateId/generateId'

const SelectWrapper = styled.div({
  backgroundColor: colorWhite,
  ...position.relative,
})

const StyledSelect = styled.select(
  {
    ...forms.height,
    appearance: 'none',

    '&::-ms-expand': {
      display: 'none',
    },
    width: '100%',
    margin: 0,
    outline: 0,
    textOverflow: 'ellipsis',
    borderColor: colorShuttleGrey,
    backgroundColor: colorWhite,

    '&::placeholder': {
      font: 'inherit',
      letterSpacing: 'inherit',
      lineHeight: 'inherit',
      color: colorShuttleGrey,
    },
  },
  ({ showFeedbackIcon }) => ({
    padding: `0.5rem ${showFeedbackIcon ? '4' : '3'}rem 0.5rem 1rem`,
  }),
  borders.thin,
  borders.rounded,
  forms.font,
  medium,
  mediumFont,
  color,
  ({ withFeedbackIcon }) => ({
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      appearance: 'none',
      margin: 0,
    },
    '-moz-appearance': 'textfield',
    minHeight: '3.25rem',
    maxHeight: '3.25rem',
    padding: withFeedbackIcon ? '0.5rem 3rem 0.5rem 1rem' : '0.5rem 1rem',
  }),
  {
    '&:focus': {
      borderColor: 'transparent',
      boxShadow: `0 0 4px 1px ${colorShuttleGrey}`,
      backgroundColor: colorWhite,
    },
  },
  ({ feedback }) => {
    let borderColor
    if (feedback === 'success') {
      borderColor = colorPrimary
    } else if (feedback === 'error') {
      borderColor = colorCardinal
    }
    return {
      '&:not(:focus)': {
        borderColor,
      },
    }
  },
  ({ disabled }) => {
    if (disabled) {
      return {
        backgroundColor: colorAthensGrey,
        borderColor: 'transparent',
        '&:not(:focus)': {
          borderColor: 'transparent',
        },
      }
    }
    return {}
  }
)

const IconWrapper = styled(Box)({
  ...position.absolute,
  top: '50%',
  transform: 'translateY(-50%)',
  right: '1rem',
  pointerEvents: 'none',
})

const IconLineFix = styled.div({
  lineHeight: 1,
})

const StyledLabelContainer = styled(Box)({
  alignItems: 'center',
})

const showFeedbackIcon = feedback => feedback === 'error' || feedback === 'success'
const renderHint = (hint, Component, id) => (
  <Component id={id} size="small">
    {hint}
  </Component>
)
const renderError = (error, errorId) => (
  <InputFeedback id={errorId} feedback="error">
    <Paragraph size="small">{error}</Paragraph>
  </InputFeedback>
)

const renderLabel = (id, label, hint, hintId, tooltip) => (
  <Box inline between="space-between">
    <label htmlFor={id || generateId(label).identity()}>
      <StyledLabelContainer inline tag="span" between={2}>
        <Text size="medium" bold data-testid="selectLabel">
          {label}
        </Text>
        {hint && renderHint(hint, Text, hintId)}
      </StyledLabelContainer>
    </label>
    {tooltip && React.cloneElement(tooltip, { connectedFieldLabel: label })}
  </Box>
)

const renderHelper = (helper, helperId, feedback, value) => {
  if (typeof helper === 'function') {
    return (
      <div id={helperId}>
        <Text size="small">{helper(feedback, value)}</Text>
      </div>
    )
  }

  return (
    <InputFeedback id={helperId} feedback={feedback}>
      <Text size="small">{helper}</Text>
    </InputFeedback>
  )
}

/**
 * @version ./package.json
 */
const Select = React.forwardRef(
  (
    {
      id,
      options,
      placeholder,
      label,
      hint,
      value,
      defaultValue,
      feedback,
      error,
      helper,
      tooltip,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const fieldId = generateId(id, rest.name, label)
    const errorId = error && feedback === 'error' && fieldId.postfix('error-message')
    const helperId = helper && fieldId.postfix('helper')
    const hintId = (hint && fieldId.postfix('hint')) || undefined

    const handleFocus = e => {
      setIsFocused(true)
      if (rest.onFocus) {
        rest.onFocus(e)
      }
    }

    const handleBlur = e => {
      setIsFocused(false)
      if (rest.onBlur) {
        rest.onBlur(e)
      }
    }

    return (
      <Box between={2}>
        {renderLabel(fieldId.identity(), label, hint, hintId, tooltip)}
        {helper && renderHelper(helper, helperId, feedback, value)}
        {error && feedback === 'error' && renderError(error, errorId)}
        <div css={{ position: 'relative' }}>
          <SelectWrapper>
            <StyledSelect
              ref={ref}
              id={fieldId.identity()}
              value={value}
              feedback={feedback}
              aria-invalid={feedback === 'error'}
              aria-describedby={errorId || hintId || helperId || undefined}
              onFocus={handleFocus}
              onBlur={handleBlur}
              defaultValue={value !== undefined ? undefined : defaultValue}
              {...safeRest(rest)}
            >
              {placeholder && (
                <option value="" disabled>
                  {placeholder}
                </option>
              )}
              {options.map(({ text, value: optValue }) => (
                <option key={optValue} value={optValue}>
                  {text}
                </option>
              ))}
            </StyledSelect>

            {!rest.disabled && (
              <IconWrapper inline between={3}>
                <FeedbackIcon
                  showIcon={showFeedbackIcon(feedback) && !isFocused}
                  feedback={feedback}
                />
                <IconLineFix>
                  <DecorativeIcon
                    symbol="caretDown"
                    variant={feedback === 'error' ? 'error' : 'primary'}
                    size={16}
                  />
                </IconLineFix>
              </IconWrapper>
            )}
          </SelectWrapper>
        </div>
      </Box>
    )
  }
)

Select.displayName = 'Select'

Select.propTypes = {
  /**
   * The id.
   */
  id: PropTypes.string,
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
   * Only one of defaultValue or value should be set / mutated. `value` will override `defaultValue`.
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
   * other components, or HTML elements. Only appears when `feedback` is set to `error`.
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
}

Select.defaultProps = {
  id: undefined,
  hint: undefined,
  placeholder: undefined,
  value: undefined,
  defaultValue: '',
  feedback: undefined,
  error: undefined,
  helper: undefined,
  tooltip: undefined,
}

export default Select
