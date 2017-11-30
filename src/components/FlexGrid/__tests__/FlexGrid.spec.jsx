import React from 'react'
import { shallow } from 'enzyme'

import { Grid } from 'react-flexbox-grid'

import FlexGrid from '../FlexGrid'

describe('FlexGrid', () => {
  const doShallow = (props = {}) => shallow(<FlexGrid {...props}>Some grid stuff</FlexGrid>)

  // it('renders', () => {
  //   const flexGrid = doShallow()

  //   expect(flexGrid).toMatchSnapshot()
  // })

  it('renders a react-flexbox-grid Grid component', () => {
    const flexGrid = doShallow()

    expect(flexGrid).toMatchSelector(Grid)
  })

  it('is fluid by default', () => {
    const flexGrid = doShallow()

    expect(flexGrid).toHaveProp('fluid', true)
  })

  // it('passes additional attributes to the element', () => {
  //   const flexGrid = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

  //   expect(flexGrid).toHaveProp('id', 'the-id')
  //   expect(flexGrid).toHaveProp('data-some-attr', 'some value')
  // })

  // it('does not allow custom CSS', () => {
  //   const flexGrid = doShallow({
  //     className: 'my-custom-class',
  //     style: { color: 'hotpink' },
  //   })

  //   expect(flexGrid).not.toHaveProp('className', 'my-custom-class')
  //   expect(flexGrid).not.toHaveProp('style')
  // })
})
