import React from 'react'
import { shallow } from 'enzyme'

import Heading from '../Heading'

describe('Heading', () => {
  const doShallow = (overrides = {}) => shallow(
    <Heading {...overrides}>Go home</Heading>
  )

  it('renders text', () => {
    const heading = doShallow()

    expect(heading.text()).toEqual('Go home')
  })

  it('renders a heading in six sizes', () => {
    let heading = doShallow({ size: 'h1' })
    expect(heading).toHaveTagName('h1')

    heading = doShallow({ size: 'h2' })
    expect(heading).toHaveTagName('h2')

    heading = doShallow({ size: 'h3' })
    expect(heading).toHaveTagName('h3')

    heading = doShallow({ size: 'h4' })
    expect(heading).toHaveTagName('h4')

    // todo make h4 the lower limit and warn user
    heading = doShallow({ size: 'h5' })
    expect(heading).toHaveTagName('h5')

    heading = doShallow({ size: 'h6' })
    expect(heading).toHaveTagName('h6')
  })

  it.skip('can invert', () => {
    const heading = doShallow({ invert: true })

    expect(heading).toHaveProp('invert')
  })
})
