import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'
import generateId from '../../utils/generateId'

import Text from '../Typography/Text/Text'
import Box from '../Box/Box'
import DecorativeIcon from '../Icons/DecorativeIcon/DecorativeIcon'
import ColoredTextProvider from '../Typography/ColoredTextProvider/ColoredTextProvider'
import Flexbox from '../Flexbox/Flexbox'

import styles from './Radio.modules.scss'
import displayStyles from '../Display.modules.scss'
import messagingStyles from '../Messaging.modules.scss'

const getClassNames = (checked, focus, feedback, disabled) => {
  if (disabled) {
    return styles.disabled
  }

  let className
  if (checked) {
    className = styles.checked
  } else if (feedback === 'error') {
    className = styles.error
  } else {
    className = styles.unchecked
  }

  return joinClassNames(className, focus && styles.focused)
}

const renderColoredLabel = (color, content) => (
  <ColoredTextProvider colorClassName={color}>
    <Flexbox direction="row" dangerouslyAddClassName={styles.alignCenter}>
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

class Radio extends React.Component {
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
    this.setState(({ checked }) => ({
      checked: !checked,
    }))

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
    const { label, feedback, ...rest } = this.props
    const radioId = generateId(rest.id, rest.name, label)

    return (
      <label data-no-global-styles htmlFor={radioId.identity()}>
        <Box inline between={3} dangerouslyAddClassName={styles.alignCenter}>
          <span
            className={getClassNames(this.state.checked, this.state.focus, feedback, rest.disabled)}
            data-testid="fake-radio"
          >
            <input
              {...safeRest(rest)}
              id={radioId.identity()}
              type="radio"
              checked={this.state.checked}
              className={displayStyles.hide}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
            />
            {this.state.checked && (
              <DecorativeIcon symbol="checkmark" size={16} variant="inverted" />
            )}
          </span>

          {renderLabel(label, feedback, this.state.checked, rest.disabled)}
        </Box>
      </label>
    )
  }
}

Radio.propTypes = {
  /**
   * The label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The checked state
   */
  checked: PropTypes.bool,
  /**
   * A feedback state.
   */
  feedback: PropTypes.oneOf(['error']),
  /**
   * A callback function to be invoked when the radio is checked or unchecked.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * A callback function to be invoked when the radio receives focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to be invoked when the radio loses focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onBlur: PropTypes.func,
}

Radio.defaultProps = {
  checked: false,
  feedback: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Radio
