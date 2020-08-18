import React from 'react'
import { shallow, mount } from 'enzyme'

import Box from '../Box'

describe('Box', () => {
  const defaultProps = { between: 3 }
  const doShallow = (props = {}) => {
    return shallow(
      <Box {...defaultProps} {...props}>
        Some content
      </Box>
    )
  }
  const doMount = (props = {}) => {
    return mount(
      <Box {...defaultProps} {...props}>
        Some content
      </Box>
    )
  }

  it('renders', () => {
    const box = doShallow()

    expect(box).toMatchSnapshot()
  })

  it('can render as a specified HTML element', () => {
    const box = doShallow({ tag: 'ul' })

    expect(box.props().tag).toEqual('ul')
  })

  it('can apply bottom margin', () => {
    const box = doMount({ below: 2 })

    expect(box).toMatchSnapshot()
  })

  describe('insets', () => {
    it('can be equal on all sides', () => {
      const box = doMount({ inset: 3 })

      expect(box).toMatchSnapshot()
    })

    it('can be either vertical or horizonal', () => {
      let box = doMount({ vertical: 1 })
      expect(box).toMatchSnapshot()

      box = doMount({ horizontal: 1 })
      expect(box).toMatchSnapshot()

      box = doMount({ vertical: 2, horizontal: 3 })
      expect(box).toMatchSnapshot()
    })

    it('can handle responsive horizontal and vertical', () => {
      let box = doMount({ vertical: { xs: 1, md: 4 } })
      expect(box).toMatchSnapshot()

      box = doMount({ horizontal: { xs: 1, md: 4 } })
      expect(box).toMatchSnapshot()

      box = doMount({ vertical: { xs: 1, md: 4 }, horizontal: { xs: 3, lg: 8 } })
      expect(box).toMatchSnapshot()
    })
  })

  describe('between', () => {
    it('arranges the children horizontally or vertically be either inline or block', () => {
      let box = doMount()
      expect(box).toMatchSnapshot()

      box = doMount({ inline: true })
      expect(box).toMatchSnapshot()
    })

    it('separates children by equal margins in a stack', () => {
      const box = doMount({ between: 2 })

      expect(box).toMatchSnapshot()
    })

    it('separates children by equal margins inline', () => {
      const box = doMount({ between: 2, inline: true })

      expect(box).toMatchSnapshot()
    })

    it('applies space-between', () => {
      const box = doMount({ between: 'space-between' })

      expect(box).toMatchSnapshot()
    })

    it('can handle responsive props', () => {
      const box = doMount({ between: { xs: 4, md: 8 }, inline: { xs: false, md: true } })

      expect(box).toMatchSnapshot()
    })

    it('can handle a between={0} prop', () => {
      let box = doMount({ between: 0 })
      expect(box).toMatchSnapshot()

      box = doMount({ between: 0, inline: true })
      expect(box).toMatchSnapshot()
    })
  })

  it('passes additional attributes to the wrapping element', () => {
    const box = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(box).toHaveProp('id', 'the-id')
    expect(box).toHaveProp('data-some-attr', 'some value')
  })

  it('will add additional arbitrary class names', () => {
    const box = doShallow({ className: 'a-class' })

    expect(box).toHaveClassName('a-class')
  })
})
