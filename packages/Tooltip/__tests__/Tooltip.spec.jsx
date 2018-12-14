import React from 'react'
import { mount } from 'enzyme'

import StandaloneIcon from '@tds/core-standalone-icon'
import Text from '@tds/core-text'

import Tooltip from '../Tooltip'

const mockMath = Object.create(global.Math)
mockMath.random = () => 0.5
global.Math = mockMath

describe('Tooltip', () => {
  const defaultChildren = 'Tooltip text'

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

  it('renders', () => {
    const { tooltip } = doMount()

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
    const { tooltip } = doMount({ 'data-some-attr': 'some value' })

    expect(tooltip).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const { tooltip } = doMount({
      className: 'some-custom-class',
      style: { color: 'hotpink' },
    })

    const tt = tooltip.find('div[data-testid="tooltipContainer"]')

    expect(tt).not.toHaveProp('className', 'some-custom-class')
    expect(tt).not.toHaveProp('style')
  })

  it('has a default when not connected to any form field', () => {
    const { tooltip } = doMount()

    expect(tooltip.find(StandaloneIcon)).toHaveProp('a11yText', 'Reveal additional information.')
  })
})
