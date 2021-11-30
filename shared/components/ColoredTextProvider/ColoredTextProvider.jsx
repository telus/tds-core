import React from 'react'
import PropTypes from 'prop-types'

export const ColoredTextContext = React.createContext({
  inheritColor: false,
})

const ColoredTextProvider = ({ colorClassName, className, tag, children }) => {
  return (
    <ColoredTextContext.Provider value={true}>
      {React.createElement(tag, { className: colorClassName || className }, children)}
    </ColoredTextContext.Provider>
  )
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

export default ColoredTextProvider
