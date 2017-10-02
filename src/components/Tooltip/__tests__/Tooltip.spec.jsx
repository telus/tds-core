import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import Tooltip from '../Tooltip'
import DecorativeIcon from '../../Icons/DecorativeIcon/DecorativeIcon'

describe('Tooltip', () => {
  const doRender = (overrides = {}) => render(
    <Tooltip {...overrides}>Helper text</Tooltip>
  )

  const doShallow = (overrides = {}) => shallow(
    <Tooltip {...overrides}>Helper text</Tooltip>
  )

  const findTriggerElement = button => button.find('button')
  const findBubbleElement = bubble => bubble.find('span')

  it('renders', () => {
    const tooltip = doRender()

    expect(toJson(tooltip)).toMatchSnapshot()
  })

  it('renders an HTML div tag', () => {
    const tooltip = doShallow()

    expect(tooltip).toHaveTagName('div')
  })

  it('has a trigger', () => {
    const tooltip = doShallow()

    expect(tooltip.find('button')).toContainReact(<DecorativeIcon symbol="questionMarkCircle" />)
  })

  it('show a bubble on click', () => {
    const tooltip = doShallow()

    findTriggerElement(tooltip).simulate('click')
    expect(findBubbleElement(tooltip)).toHaveClassName('showBubble')
  })

  it('has a direction', () => {
    let tooltip = doShallow()

    findTriggerElement(tooltip).simulate('click')
    expect(findBubbleElement(tooltip)).toHaveClassName('right')

    tooltip = doShallow({ direction: 'left' })
    findTriggerElement(tooltip).simulate('click')
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
