import React from 'react'
import PropTypes from 'prop-types'

class ColoredText extends React.Component {
  getChildContext() {
    return {
      inheritColor: true
    }
  }

  render() {
    const { colorClassName, children } = this.props

    return (
      <div className={colorClassName}>
        {children}
      </div>
    )
  }
}

ColoredText.propTypes = {
  colorClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

ColoredText.childContextTypes = {
  inheritColor: PropTypes.bool
}

export default ColoredText
