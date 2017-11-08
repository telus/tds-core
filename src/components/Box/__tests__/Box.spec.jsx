import React from 'react'
import { shallow } from 'enzyme'

import FlexBox from '../../Flexbox/Flexbox'
import Box from '../Box'

describe('Box', () => {
  const defaultProps = { between: 3 }
  const doShallow = (props = {}) =>
    shallow(
      <Box {...defaultProps} {...props}>
        Some content
      </Box>
    )

  it('renders', () => {
    const box = doShallow()

    expect(box).toMatchSnapshot()
  })

  it('can be either inline or block', () => {
    let box = doShallow()
    expect(box).toHaveTagName('div')

    box = doShallow({ inline: true })
    expect(box).toHaveClassName('betweenRight betweenRightMargin-3')
  })

  it('can render as other elements', () => {
    const box = doShallow({ tag: 'ul' })
    expect(box).toHaveTagName('ul')
  })

  it('can have vertical or horizontal spacing', () => {
    let box = doShallow({ vertical: 1 })
    expect(box).toHaveClassName('verticalPadding-1')

    box = doShallow({ horizontal: 1 })
    expect(box).toHaveClassName('horizontalPadding-1')
  })

  it('can have horizontal and vertical spacing of different scales', () => {
    const box = doShallow({ vertical: 1, horizontal: 2 })

    expect(box).toHaveClassName('verticalPadding-1 horizontalPadding-2')
  })

  it('can have inset padding', () => {
    const box = doShallow({ inset: 3 })

    expect(box).toHaveClassName('verticalPadding-3 horizontalPadding-3')
  })

  it('can have bottom margin', () => {
    const box = doShallow({ below: 2 })

    expect(box).toHaveClassName('bottomMargin-2')
  })

  it('can have right margin', () => {
    const box = doShallow({ right: 4 })

    expect(box).toHaveClassName('rightMargin-4')
  })

  it('can have between margin as a stack', () => {
    const box = doShallow({ between: 2 })

    expect(box).toHaveClassName('betweenBottomMargin-2')
  })

  it('can have between margin as inline', () => {
    const box = doShallow({ between: 2, inline: true })

    expect(box).toHaveClassName('betweenRight betweenRightMargin-2')
  })

  it('passes additional attributes to the element', () => {
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
