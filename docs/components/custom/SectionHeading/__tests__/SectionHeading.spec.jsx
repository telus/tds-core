import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import SectionHeadingRenderer from '../SectionHeadingRenderer'

describe('SectionHeadingRenderer', () => {
  it('renders', () => {
    const Toolbar = () => <div>The toolbar</div>
    const sectionHeading = shallow(
      <SectionHeadingRenderer id="a-section" depth={2} toolbar={<Toolbar />}>
        A Section
      </SectionHeadingRenderer>
    )

    expect(toJson(sectionHeading)).toMatchSnapshot()
  })
})
