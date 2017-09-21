import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import Helper from '../Helper'

describe('Helper', () => {
  const defaultChildren = 'Some helper text.'
  const doShallow = (props = {}, children = defaultChildren) => (
    shallow(<Helper {...props}>{children}</Helper>)
  )
  const doRender = (props = {}, children = defaultChildren) => (
    render(<Helper {...props}>{children}</Helper>)
  )

  it('renders', () => {
    const helper = doRender()

    expect(toJson(helper)).toMatchSnapshot()
  })

  it('can have a feedback state', () => {
    let helper = doShallow()
    expect(helper).toHaveClassName('default')

    helper = doShallow({ feedback: 'success' })
    expect(helper).toHaveClassName('success')
  })

  it('passes additional attributes to the element', () => {
    const helper = doShallow({ id: 'the-helper', role: 'alert' })

    expect(helper).toHaveProp('id', 'the-helper')
    expect(helper).toHaveProp('role', 'alert')
  })

  it('does not allow custom CSS', () => {
    const helper = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(helper).not.toHaveProp('className', 'my-custom-class')
    expect(helper).not.toHaveProp('style')
  })
})
