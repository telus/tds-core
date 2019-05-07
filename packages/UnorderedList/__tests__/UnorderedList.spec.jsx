import React from 'react'
import { shallow, mount, render } from 'enzyme'

import UnorderedList from '../UnorderedList'

describe('<UnorderedList />', () => {
  const doRender = (overrides = {}) =>
    render(
      <UnorderedList {...overrides}>
        <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>
        {undefined && <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>}
        <UnorderedList.Item>Dolor sit amet</UnorderedList.Item>
      </UnorderedList>
    )

  const doShallow = (overrides = {}) =>
    shallow(
      <UnorderedList {...overrides}>
        <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>
        {undefined && <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>}
        <UnorderedList.Item>Dolor sit amet</UnorderedList.Item>
      </UnorderedList>
    )

  const doMount = (overrides = {}) =>
    mount(
      <UnorderedList {...overrides}>
        <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>
        {undefined && <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>}
        <UnorderedList.Item>Dolor sit amet</UnorderedList.Item>
      </UnorderedList>
    )

  it('renders', () => {
    const unorderedList = doRender()

    expect(unorderedList).toMatchSnapshot()
  })

  it('renders an HTML ul tag', () => {
    const unorderedList = doMount()

    expect(unorderedList).toContainExactlyOneMatchingElement('ul')
  })

  it('UnorderedList.Item renders an HTML li tag', () => {
    const unorderedListItem = mount(<UnorderedList.Item>Some content</UnorderedList.Item>)

    expect(unorderedListItem).toContainExactlyOneMatchingElement('li')
  })

  it('can have a list style', () => {
    let unorderedList = doMount({ listStyle: undefined })
    expect(unorderedList).toMatchSnapshot()

    unorderedList = doMount({ listStyle: 'x' })
    expect(unorderedList).toMatchSnapshot()
  })

  it('passes additional attributes to ul element', () => {
    const unorderedList = doShallow({ id: 'the-list', 'data-some-thing': 'some value' })

    expect(unorderedList).toHaveProp('id', 'the-list')
    expect(unorderedList).toHaveProp('data-some-thing', 'some value')
  })

  it('does not allow custom CSS', () => {
    const unorderedList = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(unorderedList).not.toHaveProp('className', 'my-custom-class')
    expect(unorderedList).not.toHaveProp('style')
  })

  it('renders a mixed list of items', () => {
    const unorderedList = shallow(
      <UnorderedList>
        <UnorderedList.Item itemStyle="checkmark">Lorem ipsum</UnorderedList.Item>
        <UnorderedList.Item itemStyle="x">Dolor sit amet</UnorderedList.Item>
      </UnorderedList>
    )

    expect(unorderedList).toMatchSnapshot()
  })
})
