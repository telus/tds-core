import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import Tooltip from '../Tooltip/Tooltip'

import safeRest from '../../utils/safeRest'

import FormField from '../FormField/FormField'
import joinClassNames from '../../utils/joinClassNames'

class Textarea extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
      focus: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      })
    }
  }

  onChange = event => {
    const { onChange } = this.props

    this.setState({
      value: event.target.value,
    })

    if (onChange) {
      onChange(event)
    }
  }

  onFocus = event => {
    const { onFocus } = this.props

    this.setState({ focus: true })

    if (onFocus) {
      onFocus(event)
    }
  }

  onBlur = event => {
    const { onBlur } = this.props

    this.setState({ focus: false })

    if (onBlur) {
      onBlur(event)
    }
  }

  render() {
    const { label, hint, feedback, error, helper, tooltip, ...rest } = this.props

    return (
      <FormField
        {...rest}
        value={this.state.value}
        label={label}
        hint={hint}
        focus={this.state.focus}
        feedback={feedback}
        error={error}
        helper={helper}
        tooltip={tooltip}
      >
        {(fieldId, ariaInvalid, ariaDescribedBy, className) => (
          // TODO: Remove the data-no-global-styles when getting rid of the global styles in _forms.scss
          <textarea
            {...safeRest(rest)}
            id={fieldId}
            className={joinClassNames(className)}
            value={this.state.value}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            aria-invalid={ariaInvalid}
            aria-describedby={ariaDescribedBy}
            data-no-global-styles
          >
            {this.state.value}
          </textarea>
        )}
      </FormField>
    )
  }
}

Textarea.propTypes = {
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

Textarea.defaultProps = {
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

export default Textarea
