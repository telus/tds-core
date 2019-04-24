import React from 'react'
import { shallow, render } from 'enzyme'

import UnorderedList from '../UnorderedList'

describe('<UnorderedList />', () => {
  const doRender = (overrides = {}) =>
    render(
      <UnorderedList {...overrides}>
        <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>
        {false && <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>}
        <UnorderedList.Item>Dolor sit amet</UnorderedList.Item>
      </UnorderedList>
    )

  const doShallow = (overrides = {}) =>
    shallow(
      <UnorderedList {...overrides}>
        <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>
        {false && <UnorderedList.Item>Lorem ipsum</UnorderedList.Item>}
        <UnorderedList.Item>Dolor sit amet</UnorderedList.Item>
      </UnorderedList>
    )

  it('renders', () => {
    const unorderedList = doRender()

    expect(unorderedList).toMatchSnapshot()
  })

  it('renders an HTML ul tag', () => {
    const unorderedList = doShallow()

    expect(unorderedList.dive()).toHaveDisplayName('ul')
  })

  it('UnorderedList.Item renders an HTML li tag', () => {
    const unorderedListItem = shallow(<UnorderedList.Item>Some content</UnorderedList.Item>)

    expect(unorderedListItem).toHaveDisplayName('li')
  })

  it('can have a list style', () => {
    let unorderedList = doShallow({ listStyle: undefined })
    expect(
      unorderedList
        .find(UnorderedList.Item)
        .at(0)
        .dive()
    ).toHaveClassName('circle')
    expect(
      unorderedList
        .find(UnorderedList.Item)
        .at(1)
        .dive()
    ).toHaveClassName('circle')

    unorderedList = doShallow({ listStyle: 'x' })
    expect(
      unorderedList
        .find(UnorderedList.Item)
        .at(0)
        .dive()
    ).toHaveClassName('x')
    expect(
      unorderedList
        .find(UnorderedList.Item)
        .at(1)
        .dive()
    ).toHaveClassName('x')
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
        <UnorderedList.Item listStyle="checkmark">Lorem ipsum</UnorderedList.Item>
        <UnorderedList.Item listStyle="x">Dolor sit amet</UnorderedList.Item>
      </UnorderedList>
    )

    expect(
      unorderedList
        .find(UnorderedList.Item)
        .at(0)
        .dive()
    ).toHaveClassName('checkmark')
    expect(
      unorderedList
        .find(UnorderedList.Item)
        .at(1)
        .dive()
    ).toHaveClassName('x')
  })
})
