import React from 'react'
import { shallow, render, mount } from 'enzyme'

import StandaloneIcon from '../../../../packages/StandaloneIcon/StandaloneIcon'
import Text from '../../Typography/Text/Text'

import Input from '../../Input/Input'
import Tooltip from '../Tooltip'

import mockMatchMedia from '../../../__mocks__/matchMedia'

describe('Tooltip', () => {
  const defaultChildren = 'Tooltip text'
  const doShallow = (overrides = {}, children = defaultChildren) =>
    shallow(<Tooltip {...overrides}>{children}</Tooltip>)

  const doMount = (overrides = {}, children = defaultChildren, options = {}) => {
    const tooltip = mount(<Tooltip {...overrides}>{children}</Tooltip>, options)

    const findTrigger = () => tooltip.find(StandaloneIcon)

    return {
      tooltip,
      findTrigger,
      findBubble: () => tooltip.find('div[data-testid="bubble"]'),
      toggleBubble: () => findTrigger().simulate('click'),
    }
  }

  beforeEach(() => {
    mockMatchMedia(575)
  })

  // TODO: test for the defaultMatches behaviour?

  it('renders', () => {
    const tooltip = render(<Tooltip>InputFeedback text</Tooltip>)

    expect(tooltip).toMatchSnapshot()
  })

  it('has a trigger', () => {
    const { findTrigger } = doMount()

    expect(findTrigger()).toHaveProp('symbol', 'questionMarkCircle')
    expect(findTrigger()).toHaveProp('a11yText', 'Reveal additional information.')
  })

  it('has small text in the bubble', () => {
    const { toggleBubble, findBubble } = doMount({}, 'Some content')
    toggleBubble()

    expect(findBubble()).toContainReact(<Text size="small">Some content</Text>)
  })

  describe('responsive bubble', () => {
    it('is full width at xsmall viewports', () => {
      mockMatchMedia(575)

      const { findBubble } = doMount()

      expect(findBubble()).toHaveClassName('full')
    })

    it('is half width at small viewports', () => {
      mockMatchMedia(576)

      const { findBubble } = doMount()

      expect(findBubble()).toHaveClassName('half')
    })

    it('is quarter width at medium viewports and above', () => {
      mockMatchMedia(768)

      const { findBubble } = doMount()

      expect(findBubble()).toHaveClassName('quarter')
    })

    it('forces the direction to the left at xsmall and small viewports', () => {
      mockMatchMedia(575)
      let findBubble = doMount({ direction: 'right' }).findBubble

      expect(findBubble()).toHaveClassName('left')

      mockMatchMedia(576)
      findBubble = doMount({ direction: 'right' }).findBubble

      expect(findBubble()).toHaveClassName('left')
    })

    it('has a direction only on medium viewports and above', () => {
      mockMatchMedia(768)

      let findBubble = doMount().findBubble
      expect(findBubble()).toHaveClassName('right')

      findBubble = doMount({ direction: 'left' }).findBubble
      expect(findBubble()).toHaveClassName('left')
    })
  })

  describe('interactivity', () => {
    const createRootElement = () => {
      const root = document.createElement('div')
      root.setAttribute('id', `tooltip-${Math.random()}`)

      return root
    }

    // Not sure why `expect(findBubble()).toHaveClassName(...)` doesn't work
    const getBubbleClassNames = tooltip =>
      tooltip
        .find('[data-testid="bubble"]')
        .at(1)
        .render()
        .attr('class')

    it('shows and hides the bubble', () => {
      const { findBubble, toggleBubble } = doMount()
      expect(findBubble()).toHaveClassName('hide')

      toggleBubble()
      expect(findBubble()).not.toHaveClassName('hide')

      toggleBubble()
      expect(findBubble()).toHaveClassName('hide')
    })

    it('hides the bubble when clicking outside of it', () => {
      const root = createRootElement()

      const { tooltip, toggleBubble } = doMount({}, 'Tooltip text', {
        attachTo: document.body.appendChild(root),
      })

      toggleBubble()
      root.dispatchEvent(new Event('click', { bubbles: true }))

      expect(getBubbleClassNames(tooltip)).toContain('hide')

      // And it removes the event listener so on subsequent clicks it remains hidden
      root.dispatchEvent(new Event('click'), { bubbles: true })

      expect(getBubbleClassNames(tooltip)).toContain('hide')
    })

    it('will not hide the bubble when clicking inside the bubble', () => {
      const root = createRootElement()

      const { tooltip, toggleBubble } = doMount({}, 'Tooltip text', {
        attachTo: document.body.appendChild(root),
      })

      toggleBubble()
      root
        .querySelector('[data-testid="bubble"]')
        .dispatchEvent(new Event('click', { bubbles: true }))

      expect(getBubbleClassNames(tooltip)).not.toContain('hide')
    })
  })

  describe('accessibility', () => {
    it('connects the bubble message to the trigger button for screen readers', () => {
      const { findTrigger, findBubble } = doMount({ connectedFieldLabel: 'Some field' })

      expect(findBubble()).toHaveProp('id', 'some-field_tooltip')
      expect(findBubble()).toHaveProp('role', 'tooltip')
      expect(findBubble()).toHaveProp('aria-live', 'assertive')

      expect(findTrigger()).toHaveProp('aria-haspopup', 'true')
      expect(findTrigger()).toHaveProp('aria-controls', 'some-field_tooltip')
    })

    it('shows and hides the bubble for screen readers', () => {
      const { findTrigger, findBubble, toggleBubble } = doMount()

      expect(findTrigger()).toHaveProp('aria-expanded', 'false')
      expect(findBubble()).toHaveProp('aria-hidden', 'true')

      toggleBubble()

      expect(findTrigger()).toHaveProp('aria-expanded', 'true')
      expect(findBubble()).toHaveProp('aria-hidden', 'false')
    })
  })

  it('passes additional attributes to the wrapper element', () => {
    const tooltip = doShallow({ 'data-some-attr': 'some value' })

    expect(tooltip).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const tooltip = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(tooltip).not.toHaveProp('className', 'my-custom-class')
    expect(tooltip).not.toHaveProp('style')
  })
})

describe('Connecting Tooltips to form fields', () => {
  it('has a default when not connected to any form field', () => {
    const tooltip = shallow(<Tooltip>The tooltip</Tooltip>)

    expect(tooltip.find(StandaloneIcon)).toHaveProp('a11yText', 'Reveal additional information.')
  })

  it('connects to Input', () => {
    const input = mount(<Input label="Some field" tooltip={<Tooltip>The tooltip</Tooltip>} />)

    expect(input.find(StandaloneIcon)).toHaveProp(
      'a11yText',
      'Reveal additional information about Some field.'
    )
  })
})
