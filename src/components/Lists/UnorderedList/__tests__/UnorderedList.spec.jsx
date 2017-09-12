import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import UnorderedList from '../UnorderedList'

describe('<UnorderedList />', () => {
  const defaultChildren = '<li>One</li><li>Two</li>'
  const doShallow = (props = {}, children = defaultChildren) => (
    shallow(<UnorderedList {...props}>{children}</UnorderedList>)
  )

  it('renders', () => {
    const unorderedList = doShallow()

    expect(toJson(unorderedList)).toMatchSnapshot()
  })

  it('renders an HTML ul tag', () => {
    const unorderedList = doShallow()

    expect(unorderedList).toHaveTagName('ul')
  })

  // it('can have a list style', () => {
  //   let unorderedList = doShallow({ listStyle: undefined })
  //   expect(unorderedList).toHaveClassName('bullet')
  //
  //   unorderedList = doShallow({ listStyle: 'checkmark' })
  //   expect(unorderedList).toHaveClassName('checkmark')
  // })
})
