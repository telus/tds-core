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
    const clickable = doShallow({ dangerouslyAddClassName: 'a-class' })

    expect(clickable).toHaveClassName('a-class')
  })

  it('will add additional arbitrary styles', () => {
    const clickable = doShallow({ dangerouslyAddStyle: { color: 'green' } })

    expect(clickable).toHaveStyle('color', 'green')
  })

  it('passes additional attributes to the button', () => {
    const clickable = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(clickable).toHaveProp('id', 'the-id')
    expect(clickable).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const clickable = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(clickable).not.toHaveProp('className', 'my-custom-class')
    expect(clickable).not.toHaveProp('style', { color: 'hotpink' })
  })
})
