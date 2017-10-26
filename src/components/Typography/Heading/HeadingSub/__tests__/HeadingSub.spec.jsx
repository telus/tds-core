import React from 'react'
import { shallow } from 'enzyme'


import HeadingSub from '../HeadingSub'

describe('HeadingSub', () => {
  const doShallow = props => (
    shallow(<HeadingSub {...props}>Some content</HeadingSub>)
  )

  it('renders', () => {
    const headingSub = doShallow()

    expect(headingSub).toMatchSnapshot()
  })

  it('renders an HTML sub tag', () => {
    const headingSub = doShallow()

    expect(headingSub).toHaveTagName('sub')
  })

  it('passes additional attributes to the sup element', () => {
    const headingSub = doShallow({ id: 'the-sub-text' })

    expect(headingSub).toHaveProp('id', 'the-sub-text')
  })

  it('does not allow custom CSS', () => {
    const headingSub = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(headingSub).not.toHaveProp('className', 'my-custom-class')
    expect(headingSub).not.toHaveProp('style')
  })
})
