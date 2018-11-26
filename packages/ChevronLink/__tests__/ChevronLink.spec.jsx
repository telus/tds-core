import React from 'react'
import { shallow, render } from 'enzyme'

import DecorativeIcon from '@tds/core-decorative-icon'
import A11yContent from '@tds/core-a11y-content'

import { warn } from '../../../shared/utils/warn'

import ChevronLink from '../ChevronLink'

jest.mock('../../../shared/utils/warn')

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

    expect(link).toHaveDisplayName('a')
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

  describe('A11yContent', () => {
    it('connects to ButtonLink', () => {
      const link = shallow(
        <ChevronLink>
          Go home
          <A11yContent>testing</A11yContent>
        </ChevronLink>
      )

      expect(link).toContainReact(<A11yContent>testing</A11yContent>)
    })
  })

  it('does not allow custom CSS', () => {
    const link = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(link).not.toHaveProp('className', 'my-custom-class')
    expect(link).not.toHaveProp('style')
  })
})
