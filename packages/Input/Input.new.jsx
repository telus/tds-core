import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'
import Text from '@tds/core-text'
import { medium, mediumFont, color } from '@tds/shared-typography'
import { borders, forms } from '@tds/shared-styles'
import { colorShuttleGrey } from '@tds/core-colours'

const StyledInput = styled.input(borders.thin, borders.rounded, forms.font, medium, mediumFont, color, {
  width: '100%',
  margin: 0,
  minHeight: '3.25rem',
  maxHeight: '3.25rem',
  outline: 0,
  textOverflow: 'ellipsis',
  '&::placeholder': {
    font: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: 'inherit',
    color: colorShuttleGrey
  }
}, ({ showFeedbackIcon }) => ({
  padding: showFeedbackIcon ? '0.5rem 3rem 0.5rem 1rem' : '0.5rem 1rem'
}))

const StyledLabel = styled.label({})
const StyledHint = styled.span({})

const LabelAtom = (props) => (
  <Text {...props} size="medium" bold />
)

const InputAtom = (props) => (
  <StyledInput {...props} />
)

const HintAtom = (props) => (
  <StyledHint {...props} />
)

const Component = ({ children, ...props }) => children(props)

Component.Input = InputAtom
Component.Label = LabelAtom

const Input = (props) => (
  <Component {...props}>
    {({ label, ...props}) => (
      <div css={{ position: 'relative' }}>
        <Box between={2}>
          <Component.Label>{label}</Component.Label>
          <Component.Input {...props} />
        </Box>
      </div>
    )}
  </Component>
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
   * Position of the `hint` relative to `label`.
   */
  hintPosition: PropTypes.oneOf(['inline', 'below']),
  /**
   * The value.
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
  hintPosition: 'inline',
  value: undefined,
  feedback: undefined,
  error: undefined,
  helper: undefined,
  tooltip: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Input
export { Component }
