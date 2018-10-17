import React from 'react'
import PropTypes from 'prop-types'

class ColoredTextProvider extends React.Component {
  getChildContext() {
    return {
      inheritColor: true,
    }
  }

  render() {
    const { colorClassName, tag, children } = this.props

    return React.createElement(tag, { className: colorClassName }, children)
  }
}

ColoredTextProvider.propTypes = {
  colorClassName: PropTypes.string.isRequired,
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ColoredTextProvider.defaultProps = {
  tag: 'div',
}

ColoredTextProvider.childContextTypes = {
  inheritColor: PropTypes.bool,
}

export default ColoredTextProvider
