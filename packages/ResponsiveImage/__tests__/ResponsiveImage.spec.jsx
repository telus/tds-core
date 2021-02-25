import React from 'react'
import { shallow, render } from 'enzyme'

import ResponsiveImage from '../ResponsiveImage'

describe('ResponsiveImage', () => {
  const testProps = {
    xlSrc: 'responsive-image/mountains_desktop.jpg',
    lgSrc: 'responsive-image/mountains_desktop.jpg',
    mdSrc: 'responsive-image/mountains_tablet.jpg',
    smSrc: 'responsive-image/mountains_mobile.jpg',
    xsSrc: 'responsive-image/mountains_mobile.jpg',
    fallbackSrc: 'responsive-image/mountains_desktop.jpg',
    alt: 'mountain background',
  }

  const doShallow = (newProps = {}) => shallow(<ResponsiveImage {...testProps} {...newProps} />)

  it('renders', () => {
    const responsiveImage = render(<ResponsiveImage {...testProps} />)

    expect(responsiveImage).toMatchSnapshot()
  })

  it('passes additional attributes to the element', () => {
    const responsiveImage = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(responsiveImage).toHaveProp('id', 'the-id')
    expect(responsiveImage).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const responsiveImage = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(responsiveImage).not.toHaveProp('className', 'my-custom-class')
    expect(responsiveImage).not.toHaveProp('style')
  })
})
