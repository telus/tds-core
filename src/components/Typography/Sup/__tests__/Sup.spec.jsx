import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Sup from '../Sup'

describe('Sup', () => {
  const doShallow = props => (
    shallow(<Sup {...props}>Some content</Sup>)
  )

  it('renders', () => {
    const sup = doShallow()

    expect(toJson(sup)).toMatchSnapshot()
  })

  it('renders an HTML sup tag', () => {
    const sup = doShallow()

    expect(sup).toHaveTagName('sup')
  })

  it('passes additional attributes to the sup element', () => {
    const sup = doShallow({ id: 'the-id' })

    expect(sup).toHaveProp('id', 'the-id')
  })

  it('does not allow custom CSS', () => {
    const sup = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(sup).not.toHaveProp('className', 'my-custom-class')
    expect(sup).not.toHaveProp('style')
  })
})
