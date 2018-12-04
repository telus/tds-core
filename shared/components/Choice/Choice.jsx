import React from 'react'
import PropTypes from 'prop-types'

import Text from '@tds/core-text'
import Paragraph from '@tds/core-paragraph'
import Box from '@tds/core-box'
import InputFeedback from '@tds/core-input-feedback'

import Flexbox from '../Flexbox/Flexbox'
import ColoredTextProvider from '../ColoredTextProvider/ColoredTextProvider'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'
import generateId from '../../utils/generateId/generateId'

import styles from './Choice.modules.scss'
import messagingStyles from '../../styles/Messaging.modules.scss'

const getId = (id, name, value) => {
  if (id) {
    return generateId(id).identity()
  }

  return generateId(name).postfix(value)
}

const getClassNames = (inputTypeStyles, checked, focus, feedback, disabled) => {
  if (disabled) {
    return checked ? inputTypeStyles.disabledChecked : inputTypeStyles.disabled
  }

  let className
  if (checked) {
    className = inputTypeStyles.checked
  } else if (feedback === 'error') {
    className = styles.error
  } else {
    className = styles.unchecked
  }

  return joinClassNames(className, focus && styles.focused)
}

const renderColoredLabel = (color, content) => (
  <ColoredTextProvider colorClassName={color}>
    <Flexbox direction="row" dangerouslyAddClassName={styles.alignFlexStart}>
      {content}
    </Flexbox>
  </ColoredTextProvider>
)

const renderLabel = (label, feedback, checked, disabled) => {
  const content = <Text size="medium">{label}</Text>

  if (feedback === 'error' && !checked) {
    return renderColoredLabel(messagingStyles.errorText, content)
  }

  if (disabled) {
    return renderColoredLabel(messagingStyles.disabledText, content)
  }

  return content
}

const renderError = (error, errorId) => (
  <InputFeedback id={errorId} feedback="error">
    <Paragraph size="small">{error}</Paragraph>
  </InputFeedback>
)

class Choice extends React.Component {
  state = {
    checked: this.props.checked,
    focus: false,
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.checked !== nextProps.checked) {
      this.setState({
        checked: nextProps.checked,
      })
    }
  }

  onChange = event => {
    const { onChange } = this.props

    event.persist()

    this.setState(
      ({ checked }) => {
        return { checked: !checked }
      },
      () => {
        if (onChange) {
          onChange(event)
        }
      }
    )
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
    const {
      label,
      name,
      value,
      description,
      feedback,
      error,
      type,
      inputTypeStyles,
      children,
      ...rest
    } = this.props

    const choiceId = getId(rest.id, name, value)
    const errorId = error && generateId(choiceId).postfix('error-message')

    const fakeInputClassNames = joinClassNames(
      type === 'radio' ? styles.fakeRadio : styles.fakeCheckbox,
      getClassNames(inputTypeStyles, this.state.checked, this.state.focus, feedback, rest.disabled)
    )

    return (
      <Box between={2}>
        {feedback === 'error' && error && renderError(error, errorId)}
        <label htmlFor={choiceId}>
          <Box tag="span" inline between={3} dangerouslyAddClassName={styles.alignFlexStart}>
            <span className={fakeInputClassNames} data-testid="fake-input">
              <input
                {...safeRest(rest)}
                id={choiceId}
                type={type}
                name={name}
                value={value}
                checked={this.state.checked}
                className={styles.hiddenInput}
                aria-invalid={feedback === 'error'}
                aria-describedby={errorId || undefined}
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              />

              {children(this.state.checked, rest.disabled)}
            </span>

            {renderLabel(label, feedback, this.state.checked, rest.disabled)}
          </Box>
          {description && (
            <div className={styles.descriptionText} data-testid="description">
              <Text size="small">{description}</Text>
            </div>
          )}
        </label>
      </Box>
    )
  }
}

Choice.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  feedback: PropTypes.oneOf(['error']),
  error: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  inputTypeStyles: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
}

Choice.defaultProps = {
  description: undefined,
  feedback: undefined,
  error: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Choice
