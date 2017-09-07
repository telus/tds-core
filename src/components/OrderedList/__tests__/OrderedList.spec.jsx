import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import OrderedList from '../OrderedList'

describe('<OrderedList />', () => {
  const defaultChildren = '<li>One</li><li>Two</li>'
  const doShallow = (props = {}, children = defaultChildren) => (
    shallow(<OrderedList {...props}>{children}</OrderedList>)
  )

  it('renders', () => {
    const orderedList = doShallow()

    expect(toJson(orderedList)).toMatchSnapshot()
  })

  it('renders an HTML ul tag', () => {
    const orderedList = doShallow()

    expect(orderedList).toHaveTagName('ol')
  })

  it('can have a variant', () => {
    let orderedList = doShallow({ variant: undefined })
    expect(orderedList).toHaveClassName('number')

    orderedList = doShallow({ variant: 'capital' })
    expect(orderedList).toHaveClassName('capital')
  })


  it('can be sized', () => {
    let orderedList = doShallow()
    expect(orderedList).toHaveClassName('medium')

    orderedList = doShallow({ size: 'large' })
    expect(orderedList).toHaveClassName('large')
  })
})
