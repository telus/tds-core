import React from 'react'
import { shallow, render } from 'enzyme'

import { warn } from '../../../../utils/warn'

import ButtonLink from '../ButtonLink'

jest.mock('../../../../utils/warn')

describe('ButtonLink', () => {
  const doShallowAndDive = (overrides = {}) =>
    shallow(<ButtonLink {...overrides}>Go home</ButtonLink>)
      .dive()
      .dive()
      .dive()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const link = render(<ButtonLink>Go home</ButtonLink>)

    expect(link).toMatchSnapshot()
  })

  it('is an anchor HTML element when using the href attribute', () => {
    const link = doShallowAndDive({ href: 'http://telus.com' })

    expect(link).toHaveTagName('a')
    expect(link).toHaveProp('href', 'http://telus.com')
  })

  it('renders a react router link element when passed as a prop', () => {
    const MyLink = () => <span />
    const link = doShallowAndDive({ reactRouterLinkComponent: MyLink })

    expect(link).toMatchSelector('MyLink')
  })

  it('must use `reactRouterLinkComponent` and `to` props together', () => {
    const MyLink = () => <span />
    doShallowAndDive({ reactRouterLinkComponent: MyLink })

    expect(warn).toHaveBeenCalled()

    jest.clearAllMocks()

    const link = doShallowAndDive({ to: '/about' })

    expect(link).toHaveProp('to')
    expect(warn).toHaveBeenCalled()
  })

  it('can be presented as one of the allowed variants', () => {
    let button = doShallowAndDive()
    expect(button).toHaveClassName('primary')

    button = doShallowAndDive({ variant: 'primary' })
    expect(button).toHaveClassName('primary')

    button = doShallowAndDive({ variant: 'secondary' })
    expect(button).toHaveClassName('secondary')

    button = doShallowAndDive({ variant: 'inverted' })
    expect(button).toHaveClassName('inverted')
  })

  it('passes additional attributes to button element', () => {
    const button = doShallowAndDive({ id: 'the-button', tabindex: 1 })

    expect(button).toHaveProp('id', 'the-button')
    expect(button).toHaveProp('tabindex', 1)
  })

  it('does not allow custom CSS', () => {
    const button = doShallowAndDive({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(button).not.toHaveProp('className', 'my-custom-class')
    expect(button).not.toHaveProp('style')
  })
})
