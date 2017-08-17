import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import { warn } from '../../../../warn'

import Link from '../../Link'

jest.mock('../../../../warn', () => (
  { warn: jest.fn() }
))

describe('Link.Button', () => {
  const doShallow = (overrides = {}) => shallow(
    <Link.Button {...overrides}>Go home</Link.Button>
  )
  const doShallowWithRouter = (overrides = {}) => shallow(
    <MemoryRouter>
      <Link.Button {...overrides}>Go home</Link.Button>
    </MemoryRouter>
  )

  it('is an anchor HTML element when using the href attribute', () => {
    const link = doShallow({ href: 'http://telus.com' })

    expect(link).toHaveTagName('a')
    expect(link).toHaveProp('href', 'http://telus.com')
  })

  it('is a React Router Link when using the to attribute', () => {
    const link = doShallowWithRouter({ to: '/about' })

    const reactRouterLink = link.find('Router').dive().dive()
    expect(reactRouterLink).toMatchSelector('Link')
    expect(reactRouterLink).toHaveProp('to', '/about')
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
    const primaryButton = doShallow({ variant: 'primary', invert: true })

    expect(primaryButton).toHaveClassName('primary')
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
