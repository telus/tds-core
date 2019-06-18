import React from 'react'
import { shallow, mount, render } from 'enzyme'

import InputFeedback from '../InputFeedback'

describe('InputFeedback', () => {
  const defaultChildren = 'Some feedback text.'
  const doShallow = (props = {}, children = defaultChildren) =>
    shallow(<InputFeedback {...props}>{children}</InputFeedback>)

  const doMount = (props = {}, children = defaultChildren) => {
    const inputFeedback = mount(<InputFeedback {...props}>{children}</InputFeedback>)

    return inputFeedback.find('div')
  }

  it('renders', () => {
    const inputFeedback = render(<InputFeedback>Some inputFeedback text.</InputFeedback>)

    expect(inputFeedback).toMatchSnapshot()
  })

  it('can have a feedback state', () => {
    let inputFeedback = doMount()
    expect(inputFeedback).toMatchSnapshot()

    inputFeedback = doMount({ feedback: 'success' })
    expect(inputFeedback).toMatchSnapshot()
  })

  it('passes additional attributes to the element', () => {
    const inputFeedback = doShallow({ id: 'the-inputFeedback' })

    expect(inputFeedback).toHaveProp('id', 'the-inputFeedback')
  })

  it('sets role to alert on error', () => {
    const inputFeedback = doShallow({ feedback: 'error' })

    expect(inputFeedback).toHaveProp('role', 'alert')
  })

  it('does not allow custom CSS', () => {
    const inputFeedback = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(inputFeedback).not.toHaveProp('className', 'my-custom-class')
    expect(inputFeedback).not.toHaveProp('style')
  })
})
