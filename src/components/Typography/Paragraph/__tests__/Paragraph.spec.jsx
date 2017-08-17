import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Paragraph from '../Paragraph'

describe('Paragraph', () => {
  it('renders', () => {
    const paragraph = <Paragraph>Some content</Paragraph>

    expect(toJson(paragraph)).toMatchSnapshot()
  })

  it('can be bold', () => {
    let paragraph = shallow(<Paragraph>Some content</Paragraph>)
    expect(paragraph).not.toHaveClassName('bold')

    paragraph = shallow(<Paragraph bold>Some content</Paragraph>)
    expect(paragraph).toHaveClassName('bold')
  })
})
