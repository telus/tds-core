import React from 'react'
import { mount } from 'enzyme'

import Paragraph from '../../Paragraph/Paragraph'
import Link from '../../../Link/Link'
import Text from '../../Text/Text'
import ColoredTextProvider from '../ColoredTextProvider'

describe('ColoredTextProvider', () => {
  it('allows text components to inherit their color', () => {
    const coloredText = mount(
      <ColoredTextProvider colorClassName="some-class-name">
        <Paragraph>
          Some content and a <Link href="http://fake.com">hyperlink</Link>
          And also some <Text id="inline-text">inline text</Text>
        </Paragraph>
      </ColoredTextProvider>
    )

    expect(coloredText.find('p')).toHaveClassName('inheritColor')
    expect(coloredText.find('a')).toHaveClassName('inheritColor')
    expect(coloredText.find('#inline-text')).toHaveClassName('inheritColor')
  })
})
