import React from 'react'
import { mount } from 'enzyme'
import { Row as ReactFlexboxGridRow } from 'react-flexbox-grid'

import FlexGrid from '../FlexGrid'
import Row from '../Row'

describe('Col', () => {
  const doShallow = (props = {}) => {
    const wrapper = mount(
      <FlexGrid>
        <Row {...props}>Some content</Row>)
      </FlexGrid>
    )
    return wrapper.find(ReactFlexboxGridRow)
  }

  it('renders', () => {
    const col = doShallow()
    expect(col).toMatchSnapshot()
  })

  it('renders a react-flexbox-grid Col component', () => {
    const row = doShallow()

    expect(row).toMatchSelector(ReactFlexboxGridRow)
  })

  it('passes additional attributes to the react-flexbox-grid Col', () => {
    const col = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(col).toHaveProp('id', 'the-id')
    expect(col).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const col = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(col).not.toHaveProp('className', 'my-custom-class')
    expect(col).not.toHaveProp('style', { color: 'hotpink' })
  })
})
