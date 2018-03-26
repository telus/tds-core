import React from 'react'
import { shallow, render } from 'enzyme'

import Card from '../Card'

describe('<Card />', () => {
  const doShallow = (props = {}) => shallow(<Card {...props}>Some content</Card>)

  it('renders', () => {
    const card = render(<Card>Children</Card>)

    expect(card).toMatchSnapshot()
  })

  it('can be presented as one of the allowed variants', () => {
    let card = doShallow()
    expect(card.dive()).toHaveClassName('white')

    card = doShallow({ variant: 'white' })
    expect(card.dive()).toHaveClassName('white')

    card = doShallow({ variant: 'lavender' })
    expect(card.dive()).toHaveClassName('lavender')

    card = doShallow({ variant: 'grey' })
    expect(card.dive()).toHaveClassName('grey')
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
