import React from 'react'
import { shallow, render } from 'enzyme'

import WaveDivider from '../WaveDivider'

describe('WaveDivider', () => {
  const doShallow = (props = {}) => shallow(<WaveDivider {...props} />)

  it('renders', () => {
    const waveDivider = render(<WaveDivider />)

    expect(waveDivider).toMatchSnapshot()
  })

  it('is an svg', () => {
    const waveDivider = doShallow()

    expect(waveDivider).toHaveDisplayName('svg')
  })

  it('passes additional attributes to the element', () => {
    const waveDivider = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(waveDivider).toHaveProp('id', 'the-id')
    expect(waveDivider).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const waveDivider = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(waveDivider).not.toHaveProp('className', 'my-custom-class')
    expect(waveDivider).not.toHaveProp('style')
  })
})
