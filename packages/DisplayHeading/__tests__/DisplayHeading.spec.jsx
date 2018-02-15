import React from 'react'
import { mount, render } from 'enzyme'

import DisplayHeading from '../DisplayHeading'

import mockMatchMedia from '../../../config/jest/__mocks__/matchMedia'

describe('DisplayHeading', () => {
  const doMount = (props = {}) => {
    const heading = mount(<DisplayHeading {...props}>Great Deals</DisplayHeading>)

    return heading.find('h1')
  }

  it('renders', () => {
    const heading = render(<DisplayHeading>The heading</DisplayHeading>)

    expect(heading).toMatchSnapshot()
  })

  it('renders an h1', () => {
    const displayHeading = doMount()

    expect(displayHeading).toHaveTagName('h1')
  })

  it('can be inverted', () => {
    let displayHeading = doMount({ invert: true })
    expect(displayHeading).toHaveClassName('inverted')

    displayHeading = doMount()
    expect(displayHeading).toHaveClassName('default')
  })

  it('renders differently above the medium breakpoint', () => {
    mockMatchMedia(768)

    let heading = doMount()
    expect(heading).toHaveClassName('headingDesktop')

    mockMatchMedia(767)

    heading = doMount()
    expect(heading).toHaveClassName('heading')
  })

  it('passes additional attributes to h1 element', () => {
    const displayHeading = doMount({ id: 'the-heading', tabIndex: 1 })

    expect(displayHeading).toHaveProp('id', 'the-heading')
    expect(displayHeading).toHaveProp('tabIndex', 1)
  })

  it('does not allow custom CSS', () => {
    const displayHeading = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(displayHeading).not.toHaveProp('className', 'my-custom-class')
    expect(displayHeading).not.toHaveProp('style')
  })
})
