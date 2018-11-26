import React from 'react'
import { mount, render } from 'enzyme'

import Heading from '../Heading'

describe('Heading', () => {
  const defaultProps = {
    level: 'h1',
  }

  const doMount = (overrides = {}) => {
    const heading = mount(
      <Heading {...defaultProps} {...overrides}>
        The content
      </Heading>
    )
    return heading.find(heading.props().tag || heading.props().level)
  }

  it('renders', () => {
    const heading = render(<Heading level="h2">The heading</Heading>)

    expect(heading).toMatchSnapshot()
  })

  it('renders text', () => {
    const heading = doMount()

    expect(heading).toHaveText('The content')
  })

  it('renders a heading in the specified level', () => {
    const heading = doMount({ level: 'h3' })

    expect(heading).toHaveDisplayName('h3')
  })

  it('renders a heading in the specified level and specified tag, when level and tag are different', () => {
    const heading = doMount({ level: 'h4', tag: 'h3' })

    expect(heading).toHaveClassName('h4')
    expect(heading).toHaveDisplayName('h3')
  })

  it('renders a heading in the same tag as level if tag is not specified', () => {
    const heading = doMount({ level: 'h4' })

    expect(heading).toHaveDisplayName('h4')
  })

  describe('colour', () => {
    it('can be inverted', () => {
      const heading = doMount({ invert: true })

      expect(heading).toHaveClassName('inverted')
    })

    it('is secondary for h1 and h2', () => {
      let heading = doMount({ level: 'h1' })
      expect(heading).toHaveClassName('secondary')

      heading = doMount({ level: 'h2' })
      expect(heading).toHaveClassName('secondary')
    })

    it('is default for h3 and h4', () => {
      let heading = doMount({ level: 'h3' })
      expect(heading).toHaveClassName('default')

      heading = doMount({ level: 'h4' })
      expect(heading).toHaveClassName('default')
    })
  })

  it('passes additional attributes to heading element', () => {
    const heading = doMount({ id: 'the-heading', tabIndex: 1 })

    expect(heading).toHaveProp('id', 'the-heading')
    expect(heading).toHaveProp('tabIndex', 1)
  })

  it('does not allow custom CSS', () => {
    const heading = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(heading).not.toHaveProp('className', 'my-custom-class')
    expect(heading).not.toHaveProp('style')
  })
})
