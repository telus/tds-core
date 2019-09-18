/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Library, Example, Cartesian } from '@compositor/kit'

import CSSReset from '../packages/css-reset/index'

import A11yContent from '../packages/A11yContent'
import Breadcrumbs from '../packages/Breadcrumbs'
import Button from '../packages/Button'
import ChevronLink from '../packages/ChevronLink'

const StyledContainer = styled.div({ padding: 24, display: 'inline-block' })

const App = () => {
  return (
    <>
      <CSSReset />
      <Library renderSideNav={() => undefined}>
        <Example name="Button" id="button">
          <Cartesian
            component={Button}
            container={StyledContainer}
            type={['button', 'submit', 'reset']}
            variant={['primary', 'secondary', 'inverted']}
            children={['Hello, world!']}
          />
        </Example>

        {/* <Example name="A11yContent">
          <Cartesian
            component={A11yContent}
            container={StyledContainer}
            children={['This is accessible content']}
          />
        </Example>

        <Example name="Breadcrumbs">
          <Cartesian
            component={Breadcrumbs}
            container={StyledContainer}
            baseUrl={['http://tds.telus.com']}
            children={[
              <Breadcrumbs.Item href="http://tds.telus.com">Home</Breadcrumbs.Item>,
              [
                <Breadcrumbs.Item href="https://tds.telus.com/">Home</Breadcrumbs.Item>,
                <Breadcrumbs.Item href="https://tds.telus.com/components/index.html">
                  Components
                </Breadcrumbs.Item>,
              ],
              [
                <Breadcrumbs.Item href="https://tds.telus.com/">Home</Breadcrumbs.Item>,
                ,
                <Breadcrumbs.Item href="https://tds.telus.com/getting-started/getting-started.html">
                  Getting Started
                </Breadcrumbs.Item>,
                <Breadcrumbs.Item href="https://tds.telus.com/getting-started/designers.html">
                  Designers
                </Breadcrumbs.Item>,
              ],
            ]}
          />
        </Example>

        <Example name="ChevronLink">
          <Cartesian
            component={ChevronLink}
            container={StyledContainer}
            variant={['primary', 'secondary', 'inverted']}
            direction={['left', 'right']}
            href={['http://telus.com']}
            children={['Get started', 'Learn more']}
          />
        </Example> */}
      </Library>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
