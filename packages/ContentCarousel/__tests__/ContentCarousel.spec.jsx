import React from 'react'
import { shallow, render } from 'enzyme'

import ContentCarousel from '../ContentCarousel'

describe('ContentCarousel', () => {
  const doShallow = (props = {}) => shallow(<ContentCarousel {...props} />)

  it('renders', () => {
    const contentCarousel = render(<ContentCarousel />)

    expect(contentCarousel).toMatchSnapshot()
  })

  it('does other things', () => {
    const contentCarousel = doShallow()

    expect(contentCarousel).toExist()
  })

  it('passes additional attributes to the element', () => {
    const contentCarousel = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(contentCarousel).toHaveProp('id', 'the-id')
    expect(contentCarousel).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const contentCarousel = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(contentCarousel).not.toHaveProp('className', 'my-custom-class')
    expect(contentCarousel).not.toHaveProp('style')
  })
})
