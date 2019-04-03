import React from 'react'
import { shallow, render } from 'enzyme'

import DisplayHeading from '../DisplayHeading'

describe('DisplayHeading', () => {
  const doShallow = (props = {}) => shallow(<DisplayHeading {...props}>Great Deals</DisplayHeading>)

  it('renders', () => {
    const heading = render(<DisplayHeading>The heading</DisplayHeading>)

    expect(heading).toMatchSnapshot()
  })

  it('can be inverted', () => {
    const heading = render(<DisplayHeading invert>The heading</DisplayHeading>)

    expect(heading).toMatchSnapshot()
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
