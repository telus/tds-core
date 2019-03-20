import React from 'react'
import { shallow, render } from 'enzyme'

import Small from '../Small'

describe('Small', () => {
  const doShallow = props => shallow(<Small {...props}>Some content</Small>)
  const doRender = props => render(<Small {...props}>Some content</Small>)

  it('renders', () => {
    const small = doRender()

    expect(small).toMatchSnapshot()
  })

  it('renders an HTML small tag', () => {
    const small = doRender()

    expect(small.is('small')).toEqual(true)
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
