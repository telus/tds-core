import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import OrderedList from '../OrderedList'

describe('<OrderedList />', () => {
  const doRender = (overrides = {}) => render(
    <OrderedList {...overrides}>
      <OrderedList.Item>Lorem ipsum</OrderedList.Item>
      <OrderedList.Item>Dolor sit amet</OrderedList.Item>
    </OrderedList>
  )

  const doShallowList = (overrides = {}) => shallow(
    <OrderedList {...overrides}>
      <OrderedList.Item>Lorem ipsum</OrderedList.Item>
      <OrderedList.Item>Dolor sit amet</OrderedList.Item>
    </OrderedList>
  )

  const findOrderedList = orderedList => orderedList.find('ol')

  const doShallowItem = (overrides = {}) => shallow(
    <OrderedList.Item {...overrides}>Some content</OrderedList.Item>
  )

  it('renders', () => {
    const orderedList = doRender()

    expect(toJson(orderedList)).toMatchSnapshot()
  })

  it('OrderList renders an HTML ol tag', () => {
    const orderedList = doShallowList()

    expect(orderedList).toHaveTagName('ol')
  })

  it('OrderList.Item renders an HTML li tag', () => {
    const orderedListItem = doShallowItem()

    expect(orderedListItem).toHaveTagName('li')
  })

  it('can have a list style', () => {
    let orderedList = doShallowList({ listStyle: undefined })
    expect(findOrderedList(orderedList)).toHaveClassName('decimal')

    orderedList = doShallowList({ listStyle: 'upperAlpha' })
    expect(findOrderedList(orderedList)).toHaveClassName('upperAlpha')
  })

  it('passes additional attributes to ol element', () => {
    const orderedList = doShallowList({ id: 'the-list', tabindex: 1 })

    expect(findOrderedList(orderedList)).toHaveProp('id', 'the-list')
    expect(findOrderedList(orderedList)).toHaveProp('tabindex', 1)
  })

  it('does not allow custom CSS', () => {
    const orderedList = doShallowList({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(findOrderedList(orderedList)).not.toHaveProp('className', 'my-custom-class')
    expect(findOrderedList(orderedList)).not.toHaveProp('style')
  })
})
