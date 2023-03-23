import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'rsg-components/Styled'
import cx from 'classnames'
import Logo from 'rsg-components/Logo'
import Markdown from 'rsg-components/Markdown'

import FlexGrid from '../../../../packages/FlexGrid/FlexGrid'
import CSSReset from '../../../../packages/css-reset'
import GlobalStyleGuide from './GlobalStyleGuide'
import tdsSunsetWarning from '../../../../guide/tds-sunset.html'

const styles = ({ color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth }) => ({
  root: {
    backgroundColor: color.baseBackground,
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
    [mq.small]: {
      paddingLeft: 0,
    },
  },
  content: {
    maxWidth,
    padding: [[space[2], space[4]]],
    margin: [[0, 'auto']],
    [mq.small]: {
      padding: space[2],
    },
    display: 'block',
  },
  sidebar: {
    backgroundColor: color.sidebarBackground,
    border: [[color.border, 'solid']],
    borderWidth: [[0, 1, 0, 0]],
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    [mq.small]: {
      position: 'static',
      width: 'auto',
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0],
    },
    '& ul li': {
      overflow: 'visible',
      margin: '8px 0px',
      display: 'block',
      fontSize: '15px',
      listStyle: 'none'
    }
  },
  logo: {
    padding: space[2],
    borderBottom: [[1, color.border, 'solid']],
  },
  footer: {
    display: 'block',
    color: '#2A2C2E',
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
  },
})

const TdsGrid = ({ children }) => (
  <FlexGrid limitWidth>
    <FlexGrid.Row>
      <FlexGrid.Col xs={12}>
        {children}
      </FlexGrid.Col>
    </FlexGrid.Row>
  </FlexGrid>
)

export function StyleGuideRenderer({ classes, title, homepageUrl, children, toc, hasSidebar }) {
  const main = (
    <main className={cx(hasSidebar && classes.content)}>
      <div dangerouslySetInnerHTML={{ __html: tdsSunsetWarning }} />
      {children}
      <footer className={classes.footer}>
        <Markdown text={`Generated with [React Styleguidist](${homepageUrl})`} />
      </footer>
    </main>
  )

  return (
    <React.Fragment>
      <CSSReset />
      <GlobalStyleGuide />
      <div className={cx(classes.root, hasSidebar && classes.hasSidebar)}>
        <a id="styleguidist-top">&nbsp;</a>

        {hasSidebar ? main : <TdsGrid>{main}</TdsGrid>}

        {hasSidebar && (
          <div className={classes.sidebar}>
            <div className={classes.logo}>
              <Logo>{title}</Logo>
            </div>
            {toc}
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool,
}

StyleGuideRenderer.defaultProps = {
  hasSidebar: undefined,
}

export default Styled(styles)(StyleGuideRenderer)
