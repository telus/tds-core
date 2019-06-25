import React from 'react'
import { shallow, render, mount } from 'enzyme'

import HairlineDivider from '../HairlineDivider'

describe('HairlineDivider', () => {
  const doShallow = (props = {}) => shallow(<HairlineDivider {...props} />)

  it('renders horizontally', () => {
    const hairlineDivider = render(<HairlineDivider />)

    expect(hairlineDivider).toMatchSnapshot()
  })

  it('renders vertically', () => {
    const hairlineDivider = render(<HairlineDivider vertical />)

    expect(hairlineDivider).toMatchSnapshot()
  })

  it('is an HTMl hr element', () => {
    const hairlineDivider = doShallow()

    expect(hairlineDivider.render()[0].name).toEqual('hr')
  })

  it('can be horizontal or vertical', () => {
    let hairlineDivider = doShallow()
    expect(hairlineDivider.prop('vertical')).toEqual(false)

    hairlineDivider = doShallow({ vertical: true })
    expect(hairlineDivider.prop('vertical')).toEqual(true)
  })

  it('can have a gradient', () => {
    let hairlineDivider = doShallow()
    expect(hairlineDivider.prop('gradient')).toEqual(false)

    hairlineDivider = doShallow({ gradient: true })
    expect(hairlineDivider.prop('gradient')).toEqual(true)
  })

  it('renders when zoomed out on Chrome', () => {
    const hairlineDivider = mount(<HairlineDivider />)

    expect(hairlineDivider).toHaveStyleRule('transform', 'rotate(-0.00001deg)')
  })

  it('passes additional attributes to the element', () => {
    const hairlineDivider = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(hairlineDivider).toHaveProp('id', 'the-id')
    expect(hairlineDivider).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const hairlineDivider = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(hairlineDivider).not.toHaveProp('className', 'my-custom-class')
    expect(hairlineDivider).not.toHaveProp('style')
  })
})
