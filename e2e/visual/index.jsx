/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import StyledContainer from './shared/StyledContainer'
import { createBrowserHistory } from 'history'

import CSSReset from '../../packages/css-reset/index'
import Heading from '../../packages/Heading'
import FlexGrid from '../../packages/FlexGrid'
import UnorderedList from '../../packages/UnorderedList'
import Box from '../../packages/Box'
import TDSLink from '../../packages/Link'

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

const Home = () => (
  <FlexGrid>
    <FlexGrid.Row>
      <FlexGrid.Col>
        <Box between={3}>
          <Heading level="h1">Cartesian Components</Heading>
          <UnorderedList>
            {CartesianComponents.map(CartesianComponent => (
              <UnorderedList.Item>
                <TDSLink reactRouterLinkComponent={Link} to={`/${CartesianComponent.default.name}`}>
                  {CartesianComponent.default.name}
                </TDSLink>
              </UnorderedList.Item>
            ))}
          </UnorderedList>
        </Box>
      </FlexGrid.Col>
    </FlexGrid.Row>
  </FlexGrid>
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
        <Route path="/" exact component={Home} />
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
