import React from 'react'
import { shallow } from 'enzyme'


import TextSub from '../TextSub'

describe('TextSub', () => {
  const doShallow = props => (
    shallow(<TextSub {...props}>Some content</TextSub>)
  )

  it('renders', () => {
    const textSub = doShallow()

    expect(textSub).toMatchSnapshot()
  })

  it('renders an HTML sub tag', () => {
    const textSub = doShallow()

    expect(textSub).toHaveTagName('sub')
  })

  it('passes additional attributes to the sub element', () => {
    const textSub = doShallow({ id: 'the-sub-text' })

    expect(textSub).toHaveProp('id', 'the-sub-text')
  })

  it('does not allow custom CSS', () => {
    const textSub = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(textSub).not.toHaveProp('className', 'my-custom-class')
    expect(textSub).not.toHaveProp('style')
  })
})
