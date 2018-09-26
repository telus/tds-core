import React from 'react'
import { render, shallow, mount } from 'enzyme'

import Breadcrumbs from '../Breadcrumbs'

describe('Breadcrumbs', () => {
  const doRender = (props = {}) => render(<Breadcrumbs {...defaultProps} {...props} />)
  const doShallow = (props = {}) => shallow(<Breadcrumbs {...defaultProps} {...props} />)
  const doMount = (props = {}) => mount(<Breadcrumbs {...defaultProps} {...props} />)

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

  it('does not allow custom CSS', () => {
    const breadcrumbs = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(breadcrumbs).not.toHaveProp('className', 'my-custom-class')
    expect(breadcrumbs).not.toHaveProp('style')
  })

  it('uses mainId as the href for the last link', () => {
    const breadcrumbs = doMount({
      mainId: '#content',
    })

    expect(breadcrumbs.find('a').last()).toHaveProp('href', '#content')
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

    it('should have the aria-current="page" property on the last link', () => {
      const breadcrumbs = doMount()

      expect(breadcrumbs.find('a').last()).toHaveProp('aria-current', 'page')
    })
  })

  describe('with children', () => {
    const defaultPropsWithChildren = {
      routes: undefined,
      children: [
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>,
        <Breadcrumbs.Item href="/mobility">Mobility</Breadcrumbs.Item>,
        <Breadcrumbs.Item href="/mobility/accessories">Accessories</Breadcrumbs.Item>,
      ],
    }

    it('renders', () => {
      const breadcrumbs = doRender(defaultPropsWithChildren)

      expect(breadcrumbs).toMatchSnapshot()
    })

    it('doest not concatenate paths', () => {
      const breadcrumbs = doMount({
        children: [
          <Breadcrumbs.Item href="/one">One</Breadcrumbs.Item>,
          <Breadcrumbs.Item href="/one/two">Two</Breadcrumbs.Item>,
          <Breadcrumbs.Item href="/one/two/three">Three</Breadcrumbs.Item>,
        ],
      })

      expect(breadcrumbs.find('a').at(0)).toHaveProp('href', '/one')
      expect(breadcrumbs.find('a').at(1)).toHaveProp('href', '/one/two')
    })

    it('should have the aria-current="page" property on the last link', () => {
      const breadcrumbs = doMount(defaultPropsWithChildren)

      expect(breadcrumbs.find('a').last()).toHaveProp('aria-current', 'page')
    })
  })
})
