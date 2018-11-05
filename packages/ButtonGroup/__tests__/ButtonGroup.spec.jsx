import React from 'react'
import { shallow } from 'enzyme'

import ButtonGroup from '../ButtonGroup'

describe('ButtonGroup', () => {
  const doShallow = (props = {}) => shallow(<ButtonGroup {...props} />)

  it('renders', () => {
    const buttonGroup = doShallow()

    expect(buttonGroup).toMatchSnapshot()
  })

  it('does other things', () => {
    const buttonGroup = doShallow()

    expect(buttonGroup).toExist()
  })

  it('passes additional attributes to the element', () => {
    const buttonGroup = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(buttonGroup).toHaveProp('id', 'the-id')
    expect(buttonGroup).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const buttonGroup = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(buttonGroup).not.toHaveProp('className', 'my-custom-class')
    expect(buttonGroup).not.toHaveProp('style')
  })
})
