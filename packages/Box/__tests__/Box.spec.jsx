import React from 'react'
import { shallow, mount } from 'enzyme'

import Box from '../Box'

describe('Box', () => {
  const defaultProps = { between: 3 }
  const doMount = (props = {}) => {
    const box = mount(
      <Box {...defaultProps} {...props}>
        Some content
      </Box>
    )
    return {
      box,
      styledComponent: box.find('StyledComponent'),
    }
  }
  const doShallow = (props = {}) => {
    return shallow(
      <Box {...defaultProps} {...props}>
        Some content
      </Box>
    )
  }

  it('renders', () => {
    const box = doMount()

    expect(box).toMatchSnapshot()
  })

  it('can render as a specified HTML element', () => {
    const box = doShallow({ tag: 'ul' })
    expect(box.props().as).toBe('ul')
  })

  it('can apply bottom margin', () => {
    const { styledComponent } = doMount({ below: 2 })
    expect(styledComponent).toHaveStyleRule('margin-bottom', '0.5rem')
  })

  describe('insets', () => {
    it('can be equal on all sides', () => {
      const { styledComponent } = doMount({ inset: 3 })

      expect(styledComponent).toHaveStyleRule('padding-top', '1rem')
      expect(styledComponent).toHaveStyleRule('padding-bottom', '1rem')
      expect(styledComponent).toHaveStyleRule('padding-left', '1rem')
      expect(styledComponent).toHaveStyleRule('padding-right', '1rem')
    })

    it('can be either vertical or horizonal', () => {
      let { styledComponent } = doMount({ vertical: 1 })
      expect(styledComponent).toHaveStyleRule('padding-top', '0.25rem')
      expect(styledComponent).toHaveStyleRule('padding-bottom', '0.25rem')

      styledComponent = doMount({ horizontal: 1 }).styledComponent
      expect(styledComponent).toHaveStyleRule('padding-left', '0.25rem')
      expect(styledComponent).toHaveStyleRule('padding-right', '0.25rem')

      styledComponent = doMount({ vertical: 2, horizontal: 3 }).styledComponent
      expect(styledComponent).toHaveStyleRule('padding-top', '0.5rem')
      expect(styledComponent).toHaveStyleRule('padding-bottom', '0.5rem')
      expect(styledComponent).toHaveStyleRule('padding-left', '1rem')
      expect(styledComponent).toHaveStyleRule('padding-right', '1rem')
    })
  })

  describe('between', () => {
    it('arranges the children horizontally or vertically be either inline or block', () => {
      let { styledComponent } = doMount()
      expect(styledComponent).toHaveStyleRule('display', 'flex')
      expect(styledComponent).toHaveStyleRule('flex-direction', 'column')

      styledComponent = doMount({ inline: true }).styledComponent
      expect(styledComponent).toHaveStyleRule('display', 'flex')
      expect(styledComponent).toHaveStyleRule('flex-direction', 'row')
    })

    it('separates children by equal margins in a stack', () => {
      const { styledComponent } = doMount({ between: 2 })

      expect(styledComponent).toHaveStyleRule('margin-bottom', '0.5rem', {
        modifier: '> *:not(:last-child)',
      })
    })

    it('separates children by equal margins inline', () => {
      const { styledComponent } = doMount({ between: 2, inline: true })

      expect(styledComponent).toHaveStyleRule('margin-right', '0.5rem', {
        modifier: '> *:not(:last-child)',
      })
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
