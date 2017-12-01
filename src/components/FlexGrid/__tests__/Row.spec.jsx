import React from 'react'
import { mount } from 'enzyme'
import { Row as ReactFlexboxGridRow } from 'react-flexbox-grid'

import FlexGrid from '../FlexGrid'
import Row from '../Row'

describe('Row', () => {
  const doMount = (props = {}) => {
    const wrapper = mount(
      <FlexGrid>
        <Row {...props}>Some content</Row>)
      </FlexGrid>
    )
    return wrapper.find(ReactFlexboxGridRow)
  }

  it('renders', () => {
    const row = doMount()
    expect(row).toMatchSnapshot()
  })

  it('renders a react-flexbox-grid Row component', () => {
    const row = doMount()

    expect(row).toMatchSelector(ReactFlexboxGridRow)
  })

  it('passes additional attributes to the react-flexbox-grid Row', () => {
    const row = doMount({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(row).toHaveProp('id', 'the-id')
    expect(row).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const row = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(row).not.toHaveProp('className', 'my-custom-class')
    expect(row).not.toHaveProp('style', { color: 'hotpink' })
  })
})
