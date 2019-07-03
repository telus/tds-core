import React from 'react'
import { shallow, render } from 'enzyme'
import * as typography from '@tds/shared-typography'

import Text, { StyledText } from '../Text'

describe('Text', () => {
  const doShallow = props => shallow(<Text {...props}>Some content</Text>)
  const doRender = props => render(<Text {...props}>Some content</Text>)

  it('renders', () => {
    const text = doRender()

    expect(text).toMatchSnapshot()
  })

  describe('StyledText', () => {
    const doShallowStyled = props => shallow(<StyledText {...props}>Some content</StyledText>)
    it('renders a span with display: block if specified', () => {
      let text = doShallowStyled()
      expect(text).not.toHaveStyleRule('display', typography.blockText.display)

      text = doShallowStyled({ block: true })
      expect(text).toHaveStyleRule('display', typography.blockText.display)
    })

    it('can be bold', () => {
      let text = doShallowStyled({ bold: false })
      expect(text).not.toHaveStyleRule('font-weight', typography.boldFont.fontWeight.toString())

      text = doShallowStyled({ bold: true })
      expect(text).toHaveStyleRule('font-weight', typography.boldFont.fontWeight.toString())
    })

    it('can be inverted', () => {
      let text = doShallowStyled()
      expect(text).not.toHaveStyleRule('color', typography.invertedColor.color)

      text = doShallowStyled({ invert: true })
      expect(text).toHaveStyleRule('color', typography.invertedColor.color)
    })

    it('can be sized', () => {
      let text = doShallowStyled({ size: 'medium' })
      expect(text).toHaveStyleRule('font-size', typography.medium.fontSize)

      text = doShallowStyled({ size: 'small' })
      expect(text).toHaveStyleRule('font-size', typography.small.fontSize)
    })

    it('passes additional attributes to the span element', () => {
      const text = doShallowStyled({ id: 'the-text' })

      expect(text).toHaveProp('id', 'the-text')
    })

    it('does not allow custom CSS', () => {
      const text = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

      expect(text).not.toHaveProp('className', 'my-custom-class')
      expect(text).not.toHaveProp('style')
    })
  })
})
