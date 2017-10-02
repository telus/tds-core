import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import Tooltip from '../Tooltip'
import DecorativeIcon from '../../Icons/DecorativeIcon/DecorativeIcon'
import Text from '../../Typography/Text/Text'

describe('Tooltip', () => {
  const defaultChildren = 'Helper text'
  const doShallow = (overrides = {}, children = defaultChildren) => shallow(
    <Tooltip {...overrides}>{children}</Tooltip>
  )

  const findBubbleElement = tooltip => tooltip.find('span')
  const openBubble = tooltip => tooltip.find('button').simulate('click')

  it('renders', () => {
    const tooltip = render(
      <Tooltip>Helper text</Tooltip>
    )

    expect(toJson(tooltip)).toMatchSnapshot()
  })

  it('has a trigger', () => {
    const tooltip = doShallow()

    expect(tooltip.find('button')).toContainReact(<DecorativeIcon symbol="questionMarkCircle" />)
  })

  it('shows the bubble content', () => {
    const tooltip = doShallow({}, 'Some content')
    openBubble(tooltip)

    expect(findBubbleElement(tooltip).find(Text).dive()).toHaveText('Some content')
  })

  it('has small text in the bubble', () => {
    const tooltip = doShallow({}, 'Some content')
    openBubble(tooltip)

    expect(findBubbleElement(tooltip)).toContainReact(
      <Text size="small">Some content</Text>
    )
  })

  it('has a direction', () => {
    let tooltip = doShallow()
    openBubble(tooltip)

    expect(findBubbleElement(tooltip)).toHaveClassName('right')

    tooltip = doShallow({ direction: 'left' })
    openBubble(tooltip)

    expect(findBubbleElement(tooltip)).toHaveClassName('left')
  })

  it('passes additional attributes to the element', () => {
    const tooltip = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(tooltip).toHaveProp('id', 'the-id')
    expect(tooltip).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const tooltip = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(tooltip).not.toHaveProp('className', 'my-custom-class')
    expect(tooltip).not.toHaveProp('style')
  })
})
