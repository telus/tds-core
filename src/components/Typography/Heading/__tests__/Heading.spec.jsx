import React from 'react'
import { shallow } from 'enzyme'

import Heading from '../Heading'

describe('Heading', () => {
  const defaultProps = {
    level: 'h1',
  }

  const doShallow = (overrides = {}) =>
    shallow(
      <Heading {...defaultProps} {...overrides}>
        Go home
      </Heading>
    )

  const doShallowResponsive = (overrides = {}) =>
    shallow(
      <Heading {...defaultProps} {...overrides}>
        Go home
      </Heading>
    )
      .dive()
      .dive()

  it('renders', () => {
    const responsiveHeading = doShallowResponsive()

    expect(responsiveHeading).toMatchSnapshot()
  })

  it('renders text', () => {
    const responsiveHeading = doShallowResponsive()

    expect(responsiveHeading).toHaveText('Go home')
  })

  it('renders a heading in four levels', () => {
    let responsiveHeading = doShallowResponsive({ level: 'h1' })
    expect(responsiveHeading).toHaveTagName('h1')

    responsiveHeading = doShallowResponsive({ level: 'h2' })
    expect(responsiveHeading).toHaveTagName('h2')

    let heading = doShallow({ level: 'h3' })
    expect(heading).toHaveTagName('h3')

    heading = doShallow({ level: 'h4' })
    expect(heading).toHaveTagName('h4')
  })

  it('has appropriate colour', () => {
    let responsiveHeading = doShallowResponsive({ invert: true })
    expect(responsiveHeading).toHaveClassName('inverted')

    responsiveHeading = doShallowResponsive({ level: 'h1' })
    expect(responsiveHeading).toHaveClassName('secondary')

    responsiveHeading = doShallowResponsive({ level: 'h2' })
    expect(responsiveHeading).toHaveClassName('secondary')

    let heading = doShallow({ level: 'h3' })
    expect(heading).toHaveClassName('default')

    heading = doShallow({ level: 'h4' })
    expect(heading).toHaveClassName('default')
  })

  it('passes additional attributes to heading element', () => {
    const responsiveHeading = doShallowResponsive({ id: 'the-heading', tabindex: 1 })

    expect(responsiveHeading).toHaveProp('id', 'the-heading')
    expect(responsiveHeading).toHaveProp('tabindex', 1)
  })

  it('does not allow custom CSS', () => {
    const responsiveHeading = doShallowResponsive({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(responsiveHeading).not.toHaveProp('className', 'my-custom-class')
    expect(responsiveHeading).not.toHaveProp('style')
  })
})
