import React from 'react'
import { shallow } from 'enzyme'

import { warn } from '../../../../warn'

import ButtonLink from '../ButtonLink'

jest.mock('../../../../warn', () => (
  { warn: jest.fn() }
))

describe('ButtonLink', () => {
  const doShallow = (overrides = {}) => shallow(
    <ButtonLink {...overrides}>Go home</ButtonLink>
  )

  afterEach(() => {
    jest.clearAllMocks()
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
    let link = doShallow({ reactRouterLinkComponent: MyLink })

    expect(warn).toHaveBeenCalled()

    jest.clearAllMocks()

    link = doShallow({ to: '/about' })

    expect(link).toHaveProp('to')
    expect(warn).toHaveBeenCalled()
  })

  it('can be presented as one of the allowed variants', () => {
    let button = doShallow()
    expect(button).toHaveClassName('primary')

    button = doShallow({ variant: 'primary' })
    expect(button).toHaveClassName('primary')

    button = doShallow({ variant: 'secondary' })
    expect(button).toHaveClassName('secondary')

    button = doShallow({ variant: 'outlined' })
    expect(button).toHaveClassName('outlined')
  })

  it('can be inverted for secondary and outlined variants', () => {
    const secondaryButton = doShallow({ variant: 'secondary', invert: true })
    expect(secondaryButton).toHaveClassName('secondaryInverted')

    const outlinedButton = doShallow({ variant: 'outlined', invert: true })
    expect(outlinedButton).toHaveClassName('outlinedInverted')
  })

  it('can not be inverted for primary variant', () => {
    const button = doShallow({ variant: 'primary', invert: true })

    expect(button).toHaveClassName('primary')
    expect(warn).toHaveBeenCalled()
  })

  it('passes additional attributes to button element', () => {
    const button = doShallow({ id: 'the-button', tabindex: 1 })

    expect(button).toHaveProp('id', 'the-button')
    expect(button).toHaveProp('tabindex', 1)
  })

  it('does not allow custom CSS', () => {
    const button = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(button).not.toHaveProp('className', 'my-custom-class')
    expect(button).not.toHaveProp('style')
  })
})
