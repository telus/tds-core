import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import WithSpacing from '../WithSpacing'

describe('WithSpacing', () => {
  const defaultProps = {
    location: 'bottom',
    amount: 2
  }
  const doShallow = (props = {}) => (
    shallow(<WithSpacing {...defaultProps} {...props}>Some content</WithSpacing>)
  )

  it('renders', () => {
    const withSpacing = doShallow()

    expect(toJson(withSpacing)).toMatchSnapshot()
  })

  it('applies margin by location', () => {
    const withSpacing = doShallow({ location: 'left', amount: 3 })

    expect(withSpacing).toHaveClassName('marginLeft-3')
  })

  it('passes additional attributes to the HTML element', () => {
    const withSpacing = doShallow({ id: 'the-id', 'data-some-property': 'a value' })

    expect(withSpacing).toHaveProp('id', 'the-id')
    expect(withSpacing).toHaveProp('data-some-property', 'a value')
  })

  it('does not allow custom CSS', () => {
    const withSpacing = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(withSpacing).not.toHaveProp('className', 'my-custom-class')
    expect(withSpacing).not.toHaveProp('style')
  })
})
