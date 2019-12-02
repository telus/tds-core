/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import StyledContainer from './shared/StyledContainer'
import { createBrowserHistory } from 'history'

import CSSReset from '../../packages/css-reset/index'
import Heading from '../../packages/Heading'

import CartesianComponents from './components/**/*'

const DisableAnimation = createGlobalStyle({
  '*': {
    transition: 'none !important',
  },
  'svg, circle': {
    'animation-play-state': 'paused !important',
  },
})

const renderExample = options => () => (
  <div id={options.name}>
    <options.Component container={StyledContainer} />
  </div>
)

const App = () => {
  const history = createBrowserHistory()

  const path = (/#!(\/.*)$/.exec(location.hash) || [])[1]
  if (path) {
    history.replace(path)
  }

  return (
    <>
      <CSSReset />
      <DisableAnimation />
      <Router>
        {CartesianComponents.map(CartesianComponent => (
          <Route
            key={CartesianComponent.default.name}
            path={`/${CartesianComponent.default.name}`}
            component={renderExample(CartesianComponent.default)}
          />
        ))}
      </Router>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
