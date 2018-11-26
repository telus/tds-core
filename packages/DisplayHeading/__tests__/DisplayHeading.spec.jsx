import React from 'react'
import { shallow, render } from 'enzyme'

import DisplayHeading from '../DisplayHeading'

describe('DisplayHeading', () => {
  const doShallow = (props = {}) => {
    const heading = shallow(<DisplayHeading {...props}>Great Deals</DisplayHeading>)

    return heading.find('h1')
  }

  it('renders', () => {
    const heading = render(<DisplayHeading>The heading</DisplayHeading>)

    expect(heading).toMatchSnapshot()
  })

  it('renders an h1', () => {
    const displayHeading = doShallow()

    expect(displayHeading).toHaveDisplayName('h1')
  })

  it('can be inverted', () => {
    let displayHeading = doShallow({ invert: true })
    expect(displayHeading).toHaveClassName('inverted')

    displayHeading = doShallow()
    expect(displayHeading).toHaveClassName('default')
  })

  it('passes additional attributes to h1 element', () => {
    const displayHeading = doShallow({ id: 'the-heading', tabIndex: 1 })

    expect(displayHeading).toHaveProp('id', 'the-heading')
    expect(displayHeading).toHaveProp('tabIndex', 1)
  })

  it('does not allow custom CSS', () => {
    const displayHeading = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(displayHeading).not.toHaveProp('className', 'my-custom-class')
    expect(displayHeading).not.toHaveProp('style')
  })
})
