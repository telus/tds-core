import React from 'react'
import { mount } from 'enzyme'

import ColoredText from '../ColoredText'
import Paragraph from '../../Paragraph/Paragraph'
import Link from '../../../Link/Link'

describe('ColoredText', () => {
  it('allows text components to inherit their color', () => {
    const coloredText = mount(
      <ColoredText colorClassName="some-class-name">
        <Paragraph>
          Some content and a <Link>hyperlink</Link>
        </Paragraph>
      </ColoredText>
    )

    expect(coloredText.find('p')).toHaveClassName('inheritColor')
    expect(coloredText.find('a')).toHaveClassName('inheritColor')
  })
})
