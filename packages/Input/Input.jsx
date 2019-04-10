import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { componentWithName } from '@tds/util-prop-types'

import TDSBox from '@tds/core-box'
import TDSText from '@tds/core-text'
import { medium, mediumFont, color } from '@tds/shared-typography'
import { borders, forms } from '@tds/shared-styles'
import { colorShuttleGrey } from '@tds/core-colours'

const telusTheme = {
  label: {},
  hint: {},
}

const StyledInput = styled.input(
  borders.thin,
  borders.rounded,
  forms.font,
  medium,
  mediumFont,
  color,
  {
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
      color: colorShuttleGrey,
    },
  },
  ({ showFeedbackIcon }) => ({
    padding: showFeedbackIcon ? '0.5rem 3rem 0.5rem 1rem' : '0.5rem 1rem',
  })
)

const TDSparts = {
  Box: TDSBox,
  Label: {
    component: TDSText,
    props: {
      size: 'medium',
      bold: true,
    },
  },
}

const WhiteInput = ({ label, hint, id, hintPosition, parts, ...props }) => {
  const { Label, Box } = parts
  return (
    <>
      <Box inline between="space-between">
        <label htmlFor={id}>
          <Box inline tag="span" between={2}>
            <Label.component {...Label.props}>{label}</Label.component>
            {hint && hintPosition === 'inline' && <StyledHint size="small">{hint}</StyledHint>}
          </Box>
        </label>
      </Box>
      {hint && hintPosition === 'below' && (
        <StyledHint id={`${id}_hint`} size="small">
          {hint}
        </StyledHint>
      )}
      <StyledInput />
    </>
  )
}

const Input = ({ label, hint, id, hintPosition, ...props }) => (
  <ThemeProvider theme={telusTheme}>
    <WhiteInput
      {...props}
      label={label}
      hint={hint}
      id={id}
      hintPosition={hintPosition}
      parts={TDSparts}
    />
  </ThemeProvider>
)

const StyledLabel = styled(TDSText)(props => props.theme.label)
const StyledHint = styled(TDSText)(props => props.theme.hint)

const InputAtom = props => <StyledInput {...props} />
const LabelAtom = ({ id, hint, hintPosition, children, textComponent, parts, ...props }) => {
  const { Label, Box } = parts
  return (
    <React.Fragment>
      <Box inline between="space-between">
        <label htmlFor={id}>
          <Box inline tag="span" between={2}>
            <Label.component {...Label.props}>{label}</Label.component>
            {hint && hintPosition === 'inline' && <StyledHint size="small">{hint}</StyledHint>}
          </Box>
        </label>
      </Box>
      {hint && hintPosition === 'below' && (
        <StyledHint id={`${id}_hint`} size="small">
          {hint}
        </StyledHint>
      )}
    </React.Fragment>
  )
}

const ThemeableComponent = ({ children }) => children

ThemeableComponent.Input = InputAtom
ThemeableComponent.Label = LabelAtom

const FakeInput = ({ label, hint, id, hintPosition, ...props }) => (
  <ThemeProvider theme={telusTheme}>
    <ThemeableComponent>
      <ThemeableComponent.Label
        id={id}
        hint={hint}
        hintPosition={hintPosition}
        textComponent={Text}
        parts={TDSparts}
      >
        {label}
      </ThemeableComponent.Label>
      <ThemeableComponent.Input id={id} />
    </ThemeableComponent>
  </ThemeProvider>
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
export { WhiteInput, ThemeableComponent }
