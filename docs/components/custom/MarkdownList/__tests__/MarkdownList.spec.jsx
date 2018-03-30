import React from 'react'
import { shallow } from 'enzyme'

import MarkdownList from '../MarkdownList'

describe('MarkdownHeading', () => {
  it('can render an unordered list', () => {
    const markdownList = shallow(
      <MarkdownList>
        <li>Item 1</li>
        <li>Item 1</li>
      </MarkdownList>
    )

    expect(markdownList).toMatchSnapshot()
  })

  it('can render an ordered list', () => {
    const markdownList = shallow(
      <MarkdownList ordered={true}>
        <li>Item 1</li>
        <li>Item 1</li>
      </MarkdownList>
    )

    expect(markdownList).toMatchSnapshot()
  })
})
