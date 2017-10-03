import React from 'react'
import {shallow, render} from 'enzyme'
import toJson from 'enzyme-to-json'

import Tooltip from '../Tooltip'
import DecorativeIcon from '../../Icons/DecorativeIcon/DecorativeIcon'
import Text from '../../Typography/Text/Text'

describe('Tooltip', () => {
  const defaultChildren = 'Helper text'
  const randomId = 'the-id'
  const doShallow = (overrides = {}, children = defaultChildren, id = randomId) =>
    shallow(
      <Tooltip {...overrides} id={id}>
        {children}
      </Tooltip>
    )

  const findBubbleElement = tooltip => tooltip.find('div').at(1)
  const findTrigger = tooltip => tooltip.find('button')
  const openBubble = tooltip => tooltip.find('button').simulate('click')

  it('renders', () => {
    const tooltip = render(<Tooltip id="the-id">Helper text</Tooltip>)

    expect(toJson(tooltip)).toMatchSnapshot()
  })

  it('has an id', () => {
    const tooltip = doShallow({}, 'Some text', 'the-bubble-id')
    openBubble(tooltip)

    expect(findBubbleElement(tooltip)).toHaveProp('id', 'the-bubble-id')
  })

  it('has a trigger', () => {
    const tooltip = doShallow()

    expect(findTrigger(tooltip)).toContainReact(<DecorativeIcon symbol="questionMarkCircle" />)
  })

  it('shows the bubble content', () => {
    const tooltip = doShallow({}, 'Some content')
    openBubble(tooltip)

    expect(
      findBubbleElement(tooltip)
        .find(Text)
        .dive()
    ).toHaveText('Some content')
  })

  it('has small text in the bubble', () => {
    const tooltip = doShallow({}, 'Some content')
    openBubble(tooltip)

    expect(findBubbleElement(tooltip)).toContainReact(<Text size="small">Some content</Text>)
  })

  it('has a direction', () => {
    let tooltip = doShallow()
    openBubble(tooltip)

    expect(findBubbleElement(tooltip)).toHaveClassName('right')

    tooltip = doShallow({direction: 'left'})
    openBubble(tooltip)

    expect(findBubbleElement(tooltip)).toHaveClassName('left')
  })

  describe('accessibility', () => {
    it('connects the bubble message to the trigger button for screen readers', () => {
      const tooltip = doShallow({}, 'Random text', 'random-id')

      expect(findBubbleElement(tooltip)).toHaveProp('id', 'random-id')
      expect(findTrigger(tooltip)).toHaveProp('aria-labelledby', 'random-id')
      expect(findTrigger(tooltip)).toHaveProp('aria-haspopup', 'true')
    })
  })

  it('passes additional attributes to the element', () => {
    const tooltip = doShallow({'data-some-attr': 'some value'})

    expect(tooltip).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const tooltip = doShallow({
      className: 'my-custom-class',
      style: {color: 'hotpink'},
    })

    expect(tooltip).not.toHaveProp('className', 'my-custom-class')
    expect(tooltip).not.toHaveProp('style')
  })
})
