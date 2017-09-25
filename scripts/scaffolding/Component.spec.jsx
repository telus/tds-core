import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import COMPONENT from '../COMPONENT'

describe('COMPONENT', () => {
  const doShallow = (props = {}) => shallow(<COMPONENT {...props} />)

  it('renders', () => {
    const component = render(<COMPONENT />)

    expect(toJson(component)).toMatchSnapshot()
  })

  it('does other things', () => {
    const component = doShallow()

    expect(component).toBePresent()
  })

  it('passes additional attributes to the element', () => {
    const component = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(component).toHaveProp('id', 'the-id')
    expect(component).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const component = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(component).not.toHaveProp('className', 'my-custom-class')
    expect(component).not.toHaveProp('style')
  })
})
