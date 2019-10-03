/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'

import { Library, Example } from '@compositor/kit'

import StyledContainer from './shared/StyledContainer'

import CSSReset from '../../packages/css-reset/index'

import CartesianComponents from './components/**/*'

const renderExample = options => (
  <Example name={options.name}>
    <options.Component container={StyledContainer} />
  </Example>
)

const App = () => {
  return (
    <>
      <CSSReset />
      <Library>
        <Example name="Health">Healthcheck</Example>
        {CartesianComponents.map(CartesianComponent => renderExample(CartesianComponent.default))}
      </Library>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
