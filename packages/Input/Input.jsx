import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { componentWithName } from '@tds/util-prop-types'

import InputFeedback from '@tds/core-input-feedback'
import Box from '@tds/core-box'
import Text from '@tds/core-text'
import Paragraph from '@tds/core-paragraph'
import { borders, position, forms } from '@tds/shared-styles'
import {
  colorGreyShuttle,
  colorWhite,
  colorPrimary,
  colorCardinal,
  colorGreyAthens,
} from '@tds/core-colours'
import { medium, mediumFont, color } from '@tds/shared-typography'
import { safeRest } from '@tds/util-helpers'

import FeedbackIcon from './FeedbackIcon'

import generateId from '../../shared/utils/generateId/generateId'

const StyledLabelContainer = styled(Box)({
  alignItems: 'center',
})

const StyledInput = styled.input(
  {
    width: '100%',
    margin: 0,
    outline: 0,
    textOverflow: 'ellipsis',
    borderColor: colorGreyShuttle,
    '&::placeholder': {
      font: 'inherit',
      letterSpacing: 'inherit',
      lineHeight: 'inherit',
      color: colorGreyShuttle,
    },
  },
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
    minHeight: forms.inputHeight.height,
    maxHeight: forms.inputHeight.height,
    padding: withFeedbackIcon ? '0.5rem 3rem 0.5rem 1rem' : '0.5rem 1rem',
  }),
  {
    '&:focus': {
      borderColor: 'transparent',
      boxShadow: `0 0 4px 1px ${colorGreyShuttle}`,
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
        backgroundColor: colorGreyAthens,
        borderColor: 'transparent',
        '&:not(:focus)': {
          borderColor: 'transparent',
        },
      }
    }
    return {}
  }
)

const StyledFeedbackIcon = styled.div(
  {
    right: '1rem',
  },
  position.absolute,
  position.centerVertically
)

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
const renderLabel = (id, label, hint, hintPosition, hintId, tooltip) => (
  <div>
    <Box inline between={2}>
      <label htmlFor={id || generateId(label).identity()}>
        <StyledLabelContainer inline tag="span" between={2}>
          <Text size="medium" bold>
            {label}
          </Text>
          {hint && hintPosition === 'inline' && renderHint(hint, Text, hintId)}
        </StyledLabelContainer>
      </label>
      {tooltip && React.cloneElement(tooltip, { connectedFieldLabel: label })}
    </Box>
    {hint && hintPosition === 'below' && renderHint(hint, Paragraph, hintId)}
  </div>
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
const Input = React.forwardRef(
  (
    { id, value, type, label, hint, hintPosition, feedback, error, helper, tooltip, ...rest },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const fieldId = generateId(id, rest.name, label)
    const errorId = error && fieldId.postfix('error-message')
    const helperId = helper && fieldId.postfix('helper')
    const hintId = (hint && hintPosition === 'below' && fieldId.postfix('hint')) || undefined

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

    const handleKeyDown = e => {
      /**
       * this is a workaround for a bug in chrome that moves
       * the cursor into a wrong position if prepended with a space
       */
      if (type === 'email' && e.key === ' ') {
        e.preventDefault()
      }

      if (rest.onKeyDown) {
        rest.onKeyDown(e)
      }
    }

    return (
      <Box between={2}>
        {renderLabel(fieldId.identity(), label, hint, hintPosition, hintId, tooltip)}
        {helper && renderHelper(helper, helperId, feedback, value)}
        {error && renderError(error, errorId)}
        <div css={{ position: 'relative' }}>
          <StyledInput
            {...safeRest(rest)}
            type={type}
            ref={ref}
            id={fieldId.identity()}
            value={value}
            feedback={feedback}
            aria-invalid={feedback === 'error'}
            aria-describedby={errorId || hintId || helperId || undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
          {!rest.disabled && (
            <StyledFeedbackIcon>
              <FeedbackIcon
                showIcon={showFeedbackIcon(feedback) && !isFocused}
                feedback={feedback}
              />
            </StyledFeedbackIcon>
          )}
        </div>
      </Box>
    )
  }
)

Input.displayName = 'Input'

Input.propTypes = {
  /**
   * The id.
   */
  id: PropTypes.string,
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
   * Position of the `hint` relative to `label`.
   */
  hintPosition: PropTypes.oneOf(['inline', 'below']),
  /**
   * Use `value` for controlled Inputs. For uncontrolled Inputs, use React's built-in `defaultValue` prop.
   * See examples below for more details.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * A feedback state.
   */
  feedback: PropTypes.oneOf(['success', 'error']),
  /**
   * An error message. Should be limited to text and links. See usage criteria for more details.
   */
  error: PropTypes.node,
  /**
   * A detailed explanation of the input expected by a form field. Can be text,
   * other components, or HTML elements.
   *
   * If a function is provided, it must return an `InputFeedback`. The function will be
   * invoked with arguments below.
   *
   * **Deprecation:** This is not a recommended pattern and will be removed in a future release.
   *                  Use `hint` with `hintPosition` value of `below`.
   *
   * @param {String} feedback The Input's current feedback state.
   * @param {String} value The Input's current value.
   */
  helper: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /**
   * A `Tooltip`
   */
  tooltip: componentWithName('Tooltip', true),
}

Input.defaultProps = {
  id: undefined,
  type: 'text',
  hint: undefined,
  hintPosition: 'inline',
  value: undefined,
  feedback: undefined,
  error: undefined,
  tooltip: undefined,
  helper: undefined,
}

export default Input
