import React from 'react'
import PropTypes from 'prop-types'

export const ColoredTextContext = React.createContext({
  inheritColor: undefined,
})

const ColoredTextProvider = ({ colorClassName, className, tag, children }) => {
  return (
    <ColoredTextContext.Provider value={{ inheritColor: true }}>
      {React.createElement(tag, { className: colorClassName || className }, children)}
    </ColoredTextContext.Provider>
  )
}

const ColoredTextProvider2 = ({ children }) => (
  <ColoredTextContext.Provider value={{ inheritColor: true }}>
    {children}
  </ColoredTextContext.Provider>
)

// const withBasicProvider = (Provider) => (Component) => (props) => (
//   <Provider>
//     <Component {...props} />
//   </Provider>
// );

// export default withBasicProvider(CounterProvider)(WrappedApp)

export const WrappedColoredTextProvider = () => (
  <ColoredTextProvider2>
    <ColoredTextProvider />
  </ColoredTextProvider2>
  // // <ColoredTextContext.Provider value={{ inheritColor: true }}></ColoredTextContext.Provider>
  // <ColoredTextProvider>
  //   {children}
  // </ColoredTextProvider>
);

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
