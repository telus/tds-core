import React from 'react'
import { mount, shallow } from 'enzyme'

import { warn } from '../../../shared/utils/warn'

import Link from '../Link'

jest.mock('../../../shared/utils/warn')

describe('Link', () => {
  const doShallow = (overrides = {}) => shallow(<Link {...overrides}>Go home</Link>)
  const doMount = (overrides = {}) => {
    const link = mount(<Link {...overrides}>Some content</Link>)
    return {
      link: link.find(overrides.reactRouterLinkComponent || 'a'),
      styledComponent: link.find('Link__StyledLink[data-testid="link"]'),
    }
  }
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const link = doShallow()

    expect(link).toMatchSnapshot()
  })

  it('is an anchor HTML element when using the href attribute', () => {
    const { link } = doMount({ href: 'http://telus.com' })

    expect(link).toHaveDisplayName('a')
    expect(link).toHaveProp('href', 'http://telus.com')
  })

  it('renders a react router link element when passed as a prop', () => {
    const MyLink = () => <span />
    const { link } = doMount({ reactRouterLinkComponent: MyLink })

    expect(link).toMatchSelector('MyLink')
  })

  it('must use `reactRouterLinkComponent` and `to` props together', () => {
    const MyLink = () => <span />
    let link = doMount({ reactRouterLinkComponent: MyLink })

    expect(warn).toHaveBeenCalled()

    jest.clearAllMocks()

    link = doShallow({ to: '/about' })

    expect(link).toHaveProp('to')
    expect(warn).toHaveBeenCalled()
  })

  it('can be displayed with the default styles', () => {
    const link = doShallow()
    expect(link).toMatchSnapshot()
  })

  it('can be inverted', () => {
    const link = doShallow({ invert: true })
    expect(link).toMatchSnapshot()
  })

  it('passes additional attributes to the link element', () => {
    const link = doShallow({ id: 'the-link', role: 'button' })

    expect(link).toHaveProp('id', 'the-link')
    expect(link).toHaveProp('role', 'button')
  })

  it('does not allow custom CSS', () => {
    const link = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(link).not.toHaveProp('className', 'my-custom-class')
    expect(link).not.toHaveProp('style')
  })
})
