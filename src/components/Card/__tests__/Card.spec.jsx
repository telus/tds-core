import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Card from '../Card'

describe('<Card />', () => {
  const doShallow = (props = {}) => shallow(<Card {...props}>Some content</Card>)

  it('renders', () => {
    const card = doShallow()

    expect(toJson(card)).toMatchSnapshot()
  })

  it('can be presented as one of the allowed variants', () => {
    let card = doShallow()
    expect(card).toHaveClassName('white')

    card = doShallow({ variant: 'white' })
    expect(card).toHaveClassName('white')

    card = doShallow({ variant: 'lavender' })
    expect(card).toHaveClassName('lavender')

    card = doShallow({ variant: 'gray' })
    expect(card).toHaveClassName('gray')
  })

  it('passes additional attributes to the input element', () => {
    const card = doShallow({ role: 'some-role', 'data-some-value': 'some value' })

    expect(card).toHaveProp('role', 'some-role')
    expect(card).toHaveProp('data-some-value', 'some value')
  })

  it('does not allow custom CSS', () => {
    const card = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(card).not.toHaveProp('className', 'my-custom-class')
    expect(card).not.toHaveProp('style')
  })
})
