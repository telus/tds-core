/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'

import { Library, Example, Cartesian } from '@compositor/kit'

import CSSReset from '../packages/css-reset/index'
import Button from '../packages/Button/index.es'

const App = () => {
  return (
    <>
      <CSSReset />
      <Library>
        <Example name="Button">
          <Cartesian
            component={Button}
            type={['button', 'submit', 'reset']}
            variant={['primary', 'secondary', 'inverted']}
            children={['Hello, world!', 'Beep']}
          />
        </Example>
      </Library>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
