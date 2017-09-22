import React from 'react'
import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'

import COMPONENT from '../COMPONENT'

describe('COMPONENT', () => {
  const doShallow = (props = {}) => shallow(<COMPONENT {...props} />)

  it('does things', () => {
    const component = doShallow()

    expect(component).toBePresent()
  })

  it('passes additional attributes to the element', () => {
    const component = doShallow({ id: 'the-element', role: 'button' })

    expect(component).toHaveProp('id', 'the-element')
    expect(component).toHaveProp('role', 'button')
  })

  it('does not allow custom CSS', () => {
    const component = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(component).not.toHaveProp('className', 'my-custom-class')
    expect(component).not.toHaveProp('style')
  })
})
