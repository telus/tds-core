import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'
import generateId from '../../utils/generateId'

import Text from '../Typography/Text/Text'
import Box from '../Box/Box'
import DecorativeIcon from '../Icons/DecorativeIcon/DecorativeIcon'

import styles from './Checkbox.modules.scss'
import displayStyles from '../Display.modules.scss'

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
    const { label, ...rest } = this.props
    const checkboxId = generateId(rest.id, rest.name, label)

    return (
      <label data-no-global-styles htmlFor={checkboxId.identity()}>
        <Box inline between={3}>
          <span
            className={joinClassNames(
              this.state.checked ? styles.checked : styles.unchecked,
              this.state.focus && styles.focused
            )}
            data-testid="fake-checkbox"
          >
            <input
              {...safeRest(rest)}
              id={checkboxId.identity()}
              type="checkbox"
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

          <Text size="medium">{label}</Text>
        </Box>
      </label>
    )
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

Checkbox.defaultProps = {
  checked: false,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Checkbox
