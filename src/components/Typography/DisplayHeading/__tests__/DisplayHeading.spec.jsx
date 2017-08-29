import React from 'react'
import { shallow } from 'enzyme'

import DisplayHeading from '../DisplayHeading'

describe('DisplayHeading', () => {
  const doShallow = ({ ...props }) => shallow(
    <DisplayHeading {...props}>Great Deals</DisplayHeading>
  )

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
    const button = doShallow({ id: 'the-heading', tabindex: 1 })

    expect(button).toHaveProp('id', 'the-heading')
    expect(button).toHaveProp('tabindex', 1)
  })

  it('does not allow custom CSS', () => {
    const button = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(button).not.toHaveProp('className', 'my-custom-class')
    expect(button).not.toHaveProp('style')
  })
})
