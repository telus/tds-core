import React from 'react'
import { shallow, render } from 'enzyme'

import Strong from '../Strong'

describe('Strong', () => {
  const doShallow = props => shallow(<Strong {...props}>Some content</Strong>)
  const doRender = props => render(<Strong {...props}>Some content</Strong>)

  it('renders', () => {
    const strong = doRender()

    expect(strong).toMatchSnapshot()
  })

  it('renders an HTML strong tag', () => {
    const strong = doRender()

    expect(strong.is('strong')).toEqual(true)
  })

  it('passes additional attributes to the strong element', () => {
    const strong = doShallow({ id: 'the-id' })

    expect(strong).toHaveProp('id', 'the-id')
  })

  it('does not allow custom CSS', () => {
    const strong = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(strong).not.toHaveProp('className', 'my-custom-class')
    expect(strong).not.toHaveProp('style')
  })
})
