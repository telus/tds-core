import React from 'react'
import { shallow, render, mount } from 'enzyme'

import OrderedList from '../OrderedList'

describe('<OrderedList />', () => {
  const doRender = (overrides = {}) =>
    render(
      <OrderedList {...overrides}>
        <OrderedList.Item>Lorem ipsum</OrderedList.Item>
        {false && <OrderedList.Item>Lorem ipsum</OrderedList.Item>}
        <OrderedList.Item>Dolor sit amet</OrderedList.Item>
      </OrderedList>
    )

  const doShallow = (overrides = {}) =>
    shallow(
      <OrderedList {...overrides}>
        <OrderedList.Item>Lorem ipsum</OrderedList.Item>
        {false && <OrderedList.Item>Lorem ipsum</OrderedList.Item>}
        <OrderedList.Item>Dolor sit amet</OrderedList.Item>
      </OrderedList>
    )

  const doMount = (overrides = {}) =>
    mount(
      <OrderedList {...overrides}>
        <OrderedList.Item>Lorem ipsum</OrderedList.Item>
        {false && <OrderedList.Item>Lorem ipsum</OrderedList.Item>}
        <OrderedList.Item>Dolor sit amet</OrderedList.Item>
      </OrderedList>
    )

  it('renders', () => {
    const orderedList = doRender()

    expect(orderedList).toMatchSnapshot()
  })

  it('OrderList renders an HTML ol tag', () => {
    const orderedList = doMount()

    expect(orderedList).toContainExactlyOneMatchingElement('ol')
  })

  it('OrderList.Item renders an HTML li tag', () => {
    const orderedListItem = mount(<OrderedList.Item>a list item</OrderedList.Item>)

    expect(orderedListItem).toContainExactlyOneMatchingElement('li')
  })

  it('can have a list style', () => {
    let orderedList = doRender({ listStyle: undefined })
    expect(orderedList).toMatchSnapshot()

    orderedList = doRender({ listStyle: 'upperAlpha' })
    expect(orderedList).toMatchSnapshot()
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
