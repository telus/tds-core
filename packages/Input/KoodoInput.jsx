import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { componentWithName } from '@tds/util-prop-types'

import Box from '@tds/core-box'

import { WhiteInput, ThemeableComponent } from './Input'

const koodoTheme = {
  label: {},
  hint: {},
  input: {},
}

const KoodoParts = {
  Box,
  Input: ({children}) => <span>{children}</span>,
}

const FakeKoodoInput = ({ label, hint, id, ...props }) => (
  <ThemeProvider theme={koodoTheme}>
    <WhiteInput label={label} hint={hint} id={id} {...props} parts={KoodoParts} />
  </ThemeProvider>
)

const KoodoInput = ({ label, hint, id }) => (
  <ThemeProvider theme={koodoTheme}>
    <ThemeableComponent>
      <Box between={4}>
        Hello
        <ThemeableComponent.Label hint={hint} parts={KoodoParts}>
          {label}
        </ThemeableComponent.Label>
        <ThemeableComponent.Input id={id} />
      </Box>
    </ThemeableComponent>
  </ThemeProvider>
)

KoodoInput.propTypes = {
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

KoodoInput.defaultProps = {
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

export default KoodoInput
