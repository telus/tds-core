import React from 'react'
import { shallow, mount, render } from 'enzyme'

import ContentCarousel from '../ContentCarousel'
import Item from '../Item/Item'
import Image from '../../Image'

describe('ContentCarousel', () => {
  const doShallow = (props = { copy: 'en' }) =>
    shallow(
      <ContentCarousel {...props}>
        <Item
          picture={<Image src="image-example.jpg" width={200} height={200} alt="Test picture" />}
        >
          <p data-testid="childCheck">Hi 2!</p>
        </Item>
      </ContentCarousel>
    )
  const doMount = (props = { copy: 'en' }) =>
    mount(
      <ContentCarousel {...props}>
        <Item
          picture={<Image src="image-example.jpg" width={200} height={200} alt="Test picture" />}
        >
          <p data-testid="childCheck">Hi 1!</p>
          <p data-testid="childCheck">Hi 2!</p>
        </Item>
      </ContentCarousel>
    )

  it('renders', () => {
    const contentCarousel = render(
      <ContentCarousel copy="en">
        <Item
          picture={<Image src="image-example.jpg" width={200} height={200} alt="Test picture" />}
        >
          <p data-testid="childCheck">Hi 2!</p>
        </Item>
      </ContentCarousel>
    )

    expect(contentCarousel).toMatchSnapshot()
  })

  it('populates the nav dots', () => {
    const contentCarousel = doMount()

    expect(contentCarousel.find('[data-testid="pageDot"]').children().length).toEqual(3)
    expect(contentCarousel.find('[data-testid="pageDot"]')).toMatchSnapshot()
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
