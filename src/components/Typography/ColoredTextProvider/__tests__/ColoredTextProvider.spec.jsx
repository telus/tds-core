import React from 'react'
import { mount } from 'enzyme'

import ColoredTextProvider from '../ColoredTextProvider'
import Paragraph from '../../Paragraph/Paragraph'
import Link from '../../../Link/Link'

describe('ColoredTextProvider', () => {
  it('allows text components to inherit their color', () => {
    const coloredText = mount(
      <ColoredTextProvider colorClassName="some-class-name">
        <Paragraph>
          Some content and a <Link href="fake.com">hyperlink</Link>
        </Paragraph>
      </ColoredTextProvider>
    )

    expect(coloredText.find('p')).toHaveClassName('inheritColor')
    expect(coloredText.find('a')).toHaveClassName('inheritColor')
  })
})
