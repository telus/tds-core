import React from 'react'
import { shallow } from 'enzyme'

import Responsive from '../Responsive'

describe('Responsive', () => {
  const doShallow = (props = {}) => shallow(<Responsive {...props}>This is children</Responsive>)

  it('renders', () => {
    const responsive = doShallow()

    expect(responsive).toMatchSnapshot()
  })

  it('does other things', () => {
    const responsive = doShallow()

    expect(responsive).toBePresent()
  })

  it('passes additional attributes to the element', () => {
    const responsive = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(responsive).toHaveProp('id', 'the-id')
    expect(responsive).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const responsive = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(responsive).not.toHaveProp('className', 'my-custom-class')
    expect(responsive).not.toHaveProp('style')
  })
})
