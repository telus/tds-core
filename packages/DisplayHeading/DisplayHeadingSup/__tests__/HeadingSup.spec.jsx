import React from 'react'
import { shallow } from 'enzyme'

import DisplayHeadingSup from '../DisplayHeadingSup'

describe('DisplayHeadingSup', () => {
  const doShallow = props => shallow(<DisplayHeadingSup {...props}>Some content</DisplayHeadingSup>)

  it('renders', () => {
    const displayHeadingSup = doShallow()

    expect(displayHeadingSup).toMatchSnapshot()
  })

  it('renders an HTML sub tag', () => {
    const displayHeadingSup = doShallow()

    expect(displayHeadingSup).toHaveDisplayName('sup')
  })

  it('passes additional attributes to the sup element', () => {
    const displayHeadingSup = doShallow({ id: 'the-sup-text' })

    expect(displayHeadingSup).toHaveProp('id', 'the-sup-text')
  })

  it('does not allow custom CSS', () => {
    const displayHeadingSup = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(displayHeadingSup).not.toHaveProp('className', 'my-custom-class')
    expect(displayHeadingSup).not.toHaveProp('style')
  })
})
