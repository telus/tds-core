import React from 'react'
import { mount } from 'enzyme'

import Box from '../Box'

import mockMatchMedia from '../../../__mocks__/matchMedia'

describe('Box', () => {
  const defaultProps = { between: 3 }
  const doMount = (props = {}) => {
    const box = mount(
      <Box {...defaultProps} {...props}>
        Some content
      </Box>
    )

    return box.find(box.props().tag)
  }

  beforeEach(() => {
    mockMatchMedia(575)
  })

  it('renders', () => {
    const box = doMount()

    expect(box).toMatchSnapshot()
  })

  it('can render as a specified HTML element', () => {
    const box = doMount({ tag: 'ul' })

    expect(box).toHaveTagName('ul')
  })

  it('can apply bottom margin', () => {
    const box = doMount({ below: 2 })

    expect(box).toHaveClassName('bottomMargin-2')
  })

  describe('insets', () => {
    it('can be equal on all sides', () => {
      const box = doMount({ inset: 3 })

      expect(box).toHaveClassName('verticalPadding-3 horizontalPadding-3')
    })

    it('can be either vertical or horizonal', () => {
      let box = doMount({ vertical: 1 })
      expect(box).toHaveClassName('verticalPadding-1')

      box = doMount({ horizontal: 1 })
      expect(box).toHaveClassName('horizontalPadding-1')

      box = doMount({ vertical: 2, horizontal: 3 })
      expect(box).toHaveClassName('verticalPadding-2 horizontalPadding-3')
    })
  })

  describe('between', () => {
    it('arranges the children horizontally or vertically be either inline or block', () => {
      let box = doMount()
      expect(box).toHaveClassName('stack')

      box = doMount({ inline: true })
      expect(box).toHaveClassName('inline')
    })

    it('separates children by equal margins in a stack', () => {
      const box = doMount({ between: 2 })

      expect(box).toHaveClassName('betweenBottomMargin-2')
    })

    it('separates children by equal margins inline', () => {
      const box = doMount({ between: 2, inline: true })

      expect(box).toHaveClassName('betweenRightMargin-2')
    })
  })

  describe('responsive spacing above medium viewport', () => {
    beforeEach(() => {
      mockMatchMedia(768)
    })

    it('applies greater insets', () => {
      let box = doMount({ inset: 2 })
      expect(box).toHaveClassName('verticalPaddingDesktop-2 horizontalPaddingDesktop-2')

      box = doMount({ vertical: 3, horizontal: 4 })
      expect(box).toHaveClassName('verticalPaddingDesktop-3 horizontalPaddingDesktop-4')
    })

    it('applies greater bottom margin', () => {
      const box = doMount({ below: 5 })

      expect(box).toHaveClassName('bottomMarginDesktop-5')
    })

    it('applies greater separation between children', () => {
      const box = doMount({ between: 6 })

      expect(box).toHaveClassName('betweenBottomMarginDesktop-6')
    })
  })

  it('passes additional attributes to the wrapping element', () => {
    const box = doMount({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(box).toHaveProp('id', 'the-id')
    expect(box).toHaveProp('data-some-attr', 'some value')
  })

  it('will add additional arbitrary class names', () => {
    const box = doMount({ dangerouslyAddClassName: 'a-class' })

    expect(box).toHaveClassName('a-class')
  })

  it('does not allow custom CSS', () => {
    const box = doMount({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(box).not.toHaveProp('className', 'my-custom-class')
    expect(box).not.toHaveProp('style')
  })
})
