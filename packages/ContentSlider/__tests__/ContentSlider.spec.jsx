import React from 'react'
import { shallow, render } from 'enzyme'

import ContentSlider from '../ContentSlider'

describe('ContentSlider', () => {
  const doShallow = (props = {}) => shallow(<ContentSlider {...props} />)

  it('renders', () => {
    const contentSlider = render(<ContentSlider />)

    expect(contentSlider).toMatchSnapshot()
  })

  it('does other things', () => {
    const contentSlider = doShallow()

    expect(contentSlider).toExist()
  })

  it('passes additional attributes to the element', () => {
    const contentSlider = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(contentSlider).toHaveProp('id', 'the-id')
    expect(contentSlider).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const contentSlider = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(contentSlider).not.toHaveProp('className', 'my-custom-class')
    expect(contentSlider).not.toHaveProp('style')
  })
})
