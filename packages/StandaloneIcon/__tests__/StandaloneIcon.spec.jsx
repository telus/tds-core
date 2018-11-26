import React from 'react'
import { shallow, render } from 'enzyme'

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
      expect(icon).toMatchSnapshot()
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

  describe('Interactive icon', () => {
    const defaultProps = {
      symbol: 'spyglass',
      a11yText: 'Some text for the screen readers.',
      onClick: jest.fn(),
    }
    const doShallow = (props = {}) => {
      const interactiveIcon = shallow(<StandaloneIcon {...defaultProps} {...props} />)

      return {
        interactiveIcon,
        button: interactiveIcon.dive(),
      }
    }

    it('renders', () => {
      const interactiveIcon = render(<StandaloneIcon {...defaultProps} />)

      expect(interactiveIcon).toMatchSnapshot()
    })

    it('renders an HTML button tag', () => {
      const { interactiveIcon } = doShallow({ onClick: jest.fn() })

      expect(interactiveIcon.dive()).toHaveDisplayName('button')
    })

    it('triggers the click handler', () => {
      const onClickMock = jest.fn()
      const { interactiveIcon } = doShallow({ onClick: onClickMock })

      interactiveIcon.simulate('click')

      expect(onClickMock).toHaveBeenCalled()
    })

    describe('touch area', () => {
      it('expands the touch area to be large enough for a finger when the icon is small', () => {
        let { button } = doShallow({ size: 16 })
        expect(button).toHaveStyle('padding', '8px')
        expect(button).toHaveStyle('margin', '-8px')

        button = doShallow({ size: 24 }).button

        expect(button).toHaveStyle('padding', '4px')
        expect(button).toHaveStyle('margin', '-4px')
      })

      it('does not expand the touch area when the icon is large', () => {
        const { button } = doShallow({ size: 48 })

        expect(button).not.toHaveStyle('padding')
        expect(button).not.toHaveStyle('margin')
      })
    })

    it('passes additional attributes to the button element', () => {
      const { button } = doShallow({
        id: 'the-interactiveIcon',
        role: 'button',
      })

      expect(button).toHaveProp('id', 'the-interactiveIcon')
      expect(button).toHaveProp('role', 'button')
    })

    it('does not allow custom CSS', () => {
      const { button } = doShallow({
        className: 'my-custom-class',
        style: { color: 'hotpink' },
      })

      expect(button).not.toHaveProp('className', 'my-custom-class')
      expect(button).not.toHaveStyle('color', 'hotpink')
    })
  })
})
