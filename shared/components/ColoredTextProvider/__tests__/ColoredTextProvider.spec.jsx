import React from 'react'
import { mount, shallow } from 'enzyme'

import Paragraph from '../../../../packages/Paragraph/Paragraph'
import Link from '../../../../packages/Link/Link'
import Text from '../../../../packages/Text/Text'
import ColoredTextProvider from '../ColoredTextProvider'

describe('ColoredTextProvider', () => {
  it('allows Paragraph to inherit its color', () => {
    const coloredText = mount(
      <ColoredTextProvider colorClassName="some-class-name">
        <Paragraph>Some content</Paragraph>
      </ColoredTextProvider>
    )

    expect(coloredText.find('p')).toHaveClassName('inheritColor')
  })

  it('allows Link to inherit its color', () => {
    const coloredText = mount(
      <ColoredTextProvider colorClassName="some-class-name">
        <Link href="http://fake.com">a hyperlink</Link>
      </ColoredTextProvider>
    )

    expect(coloredText.find('a')).toHaveClassName('inheritColor')
  })

  it('allows Text to inherit its color', () => {
    const coloredText = mount(
      <ColoredTextProvider colorClassName="some-class-name">
        <Text>Some inline content</Text>
      </ColoredTextProvider>
    )

    expect(coloredText.find('span')).toHaveClassName('inheritColor')
  })

  describe('tag', () => {
    it('renders as a div by defualt', () => {
      const coloredText = shallow(
        <ColoredTextProvider colorClassName="some-class-name">
          <Text>Some inline content</Text>
        </ColoredTextProvider>
      )
      expect(coloredText.type()).toEqual('div')
    })

    it('renders as the tag prop', () => {
      const coloredText = shallow(
        <ColoredTextProvider colorClassName="some-class-name" tag="li">
          <Text>Some inline content</Text>
        </ColoredTextProvider>
      )
      expect(coloredText.type()).toEqual('li')
    })
  })
})
