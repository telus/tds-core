import React from 'react'
import { shallow, mount, render } from 'enzyme'

import ContentCarousel from '../ContentCarousel'
import Item from '../Item/Item'
import Image from '../../Image'

describe('ContentCarousel', () => {
  const doShallow = (props = {}) => shallow(<ContentCarousel {...props}><Item picture={<Image src="image-example.jpg" />}><p data-testid="childCheck">Hi!</p></Item></ContentCarousel>)
  const doMount = (props = {}) => mount(<ContentCarousel  {...props}><Item picture={<Image src="image-example.jpg" />}><p data-testid="childCheck">Hi!</p></Item></ContentCarousel>)


  it('renders empty', () => {
    const contentCarousel = render(<ContentCarousel />)

    expect(contentCarousel).toMatchSnapshot()
  })

  it('loads children', () => {
    const contentCarousel = doMount()
    // console.log(contentCarousel.find('[data-testid="itemContainer"]').children().find('ul').render().find('[data-testid="childCheck"]'))
    expect(contentCarousel.find('[data-testid="itemContainer"]').children().find('ul').html()).toEqual(true)
    expect(contentCarousel.find('[data-testid="itemContainer"]')).toMatchSnapshot()
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
