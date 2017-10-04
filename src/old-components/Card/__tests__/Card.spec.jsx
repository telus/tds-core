import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { deprecate } from '../../../utils/warn'

import Card from '../Card'

jest.mock('../../../utils/warn')

describe('<Card />', () => {
  it('renders', () => {
    const card = shallow(<Card>Some content</Card>)

    expect(toJson(card)).toMatchSnapshot()
  })

  it('passes attributes to DOM node', () => {
    const card = shallow(
      <Card id="hello" title="my title">
        Some content
      </Card>
    )

    expect(card).toHaveProp('id', 'hello')
    expect(card).toHaveProp('title', 'my title')
  })

  it('accepts but deprecates custom classes', () => {
    const card = shallow(<Card className="some-class">Some content</Card>)

    expect(card).toHaveClassName('some-class')
    expect(deprecate).toHaveBeenCalled()
  })

  it('accepts but deprecates inline styles', () => {
    const styles = { color: 'blue' }
    const card = shallow(<Card style={styles}>Some content</Card>)

    expect(card).toHaveProp('style', styles)
    expect(deprecate).toHaveBeenCalled()
  })
})
