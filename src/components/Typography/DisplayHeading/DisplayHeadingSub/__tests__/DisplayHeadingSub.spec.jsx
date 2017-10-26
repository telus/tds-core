import React from 'react'
import { shallow } from 'enzyme'


import DisplayHeadingSub from '../DisplayHeadingSub'

describe('DisplayHeadingSub', () => {
  const doShallow = props => (
    shallow(<DisplayHeadingSub {...props}>Some content</DisplayHeadingSub>)
  )

  it('renders', () => {
    const displayHeadingSub = doShallow()

    expect(displayHeadingSub).toMatchSnapshot()
  })

  it('renders an HTML sub tag', () => {
    const displayHeadingSub = doShallow()

    expect(displayHeadingSub).toHaveTagName('sub')
  })

  it('passes additional attributes to the sup element', () => {
    const displayHeadingSub = doShallow({ id: 'the-sub-text' })

    expect(displayHeadingSub).toHaveProp('id', 'the-sub-text')
  })

  it('does not allow custom CSS', () => {
    const displayHeadingSub = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(displayHeadingSub).not.toHaveProp('className', 'my-custom-class')
    expect(displayHeadingSub).not.toHaveProp('style')
  })
})
