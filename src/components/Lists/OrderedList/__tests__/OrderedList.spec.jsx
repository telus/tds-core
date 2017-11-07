import React from 'react'
import { shallow, render } from 'enzyme'

import OrderedList from '../OrderedList'

describe('<OrderedList />', () => {
  const doRender = (overrides = {}) =>
    render(
      <OrderedList {...overrides}>
        <OrderedList.Item>Lorem ipsum</OrderedList.Item>
        <OrderedList.Item>Dolor sit amet</OrderedList.Item>
      </OrderedList>
    )

  const doShallow = (overrides = {}) =>
    shallow(
      <OrderedList {...overrides}>
        <OrderedList.Item>Lorem ipsum</OrderedList.Item>
        <OrderedList.Item>Dolor sit amet</OrderedList.Item>
      </OrderedList>
    )

  it('renders', () => {
    const orderedList = doRender()

    expect(orderedList).toMatchSnapshot()
  })

  it('OrderList renders an HTML ol tag', () => {
    const orderedList = doShallow()

    expect(orderedList.dive()).toHaveTagName('ol')
  })

  it('OrderList.Item renders an HTML li tag', () => {
    const orderedListItem = shallow(<OrderedList.Item>a list item</OrderedList.Item>)

    expect(orderedListItem).toHaveTagName('li')
  })

  it('can have a list style', () => {
    let orderedList = doShallow({ listStyle: undefined })
    expect(orderedList.dive()).toHaveClassName('decimal')

    orderedList = doShallow({ listStyle: 'upperAlpha' })
    expect(orderedList.dive()).toHaveClassName('upperAlpha')
  })

  it('passes additional attributes to ol element', () => {
    const orderedList = doShallow({ id: 'the-list', reversed: 'true' })

    expect(orderedList).toHaveProp('id', 'the-list')
    expect(orderedList).toHaveProp('reversed', 'true')
  })

  it('does not allow custom CSS', () => {
    const orderedList = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(orderedList).not.toHaveProp('className', 'my-custom-class')
    expect(orderedList).not.toHaveProp('style')
  })
})
