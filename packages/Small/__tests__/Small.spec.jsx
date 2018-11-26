import React from 'react'
import { shallow } from 'enzyme'

import Small from '../Small'

describe('Small', () => {
  const doShallow = props => shallow(<Small {...props}>Some content</Small>)

  it('renders', () => {
    const small = doShallow()

    expect(small).toMatchSnapshot()
  })

  it('renders an HTML small tag', () => {
    const small = doShallow()

    expect(small).toHaveDisplayName('small')
  })

  it('passes additional attributes to the small element', () => {
    const small = doShallow({ id: 'the-id' })

    expect(small).toHaveProp('id', 'the-id')
  })

  it('does not allow custom CSS', () => {
    const small = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(small).not.toHaveProp('className', 'my-custom-class')
    expect(small).not.toHaveProp('style')
  })
})
