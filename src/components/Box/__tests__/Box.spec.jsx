import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import Box from '../Box'

describe('Box', () => {
  const defaultProps = {
    spacing: 'padding',
    vertical: 2,
  }

  const doShallow = (props = {}) =>
    shallow(
      <Box {...defaultProps} {...props}>
        Some content
      </Box>
    )

  const doRender = (props = {}) =>
    render(
      <Box {...defaultProps} {...props}>
        Some content
      </Box>
    )

  it('renders', () => {
    const box = doRender()

    expect(toJson(box)).toMatchSnapshot()
  })

  it('can have padding or margin', () => {
    let box = doShallow({ spacing: 'padding', all: 1 })
    expect(box).toHaveClassName('allPadding-1')

    box = doShallow({ spacing: 'margin', all: 1 })
    expect(box).toHaveClassName('allMargin-1')
  })

  it('can have vertical or horizontal spacing', () => {
    let box = doShallow({ spacing: 'padding', vertical: 1 })
    expect(box).toHaveClassName('verticalPadding-1')

    box = doShallow({ spacing: 'padding', horizontal: 1 })
    expect(box).toHaveClassName('horizontalPadding-1')
  })

  it('can have horizontal and vertical spacing of different scales', () => {
    const box = doShallow({ spacing: 'padding', vertical: 1, horizontal: 2 })

    expect(box).toHaveClassName('verticalPadding-1 horizontalPadding-2')
  })

  it('can have directional spacing', () => {
    let box = doShallow({ spacing: 'padding', top: 1 })
    expect(box).toHaveClassName('topPadding-1')

    box = doShallow({ spacing: 'padding', top: 1, right: 2 })
    expect(box).toHaveClassName('topPadding-1 rightPadding-2')

    box = doShallow({ spacing: 'padding', top: 1, right: 2, bottom: 3 })
    expect(box).toHaveClassName('topPadding-1 rightPadding-2 bottomPadding-3')

    box = doShallow({ spacing: 'padding', top: 1, right: 2, bottom: 3, left: 4 })
    expect(box).toHaveClassName('topPadding-1 rightPadding-2 bottomPadding-3 leftPadding-4')
  })

  it('can be either inline or block', () => {
    let box = doShallow()
    expect(box).toHaveTagName('div')

    box = doShallow({ inline: true })
    expect(box).toHaveTagName('span')
  })

  it('will add additional arbitrary class names', () => {
    const box = doShallow({ spacing: 'margin', right: 3, dangerouslyAddClassName: 'a-class' })

    expect(box).toHaveClassName('rightMargin-3 a-class')
  })

  it('passes additional attributes to the element', () => {
    const box = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(box).toHaveProp('id', 'the-id')
    expect(box).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const box = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(box).not.toHaveProp('className', 'my-custom-class')
    expect(box).not.toHaveProp('style')
  })
})
