import React from 'react'
import { mount } from 'enzyme'

import Paragraph from '../../Paragraph/Paragraph'
import Link from '../../../Link/Link'
import Text from '../../Text/Text'
import ColoredTextProvider from '../ColoredTextProvider'

describe('ColoredTextProvider', () => {
  it('allows Paragraph to inherit its color', () => {
    const coloredText = mount(
      <ColoredTextProvider colorClassName="some-class-name">
        <Paragraph>
          Some content
        </Paragraph>
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
})
