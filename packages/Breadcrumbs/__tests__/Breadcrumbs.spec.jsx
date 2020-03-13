import React from 'react'
import { mount } from 'enzyme'

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

  const doMount = (props = {}) => mount(<Breadcrumbs {...defaultProps} {...props} />)

  it('does not allow custom CSS', () => {
    const breadcrumbs = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(breadcrumbs.find('nav')).not.toHaveProp('className', 'my-custom-class')
    expect(breadcrumbs.find('nav')).not.toHaveProp('style')
  })

  describe('with routes', () => {
    it('renders', () => {
      const breadcrumbs = doMount()

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
      const breadcrumbs = doMount(defaultPropsWithChildren)

      expect(breadcrumbs).toMatchSnapshot()
    })

    it('renders with ReactRouterLinkComponent', () => {
      const LinkComponent = () => <a href="#react-router-link">TDS</a>
      const breadcrumbs = doMount({
        ...defaultPropsWithChildren,
        reactRouterLinkComponent: LinkComponent,
      })

      expect(breadcrumbs).toMatchSnapshot()
      expect(breadcrumbs.find('a[href="#react-router-link"]').length).toEqual(2)
    })

    it('renders with ReactRouterLinkComponent in Item', () => {
      const LinkComponent = () => <a href="#react-router-link">TDS</a>
      const breadcrumbs = doMount({
        ...defaultPropsWithChildren,
        children: [
          <Breadcrumbs.Item key="/" href="/">
            Home
          </Breadcrumbs.Item>,
          <Breadcrumbs.Item
            key="/mobility"
            href="/mobility"
            reactRouterLinkComponent={LinkComponent}
          >
            Mobility
          </Breadcrumbs.Item>,
          <Breadcrumbs.Item key="/mobility/accessories" href="/mobility/accessories">
            Accessories
          </Breadcrumbs.Item>,
        ],
      })

      expect(breadcrumbs).toMatchSnapshot()
      expect(breadcrumbs.find('a[href="#react-router-link"]').length).toEqual(1)
    })

    it('Item forwards refs', () => {
      const ref = React.createRef()
      const item = mount(
        <>
          <Breadcrumbs.Item ref={ref} href="/">
            Home
          </Breadcrumbs.Item>
        </>
      )

      const target = item
        .find('Link')
        .at(0)
        .find('StyledComponent')
        .childAt(0)
        .instance()

      expect(target).toEqual(ref.current)
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

describe('Item', () => {
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

  it('renders a Text component for the last item', () => {
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
