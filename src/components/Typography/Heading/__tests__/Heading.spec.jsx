import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Heading from '../Heading'

describe('Heading', () => {
  const doShallow = (overrides = {}) => shallow(
    <Heading {...overrides}>Go home</Heading>
  )

  it('renders', () => {
    const heading = doShallow()

    expect(toJson(heading)).toMatchSnapshot()
  })

  it('renders text', () => {
    const heading = doShallow()

    expect(heading).toHaveText('Go home')
  })

  it('renders a heading in four levels', () => {
    let heading = doShallow({ level: 'h1' })
    expect(heading).toHaveTagName('h1')

    heading = doShallow({ level: 'h2' })
    expect(heading).toHaveTagName('h2')

    heading = doShallow({ level: 'h3' })
    expect(heading).toHaveTagName('h3')

    heading = doShallow({ level: 'h4' })
    expect(heading).toHaveTagName('h4')
  })

  it('has appropriate colour', () => {
    let heading = doShallow({ invert: true })
    expect(heading).toHaveClassName('inverted')

    heading = doShallow({ level: 'h1' })
    expect(heading).toHaveClassName('secondary')

    heading = doShallow({ level: 'h2' })
    expect(heading).toHaveClassName('secondary')

    heading = doShallow({ level: 'h3' })
    expect(heading).toHaveClassName('default')

    heading = doShallow({ level: 'h4' })
    expect(heading).toHaveClassName('default')
  })

  it('passes additional attributes to heading element', () => {
    const heading = doShallow({ id: 'the-heading', tabindex: 1 })

    expect(heading).toHaveProp('id', 'the-heading')
    expect(heading).toHaveProp('tabindex', 1)
  })

  it('does not allow custom CSS', () => {
    const heading = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(heading).not.toHaveProp('className', 'my-custom-class')
    expect(heading).not.toHaveProp('style')
  })
})
