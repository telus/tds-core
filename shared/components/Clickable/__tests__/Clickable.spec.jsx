import React from 'react'
import { shallow } from 'enzyme'

import Clickable from '../Clickable'

describe('Clickable', () => {
  const doShallow = (props = {}) => shallow(<Clickable {...props}>Some content</Clickable>)

  it('renders', () => {
    const clickable = doShallow()

    expect(clickable).toMatchSnapshot()
  })

  it('will add additional arbitrary class names', () => {
    const clickable = doShallow({ className: 'a-class' })

    expect(clickable).toHaveClassName('a-class')
  })

  it('will add additional arbitrary styles', () => {
    const clickable = doShallow({ style: { color: 'green' } })

    expect(clickable).toHaveStyle('color', 'green')
  })

  it('passes additional attributes to the button', () => {
    const clickable = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(clickable).toHaveProp('id', 'the-id')
    expect(clickable).toHaveProp('data-some-attr', 'some value')
  })
})
