import React from 'react'
import { render, shallow, mount } from 'enzyme'

import Link from '@tds/core-link'
import Text from '@tds/core-text'

import Breadcrumbs from '../Breadcrumbs'

const ReactRouterLinkComponent = () => <a href="http://tds.telus.com">TDS</a>

describe('Breadcrumbs', () => {
  const defaultProps = {
    routes: [
      {
        path: '/',
        breadcrumbName: 'Home',
      },
      {
        path: '/mobility',
        breadcrumbName: 'Mobility',
      },
      {
        path: '/accessories',
        breadcrumbName: 'Accessories',
      },
    ],
  }

  const doRender = (props = {}) => render(<Breadcrumbs {...defaultProps} {...props} />)
  const doShallow = (props = {}) => shallow(<Breadcrumbs {...defaultProps} {...props} />)
  const doMount = (props = {}) => mount(<Breadcrumbs {...defaultProps} {...props} />)

  it('does not allow custom CSS', () => {
    const breadcrumbs = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(breadcrumbs).not.toHaveProp('className', 'my-custom-class')
    expect(breadcrumbs).not.toHaveProp('style')
  })

  describe('with routes', () => {
    it('renders', () => {
      const breadcrumbs = doRender()

      expect(breadcrumbs).toMatchSnapshot()
    })

    it('concatenates paths', () => {
      const breadcrumbs = doMount({
        routes: [
          {
            path: 'one',
            breadcrumbName: 'two',
          },
          {
            path: 'two',
            breadcrumbName: 'two',
          },
          {
            path: '/three',
            breadcrumbName: 'two',
          },
        ],
      })

      expect(breadcrumbs.find('a').at(0)).toHaveProp('href', '/one')
      expect(breadcrumbs.find('a').at(1)).toHaveProp('href', '/one/two')
    })
  })

  describe('with children', () => {
    const defaultPropsWithChildren = {
      routes: undefined,
      baseUrl: 'http://localhost:6060/en',
      children: [
        <Breadcrumbs.Item key="/" href="/">
          Home
        </Breadcrumbs.Item>,
        <Breadcrumbs.Item key="/mobility" href="/mobility">
          Mobility
        </Breadcrumbs.Item>,
        <Breadcrumbs.Item key="/mobility/accessories" href="/mobility/accessories">
          Accessories
        </Breadcrumbs.Item>,
      ],
    }

    it('renders', () => {
      const breadcrumbs = doRender(defaultPropsWithChildren)

      expect(breadcrumbs).toMatchSnapshot()
    })

    it('doest not concatenate paths', () => {
      const breadcrumbs = doMount({
        children: [
          <Breadcrumbs.Item key="/one" href="/one">
            One
          </Breadcrumbs.Item>,
          <Breadcrumbs.Item key="/one/two" href="/one/two">
            Two
          </Breadcrumbs.Item>,
          <Breadcrumbs.Item key="/one/two/three" href="/one/two/three">
            Three
          </Breadcrumbs.Item>,
        ],
      })

      expect(breadcrumbs.find('a').at(0)).toHaveProp('href', '/one')
      expect(breadcrumbs.find('a').at(1)).toHaveProp('href', '/one/two')
    })
  })
})

describe('Breadcrumbs.Item', () => {
  const defaultProps = {
    href: '/',
    children: 'Link',
    current: false,
  }

  const doMount = (props = {}) => mount(<Breadcrumbs.Item {...defaultProps} {...props} />)

  it('renders a TDS Link if Item is not current', () => {
    const breadcrumbsItem = doMount()
    expect(breadcrumbsItem.find(Link)).toExist()
  })

  it('renders an Text component for the last item', () => {
    const breadcrumbsItem = doMount({ current: true })
    expect(breadcrumbsItem.find(Text)).toExist()
  })

  it('renders a Text when reactRouterLinkComponent is provided and is current', () => {
    const breadcrumbsItem = doMount({
      current: true,
      reactRouterLinkComponent: ReactRouterLinkComponent,
    })
    expect(breadcrumbsItem.find(Text)).toExist()
  })
})
