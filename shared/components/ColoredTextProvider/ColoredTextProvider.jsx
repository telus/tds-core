import React from 'react'
import PropTypes from 'prop-types'

class ColoredTextProvider extends React.Component {
  getChildContext() {
    return {
      inheritColor: true,
    }
  }

  render() {
    const { colorClassName, className, tag, children } = this.props

    return React.createElement(tag, { className: colorClassName || className }, children)
  }
}

ColoredTextProvider.propTypes = {
  colorClassName: PropTypes.string,
  className: PropTypes.string,
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ColoredTextProvider.defaultProps = {
  colorClassName: undefined,
  className: undefined,
  tag: 'div',
}

ColoredTextProvider.childContextTypes = {
  inheritColor: PropTypes.bool,
}

export default ColoredTextProvider
