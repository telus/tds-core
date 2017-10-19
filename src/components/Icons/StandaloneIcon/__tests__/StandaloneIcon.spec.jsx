import React from 'react'
import {shallow, render} from 'enzyme'
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
      const icon = render(<StandaloneIcon symbol="spyglass" a11yText="Some screen reader text." />)
      expect(toJson(icon)).toMatchSnapshot()
    })

    it('passes attributes to the Icon component', () => {
      const icon = doShallow({symbol: 'checkmark', variant: 'secondary', size: 16, id: 'the-icon'})

      expect(icon).toHaveProp('symbol', 'checkmark')
      expect(icon).toHaveProp('variant', 'secondary')
      expect(icon).toHaveProp('size', 16)
      expect(icon).toHaveProp('id', 'the-icon')
    })

    it('is accessible for screen readers', () => {
      const icon = doShallow({a11yText: 'Some screen reader text'})

      expect(icon).not.toHaveProp('aria-hidden')
      expect(icon).toHaveProp('aria-label', 'Some screen reader text')
    })
  })

  describe('Interactive StandaloneIcon', () => {
    const onClickMock = jest.fn()

    const defaultProps = {
      symbol: 'spyglass',
      a11yText: 'Some text for the screen readers.',
      interactive: true,
      onClick: onClickMock,
    }
    const doShallow = (props = {}) => shallow(<StandaloneIcon {...defaultProps} {...props} />)

    it('renders an HTML button tag', () => {
      const interactiveIcon = doShallow({interactive: true, onClick: onClickMock})

      expect(interactiveIcon).toHaveTagName('button')
    })

    it('the aria-label attribute is applied to the button tag', () => {})

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
        style: {color: 'hotpink'},
      })

      expect(interactiveIcon).not.toHaveProp('className', 'my-custom-class')
      expect(interactiveIcon).not.toHaveProp('style')
    })
  })
})

// Interactive
// <button onClick="" aria-label="Search this site" id="button-id">
//   <StandaloneIcon symbol="spyglass" size={48}/>
// </button>
//
// Non-Interactive
// <StandaloneIcon symbol="spyglass" size={48} a11yText="Search this site" data-blah="hi" />
