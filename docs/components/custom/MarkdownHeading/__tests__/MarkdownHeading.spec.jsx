import React from 'react'
import { shallow } from 'enzyme'

import MarkdownHeading from '../MarkdownHeading'
import Heading from '../../../../../packages/Heading/Heading'

describe('MarkdownHeading', () => {
  it('renders', () => {
    const markdownHeading = shallow(<MarkdownHeading level={1}>Some heading</MarkdownHeading>)

    expect(markdownHeading).toMatchSnapshot()
  })

  it('integrates the styleguidist interface with the TDS Heading interface', () => {
    const markdownHeading = shallow(<MarkdownHeading level={2}>Some heading</MarkdownHeading>)

    expect(markdownHeading).toContainReact(<Heading level="h2">Some heading</Heading>)
  })
})
