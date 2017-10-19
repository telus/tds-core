import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import StandaloneIcon from '../StandaloneIcon'

describe('StandaloneIcon', () => {
  describe('Plain StandaloneIcon', () => {
    const defaultProps = {
      symbol: 'spyglass',
      a11yText: 'Some text for the screen readers.',
    }
    const doShallow = (props = {}) => shallow(<StandaloneIcon {...defaultProps} {...props} />)

    it('renders', () => {
      const icon = render(<StandaloneIcon {...defaultProps} />)
      expect(toJson(icon)).toMatchSnapshot()
    })

    it('passes attributes to the Icon component', () => {
      const icon = doShallow({
        symbol: 'checkmark',
        variant: 'secondary',
        size: 16,
        id: 'the-icon',
      })

      expect(icon).toHaveProp('symbol', 'checkmark')
      expect(icon).toHaveProp('variant', 'secondary')
      expect(icon).toHaveProp('size', 16)
      expect(icon).toHaveProp('id', 'the-icon')
    })

    it('is accessible for screen readers', () => {
      const icon = doShallow({ a11yText: 'Some screen reader text' })

      expect(icon).not.toHaveProp('aria-hidden')
      expect(icon).toHaveProp('aria-label', 'Some screen reader text')
    })

    it('does not allow custom CSS', () => {
      const icon = doShallow({
        className: 'my-custom-class',
        style: { color: 'hotpink' },
      })

      expect(icon).not.toHaveProp('className', 'my-custom-class')
      expect(icon).not.toHaveProp('style')
    })
  })

  describe('Interactive StandaloneIcon', () => {
    const defaultProps = {
      symbol: 'spyglass',
      a11yText: 'Some text for the screen readers.',
      onClick: jest.fn(),
    }
    const doShallow = (props = {}) => shallow(<StandaloneIcon {...defaultProps} {...props} />)

    it('renders', () => {
      const interactiveIcon = render(<StandaloneIcon {...defaultProps} />)

      expect(toJson(interactiveIcon)).toMatchSnapshot()
    })

    it('renders an HTML button tag', () => {
      const interactiveIcon = doShallow({ onClick: jest.fn() })

      expect(interactiveIcon).toHaveTagName('button')
    })

    it('triggers the click handler', () => {
      const onClickMock = jest.fn()
      const interactiveIcon = doShallow({ onClick: onClickMock })

      interactiveIcon.simulate('click')

      expect(onClickMock).toHaveBeenCalled()
    })

    it('passes additional attributes to the button element', () => {
      const interactiveIcon = doShallow({
        id: 'the-interactiveIcon',
        role: 'button',
      })

      expect(interactiveIcon).toHaveProp('id', 'the-interactiveIcon')
      expect(interactiveIcon).toHaveProp('role', 'button')
    })

    it('does not allow custom CSS', () => {
      const interactiveIcon = doShallow({
        className: 'my-custom-class',
        style: { color: 'hotpink' },
      })

      expect(interactiveIcon).not.toHaveProp('className', 'my-custom-class')
      expect(interactiveIcon).not.toHaveProp('style')
    })
  })
})
