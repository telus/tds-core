import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import MarkdownHeading from '../MarkdownHeading'

describe('MarkdownHeading', () => {
  it('renders', () => {
    const markdownHeading = shallow(
      <MarkdownHeading level="h1" spacing={3}>
        Random Heading
      </MarkdownHeading>
    )

    expect(toJson(markdownHeading)).toMatchSnapshot()
  })
})
