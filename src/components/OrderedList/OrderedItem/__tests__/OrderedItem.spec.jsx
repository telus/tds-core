import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import OrderedItem from '../OrderedItem'

describe('OrderedItem', () => {
  const defaultChildren = 'Some content'
  const doShallow = (props = {}, children = defaultChildren) => (
    shallow(<OrderedItem {...props}>{children}</OrderedItem>)
  )

  it('<OrderedItem />', () => {
    const item = doShallow()

    expect(toJson(item)).toMatchSnapshot()
  })

  it('renders an HTML li tag', () => {
    const item = doShallow()

    expect(item).toHaveTagName('li')
  })

  it('passes additional attributes to the list item', () => {
    const item = doShallow({ id: 'the-item' })

    expect(item).toHaveProp('id', 'the-item')
  })

  it('does not allow custom CSS', () => {
    const item = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(item).not.toHaveProp('className', 'my-custom-class')
    expect(item).not.toHaveProp('style')
  })
})
