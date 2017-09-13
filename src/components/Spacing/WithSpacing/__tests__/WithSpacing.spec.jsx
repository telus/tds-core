import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import WithSpacing from '../WithSpacing'

describe('WithSpacing', () => {
  const defaultProps = {
    amount: 2
  }
  const doShallow = (props = {}) => (
    shallow(<WithSpacing {...defaultProps} {...props}>Some content</WithSpacing>)
  )

  it('renders', () => {
    const flexbox = doShallow()

    expect(toJson(flexbox)).toMatchSnapshot()
  })

  it('applies margin bottom', () => {
    const flexbox = doShallow({ amount: 3 })

    expect(flexbox).toHaveClassName('marginBottom-3')
  })

  it('passes additional attributes to the HTML element', () => {
    const flexbox = doShallow({ id: 'the-id', 'data-some-property': 'a value' })

    expect(flexbox).toHaveProp('id', 'the-id')
    expect(flexbox).toHaveProp('data-some-property', 'a value')
  })

  it('does not allow custom CSS', () => {
    const flexbox = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(flexbox).not.toHaveProp('className', 'my-custom-class')
    expect(flexbox).not.toHaveProp('style')
  })
})
