import React from 'react'
import { shallow, render } from 'enzyme'

import { warn } from '../../../utils/warn'

import Button from '../Button'

jest.mock('../../../utils/warn')

describe('Button', () => {
  const doShallowAndDive = (overrides = {}) =>
    shallow(<Button {...overrides}>Submit</Button>)
      .dive()
      .dive()
      .dive()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const button = render(<Button>Submit</Button>)

    expect(button).toMatchSnapshot()
  })

  it('has one of the HTML button types', () => {
    let button = doShallowAndDive()
    expect(button).toHaveProp('type', 'button')

    button = doShallowAndDive({ type: 'reset' })
    expect(button).toHaveProp('type', 'reset')
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

  it('can not be disabled', () => {
    const button = doShallowAndDive({ disabled: true })

    expect(button).not.toHaveProp('disabled')
    expect(warn).toHaveBeenCalled()
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
