import React from 'react'
import PropTypes from 'prop-types'

class ColoredTextProvider extends React.Component {
  getChildContext() {
    return {
      inheritColor: true,
    }
  }

  render() {
    const { colorClassName, children } = this.props

    return <div className={colorClassName}>{children}</div>
  }
}

ColoredTextProvider.propTypes = {
  colorClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

ColoredTextProvider.childContextTypes = {
  inheritColor: PropTypes.bool,
}

export default ColoredTextProvider
