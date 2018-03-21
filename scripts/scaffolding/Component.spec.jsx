import React from 'react'
import { shallow } from 'enzyme'

import $COMPONENT$ from '../$COMPONENT$'

describe('$COMPONENT$', () => {
  const doShallow = (props = {}) => shallow(<$COMPONENT$ {...props} />)

  it('renders', () => {
    const $COMPONENT_CAMEL$ = doShallow()

    expect($COMPONENT_CAMEL$).toMatchSnapshot()
  })

  it('does other things', () => {
    const $COMPONENT_CAMEL$ = doShallow()

    expect($COMPONENT_CAMEL$).toExist()
  })

  it('passes additional attributes to the element', () => {
    const $COMPONENT_CAMEL$ = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect($COMPONENT_CAMEL$).toHaveProp('id', 'the-id')
    expect($COMPONENT_CAMEL$).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const $COMPONENT_CAMEL$ = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect($COMPONENT_CAMEL$).not.toHaveProp('className', 'my-custom-class')
    expect($COMPONENT_CAMEL$).not.toHaveProp('style')
  })
})
