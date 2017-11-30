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

import styles from './Checkbox.modules.scss'
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

class Checkbox extends React.Component {
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
    const { label, name, value, feedback, ...rest } = this.props

    let checkboxId
    if (rest.id) {
      checkboxId = generateId(rest.id).identity()
    } else {
      checkboxId = generateId(name).postfix(value)
    }

    return (
      <label data-no-global-styles htmlFor={checkboxId}>
        <Box inline between={3} dangerouslyAddClassName={styles.alignCenter}>
          <span
            className={getClassNames(this.state.checked, this.state.focus, feedback, rest.disabled)}
            data-testid="fake-checkbox"
          >
            <input
              {...safeRest(rest)}
              id={checkboxId}
              type="checkbox"
              name={name}
              value={value}
              checked={this.state.checked}
              className={styles.hiddenCheckbox}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              data-no-global-styles
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

Checkbox.propTypes = {
  /**
   * The label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Associate this checkbox with a group. Set as the HTML name attribute.
   */
  name: PropTypes.string.isRequired,
  /**
   * The value. Must be unique within the group.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The checked state
   */
  checked: PropTypes.bool,
  /**
   * A feedback state.
   */
  feedback: PropTypes.oneOf(['error']),
  /**
   * A callback function to be invoked when the checkbox is checked or unchecked.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * A callback function to be invoked when the checkbox receives focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to be invoked when the checkbox loses focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onBlur: PropTypes.func,
}

Checkbox.defaultProps = {
  checked: false,
  feedback: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Checkbox
