import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../safeRest'

import Icon from '../../old-components/Icon/Icon'

import styles from './Input.modules.scss'

const textToId = text => text.toLowerCase().replace(/ /g, '-')

const getClassName = (feedback, focused) => {
  if (focused) {
    return styles.focused
  }

  return feedback ? styles[feedback] : styles.default
}

const iconByFeedbackState = {
  success: 'checkmark',
  error: 'exclamation-point-circle'
}
const getIcon = (feedback, focused) => {
  if (focused || !feedback) {
    return null
  }

  return (
    <span className={styles.icon}>
      <Icon glyph={iconByFeedbackState[feedback]} aria-hidden="true" />
    </span>
  )
}

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
    const { type, label, feedback, ...rest } = this.props

    const id = rest.id || rest.name || textToId(label)

    return (
      <div>
        <label htmlFor={id} className={styles.label}>{label}</label>

        <div className={getClassName(feedback, this.state.focused)} data-inputwrapper>
          <input
            {...safeRest(rest)} id={id} type={type} className={styles.input}
            value={this.state.value}
            onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur}
          />
          {getIcon(feedback, this.state.focused)}
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password']), // TODO: finish this list
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  feedback: PropTypes.oneOf(['success', 'error']),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}

Input.defaultProps = {
  type: 'text',
  value: '',
  feedback: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined
}

export default Input
