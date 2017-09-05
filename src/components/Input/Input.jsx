import React from 'react'
import PropTypes from 'prop-types'
import safeRest from '../../safeRest'

import styles from './Input.modules.scss'

const textToId = text => text.toLowerCase().replace(/ /g, '-')

class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.value
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

  render() {
    const { type, label, ...rest } = this.props

    const id = rest.id || rest.name || textToId(label)

    return (
      <div>
        <label htmlFor={id} className={styles.label}>{label}</label>
        <input
          {...safeRest(rest)} id={id} type={type} className={styles.input}
          value={this.state.value} onChange={this.onChange}
        />
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
  onChange: PropTypes.func
}

Input.defaultProps = {
  type: 'text',
  value: undefined,
  onChange: undefined
}

export default Input
