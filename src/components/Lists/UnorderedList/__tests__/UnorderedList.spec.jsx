import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import Text from '../../../Typography/Text/Text'
import UnorderedList from '../UnorderedList'

describe('<UnorderedList />', () => {
  const doRender = (overrides = {}) => render(
    <UnorderedList {...overrides}>
      <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>
      <UnorderedList.Item>Dolor sit amet</UnorderedList.Item>
    </UnorderedList>
  )

  const doShallowList = (overrides = {}) => shallow(
    <UnorderedList {...overrides}>
      <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>
      <UnorderedList.Item>Dolor sit amet</UnorderedList.Item>
    </UnorderedList>
  )

  const findUnorderedList = unorderedList => unorderedList.find('ul')

  const doShallowItem = (overrides = {}) => shallow(
    <UnorderedList.Item {...overrides}>Some content</UnorderedList.Item>
  )

  it('renders', () => {
    const unorderedList = doRender()

    expect(toJson(unorderedList)).toMatchSnapshot()
  })

  it('renders an HTML ul tag', () => {
    const unorderedList = doShallowList()

    expect(unorderedList).toHaveTagName('Text')
  })

  it('UnOrderList.Item renders an HTML li tag', () => {
    const unorderedListItem = doShallowItem()

    expect(unorderedListItem).toHaveTagName('li')
    expect(unorderedListItem).toContainReact(<Text>Some content</Text>)
  })

  it('can have a list style', () => {
    let unorderedList = doShallowList({ listStyle: undefined })
    expect(findUnorderedList(unorderedList)).toHaveClassName('circle')

    unorderedList = doShallowList({ listStyle: 'x' })
    expect(findUnorderedList(unorderedList)).toHaveClassName('x')
  })

  it('passes additional attributes to ul element', () => {
    const unorderedList = doShallowList({ id: 'the-list', tabindex: 1 })

    expect(findUnorderedList(unorderedList)).toHaveProp('id', 'the-list')
    expect(findUnorderedList(unorderedList)).toHaveProp('tabindex', 1)
  })

  it('does not allow custom CSS', () => {
    const unorderedList = doShallowList({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(findUnorderedList(unorderedList)).not.toHaveProp('className', 'my-custom-class')
    expect(findUnorderedList(unorderedList)).not.toHaveProp('style')
  })
})
