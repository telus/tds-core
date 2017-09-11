import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../old-components/Icon/Icon'
import Text from '../Typography/Text/Text'
import WithSpacing from './WithSpacing/WithSpacing'
import Helper from './Helper/Helper'
import Fade from './Fade'

import safeRest from '../../safeRest'
import generateId from './generateId'

import styles from './Input.modules.scss'

const getWrapperClassName = (feedback, focused, disabled) => {
  if (disabled) {
    return styles.disabled
  }

  if (focused) {
    return styles.focused
  }

  if (feedback) {
    return styles[feedback]
  }

  return styles.default
}

const iconByFeedbackState = {
  success: 'checkmark',
  error: 'exclamation-point-circle'
}
const showFeedbackIcon = (feedback, focused) => (feedback === 'success' || feedback === 'error') && !focused

class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.value,
      focused: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  onChange = (event) => {
    const { onChange } = this.props

    this.setState({
      value: event.target.value
    })

    if (onChange) {
      onChange(event)
    }
  }

  onFocus = (event) => {
    const { onFocus } = this.props

    this.setState({ focused: true })

    if (onFocus) {
      onFocus(event)
    }
  }

  onBlur = (event) => {
    const { onBlur } = this.props

    this.setState({ focused: false })

    if (onBlur) {
      onBlur(event)
    }
  }

  render() {
    const { type, label, feedback, error, helper, ...rest } = this.props

    const inputId = generateId(rest.id, rest.name, label)
    const helperId = helper && (helper.props.id || inputId.postfix('helper'))
    const errorId = error && inputId.postfix('error-message')

    const wrapperClassName = getWrapperClassName(feedback, this.state.focused, rest.disabled)

    const showIcon = showFeedbackIcon(feedback, this.state.focused)

    return (
      <WithSpacing amount={1}>
        <label htmlFor={inputId.identity()}>
          <Text size="medium" bold>{label}</Text>
        </label>

        { helper && React.cloneElement(helper, { id: helperId, feedback }) }

        { error && <Helper id={errorId} feedback="error">{error}</Helper> }

        <div className={wrapperClassName} data-testID="inputWrapper">
          <input
            {...safeRest(rest)}
            id={inputId.identity()} type={type} className={styles.input}
            value={this.state.value}
            onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur}
            aria-invalid={feedback === 'error' ? 'true' : 'false'}
            aria-describedby={errorId || helperId || undefined}
          />

          <Fade timeout={100} in={showIcon} mountOnEnter={true} unmountOnExit={true}>
            { () => (
              <span className={styles.icon}>
                <Icon glyph={iconByFeedbackState[feedback]} aria-hidden="true" />
              </span>
            )}
          </Fade>
        </div>
      </WithSpacing>
    )
  }
}

Input.propTypes = {
  /**
   * The HTML5 type of the input field.
   */
  type: PropTypes.oneOf(['text', 'number', 'password']), // TODO: finish this list
  /**
   * The label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The value.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /**
   * A feedback state.
   */
  feedback: PropTypes.oneOf(['success', 'error']),
  /**
   * An error message.
   */
  error: PropTypes.string,
  /**
   * A detailed explanation of the input expected by a form field. Must be a
   * `Input.Helper` component.
   */
  /* eslint-disable consistent-return */
  helper: (props, propName, componentName) => {
    const prop = props[propName]

    if (!prop) {
      return
    }

    if (prop.type !== Helper) {
      return new Error(
        `Unsupported value for \`helper\` on \`${componentName}\` component. Must be a \`Helper\` component.`
      )
    }
  },
  /* eslint-enable consistent-return */
  /**
   * A callback function to be invoked when the input value changes.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * A callback function to be invoked when the input receives focus.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to be invoked when the input loses focus.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onBlur: PropTypes.func
}

Input.defaultProps = {
  type: 'text',
  value: '',
  feedback: undefined,
  error: undefined,
  helper: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined
}

Input.Helper = Helper

export default Input
