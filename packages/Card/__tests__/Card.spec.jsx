import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Card from '../Card'

describe('<Card />', () => {
  const doShallow = (props = {}) => shallow(<Card {...props}>Some content</Card>)
  const doMount = (props = {}) => mount(<Card {...props}>Some content</Card>)

  it('renders', () => {
    const card = render(<Card>Children</Card>)

    expect(card).toMatchSnapshot()
  })

  it('can be presented as one of the allowed variants', () => {
    let card = doMount()
    expect(card).toMatchSnapshot()

    card = doMount({ variant: 'default' })
    expect(card).toMatchSnapshot()

    card = doMount({ variant: 'branded' })
    expect(card).toMatchSnapshot()

    card = doMount({ variant: 'alternative' })
    expect(card).toMatchSnapshot()

    card = doMount({ variant: 'defaultWithBorder' })
    expect(card).toMatchSnapshot()

    card = doMount({ variant: 'defaultOnlyBorder' })
    expect(card).toMatchSnapshot()
  })

  it('renders with full height', () => {
    const card = mount(<Card fullHeight>Children</Card>)

    expect(card).toHaveStyleRule('height', '100%')
  })

  it('passes additional attributes to the input element', () => {
    const card = doShallow({ role: 'some-role', 'data-some-value': 'some value' })

    expect(card).toHaveProp('role', 'some-role')
    expect(card).toHaveProp('data-some-value', 'some value')
  })

  it('does not allow custom CSS', () => {
    const card = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(card).not.toHaveProp('className', 'my-custom-class')
    expect(card).not.toHaveProp('style')
  })

  describe('spacing', () => {
    it('renders default spacing', () => {
      const card = doMount({ spacing: 'default' })
      expect(card).toMatchSnapshot()
    })

    it('renders narrow spacing', () => {
      const card = doMount({ spacing: 'narrow' })
      expect(card).toMatchSnapshot()
    })

    it('renders compact spacing', () => {
      const card = doMount({ spacing: 'compact' })
      expect(card).toMatchSnapshot()
    })

    it('renders intermediate spacing', () => {
      const card = doMount({ spacing: 'intermediate' })
      expect(card).toMatchSnapshot()
    })
  })

  describe('full bleed image', () => {
    it('renders without an image', () => {
      const card = doMount()
      expect(card).toMatchSnapshot()
    })

    it('renders with an image', () => {
      const card = doMount({
        fullBleedImage: {
          src: 'image-example.jpg',
          width: 200,
          height: 200,
          alt: 'image',
          position: 'top',
        },
      })
      expect(card).toMatchSnapshot()
    })

    it('renders with responsive image props', () => {
      const card = doMount({
        fullBleedImage: {
          src: 'image-example.jpg',
          width: 200,
          height: 200,
          alt: 'image',
          position: { xs: 'top', md: 'bottom' },
        },
      })
      expect(card).toMatchSnapshot()
    })
  })
})
