import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { warn } from '../../../warn'

import Button from '../Button'

jest.mock('../../../warn', () => (
  { warn: jest.fn() }
))

describe('Button', () => {
  const doShallow = (overrides = {}) => shallow(<Button {...overrides}>Submit</Button>)

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const button = doShallow()

    expect(toJson(button)).toMatchSnapshot()
  })

  it('has one of the HTML button types', () => {
    let button = doShallow()
    expect(button).toHaveProp('type', 'button')

    button = doShallow({ type: 'reset' })
    expect(button).toHaveProp('type', 'reset')
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

  it('can be inverted outlined variant', () => {
    const outlinedButton = doShallow({ variant: 'outlined', invert: true })
    expect(outlinedButton).toHaveClassName('outlinedInverted')
  })

  it('can not be inverted for primary and secondary variants', () => {
    const primaryButton = doShallow({ variant: 'primary', invert: true })

    expect(primaryButton).toHaveClassName('primary')
    expect(warn).toHaveBeenCalled()

    const secondaryButton = doShallow({ variant: 'secondary', invert: true })

    expect(secondaryButton).toHaveClassName('secondary')
    expect(warn).toHaveBeenCalled()
  })

  it('can not be disabled', () => {
    const button = doShallow({ disabled: true })

    expect(button).not.toHaveProp('disabled')
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
