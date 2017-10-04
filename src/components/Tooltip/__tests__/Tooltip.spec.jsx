import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import StandaloneIcon from '../../Icons/StandaloneIcon/StandaloneIcon'
import Text from '../../Typography/Text/Text'

import Input from '../../Input/Input'
import Tooltip from '../Tooltip'

describe('Tooltip', () => {
  const defaultChildren = 'Helper text'
  const doShallow = (overrides = {}, children = defaultChildren) =>
    shallow(<Tooltip {...overrides}>{children}</Tooltip>)

  const findBubble = tooltip => tooltip.find('[data-testid="bubble"]')
  const findTrigger = tooltip => tooltip.find('button')
  const openBubble = tooltip => findTrigger(tooltip).simulate('click')

  it('renders', () => {
    const tooltip = render(<Tooltip id="the-id">Helper text</Tooltip>)

    expect(toJson(tooltip)).toMatchSnapshot()
  })

  it('has a trigger', () => {
    const tooltip = doShallow()

    expect(findTrigger(tooltip)).toContainReact(
      <StandaloneIcon symbol="questionMarkCircle" a11yText="Reveal additional information." />
    )
  })

  it('shows and hides the bubble', () => {
    const tooltip = doShallow()
    expect(findBubble(tooltip).dive()).toHaveClassName('hide')

    openBubble(tooltip)
    expect(findBubble(tooltip).dive()).not.toHaveClassName('hide')
  })

  it('has small text in the bubble', () => {
    const tooltip = doShallow({}, 'Some content')
    openBubble(tooltip)

    expect(findBubble(tooltip)).toContainReact(<Text size="small">Some content</Text>)
  })

  it('has a direction', () => {
    let tooltip = doShallow()
    expect(findBubble(tooltip).dive()).toHaveClassName('right')

    tooltip = doShallow({ direction: 'left' })
    expect(findBubble(tooltip).dive()).toHaveClassName('left')
  })

  describe('accessibility', () => {
    it('connects the bubble message to the trigger button for screen readers', () => {
      const tooltip = doShallow({ connectedFieldLabel: 'Some field' })

      expect(findBubble(tooltip)).toHaveProp('id', 'some-field_tooltip')
      expect(findBubble(tooltip)).toHaveProp('role', 'tooltip')
      expect(findBubble(tooltip)).toHaveProp('aria-live', 'polite')

      expect(findTrigger(tooltip)).toHaveProp('aria-haspopup', 'true')
      expect(findTrigger(tooltip)).toHaveProp('aria-controls', 'some-field_tooltip')
    })

    it('shows and hides the bubble for screen readers', () => {
      const tooltip = doShallow()

      expect(findTrigger(tooltip)).toHaveProp('aria-expanded', 'false')
      expect(findBubble(tooltip)).toHaveProp('aria-hidden', 'true')

      openBubble(tooltip)

      expect(findTrigger(tooltip)).toHaveProp('aria-expanded', 'true')
      expect(findBubble(tooltip)).toHaveProp('aria-hidden', 'false')
    })
  })

  it('passes additional attributes to the element', () => {
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
    const input = shallow(<Input label="Some field" tooltip={<Tooltip>The tooltip</Tooltip>} />)

    expect(
      input
        .find(Tooltip)
        .dive()
        .find(StandaloneIcon)
    ).toHaveProp('a11yText', 'Reveal additional information about Some field.')
  })
})
