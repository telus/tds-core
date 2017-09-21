import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { deprecate } from '../../../warn'

import Icon from '../Icon'

jest.mock('../../../warn', () => (
  { deprecate: jest.fn() }
))

describe('<Icon />', () => {
  const defaultProps = {
    glyph: 'checkmark'
  }

  const doShallow = (overrides = {}) => shallow(<Icon {...defaultProps} {...overrides} />)

  it('renders', () => {
    const icon = doShallow()

    expect(toJson(icon)).toMatchSnapshot()
  })

  it('needs a glyph', () => {
    const icon = doShallow({ glyph: 'spyglass' })

    expect(icon).toHaveClassName('iconCoreSpyglass')
  })

  it('supports variants', () => {
    const icon = doShallow({ variant: 'secondary' })

    expect(icon).toHaveClassName('secondary')
  })

  it('can be fixed width', () => {
    const icon = doShallow({ fixedWidth: true })

    expect(icon).toHaveClassName('fw')
  })

  it('can be sized', () => {
    const icon = doShallow({ size: 'small' })

    expect(icon).toHaveClassName('small')
  })

  it('supports custom CSS classes', () => {
    const icon = doShallow({ className: 'custom-class' })

    expect(icon).toHaveClassName('custom-class')
  })

  it('passes additional attributes to the icon element', () => {
    const icon = doShallow({ id: 'the-icon', role: 'button' })

    expect(icon).toHaveProp('id', 'the-icon')
    expect(icon).toHaveProp('role', 'button')
  })

  describe('deprecated props', () => {
    it('deprecates className', () => {
      jest.clearAllMocks()
      const icon = doShallow({ className: 'my-custom-class' })

      expect(icon).toHaveProp('className')
      expect(deprecate).toHaveBeenCalled()
    })

    it('deprecates style', () => {
      jest.clearAllMocks()
      const icon = doShallow({ style: 'color: hotpink' })

      expect(icon).toHaveProp('style')
      expect(deprecate).toHaveBeenCalled()
    })

    it('deprecates disabled variant', () => {
      jest.clearAllMocks()
      const icon = doShallow({ variant: 'disabled' })

      expect(icon).toHaveClassName('disabled')
      expect(deprecate).toHaveBeenCalled()
    })

    it('deprecates fixedWidth prop', () => {
      jest.clearAllMocks()
      const icon = doShallow({ fixedWidth: true })

      expect(icon).toHaveClassName('fw')
      expect(deprecate).toHaveBeenCalled()
    })
  })

  it('provides a label to specific glyphs', () => {
    const icon = doShallow({ glyph: 'exclamationPointCircle', 'aria-label': 'alert' })

    expect(icon).toHaveProp('aria-label', 'alert')
    expect(icon).not.toHaveProp('aria-hidden', 'undefined')
  })

  it('sets aria-hidden to true when label is not set', () => {
    const icon = doShallow({ glyph: 'checkmark' })

    expect(icon).toHaveProp('aria-hidden', 'true')
    expect(icon).not.toHaveProp('aria-label', 'undefined')
  })
})
