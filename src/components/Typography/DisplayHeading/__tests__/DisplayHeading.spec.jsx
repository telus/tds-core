import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import DisplayHeading from '../DisplayHeading'

describe('DisplayHeading', () => {
  const doShallow = ({ ...props }) => shallow(
    <DisplayHeading {...props}>Great Deals</DisplayHeading>
  )

  it('renders', () => {
    const heading = doShallow()

    expect(toJson(heading)).toMatchSnapshot()
  })

  it('renders an h1', () => {
    const displayHeading = doShallow()

    expect(displayHeading).toHaveTagName('h1')
  })

  it('can be inverted', () => {
    let displayHeading = doShallow({ invert: true })
    expect(displayHeading).toHaveClassName('inverted')

    displayHeading = doShallow()
    expect(displayHeading).toHaveClassName('default')
  })

  it('passes additional attributes to h1 element', () => {
    const displayHeading = doShallow({ id: 'the-heading', tabindex: 1 })

    expect(displayHeading).toHaveProp('id', 'the-heading')
    expect(displayHeading).toHaveProp('tabindex', 1)
  })

  it('does not allow custom CSS', () => {
    const displayHeading = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(displayHeading).not.toHaveProp('className', 'my-custom-class')
    expect(displayHeading).not.toHaveProp('style')
  })
})
