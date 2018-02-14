import React from 'react'
import { shallow, render } from 'enzyme'

import { warn } from '../../../../utils/warn'

import ChevronLink from '../ChevronLink'
import DecorativeIcon from '../../../../../packages/DecorativeIcon/DecorativeIcon'

jest.mock('../../../../utils/warn')

describe('ChevronLink', () => {
  const doShallow = (overrides = {}) => shallow(<ChevronLink {...overrides}>Go home</ChevronLink>)

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const link = render(<ChevronLink href="test.com">Go home</ChevronLink>)

    expect(link).toMatchSnapshot()
  })

  it('is an anchor HTML element when using the href attribute', () => {
    const link = doShallow({ href: 'http://telus.com' })

    expect(link).toHaveTagName('a')
    expect(link).toHaveProp('href', 'http://telus.com')
  })

  it('renders a react router link element when passed as a prop', () => {
    const MyLink = () => <span />
    const link = doShallow({ reactRouterLinkComponent: MyLink })

    expect(link).toMatchSelector('MyLink')
  })

  it('must use `reactRouterLinkComponent` and `to` props together', () => {
    const MyLink = () => <span />
    doShallow({ reactRouterLinkComponent: MyLink })

    expect(warn).toHaveBeenCalled()

    jest.clearAllMocks()

    const link = doShallow({ to: '/about' })

    expect(link).toHaveProp('to')
    expect(warn).toHaveBeenCalled()
  })

  it('has a chevron icon', () => {
    let link = doShallow({ href: 'https://telus.com' })
    expect(link).toContainReact(<DecorativeIcon symbol="chevron" size={16} />)

    link = doShallow({ href: 'https://telus.com', direction: 'left' })
    expect(link).toContainReact(<DecorativeIcon symbol="leftChevron" size={16} />)
  })

  it('can have specific variants', () => {
    let link = doShallow({ href: 'https://telus.com' })
    expect(link).toHaveClassName('primary')

    link = doShallow({ href: 'https://telus.com', variant: 'secondary' })
    expect(link).toHaveClassName('secondary')

    link = doShallow({ href: 'https://telus.com', variant: 'primary' })
    expect(link).toHaveClassName('primary')

    link = doShallow({ href: 'https://telus.com', variant: 'inverted' })
    expect(link).toHaveClassName('inverted')
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
