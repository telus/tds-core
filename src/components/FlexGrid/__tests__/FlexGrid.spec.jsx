import React from 'react'
import { mount } from 'enzyme'
import { Grid } from 'react-flexbox-grid'

import Responsive from '../../Responsive/Responsive'
import FlexGrid from '../FlexGrid'

describe('FlexGrid', () => {
  const doMount = (props = {}) => {
    const wrapper = mount(<FlexGrid {...props}>Some grid stuff</FlexGrid>)
    return wrapper.find('Grid')
  }

  const doMountWithChildren = (props = {}) => {
    const flexGrid = mount(
      <FlexGrid {...props}>
        <Responsive id="responsive" minWidth="md">
          {match => {
            return (
              <FlexGrid.Col>
                <div>HALF: {match}</div>
              </FlexGrid.Col>
            )
          }}
        </Responsive>
        <FlexGrid.Row>
          <FlexGrid.Col>HALF</FlexGrid.Col>
          <FlexGrid.Col>HALF</FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    )

    return {
      findColum: index => flexGrid.find('Col').at(index),
      findRow: index => flexGrid.find('Row').at(index),
      findNowRelated: el => flexGrid.find(el),
      gutterless: { padding: 0, margin: 0 },
    }
  }
  it('renders', () => {
    const flexGrid = doMount()

    expect(flexGrid).toMatchSnapshot()
  })

  it('renders a react-flexbox-grid Grid component', () => {
    const flexGrid = doMount()

    expect(flexGrid).toMatchSelector(Grid)
  })

  it('is fluid by default', () => {
    const flexGrid = doMount()

    expect(flexGrid).toHaveProp('fluid', true)
  })

  it('should render all children related to Grid with no gutter', () => {
    const { findColum, findRow, findNowRelated, gutterless } = doMountWithChildren({
      gutterless: true,
    })

    const col1 = findColum(1)
    const col2 = findColum(3)
    const col3 = findColum(5)
    const row = findRow(1)
    const NonRelatedElement = findNowRelated('Responsive')

    expect(col1).toHaveProp('style', gutterless)
    expect(col2).toHaveProp('style', gutterless)
    expect(col3).toHaveProp('style', gutterless)
    expect(row).toHaveProp('style', gutterless)
    expect(NonRelatedElement).not.toHaveProp('style', gutterless)
  })

  it('passes additional attributes to the element', () => {
    const flexGrid = doMount({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(flexGrid).toHaveProp('id', 'the-id')
    expect(flexGrid).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const flexGrid = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(flexGrid).not.toHaveProp('className', 'my-custom-class')
    expect(flexGrid).not.toHaveProp('style', { color: 'hotpink' })
  })
})
