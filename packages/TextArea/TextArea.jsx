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
import { FeedbackIcon } from '@tds/core-input'
import { safeRest } from '@tds/util-helpers'

import generateId from '../../shared/utils/generateId/generateId'

const widthLimit = {
  maxWidth: '100%',
  minWidth: '100%',
  minHeight: '208px',
  position: 'relative',
}
const PreventWidthResize = styled.div({
  ...widthLimit,
})
const StyledLabelContainer = styled(Box)({
  alignItems: 'center',
})

const StyledTextArea = styled.textarea(
  widthLimit,
  {
    width: '100%',
    margin: 0,
    outline: 0,
    textOverflow: 'ellipsis',
    borderColor: colorGreyShuttle,
    '-ms-overflow-style': '-ms-autohiding-scrollbar',
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

const StyledFeedbackIcon = styled.div(position.absolute, {
  right: '1rem',
  top: '0.5rem',
  overflow: 'visible', // Prevents icon cut-off on Mobile Safari
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
  <Box inline between={2}>
    <label htmlFor={id || generateId(label).identity()}>
      <StyledLabelContainer inline tag="span" between={2}>
        <Text size="medium" bold>
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
const TextArea = React.forwardRef(
  ({ id, value, label, hint, feedback, error, helper, tooltip, ...rest }, ref) => {
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
        <PreventWidthResize>
          <StyledTextArea
            {...safeRest(rest)}
            ref={ref}
            id={fieldId.identity()}
            value={value}
            feedback={feedback}
            aria-invalid={feedback === 'error'}
            aria-describedby={errorId || hintId || helperId || undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            withFeedbackIcon={showFeedbackIcon}
          />
          {!rest.disabled && (
            <StyledFeedbackIcon>
              <FeedbackIcon
                showIcon={showFeedbackIcon(feedback) && !isFocused}
                feedback={feedback}
              />
            </StyledFeedbackIcon>
          )}
        </PreventWidthResize>
      </Box>
    )
  }
)

TextArea.displayName = 'TextArea'

TextArea.propTypes = {
  /**
   * The id. If no `id` is provided, a default `id` will be generated using the `label`. "This is a label" will become "this-is-a-label". A passed in `id` will appear as entered with no additional formatting.
   */
  id: PropTypes.string,
  /**
   * The label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Clarify the expected input.
   */
  hint: PropTypes.string,
  /**
   * Use `value` for controlled TextArea. For uncontrolled TextArea, use React's built-in `defaultValue` prop.
   * See examples below for more details.
   */
  value: PropTypes.string,
  /**
   * A feedback state.
   */
  feedback: PropTypes.oneOf(['success', 'error']),
  /**
   * An error message. Either an error or a helper should be used, not both.
   */
  error: PropTypes.node,
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
  tooltip: componentWithName('Tooltip', true),
}

TextArea.defaultProps = {
  id: undefined,
  hint: undefined,
  value: undefined,
  feedback: undefined,
  error: undefined,
  tooltip: undefined,
  helper: undefined,
}

export default TextArea
