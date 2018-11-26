import React from 'react'
import { shallow } from 'enzyme'

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

  it('renders', () => {
    const box = doShallow()

    expect(box).toMatchSnapshot()
  })

  it('can render as a specified HTML element', () => {
    const box = doShallow({ tag: 'ul' })

    expect(box).toHaveDisplayName('ul')
  })

  it('can apply bottom margin', () => {
    const box = doShallow({ below: 2 })

    expect(box).toHaveClassName('bottomMargin-2')
  })

  describe('insets', () => {
    it('can be equal on all sides', () => {
      const box = doShallow({ inset: 3 })

      expect(box).toHaveClassName('verticalPadding-3 horizontalPadding-3')
    })

    it('can be either vertical or horizonal', () => {
      let box = doShallow({ vertical: 1 })
      expect(box).toHaveClassName('verticalPadding-1')

      box = doShallow({ horizontal: 1 })
      expect(box).toHaveClassName('horizontalPadding-1')

      box = doShallow({ vertical: 2, horizontal: 3 })
      expect(box).toHaveClassName('verticalPadding-2 horizontalPadding-3')
    })
  })

  describe('between', () => {
    it('arranges the children horizontally or vertically be either inline or block', () => {
      let box = doShallow()
      expect(box).toHaveClassName('stack')

      box = doShallow({ inline: true })
      expect(box).toHaveClassName('inline')
    })

    it('separates children by equal margins in a stack', () => {
      const box = doShallow({ between: 2 })

      expect(box).toHaveClassName('betweenBottomMargin-2')
    })

    it('separates children by equal margins inline', () => {
      const box = doShallow({ between: 2, inline: true })

      expect(box).toHaveClassName('betweenRightMargin-2')
    })
  })

  it('passes additional attributes to the wrapping element', () => {
    const box = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(box).toHaveProp('id', 'the-id')
    expect(box).toHaveProp('data-some-attr', 'some value')
  })

  it('will add additional arbitrary class names', () => {
    const box = doShallow({ dangerouslyAddClassName: 'a-class' })

    expect(box).toHaveClassName('a-class')
  })

  it('does not allow custom CSS', () => {
    const box = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(box).not.toHaveProp('className', 'my-custom-class')
    expect(box).not.toHaveProp('style')
  })
})
