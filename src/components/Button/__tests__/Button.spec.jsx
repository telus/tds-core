import React from 'react'
import { render, mount } from 'enzyme'

import { warn } from '../../../utils/warn'

import Button from '../Button'

import mockMatchMedia from '../../../__mocks__/matchMedia'

jest.mock('../../../utils/warn')

describe('Button', () => {
  const doMount = (overrides = {}) => {
    const button = mount(<Button {...overrides}>Submit</Button>)

    return button.find('button')
  }

  beforeEach(() => {
    mockMatchMedia()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders', () => {
    const button = render(<Button>Submit</Button>)

    expect(button).toMatchSnapshot()
  })

  it('has one of the HTML button types', () => {
    let button = doMount()
    expect(button).toHaveProp('type', 'button')

    button = doMount({ type: 'reset' })
    expect(button).toHaveProp('type', 'reset')
  })

  it('can be presented as one of the allowed variants', () => {
    let button = doMount()
    expect(button).toHaveClassName('primary')

    button = doMount({ variant: 'secondary' })
    expect(button).toHaveClassName('secondary')
  })

  it('can not be disabled', () => {
    const button = doMount({ disabled: true })

    expect(button).not.toHaveProp('disabled')
    expect(warn).toHaveBeenCalled()
  })

  describe('responsiveness', () => {
    it('is full width below medium viewports', () => {
      mockMatchMedia(767)

      const button = doMount()

      expect(button).toHaveClassName('fullWidth')
    })

    it('is inline at medium viewports and above', () => {
      mockMatchMedia(768)

      const button = doMount()

      expect(button).toHaveClassName('inline')
    })
  })

  it('passes additional attributes to button element', () => {
    const button = doMount({ id: 'the-button', tabIndex: 1 })

    expect(button).toHaveProp('id', 'the-button')
    expect(button).toHaveProp('tabIndex', 1)
  })

  it('does not allow custom CSS', () => {
    const button = doMount({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(button).not.toHaveProp('className', 'my-custom-class')
    expect(button).not.toHaveProp('style')
  })
})
