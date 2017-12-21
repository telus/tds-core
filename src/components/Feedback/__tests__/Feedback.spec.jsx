import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Helper from '../Feedback'

describe('Helper', () => {
  const defaultChildren = 'Some helper text.'
  const doShallow = (props = {}, children = defaultChildren) =>
    shallow(<Helper {...props}>{children}</Helper>)

  const doMount = (props = {}, children = defaultChildren) => {
    const helper = mount(<Helper {...props}>{children}</Helper>)

    return helper.find('div')
  }

  it('renders', () => {
    const helper = render(<Helper>Some helper text.</Helper>)

    expect(helper).toMatchSnapshot()
  })

  it('can have a feedback state', () => {
    let helper = doMount()
    expect(helper).toHaveClassName('default')

    helper = doMount({ feedback: 'success' })
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
