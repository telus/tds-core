/* eslint no-console: "error" */
import React from 'react'
import { mount } from 'enzyme'

import Paragraph, { StyledParagraph } from '../../../../packages/Paragraph/Paragraph'
import Link from '../../../../packages/Link/Link'
import Text, { StyledText } from '../../../../packages/Text/Text'
import ColoredTextProvider from '../ColoredTextProvider'

describe('ColoredTextProvider', () => {
  it('allows Paragraph to inherit its color', () => {
    const coloredText = mount(
      <ColoredTextProvider colorClassName="some-class-name">
        <Paragraph>Some content</Paragraph>
      </ColoredTextProvider>
    )

    expect(coloredText.find(StyledParagraph)).toHaveProp('inheritColor', true)
  })

  it('allows Link to inherit its color', () => {
    const coloredText = mount(
      <ColoredTextProvider colorClassName="some-class-name">
        <Link href="http://fake.com">a hyperlink</Link>
      </ColoredTextProvider>
    )
    expect(coloredText.find('a')).toMatchSnapshot()
  })

  it('allows Text to inherit its color', () => {
    const coloredText = mount(
      <ColoredTextProvider colorClassName="some-class-name">
        <Text>Some inline content</Text>
      </ColoredTextProvider>
    )

    expect(coloredText.find(StyledText)).toHaveProp('inheritColor', true)
  })
})
